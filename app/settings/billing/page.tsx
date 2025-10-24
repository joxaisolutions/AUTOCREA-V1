"use client";

import Link from "next/link";
import { ArrowLeft, Zap, Plus, CreditCard, Code, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function BillingPage() {
  const credits = 50000;
  const creditsUsedThisMonth = 12500;
  const plan = "Pro";

  return (
    <div className="min-h-screen bg-primary">
      <header className="border-b border-primary/20 bg-primary-dark/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 hover:opacity-80">
            <ArrowLeft className="w-5 h-5" />
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-accent" />
              <span className="text-xl font-bold">AUTOCREA</span>
            </div>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Facturación y Créditos</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="glow">
            <CardHeader>
              <CardTitle className="text-sm text-secondary">Créditos Disponibles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">{credits.toLocaleString()}</div>
              <p className="text-sm text-secondary mb-4">{creditsUsedThisMonth.toLocaleString()} usados este mes</p>
              <Button className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Comprar Créditos
              </Button>
            </CardContent>
          </Card>

          <Card className="glow">
            <CardHeader>
              <CardTitle className="text-sm text-secondary">Plan Actual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2 capitalize">{plan}</div>
              <p className="text-sm text-secondary mb-4">50,000 créditos mensuales</p>
              <Button variant="outline" className="w-full">
                Cambiar Plan
              </Button>
            </CardContent>
          </Card>

          <Card className="glow">
            <CardHeader>
              <CardTitle className="text-sm text-secondary">Próxima Renovación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">01 Nov</div>
              <p className="text-sm text-secondary mb-4">Los créditos se resetean mensualmente</p>
              <Button variant="outline" className="w-full">
                <CreditCard className="w-4 h-4 mr-2" />
                Gestionar en Stripe
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="glow">
          <CardHeader>
            <CardTitle>Paquetes de Créditos</CardTitle>
            <CardDescription>Compra créditos adicionales que nunca expiran</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { name: "Starter", credits: 10000, price: 10 },
                { name: "Pro", credits: 50000, price: 45, popular: true },
                { name: "Business", credits: 150000, price: 120 },
                { name: "Enterprise", credits: 500000, price: 350 },
              ].map((pkg) => (
                <Card key={pkg.name} className={pkg.popular ? "ring-2 ring-highlight" : ""}>
                  <CardHeader>
                    <CardTitle className="text-lg">{pkg.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">${pkg.price}</div>
                    <div className="text-sm text-secondary mb-4">{pkg.credits.toLocaleString()} créditos</div>
                    <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                      Comprar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
