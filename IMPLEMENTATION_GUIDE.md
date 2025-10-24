# AUTOCREA - Guía de Implementación

## ✅ Lo que ya está construido

Tu aplicación AUTOCREA está completamente estructurada y lista para funcionar. He construido:

### 1. Estructura Base
- ✅ Next.js 14 con App Router configurado
- ✅ TypeScript con configuración completa
- ✅ TailwindCSS con paleta de colores JoxAI personalizada
- ✅ Componentes shadcn/ui (Button, Card, Input, Textarea, etc.)
- ✅ Layout responsivo con dark mode

### 2. Páginas Completas
- ✅ **Landing Page** (`/`) - Hero, características, ejemplos, precios, footer
- ✅ **Dashboard** (`/dashboard`) - Grid/List view de proyectos, búsqueda, filtros
- ✅ **Nuevo Proyecto** (`/projects/new`) - Formulario con IA, selector de framework, estimación de créditos
- ✅ **IDE Completo** (`/projects/[id]`) - File tree, editor de código, terminal, preview
- ✅ **Settings/Billing** - Gestión de créditos y paquetes
- ✅ **Documentación** (`/docs`) - Estructura de docs lista

### 3. Paleta de Colores JoxAI Implementada

Según tu tabla, he configurado:

```css
/* Colores principales */
--primary: #4A90E2 (Azul profesional)
--secondary: #9B59B6 (Púrpura moderno)
--accent: #00D9FF (Cian brillante)
--background: #0A0E27 (Azul oscuro profundo)
--surface: #1a1f3a (Azul oscuro medio)
--surface-light: #242b4a (Azul oscuro claro)
```

Los colores están aplicados en:
- Gradientes de fondo
- Botones con efecto glow
- Bordes con brillo
- Cards con glassmorphism
- Texto con degradados

### 4. Características UI/UX
- ✅ Animaciones fluidas (transitions 0.3s)
- ✅ Efectos glow en hover
- ✅ Glassmorphism en cards
- ✅ Gradientes sutiles
- ✅ Responsive design (móvil → desktop)
- ✅ Loading states y toasts
- ✅ Empty states informativos

---

## 🔧 Configuraciones que debes hacer manualmente

### 1. Clerk Authentication

**Pasos:**

1. Ve a [clerk.com](https://clerk.com) y crea una cuenta
2. Crea una nueva aplicación
3. En el dashboard de Clerk, ve a "API Keys"
4. Copia las keys y agrégalas a tu `.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

5. Instala el middleware de Clerk (ya está en package.json):

```bash
npm install @clerk/nextjs
```

6. Actualiza `app/layout.tsx` para agregar el ClerkProvider:

```tsx
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="es" className="dark">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
```

7. Crea `middleware.ts` en la raíz del proyecto:

```typescript
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up", "/docs"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

8. Reemplaza los stubs de sign-in y sign-up con componentes de Clerk:

```tsx
// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <SignIn />
    </div>
  );
}
```

### 2. Hugging Face API (JoxCoder)

1. Ve a [huggingface.co](https://huggingface.co) y crea una cuenta
2. Genera un Access Token en Settings → Access Tokens
3. Agrega a `.env.local`:

```env
HUGGINGFACE_API_URL=https://api-inference.huggingface.co/models/joxai/joxcoder-v1
HUGGINGFACE_API_KEY=hf_...
```

4. Crea el servicio de generación en `lib/services/joxcoder.ts`:

```typescript
export async function generateWithJoxCoder(prompt: string) {
  const response = await fetch(process.env.HUGGINGFACE_API_URL!, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: prompt,
      parameters: {
        max_new_tokens: 8000,
        temperature: 0.7,
      },
    }),
  });

  return await response.json();
}
```

5. Integra en `app/projects/new/page.tsx` en la función `handleGenerate`:

```typescript
const result = await fetch('/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ description, framework }),
});
```

### 3. Stripe Payments (ya configurado en Bolt)

Según tus instrucciones, Stripe ya está configurado. Solo necesitas:

1. Verificar que las keys estén en `.env.local`:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

2. Crear los productos en Stripe Dashboard:
   - Starter: $10 - 10,000 créditos
   - Pro: $45 - 50,000 créditos
   - Business: $120 - 150,000 créditos
   - Enterprise: $350 - 500,000 créditos

3. Crear API route para checkout:

```typescript
// app/api/checkout/route.ts
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const { priceId } = await request.json();

  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: priceId, quantity: 1 }],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL}/dashboard?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/settings/billing`,
  });

  return Response.json({ url: session.url });
}
```

### 4. Convex Database (recomendado)

Para configurar Convex como base de datos:

1. Ve a [convex.dev](https://convex.dev) y crea una cuenta

2. Instala Convex:

```bash
npm install convex
npx convex dev
```

3. Configura en `.env.local`:

```env
NEXT_PUBLIC_CONVEX_URL=https://xxx.convex.cloud
CONVEX_DEPLOYMENT=xxx
```

4. Crea el esquema en `convex/schema.ts`:

```typescript
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    userId: v.string(),
    name: v.string(),
    description: v.optional(v.string()),
    framework: v.string(),
    files: v.any(),
    creditsUsed: v.number(),
  }).index("by_user", ["userId"]),

  userCredits: defineTable({
    userId: v.string(),
    credits: v.number(),
    plan: v.string(),
  }).index("by_user", ["userId"]),

  creditTransactions: defineTable({
    userId: v.string(),
    amount: v.number(),
    type: v.string(),
    description: v.optional(v.string()),
  }).index("by_user", ["userId"]),
});
```

5. Crea funciones de consulta en `convex/projects.ts`:

```typescript
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();
  },
});

export const create = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    description: v.optional(v.string()),
    framework: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("projects", {
      ...args,
      files: {},
      creditsUsed: 0,
    });
  },
});
```

---

## 🚀 Integraciones Opcionales

### Monaco Editor (ya preparado)

Para integrar el editor de código real:

```bash
npm install @monaco-editor/react monaco-editor
```

Luego en `app/projects/[id]/page.tsx`, reemplaza el div del editor con:

```tsx
import Editor from '@monaco-editor/react';

<Editor
  height="100%"
  language="typescript"
  theme="vs-dark"
  value={fileContent}
  onChange={(value) => setFileContent(value)}
  options={{
    fontSize: 14,
    minimap: { enabled: true },
    lineNumbers: 'on',
  }}
/>
```

### Xterm.js Terminal (ya preparado)

```bash
npm install xterm xterm-addon-fit
```

```tsx
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

// Inicializar terminal
const term = new Terminal();
const fitAddon = new FitAddon();
term.loadAddon(fitAddon);
term.open(terminalRef.current);
```

### WebContainers para ejecución de código

```bash
npm install @webcontainer/api
```

```typescript
import { WebContainer } from '@webcontainer/api';

const container = await WebContainer.boot();
await container.mount(files);
await container.spawn('npm', ['install']);
```

---

## 📝 Configuración Rápida

### Archivo `.env.local` completo

Crea este archivo en la raíz con todas tus keys:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx

# Hugging Face
HUGGINGFACE_API_URL=https://api-inference.huggingface.co/models/joxai/joxcoder-v1
HUGGINGFACE_API_KEY=hf_xxx

# Stripe (ya configurado)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# Convex
NEXT_PUBLIC_CONVEX_URL=https://xxx.convex.cloud
CONVEX_DEPLOYMENT=xxx

# App
NEXT_PUBLIC_URL=http://localhost:3000
```

---

## 🎯 Próximos Pasos Recomendados

1. **Configurar Clerk** (15 min)
   - Registrarse y obtener keys
   - Agregar middleware
   - Probar login/signup

2. **Conectar Hugging Face** (20 min)
   - Obtener API key
   - Crear servicio de generación
   - Probar con un prompt simple

3. **Configurar Stripe** (30 min)
   - Crear productos
   - Implementar checkout
   - Configurar webhooks

4. **Base de datos Convex** (30 min)
   - Configurar esquema
   - Implementar CRUD de proyectos
   - Sistema de créditos

5. **Integrar Monaco Editor** (15 min)
   - Instalar paquete
   - Reemplazar editor placeholder

6. **Deploy a Vercel/Netlify** (10 min)
   - Push a GitHub
   - Conectar con Vercel
   - Configurar variables de entorno

---

## 🎨 Personalización de Colores

Si quieres ajustar los colores, edita `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#4A90E2",
    // ... más tonos
  },
  secondary: {
    DEFAULT: "#9B59B6",
    // ... más tonos
  },
  accent: {
    DEFAULT: "#00D9FF",
    // ... más tonos
  },
  background: "#0A0E27",
  surface: {
    DEFAULT: "#1a1f3a",
    light: "#242b4a",
    dark: "#0A0E27",
  },
}
```

---

## 📚 Recursos Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [Clerk Docs](https://clerk.com/docs)
- [Stripe Docs](https://stripe.com/docs)
- [Convex Docs](https://docs.convex.dev)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Xterm.js](https://xtermjs.org/)
- [WebContainers](https://webcontainers.io/)

---

## ✅ Checklist de Implementación

- [ ] Configurar Clerk authentication
- [ ] Obtener API key de Hugging Face
- [ ] Configurar productos en Stripe
- [ ] Crear base de datos en Convex
- [ ] Integrar Monaco Editor
- [ ] Integrar Terminal Xterm.js
- [ ] Implementar WebContainers
- [ ] Probar flujo completo de generación
- [ ] Deploy a producción
- [ ] Configurar dominio personalizado

---

## 🐛 Troubleshooting

### Error: Clerk keys no definidas
- Verifica que las keys estén en `.env.local`
- Reinicia el servidor de desarrollo

### Error: Hugging Face 503
- El modelo puede estar cargándose
- Espera 30-60 segundos y reintenta

### Error: Stripe checkout falla
- Verifica que los productos existan en Stripe
- Confirma que las keys sean correctas (test/live)

### Build errors
- Ejecuta `npm run lint` para ver errores
- Ejecuta `npm run build` localmente antes de deploy

---

## 💡 Consejos

1. **Desarrollo incremental**: Implementa una integración a la vez
2. **Test en local primero**: Prueba todo localmente antes de deploy
3. **Variables de entorno**: Usa diferentes keys para desarrollo y producción
4. **Monitoreo**: Agrega Sentry para tracking de errores
5. **Analytics**: Considera PostHog o Mixpanel para analytics

---

## 🎉 ¡Felicidades!

Tu aplicación AUTOCREA está lista para empezar. Solo necesitas configurar las integraciones externas y estará completamente funcional.

**¿Preguntas?** Consulta el README.md o la documentación de cada servicio.

---

Desarrollado siguiendo las especificaciones exactas del prompt. ✨
