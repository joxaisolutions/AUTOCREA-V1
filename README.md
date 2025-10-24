# AUTOCREA - De Idea a Materialización

![AUTOCREA](https://img.shields.io/badge/AUTOCREA-JoxAI-purple)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

**AUTOCREA** es una plataforma web completa que permite generar aplicaciones web funcionales mediante prompts en lenguaje natural, potenciada por JoxCoder (modelo de IA).

## 🚀 Características Principales

- **Generación con IA**: Crea aplicaciones completas con solo describir tu idea
- **Editor Profesional**: Monaco Editor con syntax highlighting y autocomplete
- **Vista Previa en Vivo**: Ve los cambios instantáneamente
- **Terminal Integrada**: Ejecuta comandos npm directamente
- **Deploy Automático**: Publica en Netlify con un click
- **Integración GitHub**: Push tu código a repositorios
- **Sistema de Créditos**: Gestión transparente de uso de tokens

## 🎨 Diseño

AUTOCREA utiliza la paleta de colores del ecosistema JoxAI:

- **Primary**: `#001F4C` (Azul oscuro)
- **Accent**: `#A300FF` (Púrpura brillante)
- **Highlight**: `#00FFFF` (Cian eléctrico)
- **Background**: Dark mode con gradientes sutiles

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **Editor**: Monaco Editor
- **Terminal**: Xterm.js
- **Authentication**: Clerk (ready to integrate)
- **Payments**: Stripe (ready to integrate)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🔧 Configuración

### Variables de Entorno Requeridas

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Hugging Face API
HUGGINGFACE_API_URL=https://api-inference.huggingface.co/models/joxai/joxcoder-v1
HUGGINGFACE_API_KEY=hf_...

# Opcional: Deploy y GitHub
NETLIFY_API_TOKEN=...
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
```

## 📁 Estructura del Proyecto

```
autocrea/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing page
│   ├── dashboard/         # Dashboard de proyectos
│   ├── projects/
│   │   ├── new/          # Crear nuevo proyecto
│   │   └── [id]/         # IDE completo
│   ├── settings/          # Configuración
│   └── docs/              # Documentación
├── components/
│   └── ui/               # Componentes shadcn/ui
├── lib/
│   └── utils.ts          # Utilidades
└── public/               # Assets estáticos
```

## 🎯 Rutas Principales

- `/` - Landing page
- `/dashboard` - Dashboard de proyectos
- `/projects/new` - Crear nuevo proyecto con IA
- `/projects/[id]` - IDE completo con editor y preview
- `/settings/billing` - Gestión de créditos
- `/docs` - Documentación

## 🚧 Próximas Integraciones

Esta versión base incluye toda la estructura UI/UX. Las siguientes integraciones están listas para implementarse:

1. **Clerk Authentication**: Configurar con las API keys
2. **Hugging Face JoxCoder**: Conectar con el modelo de IA
3. **Stripe Payments**: Sistema de compra de créditos
4. **Monaco Editor**: Editor de código avanzado
5. **Xterm.js**: Terminal funcional
6. **WebContainers**: Ejecución de código en navegador
7. **Netlify Deploy**: Deploy automático
8. **GitHub Integration**: Push a repositorios

## 📝 Uso

### Crear un Proyecto

1. Navega a "Nuevo Proyecto"
2. Describe tu aplicación en detalle
3. Selecciona el framework (React, Next.js, Vue, o Vanilla)
4. Revisa la estimación de créditos
5. Click en "Generar Aplicación"
6. Edita y personaliza en el IDE
7. Deploy con un click

### Ejemplo de Prompt

```
Quiero crear una landing page para mi cafetería 'Café Aroma' con:

1. Hero Section con imagen de fondo
2. Menú con categorías (Cafés, Postres)
3. Galería de fotos
4. Formulario de contacto
5. Footer con redes sociales

Estilo: Moderno, colores cálidos (marrones, beige).
Responsive para móviles.
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Copyright © 2025 JoxAI. Todos los derechos reservados.

## 🙏 Agradecimientos

- JoxAI por el desarrollo de JoxCoder
- Vercel por Next.js
- shadcn por los componentes UI
- La comunidad open source

## 📞 Soporte

- Email: support@joxai.org
- Discord: [discord.gg/joxai](https://discord.gg/joxai)
- Docs: [docs.autocrea.joxai.org](https://docs.autocrea.joxai.org)

---

Desarrollado con ❤️ por [JoxAI](https://joxai.org)
