import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CookieConsent } from "@/components/site/CookieConsent";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KMBiosciences — Pharmaceutical Quality & Regulatory Services (UK & Ireland)" },
      {
        name: "description",
        content:
          "MHRA & HPRA authorised MIA Holder providing Qualified Person, Responsible Person, RPi, QA, eQMS (Scilife), Lead Auditor and Regulatory Support services across the UK & EU.",
      },
      { name: "author", content: "KMBiosciences Limited" },
      { property: "og:site_name", content: "KMBiosciences Limited" },
      {
        property: "og:title",
        content: "KMBiosciences — Pharmaceutical Quality & Regulatory Services (UK & Ireland)",
      },
      {
        property: "og:description",
        content:
          "MHRA & HPRA authorised MIA Holder providing Qualified Person, Responsible Person, RPi, QA, eQMS (Scilife), Lead Auditor and Regulatory Support services across the UK & EU.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#163A7D" },
      {
        name: "twitter:title",
        content: "KMBiosciences — Pharmaceutical Quality & Regulatory Services (UK & Ireland)",
      },
      {
        name: "twitter:description",
        content:
          "MHRA & HPRA authorised MIA Holder providing Qualified Person, Responsible Person, RPi, QA, eQMS (Scilife), Lead Auditor and Regulatory Support services across the UK & EU.",
      },
      {
        name: "keywords",
        content:
          "KMBiosciences, Pharmaceutical Regulatory Services, Pharmaceutical Quality Services, Qualified Person, QP Services, Qualified Person Services UK, Qualified Person EU, Contract Qualified Person, QP Batch Certification, Batch Release, MIA Holder, MHRA MIA Holder, HPRA MIA Holder, Manufacturer Importer Authorisation, Pharmaceutical Importation, Importation Services, Responsible Person, RP Services, Responsible Person Import, RPi Services, Regulatory Affairs, Regulatory Strategy, Regulatory Compliance, Pharmaceutical Compliance, GMP Compliance, GDP Compliance, Good Manufacturing Practice, Good Distribution Practice, Quality Assurance, QA Services, Pharmaceutical QA, Pharmaceutical Auditing, Lead Auditor, GMP Audit, GDP Audit, Internal Audit, Supplier Audit, Quality Management System, QMS, Electronic Quality Management System, eQMS, Scilife, Pharmaceutical Consulting, Pharmaceutical Service Provider, Pharmaceutical Support Services, Pharmaceutical Licensing, Pharmaceutical Quality Systems, Pharmaceutical Distribution, Pharmaceutical Import Export, EU Pharmaceutical Services, UK Pharmaceutical Services, Ireland Pharmaceutical Services, European Pharmaceutical Compliance, Pharmaceutical Industry, Life Sciences, Medicines Compliance, Drug Regulatory Services, Pharmaceutical Regulatory Experts",
      },
      {
        property: "og:url",
        content: "https://www.kmbios.com",
      },
      {
        property: "og:image",
        content: "https://www.kmbios.com/kmbfavicon.png",
      },
      {
        name: "twitter:image",
        content: "https://www.kmbios.com/kmbfavicon.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/kmbfavicon.png", type: "image/png" },
      // { rel: "preconnect", href: "https://fonts.googleapis.com" },
      // { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      // {
      //   rel: "stylesheet",
      //   href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      // },
      {
        rel: "canonical",
        href: "https://www.kmbios.com",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",

          name: "KMBiosciences Limited",

          url: "https://www.kmbios.com",

          logo: "https://www.kmbiosciences.com/kmbfavicon.png",

          email: "info@kmbios.com",

          telephone: "+44 7880 111192",

          description:
            "MHRA & HPRA authorised MIA Holder providing pharmaceutical quality, regulatory and compliance services.",

          areaServed: ["United Kingdom", "Ireland"],

          sameAs: ["https://www.linkedin.com/company/km-biosciences/"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[color:var(--background)]">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </QueryClientProvider>
  );
}
