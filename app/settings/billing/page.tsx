import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, CreditCard, ArrowLeft, Check, Zap, Sparkles, Crown } from 'lucide-react';

export default function BillingSettingsPage() {
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
              <span className="text-gradient">Facturación</span> y Créditos
            </h1>
            <p className="text-muted-foreground">
              Gestiona tus planes y créditos de generación
            </p>
          </div>

          <div className="flex gap-6 mb-8">
            <Link href="/settings/account">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Cuenta
              </Button>
            </Link>
            <Link href="/settings/billing">
              <Button className="bg-primary/20 text-primary hover:bg-primary/30">
                Facturación
              </Button>
            </Link>
            <Link href="/settings/usage">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Uso
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="glass-strong border-primary/20 col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span>Créditos Actuales</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-gradient mb-2">500</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Aproximadamente 10 generaciones
                </p>
                <div className="h-2 bg-surface rounded-full overflow-hidden">
                  <div className="h-full gradient-accent" style={{ width: '50%' }}></div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-strong border-primary/20 col-span-2">
              <CardHeader>
                <CardTitle>Método de Pago</CardTitle>
                <CardDescription>Agrega o actualiza tu método de pago</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 glass rounded-lg mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">No hay método de pago</p>
                      <p className="text-sm text-muted-foreground">Agrega una tarjeta para comprar créditos</p>
                    </div>
                  </div>
                  <Button className="gradient-primary hover:glow-primary transition-all">
                    Agregar Tarjeta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Planes de Créditos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass hover:glow-primary transition-all cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Básico</CardTitle>
                  <CardDescription>Para proyectos pequeños</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-4xl font-bold mb-2">
                      $9<span className="text-lg text-muted-foreground">/mes</span>
                    </div>
                    <p className="text-sm text-muted-foreground">1,000 créditos mensuales</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-accent mr-2" />
                      <span>20 generaciones con IA</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-accent mr-2" />
                      <span>5 GB de almacenamiento</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-accent mr-2" />
                      <span>Soporte por email</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Seleccionar Plan
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass border-accent/50 hover:glow-accent transition-all cursor-pointer group relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="gradient-accent px-4 py-1 rounded-full text-xs font-bold text-white">
                    POPULAR
                  </div>
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <CardDescription>Para desarrolladores activos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-4xl font-bold mb-2">
                      $29<span className="text-lg text-muted-foreground">/mes</span>
                    </div>
                    <p className="text-sm text-muted-foreground">5,000 créditos mensuales</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-accent mr-2" />
                      <span>100 generaciones con IA</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-accent mr-2" />
                      <span>50 GB de almacenamiento</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-accent mr-2" />
                      <span>Soporte prioritario</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-accent mr-2" />
                      <span>Deploy ilimitado</span>
                    </li>
                  </ul>
                  <Button className="w-full gradient-accent hover:glow-accent">
                    Seleccionar Plan
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass hover:glow-secondary transition-all cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <CardDescription>Para equipos grandes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-4xl font-bold mb-2">
                      $99<span className="text-lg text-muted-foreground">/mes</span>
                    </div>
                    <p className="text-sm text-muted-foreground">20,000 créditos mensuales</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-accent mr-2" />
                      <span>400 generaciones con IA</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-accent mr-2" />
                      <span>500 GB de almacenamiento</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-accent mr-2" />
                      <span>Soporte 24/7</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-accent mr-2" />
                      <span>Colaboración en equipo</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Contactar Ventas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="glass-strong border-primary/20">
            <CardHeader>
              <CardTitle>Historial de Transacciones</CardTitle>
              <CardDescription>Revisa tus compras anteriores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                No hay transacciones todavía
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
