import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, ArrowLeft, Sparkles, Terminal, Rocket, Shield, Book, Github } from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glass border-b border-primary/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Code2 className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold text-gradient">AUTOCREA</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-foreground hover:text-accent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gradient">Documentación</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Todo lo que necesitas saber sobre AUTOCREA
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="glass hover:glow-primary transition-all cursor-pointer group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Inicio Rápido</CardTitle>
                <CardDescription>
                  Crea tu primera aplicación en minutos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass hover:glow-accent transition-all cursor-pointer group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Guía del Editor</CardTitle>
                <CardDescription>
                  Aprende a usar el IDE integrado
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass hover:glow-secondary transition-all cursor-pointer group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Despliegue</CardTitle>
                <CardDescription>
                  Publica tus aplicaciones en producción
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass hover:glow-primary transition-all cursor-pointer group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Seguridad</CardTitle>
                <CardDescription>
                  Mejores prácticas y configuración
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="glass-strong border-primary/20 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Book className="w-6 h-6 text-accent" />
                <span>Primeros Pasos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">1. Crea tu Cuenta</h3>
                <p className="text-muted-foreground mb-4">
                  Regístrate en AUTOCREA y obtén 500 créditos gratis para comenzar a generar aplicaciones con IA.
                </p>
                <Link href="/sign-up">
                  <Button className="gradient-primary hover:glow-primary transition-all">
                    Registrarse Ahora
                  </Button>
                </Link>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">2. Describe tu Proyecto</h3>
                <p className="text-muted-foreground mb-4">
                  Utiliza el generador con IA para describir tu aplicación. Sé específico sobre las funcionalidades,
                  diseño y tecnologías que deseas. JoxCoder AI analizará tu descripción y generará el código completo.
                </p>
                <div className="glass rounded-lg p-4">
                  <p className="text-sm font-mono text-muted-foreground">
                    Ejemplo: &ldquo;Quiero una landing page moderna para una startup de tecnología con secciones de
                    hero, características, testimonios y contacto. Usar React y Tailwind CSS con tema oscuro.&rdquo;
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">3. Edita y Personaliza</h3>
                <p className="text-muted-foreground mb-4">
                  Una vez generada tu aplicación, utiliza el IDE integrado para hacer ajustes. Cuenta con:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Monaco Editor con resaltado de sintaxis y autocompletado</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Terminal integrado para ejecutar comandos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Vista previa en vivo con hot reload</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Árbol de archivos interactivo</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">4. Despliega tu Aplicación</h3>
                <p className="text-muted-foreground mb-4">
                  Cuando estés listo, despliega tu aplicación a Netlify con un solo clic. AUTOCREA se encarga
                  de toda la configuración automáticamente.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-strong border-primary/20 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Github className="w-6 h-6 text-accent" />
                <span>Integración con GitHub</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Conecta tu cuenta de GitHub para importar proyectos existentes y hacer push de tus cambios
                directamente desde AUTOCREA.
              </p>
              <div className="glass rounded-lg p-4 space-y-2">
                <p className="text-sm font-medium">Características:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">✓</span>
                    <span>Importar repositorios existentes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">✓</span>
                    <span>Push automático de cambios</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">✓</span>
                    <span>Sincronización bidireccional</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">✓</span>
                    <span>Gestión de ramas</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-strong border-primary/20">
            <CardHeader>
              <CardTitle>Tecnologías Soportadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Frontend</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• React</li>
                    <li>• Vue.js</li>
                    <li>• Next.js</li>
                    <li>• Svelte</li>
                    <li>• HTML/CSS/JS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Backend</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Node.js</li>
                    <li>• Express</li>
                    <li>• Convex</li>
                    <li>• RESTful APIs</li>
                    <li>• WebSockets</li>
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
