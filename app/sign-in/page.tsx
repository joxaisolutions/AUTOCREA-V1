import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Mail, Lock, Github } from 'lucide-react';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 blur-3xl"></div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <Code2 className="w-10 h-10 text-accent" />
            <span className="text-3xl font-bold text-gradient">AUTOCREA</span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Bienvenido de Nuevo</h1>
          <p className="text-muted-foreground">
            Inicia sesión para continuar creando
          </p>
        </div>

        <Card className="glass-strong border-primary/20">
          <CardHeader>
            <CardTitle>Iniciar Sesión</CardTitle>
            <CardDescription>
              Accede a tu cuenta de AUTOCREA
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Correo Electrónico</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    className="pl-10 bg-surface border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-surface border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-primary/30" />
                  <span className="text-muted-foreground">Recordarme</span>
                </label>
                <Link href="#" className="text-accent hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </div>

            <Button className="w-full gradient-primary hover:glow-primary text-lg py-6 transition-all">
              Iniciar Sesión
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted-foreground">O continúa con</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full border-primary/30 hover:border-primary hover:bg-surface"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              ¿No tienes una cuenta?{' '}
              <Link href="/sign-up" className="text-accent hover:underline font-medium">
                Regístrate gratis
              </Link>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Al continuar, aceptas nuestros{' '}
          <Link href="#" className="text-accent hover:underline">
            Términos de Servicio
          </Link>{' '}
          y{' '}
          <Link href="#" className="text-accent hover:underline">
            Política de Privacidad
          </Link>
        </p>
      </div>
    </div>
  );
}
