import Link from "next/link";
import { ArrowLeft, ChevronRight, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DocsPage() {
  const sections = [
    {
      title: "Primeros Pasos",
      items: [
        { title: "Introducción a AUTOCREA", href: "/docs/intro" },
        { title: "Cómo escribir buenos prompts", href: "/docs/prompts" },
        { title: "Tu primer proyecto", href: "/docs/first-project" },
      ],
    },
    {
      title: "Guía de Usuario",
      items: [
        { title: "Generación de aplicaciones", href: "/docs/generation" },
        { title: "Editor de código", href: "/docs/editor" },
        { title: "Terminal y comandos", href: "/docs/terminal" },
        { title: "Deploy a producción", href: "/docs/deploy" },
      ],
    },
    {
      title: "Créditos y Planes",
      items: [
        { title: "Cómo funcionan los créditos", href: "/docs/credits" },
        { title: "Planes de suscripción", href: "/docs/plans" },
        { title: "Facturación", href: "/docs/billing" },
      ],
    },
    {
      title: "Referencia Técnica",
      items: [
        { title: "JoxCoder API", href: "/docs/api" },
        { title: "Frameworks soportados", href: "/docs/frameworks" },
        { title: "Límites y restricciones", href: "/docs/limits" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      <header className="border-b border-primary/20 bg-primary-dark/50 backdrop-blur-xl">
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

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Documentación</h1>
          <p className="text-xl text-secondary mb-12">Todo lo que necesitas saber para usar AUTOCREA</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <Card key={section.title} className="glow-hover">
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 text-secondary hover:text-highlight transition-colors"
                        >
                          <ChevronRight className="w-4 h-4" />
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 glow">
            <CardHeader>
              <CardTitle>¿Necesitas ayuda?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-secondary mb-4">
                Si no encuentras lo que buscas, nuestro equipo está aquí para ayudarte.
              </p>
              <div className="flex gap-4">
                <Link href="mailto:support@joxai.org" className="text-highlight hover:underline">
                  support@joxai.org
                </Link>
                <span className="text-secondary">|</span>
                <Link href="https://discord.gg/joxai" className="text-highlight hover:underline">
                  Discord
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
