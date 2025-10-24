import { Sparkles, Play, Users, Star, Shield, MessageSquare, Rocket, Code, CheckCircle2, Zap, ArrowRight, Github, FileCode, Globe, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-primary-dark/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-highlight flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">AUTOCREA</span>
          </Link>

          <div className="hidden md:flex gap-6">
            <Link href="#features" className="text-secondary hover:text-white transition-colors">
              Características
            </Link>
            <Link href="#examples" className="text-secondary hover:text-white transition-colors">
              Ejemplos
            </Link>
            <Link href="#pricing" className="text-secondary hover:text-white transition-colors">
              Precios
            </Link>
            <Link href="/docs" className="text-secondary hover:text-white transition-colors">
              Documentación
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/sign-in">
              <Button variant="ghost">Iniciar Sesión</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Comenzar Gratis</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,0,255,0.1),transparent_50%)]" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8">
            <Sparkles className="w-4 h-4 text-highlight" />
            <span className="text-sm text-highlight">Innovación en IA</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">
              DE IDEA A LA
              <br />
              MATERIALIZACIÓN
            </span>
          </h1>

          <p className="text-xl text-secondary max-w-2xl mx-auto mb-8">
            Transforma ideas en aplicaciones web completas con JoxCoder v1.
            Desarrollo autónomo, código limpio, deploy instantáneo.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/sign-up">
              <Button size="lg" className="text-lg px-8 glow-hover">
                <Sparkles className="mr-2" />
                Comenzar Gratis - 100 tokens
              </Button>
            </Link>

            <Link href="#examples">
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Play className="mr-2" />
                Ver Demo
              </Button>
            </Link>
          </div>

          <div className="flex gap-8 justify-center mt-12 text-sm text-secondary flex-wrap">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-highlight" />
              <span>10,000+ usuarios activos</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-highlight" />
              <span>4.9/5 valoración</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-highlight" />
              <span>100% privado y seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-24 bg-primary" id="features">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Crea Apps en 3 Pasos
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              icon={MessageSquare}
              title="Describe tu aplicación"
              description="Explica qué quieres crear en lenguaje natural"
            />
            <StepCard
              number="2"
              icon={Sparkles}
              title="JoxCoder la genera"
              description="Nuestra IA crea código limpio en segundos"
            />
            <StepCard
              number="3"
              icon={Rocket}
              title="Edita y deploy"
              description="Personaliza en el IDE y publica en 1 click"
            />
          </div>
        </div>
      </section>

      {/* Ejemplos Reales */}
      <section className="py-24 bg-gradient-to-b from-primary to-primary-dark" id="examples">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Aplicaciones Reales Generadas
          </h2>
          <p className="text-secondary text-center mb-16">
            Estos proyectos fueron creados con solo una descripción
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <ExampleCard
              title="Landing de Restaurante"
              description="Hero, menú con categorías, galería, formulario contacto"
              tokens="5,234 tokens"
              time="38 segundos"
              tech={['React', 'Tailwind', 'Framer Motion']}
            />

            <ExampleCard
              title="Dashboard Analytics"
              description="Gráficos interactivos, tablas, filtros, exportación"
              tokens="12,567 tokens"
              time="1 minuto 12s"
              tech={['Next.js', 'Recharts', 'shadcn/ui']}
            />

            <ExampleCard
              title="E-commerce Store"
              description="Grid de productos, carrito, checkout, panel admin"
              tokens="18,923 tokens"
              time="1 minuto 45s"
              tech={['Next.js', 'Stripe', 'PostgreSQL']}
            />
          </div>
        </div>
      </section>

      {/* Planes y Precios */}
      <section className="py-24 bg-primary" id="pricing">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Planes y Precios
          </h2>
          <p className="text-secondary text-center mb-16">
            Elige el plan que mejor se adapte a tus necesidades
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <PricingCard
              name="Starter"
              price={10}
              credits={10000}
              description="Perfecto para probar"
              features={['~2 proyectos medianos', 'Válido por 6 meses', 'Soporte email']}
            />

            <PricingCard
              name="Pro"
              price={45}
              credits={50000}
              description="Más usado"
              features={['~10 proyectos medianos', 'Válido por 6 meses', '10% de descuento', 'Soporte prioritario']}
              popular
            />

            <PricingCard
              name="Business"
              price={120}
              credits={150000}
              description="Para equipos"
              features={['~30 proyectos medianos', 'Válido por 1 año', '20% de descuento', 'Soporte dedicado']}
            />

            <PricingCard
              name="Enterprise"
              price={350}
              credits={500000}
              description="Uso intensivo"
              features={['~100 proyectos medianos', 'Válido por 1 año', '30% de descuento', 'Soporte 24/7']}
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-t from-primary to-primary-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Todo lo que necesitas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Code}
              title="Editor Profesional"
              description="Monaco Editor con syntax highlighting, autocomplete y múltiples lenguajes"
            />
            <FeatureCard
              icon={Zap}
              title="Vista Previa en Vivo"
              description="Ve los cambios instantáneamente mientras editas tu código"
            />
            <FeatureCard
              icon={Github}
              title="Integración Git"
              description="Push a GitHub directo desde la plataforma"
            />
            <FeatureCard
              icon={Rocket}
              title="Deploy Automático"
              description="Publica en Netlify con un solo click"
            />
            <FeatureCard
              icon={FileCode}
              title="Múltiples Frameworks"
              description="React, Next.js, Vue, o vanilla HTML/CSS/JS"
            />
            <FeatureCard
              icon={Globe}
              title="Terminal Integrada"
              description="Ejecuta comandos npm, instala paquetes, y más"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            ¿Listo para crear tu próxima app?
          </h2>
          <p className="text-xl text-secondary mb-8">
            Únete a miles de creadores que confían en AUTOCREA
          </p>
          <Link href="/sign-up">
            <Button size="lg" className="glow-hover">
              <Sparkles className="mr-2" />
              Comenzar Ahora - Gratis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-12 bg-primary-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-highlight flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AUTOCREA</span>
              </div>
              <p className="text-sm text-secondary">
                Desarrollado por JoxAI<br />
                © 2025 Todos los derechos reservados
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-secondary">
                <li><Link href="#features" className="hover:text-white">Características</Link></li>
                <li><Link href="#pricing" className="hover:text-white">Precios</Link></li>
                <li><Link href="/docs" className="hover:text-white">Documentación</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-secondary">
                <li><Link href="/about" className="hover:text-white">Sobre Nosotros</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-secondary">
                <li><Link href="/privacy" className="hover:text-white">Privacidad</Link></li>
                <li><Link href="/terms" className="hover:text-white">Términos</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contacto</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StepCard({ number, icon: Icon, title, description }: any) {
  return (
    <Card className="relative overflow-hidden glow-hover transition-all">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl" />
      <CardHeader>
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-highlight flex items-center justify-center mb-4 relative z-10">
          <span className="text-2xl font-bold">{number}</span>
        </div>
        <CardTitle className="relative z-10">{title}</CardTitle>
        <CardDescription className="relative z-10">{description}</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <Icon className="w-12 h-12 text-highlight" />
      </CardContent>
    </Card>
  );
}

function ExampleCard({ title, description, tokens, time, tech }: any) {
  return (
    <Card className="glow-hover transition-all">
      <div className="aspect-video bg-gradient-to-br from-primary-dark to-primary rounded-t-lg flex items-center justify-center">
        <Layout className="w-16 h-16 text-secondary" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-secondary">{tokens}</span>
          <span className="text-secondary">{time}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tech.map((t: string) => (
            <span key={t} className="px-2 py-1 text-xs bg-accent/10 text-highlight rounded-md border border-accent/20">
              {t}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function PricingCard({ name, price, credits, description, features, popular }: any) {
  return (
    <Card className={`relative ${popular ? 'ring-2 ring-highlight' : ''} glow-hover transition-all`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-accent to-highlight rounded-full text-xs font-semibold">
          Más Popular
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <div className="text-3xl font-bold">${price}</div>
          <div className="text-sm text-secondary">{credits.toLocaleString()} créditos</div>
        </div>

        <div className="space-y-2">
          {features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs">
              <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-secondary">{feature}</span>
            </div>
          ))}
        </div>

        <Link href="/sign-up">
          <Button className="w-full" variant={popular ? "default" : "outline"}>
            Comenzar
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

function FeatureCard({ icon: Icon, title, description }: any) {
  return (
    <Card className="glow-hover transition-all">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-highlight/20 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-highlight" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
