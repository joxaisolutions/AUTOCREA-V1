"use client";

import { useState } from "react";
import Link from "next/link";
import { Code, Plus, Search, Grid3x3, List, Clock, Zap, MoreVertical, Pencil, Copy, ExternalLink, Trash2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { formatRelativeTime } from "@/lib/utils";

type Project = {
  id: string;
  name: string;
  description: string;
  framework: string;
  creditsUsed: number;
  updatedAt: number;
  stack: string[];
  thumbnail?: string;
};

const mockProjects: Project[] = [
  {
    id: "1",
    name: "Café Aroma Landing",
    description: "Landing page moderna para cafetería con menú interactivo y sistema de reservas",
    framework: "react",
    creditsUsed: 5234,
    updatedAt: Date.now() - 2 * 60 * 60 * 1000,
    stack: ["React", "Tailwind", "Framer Motion"],
  },
  {
    id: "2",
    name: "Dashboard Analytics Pro",
    description: "Dashboard completo con gráficos, tablas y exportación de datos",
    framework: "next",
    creditsUsed: 12567,
    updatedAt: Date.now() - 24 * 60 * 60 * 1000,
    stack: ["Next.js", "Recharts", "shadcn/ui"],
  },
  {
    id: "3",
    name: "E-commerce Fashion Store",
    description: "Tienda online con carrito, checkout y panel de administración",
    framework: "next",
    creditsUsed: 18923,
    updatedAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
    stack: ["Next.js", "Stripe", "PostgreSQL"],
  },
];

export default function DashboardPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [projects] = useState<Project[]>(mockProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const credits = 50000;

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="border-b border-primary/20 bg-primary-dark/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-highlight flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AUTOCREA</span>
            </Link>

            <nav className="hidden md:flex gap-6">
              <Link href="/dashboard" className="text-highlight font-medium">
                Proyectos
              </Link>
              <Link href="/templates" className="text-secondary hover:text-white transition-colors">
                Plantillas
              </Link>
              <Link href="/docs" className="text-secondary hover:text-white transition-colors">
                Documentación
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30">
              <Zap className="w-4 h-4 text-highlight" />
              <span className="text-sm font-medium">{credits.toLocaleString()} créditos</span>
            </div>

            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Comprar
            </Button>

            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-highlight flex items-center justify-center cursor-pointer">
              <span className="text-sm font-bold">U</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Mis Proyectos</h1>
            <p className="text-secondary">{projects.length} proyectos creados</p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
              <Input
                type="text"
                placeholder="Buscar proyectos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-primary-dark border-primary/20 w-64"
              />
            </div>

            {/* View Toggle */}
            <div className="flex gap-2 p-1 bg-primary-dark rounded-lg">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid" ? "bg-accent/20" : "hover:bg-accent/10"}`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${viewMode === "list" ? "bg-accent/20" : "hover:bg-accent/10"}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* New Project Button */}
            <Link href="/projects/new">
              <Button size="lg" className="glow-hover">
                <Plus className="w-5 h-5 mr-2" />
                Nuevo Proyecto
              </Button>
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </main>
    </div>
  );
}

function ProjectCard({ project, viewMode }: { project: Project; viewMode: string }) {
  return (
    <Card className="glow-hover transition-all">
      {viewMode === "grid" && (
        <div className="aspect-video bg-gradient-to-br from-primary-dark to-primary rounded-t-lg border-b border-primary/20 overflow-hidden flex items-center justify-center">
          <Code className="w-16 h-16 text-secondary" />
        </div>
      )}

      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg truncate">{project.name}</CardTitle>
            <CardDescription className="line-clamp-2 mt-2">{project.description}</CardDescription>
          </div>
          <button className="p-1 hover:bg-accent/10 rounded">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs text-secondary">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {formatRelativeTime(project.updatedAt)}
          </span>
          <span className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-highlight" />
            {project.creditsUsed.toLocaleString()} créditos
          </span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs bg-accent/10 text-highlight rounded-md border border-accent/20">
              {tech}
            </span>
          ))}
        </div>

        {/* Open Button */}
        <Link href={`/projects/${project.id}`}>
          <Button className="w-full">
            Abrir Proyecto
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-24">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
        <Sparkles className="w-12 h-12 text-accent" />
      </div>
      <h3 className="text-2xl font-bold mb-2">Crea tu primer proyecto</h3>
      <p className="text-secondary mb-6">Describe tu idea y deja que JoxCoder la haga realidad</p>
      <Link href="/projects/new">
        <Button size="lg" className="glow-hover">
          <Plus className="w-5 h-5 mr-2" />
          Crear Proyecto
        </Button>
      </Link>
    </div>
  );
}
