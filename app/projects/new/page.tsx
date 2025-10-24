"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Zap, Sparkles, MessageSquare, LayoutTemplate, Lightbulb, CheckCircle2, AlertCircle, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { estimateTokens } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function NewProjectPage() {
  const [description, setDescription] = useState("");
  const [framework, setFramework] = useState<"react" | "next" | "vue" | "vanilla">("react");
  const [estimatedCredits, setEstimatedCredits] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  const credits = 50000;

  useEffect(() => {
    const estimated = Math.ceil(estimateTokens(description) * 2.5);
    setEstimatedCredits(estimated);
  }, [description]);

  const handleGenerate = async () => {
    if (!description.trim()) {
      toast.error("Por favor describe tu aplicación");
      return;
    }

    if (estimatedCredits > credits) {
      toast.error("Créditos insuficientes");
      return;
    }

    setIsGenerating(true);
    toast.loading("Generando aplicación...");

    setTimeout(() => {
      toast.success("¡Aplicación generada exitosamente!");
      router.push("/projects/1");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="border-b border-primary/20 bg-primary-dark/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 hover:opacity-80">
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Proyectos</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30">
              <Zap className="w-4 h-4 text-highlight" />
              <span className="text-sm font-medium">{credits.toLocaleString()} créditos disponibles</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-highlight flex items-center justify-center">
              <span className="text-sm font-bold">U</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Sparkles className="w-4 h-4 text-highlight" />
              <span className="text-sm text-highlight">Potenciado por JoxCoder v1</span>
            </div>

            <h1 className="text-5xl font-bold mb-4 text-gradient">
              ¿Qué quieres crear hoy?
            </h1>
            <p className="text-xl text-secondary">Describe tu aplicación y déjanos hacer el resto</p>
          </div>

          {/* Main Form */}
          <Card className="p-6 glow">
            <div className="space-y-6">
              {/* Framework Selector */}
              <div>
                <label className="block text-sm font-medium mb-3">Framework (opcional)</label>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { id: "react", name: "React", icon: "⚛️" },
                    { id: "next", name: "Next.js", icon: "▲" },
                    { id: "vue", name: "Vue", icon: "💚" },
                    { id: "vanilla", name: "HTML/CSS/JS", icon: "🎨" },
                  ].map((fw) => (
                    <button
                      key={fw.id}
                      onClick={() => setFramework(fw.id as any)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        framework === fw.id
                          ? "border-accent bg-accent/10"
                          : "border-primary/20 hover:border-accent/50 bg-primary-dark"
                      }`}
                    >
                      <div className="text-2xl mb-2">{fw.icon}</div>
                      <div className="text-sm font-medium">{fw.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Prompt Textarea */}
              <div>
                <label className="block text-sm font-medium mb-3">Describe tu aplicación en detalle</label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ejemplo:

Quiero crear una landing page para mi cafetería 'Café Aroma' con las siguientes secciones:

1. Hero Section:
   - Imagen de fondo de una taza de café
   - Título: 'El mejor café de la ciudad'
   - Botón CTA: 'Ver menú'

2. Menú:
   - Categorías: Cafés Calientes, Cafés Fríos, Postres
   - Cards con imagen, nombre, descripción y precio
   - Botón 'Ordenar' en cada item

3. Galería de Fotos:
   - Grid de 6 fotos del local y productos
   - Efecto hover con zoom

4. Nosotros:
   - Historia de la cafetería
   - Misión y valores

5. Contacto:
   - Formulario: nombre, email, mensaje
   - Mapa de ubicación
   - Horarios de atención

6. Footer:
   - Links a redes sociales
   - Copyright

Estilo: Moderno y acogedor, colores cálidos (marrones, beige, crema). Responsive para móviles."
                  rows={20}
                  className="resize-none font-mono text-sm"
                />
                <p className="text-xs text-secondary mt-2">
                  💡 Tip: Cuanto más detallado, mejor será el resultado. Menciona secciones, funcionalidades, estilo
                  visual, colores, interacciones, etc.
                </p>
              </div>

              {/* Credit Estimation */}
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-highlight mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-highlight mb-1">Estimación de Créditos</h4>
                    <p className="text-sm text-secondary">
                      Esta generación consumirá aproximadamente{" "}
                      <span className="font-bold text-white">{estimatedCredits.toLocaleString()} créditos</span>
                    </p>
                    {estimatedCredits > credits && (
                      <p className="text-sm text-red-400 flex items-center gap-2 mt-2">
                        <AlertCircle className="w-4 h-4" />
                        Créditos insuficientes. Necesitas comprar más créditos.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <Button
                onClick={handleGenerate}
                disabled={!description.trim() || estimatedCredits > credits || isGenerating}
                className="w-full h-14 text-lg glow-hover"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Generando...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generar Aplicación
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Tips */}
          <Card className="p-6 bg-primary-dark/50">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-highlight" />
              Consejos para mejores resultados
            </h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Especifica todas las secciones que necesitas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Describe el estilo visual (colores, fuentes, espaciado)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Menciona si necesita ser responsive (móvil/tablet)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Indica interacciones (formularios, animaciones, hover effects)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Puedes mencionar tecnologías específicas (TailwindCSS, Framer Motion, etc.)</span>
              </li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
}
