import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code2, Sparkles, Zap, Shield, Rocket, GitBranch } from 'lucide-react';

export default function HomePage() {
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
              <Link href="/docs">
                <Button variant="ghost" className="text-foreground hover:text-accent">
                  Documentación
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button variant="ghost" className="text-foreground hover:text-accent">
                  Iniciar Sesión
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="gradient-primary hover:glow-primary transition-all">
                  Comenzar Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <section className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 animate-pulse-slow">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm text-accent font-medium">Generación con IA de última generación</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Crea Aplicaciones Web
              <span className="block text-gradient">con el Poder de la IA</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AUTOCREA transforma tus ideas en aplicaciones web completas en segundos.
              Desarrollado con JoxCoder AI, el modelo más avanzado para generación de código.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/sign-up">
                <Button size="lg" className="gradient-primary hover:glow-primary text-lg px-8 py-6 transition-all">
                  <Rocket className="w-5 h-5 mr-2" />
                  Comenzar Ahora
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary text-lg px-8 py-6">
                  Ver Documentación
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span>100% Seguro</span>
              </div>
            </div>
          </div>

          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl animate-pulse-slow"></div>
            <div className="relative glass-strong rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-surface-dark rounded-lg flex items-center justify-center">
                <Code2 className="w-24 h-24 text-primary/30 animate-float" />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Características <span className="text-gradient">Poderosas</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Todo lo que necesitas para crear aplicaciones increíbles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass rounded-xl p-8 hover:glow-primary transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Generación con IA</h3>
              <p className="text-muted-foreground">
                Describe tu aplicación en lenguaje natural y JoxCoder AI la construirá por ti con código limpio y optimizado.
              </p>
            </div>

            <div className="glass rounded-xl p-8 hover:glow-accent transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Editor Avanzado</h3>
              <p className="text-muted-foreground">
                IDE completo con Monaco Editor, resaltado de sintaxis, autocompletado y terminal integrado.
              </p>
            </div>

            <div className="glass rounded-xl p-8 hover:glow-secondary transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Vista Previa en Vivo</h3>
              <p className="text-muted-foreground">
                Visualiza cambios instantáneamente con hot reload y previsualización en tiempo real.
              </p>
            </div>

            <div className="glass rounded-xl p-8 hover:glow-primary transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Integración GitHub</h3>
              <p className="text-muted-foreground">
                Conecta con GitHub para importar proyectos existentes y hacer push de tus cambios.
              </p>
            </div>

            <div className="glass rounded-xl p-8 hover:glow-accent transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Deploy Instantáneo</h3>
              <p className="text-muted-foreground">
                Despliega tus aplicaciones a Netlify con un solo clic y comparte con el mundo.
              </p>
            </div>

            <div className="glass rounded-xl p-8 hover:glow-secondary transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Seguro y Confiable</h3>
              <p className="text-muted-foreground">
                Código ejecutado en contenedores aislados con autenticación y protección de datos.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="glass-strong rounded-2xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¿Listo para <span className="text-gradient">Comenzar?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a miles de desarrolladores que ya están creando aplicaciones increíbles con AUTOCREA.
            </p>
            <Link href="/sign-up">
              <Button size="lg" className="gradient-primary hover:glow-primary text-lg px-8 py-6 transition-all">
                <Rocket className="w-5 h-5 mr-2" />
                Crear Cuenta Gratis
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-primary/10 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="w-6 h-6 text-accent" />
              <span className="text-lg font-bold text-gradient">AUTOCREA</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 AUTOCREA. Powered by JoxCoder AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
