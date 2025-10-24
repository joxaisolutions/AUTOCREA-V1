import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, ArrowLeft, TrendingUp, Zap, Calendar, Activity } from 'lucide-react';

export default function UsageSettingsPage() {
  const usageData = [
    { date: '2024-10-24', generations: 3, credits: 150 },
    { date: '2024-10-23', generations: 5, credits: 250 },
    { date: '2024-10-22', generations: 2, credits: 100 },
    { date: '2024-10-21', generations: 4, credits: 200 },
    { date: '2024-10-20', generations: 1, credits: 50 },
  ];

  const totalGenerations = usageData.reduce((sum, day) => sum + day.generations, 0);
  const totalCredits = usageData.reduce((sum, day) => sum + day.credits, 0);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glass border-b border-primary/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Code2 className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold text-gradient">AUTOCREA</span>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost" className="text-foreground hover:text-accent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Uso y <span className="text-gradient">Estadísticas</span>
            </h1>
            <p className="text-muted-foreground">
              Monitorea tu actividad y consumo de créditos
            </p>
          </div>

          <div className="flex gap-6 mb-8">
            <Link href="/settings/account">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Cuenta
              </Button>
            </Link>
            <Link href="/settings/billing">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Facturación
              </Button>
            </Link>
            <Link href="/settings/usage">
              <Button className="bg-primary/20 text-primary hover:bg-primary/30">
                Uso
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="glass-strong border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Activity className="w-5 h-5 text-primary" />
                  <span>Generaciones Totales</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-gradient mb-2">{totalGenerations}</div>
                <p className="text-sm text-muted-foreground">En los últimos 5 días</p>
              </CardContent>
            </Card>

            <Card className="glass-strong border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Zap className="w-5 h-5 text-accent" />
                  <span>Créditos Usados</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2">{totalCredits}</div>
                <p className="text-sm text-muted-foreground">De 1,000 disponibles</p>
                <div className="mt-4 h-2 bg-surface rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-accent"
                    style={{ width: `${(totalCredits / 1000) * 100}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-strong border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  <span>Promedio Diario</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2">
                  {Math.round(totalGenerations / usageData.length)}
                </div>
                <p className="text-sm text-muted-foreground">Generaciones por día</p>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-strong border-primary/20 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span>Actividad Reciente</span>
              </CardTitle>
              <CardDescription>
                Tus generaciones de los últimos días
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {usageData.map((day, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 glass rounded-lg hover:bg-surface-light transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                        <Activity className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{day.date}</p>
                        <p className="text-sm text-muted-foreground">
                          {day.generations} generaciones
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-accent">{day.credits} créditos</p>
                      <p className="text-xs text-muted-foreground">usados</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-strong border-primary/20">
              <CardHeader>
                <CardTitle>Tipos de Proyecto</CardTitle>
                <CardDescription>Distribución de tus generaciones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Landing Pages</span>
                      <span className="text-sm font-medium">40%</span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <div className="h-full gradient-primary" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Dashboards</span>
                      <span className="text-sm font-medium">30%</span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <div className="h-full gradient-accent" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">E-commerce</span>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <div className="h-full bg-secondary" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Otros</span>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <div className="h-full bg-muted-foreground" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-strong border-primary/20">
              <CardHeader>
                <CardTitle>Límites y Cuotas</CardTitle>
                <CardDescription>Tu plan actual</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 glass rounded-lg">
                  <span className="text-sm">Generaciones mensuales</span>
                  <span className="font-medium">{totalGenerations} / 20</span>
                </div>
                <div className="flex items-center justify-between p-3 glass rounded-lg">
                  <span className="text-sm">Almacenamiento</span>
                  <span className="font-medium">2.4 GB / 5 GB</span>
                </div>
                <div className="flex items-center justify-between p-3 glass rounded-lg">
                  <span className="text-sm">Proyectos activos</span>
                  <span className="font-medium">2 / 10</span>
                </div>
                <Link href="/settings/billing">
                  <Button className="w-full gradient-primary hover:glow-primary transition-all">
                    Actualizar Plan
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
