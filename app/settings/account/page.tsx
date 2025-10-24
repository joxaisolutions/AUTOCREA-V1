import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, User, Mail, ArrowLeft, Save } from 'lucide-react';

export default function AccountSettingsPage() {
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Configuración de <span className="text-gradient">Cuenta</span>
            </h1>
            <p className="text-muted-foreground">
              Administra tu información personal y preferencias
            </p>
          </div>

          <div className="flex gap-6 mb-8">
            <Link href="/settings/account">
              <Button className="bg-primary/20 text-primary hover:bg-primary/30">
                Cuenta
              </Button>
            </Link>
            <Link href="/settings/billing">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Facturación
              </Button>
            </Link>
            <Link href="/settings/usage">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Uso
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            <Card className="glass-strong border-primary/20">
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
                <CardDescription>
                  Actualiza tu información de perfil
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="text"
                        defaultValue="Juan"
                        className="pl-10 bg-surface border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Apellido</label>
                    <Input
                      type="text"
                      defaultValue="Pérez"
                      className="bg-surface border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Correo Electrónico</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="email"
                      defaultValue="juan@email.com"
                      className="pl-10 bg-surface border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <Button className="gradient-primary hover:glow-primary transition-all">
                  <Save className="w-4 h-4 mr-2" />
                  Guardar Cambios
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-strong border-primary/20">
              <CardHeader>
                <CardTitle>Cambiar Contraseña</CardTitle>
                <CardDescription>
                  Actualiza tu contraseña para mantener tu cuenta segura
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Contraseña Actual</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="bg-surface border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nueva Contraseña</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="bg-surface border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Confirmar Nueva Contraseña</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="bg-surface border-primary/20 focus:border-primary"
                  />
                </div>

                <Button className="gradient-primary hover:glow-primary transition-all">
                  Actualizar Contraseña
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-strong border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive">Zona de Peligro</CardTitle>
                <CardDescription>
                  Acciones irreversibles para tu cuenta
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border border-destructive/20">
                  <div>
                    <p className="font-medium">Eliminar Cuenta</p>
                    <p className="text-sm text-muted-foreground">
                      Esta acción no se puede deshacer
                    </p>
                  </div>
                  <Button variant="destructive">
                    Eliminar Cuenta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
