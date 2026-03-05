import Link from "next/link";

const starterModules = [
  {
    title: "Feature Modules",
    description: "Build by feature in src/features/<feature-name>",
    target: "src/features"
  },
  {
    title: "Mock Data Layer",
    description: "Store prototype data in src/mocks and wire it via lib/mock",
    target: "src/mocks"
  },
  {
    title: "Shared UI",
    description: "Keep reusable primitives under src/components",
    target: "src/components"
  }
];

const prototypeFlows = [
  {
    title: "Phone Book Version A",
    description: "Figma-based mobile phone book mock flow.",
    href: "/phone-book-va"
  },
  {
    title: "Phone Book Search Flow",
    description: "Search result list state for phone book.",
    href: "/phone-book-va/search"
  },
  {
    title: "Phone Book Version B",
    description: "Alternative phone-book entry experience for A/B testing.",
    href: "/phone-book-vb"
  }
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <section className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Prototype Starter</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
          Responsive web app template for fast mockup flows
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          This repo is intentionally minimal so you can fork and start new prototypes quickly. Use mock data first,
          validate user flows, then swap services with real APIs when ready.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/phone-book-va"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Open Phone Book vA
          </Link>
          <Link
            href="https://nextjs.org/docs"
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-700"
          >
            Next.js Docs
          </Link>
          <Link
            href="https://ui.shadcn.com/"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            shadcn/ui
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {starterModules.map((module) => (
          <article key={module.title} className="rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{module.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{module.description}</p>
            <p className="mt-4 rounded-md bg-slate-100 px-3 py-2 font-mono text-xs text-slate-700">{module.target}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Available Prototypes</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {prototypeFlows.map((flow) => (
            <Link
              key={flow.href}
              href={flow.href}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100"
            >
              <p className="text-sm font-semibold text-slate-900">{flow.title}</p>
              <p className="mt-1 text-sm text-slate-600">{flow.description}</p>
              <p className="mt-3 font-mono text-xs text-slate-700">{flow.href}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
