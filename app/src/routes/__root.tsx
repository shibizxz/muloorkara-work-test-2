import { Outlet, createRootRoute, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";
import { ArrowUpRight, SiteHeader, SiteFooter } from "../components/Site";
import appMetaJson from "../app-meta.json";

type AppMeta = {
  og_title?: string | null;
  og_description?: string | null;
  og_image_url?: string | null;
  favicon_url?: string | null;
  og_video_url?: string | null;
};
const appMeta = appMetaJson as AppMeta;
const organizationData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "YUKTI Engineering & Projects",
  description:
    "Engineering consulting, design and project support across electrical, civil, structural and mechanical disciplines.",
  telephone: "+919744284965",
  email: "info@yukti-in.com",
};
function buildHead(meta: AppMeta) {
  const title = meta.og_title ?? "YUKTI Engineering & Projects";
  const description =
    meta.og_description ??
    "Practical engineering consulting, design and project support across electrical, civil, structural and mechanical disciplines.";
  const image = meta.og_image_url ?? "/assets/yukti-og.jpg";
  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "author", content: "YUKTI Engineering & Projects" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: meta.favicon_url ?? "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/assets/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  };
}
function NotFoundComponent() {
  return (
    <main id="main" className="state-page">
      <p>404 / ROUTE NOT FOUND</p>
      <h1>This drawing does not exist.</h1>
      <a className="button button-gold" href="/">
        Return home{" "}
        <span>
          <ArrowUpRight />
        </span>
      </a>
    </main>
  );
}
function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <main id="main" className="state-page">
      <p>SYSTEM NOTICE</p>
      <h1>This page did not load.</h1>
      <button
        className="button button-gold"
        onClick={() => {
          router.invalidate();
          reset();
        }}
      >
        Try again
      </button>
    </main>
  );
}
export const Route = createRootRoute({
  head: () => buildHead(appMeta),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
function RootComponent() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}
