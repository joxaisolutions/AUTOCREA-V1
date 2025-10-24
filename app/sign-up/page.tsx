import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Mail, Lock, User, Github } from 'lucide-react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 blur-3xl"></div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <Code2 className="w-10 h-10 text-accent" />
            <span className="text-3xl font-bold text-gradient">AUTOCREA</span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Comienza Gratis</h1>
          <p className="text-muted-foreground">
            Crea tu cuenta y empieza a construir
          </p>
        </div>

        <Card className="glass-strong border-primary/20">
          <CardHeader>
            <CardTitle>Crear Cuenta</CardTitle>
            <CardDescription>
              Regístrate en AUTOCREA y obtén créditos gratis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre Completo</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Tu nombre"
                    className="pl-10 bg-surface border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

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
                <p className="text-xs text-muted-foreground mt-1">
                  Mínimo 8 caracteres
                </p>
              </div>

              <label className="flex items-start space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-primary/30 mt-1" />
                <span className="text-sm text-muted-foreground">
                  Acepto los{' '}
                  <Link href="#" className="text-accent hover:underline">
                    Términos de Servicio
                  </Link>{' '}
                  y la{' '}
                  <Link href="#" className="text-accent hover:underline">
                    Política de Privacidad
                  </Link>
                </span>
              </label>
            </div>

            <Button className="w-full gradient-primary hover:glow-primary text-lg py-6 transition-all">
              Crear Cuenta
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted-foreground">O regístrate con</span>
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
              ¿Ya tienes una cuenta?{' '}
              <Link href="/sign-in" className="text-accent hover:underline font-medium">
                Iniciar sesión
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 glass rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">🎁</span>
            </div>
            <div>
              <p className="text-sm font-medium">500 créditos gratis al registrarte</p>
              <p className="text-xs text-muted-foreground">Suficiente para 10 generaciones con IA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
