
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Eye, Edit, Send, Users, CheckCircle } from 'lucide-react';

interface ClientRequest {
  id: string;
  name: string;
  age: number;
  weight: number;
  fitnessLevel: string;
  goal: string;
  frequency: number;
  sports: string[];
  submittedAt: string;
  status: 'pending' | 'in_progress' | 'completed';
  recommendations?: string;
  email?: string;
}

const TrainerAdmin = () => {
  const { toast } = useToast();
  const [selectedClient, setSelectedClient] = useState<ClientRequest | null>(null);
  const [recommendations, setRecommendations] = useState('');

  // Mock data - in real app this would come from database
  const [clientRequests, setClientRequests] = useState<ClientRequest[]>([
    {
      id: '1',
      name: 'Jonas Jonaitis',
      age: 28,
      weight: 75,
      fitnessLevel: 'intermediate',
      goal: 'build_muscle',
      frequency: 4,
      sports: ['weightlifting', 'running'],
      submittedAt: '2024-01-15T10:30:00',
      status: 'pending',
      email: 'jonas@example.com'
    },
    {
      id: '2',
      name: 'Marija Petraitė',
      age: 35,
      weight: 65,
      fitnessLevel: 'beginner',
      goal: 'lose_weight',
      frequency: 3,
      sports: ['yoga', 'cycling'],
      submittedAt: '2024-01-14T14:20:00',
      status: 'in_progress',
      email: 'marija@example.com'
    }
  ]);

  const getFitnessLevelName = (level: string) => {
    const levels: { [key: string]: string } = {
      beginner: 'Pradedantysis',
      intermediate: 'Pažengęs',
      advanced: 'Sportuojantis reguliariai'
    };
    return levels[level] || level;
  };

  const getGoalName = (goal: string) => {
    const goals: { [key: string]: string } = {
      lose_weight: 'Numesti svorio',
      build_muscle: 'Priaugti raumenų',
      improve_endurance: 'Pagerinti ištvermę',
      maintain_fitness: 'Palaikyti formą'
    };
    return goals[goal] || goal;
  };

  const getSportsNames = (sports: string[]) => {
    const sportsMap: { [key: string]: string } = {
      running: 'Bėgimas',
      weightlifting: 'Svorių kilnojimas',
      yoga: 'Joga',
      cycling: 'Dviračio minimas',
      swimming: 'Plaukimas',
      dancing: 'Šokiai',
      hiking: 'Žygiai',
      tennis: 'Tenisas',
      boxing: 'Boksas',
      pilates: 'Pilatestas'
    };
    return sports.map(sport => sportsMap[sport] || sport);
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      pending: '#fbbf24',
      in_progress: '#3b82f6',
      completed: '#10b981'
    };
    
    const labels = {
      pending: 'Laukiama',
      in_progress: 'Vykdoma',
      completed: 'Baigta'
    };

    return (
      <Badge style={{ backgroundColor: colors[status as keyof typeof colors], color: 'white' }}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  const handleStartWork = (clientId: string) => {
    setClientRequests(prev => 
      prev.map(client => 
        client.id === clientId 
          ? { ...client, status: 'in_progress' as const }
          : client
      )
    );
    
    const client = clientRequests.find(c => c.id === clientId);
    setSelectedClient(client || null);
    setRecommendations('');
    
    toast({
      title: "Pradėtas darbas",
      description: "Pradėjote kurti personalizuotą planą klientui",
    });
  };

  const handleSendPlan = () => {
    if (!selectedClient || !recommendations.trim()) return;

    setClientRequests(prev => 
      prev.map(client => 
        client.id === selectedClient.id 
          ? { ...client, status: 'completed' as const, recommendations }
          : client
      )
    );

    toast({
      title: "Planas išsiųstas!",
      description: `Personalizuotas planas išsiųstas ${selectedClient.name}`,
    });

    setSelectedClient(null);
    setRecommendations('');
  };

  const getDefaultRecommendations = (client: ClientRequest) => {
    return `Sveiki, ${client.name}!

Pagal jūsų duomenis (${client.age} m., ${client.weight} kg, tikslas: ${getGoalName(client.goal).toLowerCase()}), rekomenduoju:

TRENIRUOČIŲ PLANAS (${client.frequency} kartus per savaitę):
• Pirmadienis: Jėgos treniruotė (45 min)
• Trečiadienis: Kardio + funkcionalūs pratimai (40 min)
• Penktadienis: Jėgos treniruotė (45 min)
${client.frequency > 3 ? '• Sekmadienis: Aktyvus poilsis (joga, žygis)' : ''}

MITYBOS GAIRĖS:
• Vartokite pakankamai baltymų (1.6-2g/kg kūno svorio)
• Gerkite daug vandens (2-3L per dieną)
• Valgykite 4-5 kartus per dieną mažesniais porcijos

PATARIMAI:
• Pradėkite pamažu ir didinkite krūvį palaipsniui
• Klausykite savo kūno signalų
• Užtikrinkite kokybišką miegą (7-9 val.)

Linkiu sėkmės!
Treneris Mindaugas`;
  };

  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: '#132736' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#ffffff' }}>
            👨‍🏫 Trenerio administracijos panelė
          </h1>
          <p style={{ color: '#DDE5EA' }}>
            Peržiūrėkite klientų prašymus ir kurkite personalizuotus planus
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Client Requests List */}
          <div>
            <Card style={{ backgroundColor: '#ffffff', borderRadius: '20px' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#132736' }}>
                  <Users className="w-5 h-5" />
                  Klientų prašymai ({clientRequests.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {clientRequests.map((client) => (
                  <Card key={client.id} className="border">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-lg" style={{ color: '#132736' }}>
                            {client.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Pateikta: {new Date(client.submittedAt).toLocaleDateString('lt-LT')}
                          </p>
                        </div>
                        {getStatusBadge(client.status)}
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                        <p><strong>Amžius:</strong> {client.age} m.</p>
                        <p><strong>Svoris:</strong> {client.weight} kg</p>
                        <p><strong>Lygis:</strong> {getFitnessLevelName(client.fitnessLevel)}</p>
                        <p><strong>Tikslas:</strong> {getGoalName(client.goal)}</p>
                      </div>

                      <div className="mb-3">
                        <p className="text-sm"><strong>Sporto rūšys:</strong></p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {getSportsNames(client.sports).map((sport, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {sport}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedClient(client)}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Peržiūrėti
                        </Button>
                        
                        {client.status === 'pending' && (
                          <Button
                            size="sm"
                            onClick={() => handleStartWork(client.id)}
                            style={{ 
                              backgroundColor: '#6BE0A5',
                              color: '#132736'
                            }}
                          >
                            <Edit className="w-4 h-4 mr-1" />
                            Pradėti darbą
                          </Button>
                        )}
                        
                        {client.status === 'completed' && (
                          <Button size="sm" variant="outline" disabled>
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Baigta
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Plan Editor */}
          <div>
            {selectedClient ? (
              <Card style={{ backgroundColor: '#ffffff', borderRadius: '20px' }}>
                <CardHeader>
                  <CardTitle style={{ color: '#132736' }}>
                    📝 Plano kūrimas - {selectedClient.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2" style={{ color: '#132736' }}>
                      Kliento informacija:
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <p><strong>Amžius:</strong> {selectedClient.age} metai</p>
                      <p><strong>Svoris:</strong> {selectedClient.weight} kg</p>
                      <p><strong>Lygis:</strong> {getFitnessLevelName(selectedClient.fitnessLevel)}</p>
                      <p><strong>Tikslas:</strong> {getGoalName(selectedClient.goal)}</p>
                      <p><strong>Dažnumas:</strong> {selectedClient.frequency}x/savaitė</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" style={{ color: '#132736' }}>
                      Personalizuotas planas:
                    </label>
                    <Textarea
                      value={recommendations}
                      onChange={(e) => setRecommendations(e.target.value)}
                      placeholder="Rašykite personalizuotą planą čia..."
                      className="min-h-[300px]"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setRecommendations(getDefaultRecommendations(selectedClient))}
                    >
                      📄 Užpildyti šabloną
                    </Button>
                    
                    <Button
                      onClick={handleSendPlan}
                      disabled={!recommendations.trim()}
                      style={{ 
                        backgroundColor: '#6BE0A5',
                        color: '#132736'
                      }}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Siųsti PDF planą
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card style={{ backgroundColor: '#ffffff', borderRadius: '20px' }}>
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">📋</div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#132736' }}>
                    Pasirinkite klientą
                  </h3>
                  <p style={{ color: '#132736' }}>
                    Pasirinkite klientą iš sąrašo, kad pradėtumėte kurti personalizuotą planą
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerAdmin;
