import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Plus, Folder, Clock, Sparkles, Settings, CreditCard } from 'lucide-react';

export default function DashboardPage() {
  const projects = [
    {
      id: '1',
      name: 'Mi Proyecto Web',
      description: 'Aplicación web generada con IA',
      lastModified: '2024-10-24',
      language: 'React + TypeScript',
    },
    {
      id: '2',
      name: 'Landing Page',
      description: 'Página de aterrizaje moderna',
      lastModified: '2024-10-23',
      language: 'Next.js',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glass border-b border-primary/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold text-gradient">AUTOCREA</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/settings/account">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-accent">
                  <Settings className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/settings/billing">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-accent">
                  <CreditCard className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Mis <span className="text-gradient">Proyectos</span>
            </h1>
            <p className="text-muted-foreground">
              Gestiona y crea tus aplicaciones web
            </p>
          </div>
          <Link href="/projects/new">
            <Button size="lg" className="gradient-primary hover:glow-primary transition-all">
              <Plus className="w-5 h-5 mr-2" />
              Nuevo Proyecto
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link href="/projects/new">
            <Card className="glass hover:glow-accent transition-all cursor-pointer h-full border-dashed border-2 border-accent/30 hover:border-accent group">
              <CardContent className="flex flex-col items-center justify-center h-64">
                <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Plus className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Crear Proyecto</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Genera una nueva aplicación con IA
                </p>
              </CardContent>
            </Card>
          </Link>

          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="glass hover:glow-primary transition-all cursor-pointer h-full group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{project.lastModified}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Folder className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{project.language}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span>Créditos Disponibles</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gradient mb-2">500</div>
              <p className="text-sm text-muted-foreground">
                Suficiente para 10 generaciones más
              </p>
              <Link href="/settings/billing">
                <Button variant="outline" className="w-full mt-4 border-primary/30 hover:border-primary">
                  Comprar Más Créditos
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-primary" />
                <span>Proyectos Totales</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">{projects.length}</div>
              <p className="text-sm text-muted-foreground">
                Aplicaciones creadas
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span>Última Actividad</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold mb-2">Hoy</div>
              <p className="text-sm text-muted-foreground">
                {projects[0]?.lastModified || 'Sin actividad reciente'}
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
