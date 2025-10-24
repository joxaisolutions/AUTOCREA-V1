import Link from "next/link";
import { Code } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center gap-2 justify-center mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-highlight flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold">AUTOCREA</span>
        </Link>

        <div className="bg-gradient-to-br from-primary-dark/50 to-primary/30 backdrop-blur-sm border border-primary/20 rounded-lg p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
          <p className="text-secondary mb-6">
            Clerk authentication will be integrated here.
            <br />
            For now, you can navigate to the dashboard.
          </p>
          <Link
            href="/dashboard"
            className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-highlight rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
