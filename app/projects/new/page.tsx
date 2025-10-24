'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Sparkles, Loader2, ArrowLeft, Wand2 } from 'lucide-react';

export default function NewProjectPage() {
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  const handleGenerate = async () => {
    if (!projectName || !description) return;

    setIsGenerating(true);
    setTimeout(() => {
      router.push('/projects/1');
    }, 3000);
  };

  const templates = [
    {
      title: 'Landing Page',
      description: 'Página de aterrizaje moderna y responsive',
      prompt: 'Una landing page moderna con secciones de hero, características, testimonios y contacto',
    },
    {
      title: 'Dashboard',
      description: 'Panel de administración completo',
      prompt: 'Un dashboard con gráficos, tablas de datos, sidebar de navegación y tarjetas estadísticas',
    },
    {
      title: 'E-commerce',
      description: 'Tienda online con carrito',
      prompt: 'Una tienda online con catálogo de productos, carrito de compras y checkout',
    },
    {
      title: 'Blog',
      description: 'Blog personal con CMS',
      prompt: 'Un blog con listado de artículos, página de detalle y sistema de comentarios',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glass border-b border-primary/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Code2 className="w-8 h-8 text-accent" />
                <span className="text-2xl font-bold text-gradient">AUTOCREA</span>
              </Link>
            </div>
            <Link href="/dashboard">
              <Button variant="ghost" className="text-foreground hover:text-accent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 animate-pulse-slow">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm text-accent font-medium">Powered by JoxCoder AI</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Crea tu <span className="text-gradient">Aplicación</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Describe tu proyecto y la IA generará el código por ti
            </p>
          </div>

          <Card className="glass-strong border-primary/20 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wand2 className="w-5 h-5 text-accent" />
                <span>Genera con IA</span>
              </CardTitle>
              <CardDescription>
                Proporciona detalles sobre tu aplicación y JoxCoder AI la construirá
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre del Proyecto</label>
                <Input
                  placeholder="Ej: Mi Aplicación Web"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="bg-surface border-primary/20 focus:border-primary"
                  disabled={isGenerating}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Descripción Detallada
                </label>
                <Textarea
                  placeholder="Describe tu aplicación en detalle... Ej: Quiero una aplicación de gestión de tareas con autenticación, donde los usuarios puedan crear, editar y eliminar tareas. Debe tener un diseño moderno con tema oscuro."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-surface border-primary/20 focus:border-primary min-h-[200px]"
                  disabled={isGenerating}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Sé específico sobre las funcionalidades, diseño y tecnologías que deseas
                </p>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={!projectName || !description || isGenerating}
                size="lg"
                className="w-full gradient-primary hover:glow-primary text-lg py-6 transition-all"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generando tu aplicación...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generar Aplicación
                  </>
                )}
              </Button>

              {isGenerating && (
                <div className="glass rounded-lg p-6 animate-pulse-slow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm text-accent font-medium">
                      JoxCoder AI está trabajando...
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Analizando requisitos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Generando estructura de archivos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Escribiendo código optimizado</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Configurando dependencias</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Sparkles className="w-6 h-6 text-accent mr-2" />
              Plantillas Rápidas
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {templates.map((template, idx) => (
                <Card
                  key={idx}
                  className="glass hover:glow-primary transition-all cursor-pointer group"
                  onClick={() => {
                    if (!isGenerating) {
                      setProjectName(template.title);
                      setDescription(template.prompt);
                    }
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">
                      {template.title}
                    </CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/30 hover:border-primary"
                      disabled={isGenerating}
                    >
                      Usar Plantilla
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="glass border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Consejos para mejores resultados</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Describe funcionalidades específicas que necesitas</li>
                    <li>• Menciona el tipo de diseño o estilo visual deseado</li>
                    <li>• Incluye detalles sobre la estructura de datos</li>
                    <li>• Especifica si necesitas autenticación o base de datos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
