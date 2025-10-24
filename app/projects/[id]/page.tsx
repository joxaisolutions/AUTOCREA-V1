'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Code2,
  Play,
  Download,
  Upload,
  Settings,
  FileText,
  Terminal,
  Eye,
  ChevronRight,
  Folder,
  File,
  Save,
  GitBranch,
  Plus,
} from 'lucide-react';

export default function ProjectPage() {
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');
  const [selectedFile, setSelectedFile] = useState('src/App.tsx');

  const fileTree = [
    {
      name: 'src',
      type: 'folder',
      children: [
        { name: 'App.tsx', type: 'file' },
        { name: 'main.tsx', type: 'file' },
        { name: 'index.css', type: 'file' },
      ],
    },
    {
      name: 'public',
      type: 'folder',
      children: [{ name: 'index.html', type: 'file' }],
    },
    { name: 'package.json', type: 'file' },
    { name: 'tsconfig.json', type: 'file' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <nav className="glass border-b border-primary/10 z-50">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Code2 className="w-6 h-6 text-accent" />
                <span className="text-lg font-bold text-gradient">AUTOCREA</span>
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Mi Proyecto Web</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-accent">
                <Save className="w-4 h-4 mr-2" />
                Guardar
              </Button>
              <Button variant="ghost" size="sm" className="text-foreground hover:text-accent">
                <GitBranch className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button size="sm" className="gradient-primary hover:glow-primary transition-all">
                <Upload className="w-4 h-4 mr-2" />
                Deploy
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 glass border-r border-primary/10 overflow-y-auto scrollbar-thin">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm text-muted-foreground">ARCHIVOS</h3>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-1">
              {fileTree.map((item, idx) => (
                <FileTreeItem
                  key={idx}
                  item={item}
                  selectedFile={selectedFile}
                  onSelect={setSelectedFile}
                />
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="glass border-b border-primary/10">
            <div className="flex items-center justify-between px-6 py-2">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setActiveTab('editor')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === 'editor'
                      ? 'bg-primary/20 text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Code2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Editor</span>
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === 'preview'
                      ? 'bg-primary/20 text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-medium">Vista Previa</span>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-foreground hover:text-accent">
                  <Terminal className="w-4 h-4 mr-2" />
                  Terminal
                </Button>
                <Button variant="ghost" size="sm" className="text-foreground hover:text-accent">
                  <Play className="w-4 h-4 mr-2" />
                  Ejecutar
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            {activeTab === 'editor' ? (
              <div className="h-full flex flex-col">
                <div className="glass border-b border-primary/10 px-6 py-2">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{selectedFile}</span>
                  </div>
                </div>
                <div className="flex-1 bg-surface-dark p-6 overflow-auto scrollbar-thin">
                  <div className="font-mono text-sm text-muted-foreground">
                    <pre className="leading-relaxed">
                      <code>{`import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Mi Aplicación</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador: {count}
        </button>
      </div>
    </div>
  )
}

export default App`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full bg-white flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vista Previa</h3>
                  <p className="text-gray-600">
                    La vista previa en vivo aparecerá aquí
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="glass border-t border-primary/10 h-48 overflow-auto scrollbar-thin">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold">Terminal</span>
                </div>
                <Button variant="ghost" size="sm" className="h-6 text-xs">
                  Limpiar
                </Button>
              </div>
              <div className="font-mono text-xs text-muted-foreground space-y-1">
                <div>$ npm install</div>
                <div className="text-green-400">✓ Dependencias instaladas</div>
                <div>$ npm run dev</div>
                <div className="text-accent">Server running on http://localhost:5173</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function FileTreeItem({
  item,
  level = 0,
  selectedFile,
  onSelect,
}: {
  item: any;
  level?: number;
  selectedFile: string;
  onSelect: (file: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const isFolder = item.type === 'folder';
  const fullPath = item.name;

  return (
    <div>
      <button
        onClick={() => {
          if (isFolder) {
            setIsOpen(!isOpen);
          } else {
            onSelect(fullPath);
          }
        }}
        className={`w-full flex items-center space-x-2 px-2 py-1.5 rounded-lg text-sm transition-all ${
          selectedFile === fullPath
            ? 'bg-primary/20 text-primary'
            : 'text-foreground hover:bg-surface-light'
        }`}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
      >
        {isFolder ? (
          <Folder className={`w-4 h-4 ${isOpen ? 'text-accent' : 'text-muted-foreground'}`} />
        ) : (
          <File className="w-4 h-4 text-muted-foreground" />
        )}
        <span className="flex-1 text-left">{item.name}</span>
      </button>
      {isFolder && isOpen && item.children && (
        <div>
          {item.children.map((child: any, idx: number) => (
            <FileTreeItem
              key={idx}
              item={child}
              level={level + 1}
              selectedFile={selectedFile}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}
