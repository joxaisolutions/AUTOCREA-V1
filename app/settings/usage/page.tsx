import Link from "next/link";
import { ArrowLeft, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UsagePage() {
  return (
    <div className="min-h-screen bg-primary">
      <header className="border-b border-primary/20 bg-primary-dark/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
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
        <h1 className="text-3xl font-bold mb-8">Uso de Créditos</h1>
        <Card className="glow">
          <CardHeader>
            <CardTitle>Estadísticas de Uso</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-secondary">Usage analytics and credit history will be shown here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
