import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-canvas px-4 py-10 text-ink">
      <div className="pointer-events-none fixed inset-0 bg-hero-glow opacity-80" />
      <section className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-md items-center">
        <div className="w-full rounded-4xl border border-brass/20 bg-ivory/95 p-6 shadow-velvet sm:p-8">
          <p className="text-xs uppercase tracking-editorial text-brass">Princessmel Club</p>
          <h1 className="mt-3 font-serif text-4xl text-ink">Entrar</h1>
          <form className="mt-8 space-y-5">
            <label className="block">
              <span className="text-sm text-graphite">Telefone ou CPF</span>
              <input
                className="mt-2 h-12 w-full rounded-full border border-graphite/15 bg-canvas px-4 text-sm text-ink outline-none transition focus:border-brass"
                placeholder="(00) 00000-0000"
                type="text"
              />
            </label>
            <label className="block">
              <span className="text-sm text-graphite">Senha</span>
              <input
                className="mt-2 h-12 w-full rounded-full border border-graphite/15 bg-canvas px-4 text-sm text-ink outline-none transition focus:border-brass"
                placeholder="Sua senha"
                type="password"
              />
            </label>
            <Link
              href="/app"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-ink bg-ink px-6 text-sm font-medium text-ivory transition hover:border-brass hover:bg-brass"
            >
              Entrar
            </Link>
          </form>
          <div className="mt-6 grid gap-3">
            <Link href="/app" className="text-sm text-graphite underline-offset-4 hover:text-ink hover:underline">
              Acessar como cliente demo
            </Link>
            <Link href="/admin" className="text-sm text-graphite underline-offset-4 hover:text-ink hover:underline">
              Entrar como admin demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
