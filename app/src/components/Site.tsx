import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { contact, nav, services } from "../content/site";

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`arrow-icon arrow-up-right ${className}`.trim()}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5.5 14.5 14.5 5.5M7 5.5h7.5V13" />
    </svg>
  );
}

export function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`arrow-icon chevron-down ${className}`.trim()}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m5.25 7.5 4.75 4.75 4.75-4.75" />
    </svg>
  );
}

function SliderArrow({ direction }: { direction: "previous" | "next" }) {
  const reverse = direction === "previous";
  return (
    <svg
      className="slider-arrow"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      style={reverse ? { transform: "rotate(180deg)" } : undefined}
    >
      <path d="M4 10h11M11 5.5 15.5 10 11 14.5" />
    </svg>
  );
}

export function SnapSlider({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className: string;
  label: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ current: 1, count: 1, atStart: true, atEnd: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const items = Array.from(track.children) as HTMLElement[];
      const trackLeft = track.getBoundingClientRect().left;
      const current = items.reduce(
        (closest, item, index) => {
          const distance = Math.abs(item.getBoundingClientRect().left - trackLeft);
          return distance < closest.distance ? { index, distance } : closest;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
      ).index;
      setPosition({
        current: current + 1,
        count: Math.max(items.length, 1),
        atStart: track.scrollLeft <= 2,
        atEnd: track.scrollLeft + track.clientWidth >= track.scrollWidth - 2,
      });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, []);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: track.clientWidth * 0.86 * direction, behavior: "smooth" });
  };

  return (
    <div className="slider-shell">
      <div ref={trackRef} className={`${className} slider-track`} role="region" aria-label={label}>
        {children}
      </div>
      <div className="slider-controls" aria-label={`${label} controls`}>
        <span aria-live="polite">
          {String(position.current).padStart(2, "0")} / {String(position.count).padStart(2, "0")}
        </span>
        <button
          type="button"
          aria-label={`Previous ${label.toLowerCase()}`}
          disabled={position.atStart}
          onClick={() => move(-1)}
        >
          <SliderArrow direction="previous" />
        </button>
        <button
          type="button"
          aria-label={`Next ${label.toLowerCase()}`}
          disabled={position.atEnd}
          onClick={() => move(1)}
        >
          <SliderArrow direction="next" />
        </button>
      </div>
    </div>
  );
}

export const pageHead = (title: string, description: string) => ({
  meta: [
    { title: `${title} | YUKTI Engineering & Projects` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | YUKTI Engineering & Projects` },
    { property: "og:description", content: description },
  ],
});

export function SiteHeader() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = useLocation({ select: (location) => location.pathname });

  useEffect(() => {
    const menu = document.querySelector<HTMLDetailsElement>(".desktop-nav .services-dropdown");
    const closeOutside = (event: PointerEvent) => {
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target))
        menu.open = false;
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu?.open) {
        menu.open = false;
        menu.querySelector<HTMLElement>("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) mobileMenuRef.current.open = false;
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="YUKTI Engineering and Projects home">
        <img src="/assets/yukti-logo-mark.png" alt="" width="54" height="54" />
        <span>
          <strong>YUKTI</strong>
          <small>ENGINEERING & PROJECTS</small>
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="/about" aria-current={pathname === "/about" ? "page" : undefined}>
          About
        </a>
        <details className="services-dropdown">
          <summary
            className={`services-trigger${pathname.startsWith("/services") ? " is-current" : ""}`}
          >
            Services{" "}
            <span className="dropdown-arrow" aria-hidden="true">
              <ChevronDown />
            </span>
          </summary>
          <div className="services-mega">
            <div className="services-mega-intro">
              <small>01 / EXPERTISE</small>
              <strong>Engineering depth across every project layer.</strong>
              <a href="/services">
                View all services{" "}
                <span>
                  <ArrowUpRight />
                </span>
              </a>
            </div>
            <div className="services-mega-links">
              {services.map((item) => (
                <a key={item.slug} href={`/services/${item.slug}`}>
                  <span>{item.index}</span>
                  <strong>{item.title}</strong>
                  <b>
                    <ArrowUpRight />
                  </b>
                </a>
              ))}
            </div>
          </div>
        </details>
        <a href="/sectors" aria-current={pathname === "/sectors" ? "page" : undefined}>
          Sectors
        </a>
        <a href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>
          Contact
        </a>
        <a className="nav-cta" href={contact.emailHref}>
          Start a conversation{" "}
          <span>
            <ArrowUpRight />
          </span>
        </a>
      </nav>
      <details
        ref={mobileMenuRef}
        className="mobile-menu"
        onToggle={(event) => setMobileMenuOpen(event.currentTarget.open)}
      >
        <summary
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="menu-label">
            <small>Explore</small>
            <strong>{mobileMenuOpen ? "Close" : "Menu"}</strong>
          </span>
          <i aria-hidden="true">
            <b></b>
          </i>
        </summary>
        <nav
          aria-label="Mobile navigation"
          onClick={(event) => {
            if (event.target instanceof Element && event.target.closest("a")) closeMobileMenu();
          }}
        >
          <div className="mobile-menu-head">
            <img src="/assets/yukti-logo-mark.png" alt="" />
            <span>YEP / NAVIGATION 01</span>
          </div>
          <div className="mobile-nav-links">
            {nav.map(([label, href], index) =>
              label === "Services" ? (
                <details className="mobile-services-dropdown" key={href}>
                  <summary
                    aria-label="Services menu"
                    aria-current={pathname.startsWith("/services") ? "page" : undefined}
                  >
                    <span>0{index + 1}</span>
                    <strong>Services</strong>
                    <b className="mobile-dropdown-arrow">
                      <ChevronDown />
                    </b>
                  </summary>
                  <div>
                    <a href="/services">
                      <span>00</span>
                      <strong>All services</strong>
                      <b>
                        <ArrowUpRight />
                      </b>
                    </a>
                    {services.map((item) => (
                      <a key={item.slug} href={`/services/${item.slug}`}>
                        <span>{item.index}</span>
                        <strong>{item.title}</strong>
                        <b>
                          <ArrowUpRight />
                        </b>
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
                <a key={href} href={href} aria-current={pathname === href ? "page" : undefined}>
                  <span>0{index + 1}</span>
                  <strong>{label}</strong>
                  <b>
                    <ArrowUpRight />
                  </b>
                </a>
              ),
            )}
          </div>
          <div className="mobile-menu-contact">
            <p>Engineering support starts with a clear conversation.</p>
            <a href={contact.emailHref}>
              Start a conversation{" "}
              <span>
                <ArrowUpRight />
              </span>
            </a>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </div>
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src="/assets/yukti-logo-mark.png" alt="YUKTI symbol" width="96" height="96" />
          <p>Engineering every need.</p>
        </div>
        <div>
          <span className="footer-label">Navigate</span>
          {nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div>
          <span className="footer-label">Core disciplines</span>
          {services.slice(0, 3).map((service) => (
            <a key={service.slug} href={`/services/${service.slug}`}>
              {service.title}
            </a>
          ))}
        </div>
        <div>
          <span className="footer-label">Direct contact</span>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={contact.emailHref}>{contact.email}</a>
        </div>
      </div>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} YUKTI Engineering & Projects</span>
        <a
          className="powered-by"
          href="https://webappzz.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Webappzz Technologies{" "}
          <span aria-hidden="true">
            <ArrowUpRight />
          </span>
        </a>
        <span>
          <a href="/privacy-policy">Privacy</a>
          <a href="/terms">Terms</a>
        </span>
      </div>
    </footer>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow${light ? " eyebrow-light" : ""}`}>
      <span></span>
      {children}
    </p>
  );
}

export function PageHero({
  index,
  title,
  intro,
  children,
  image = "/assets/yukti-engineering-hero.webp",
  imageAlt = "YUKTI multidisciplinary engineering infrastructure",
}: {
  index: string;
  title: string;
  intro: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="page-hero page-hero-image-led">
      <img className="page-hero-image" src={image} alt={imageAlt} fetchPriority="high" />
      <div className="page-hero-shade"></div>
      <div className="page-hero-grid">
        <Eyebrow light>{index} / YUKTI</Eyebrow>
        <h1>{title}</h1>
        <p>{intro}</p>
        {children}
      </div>
    </section>
  );
}

export function SectionLead({
  index,
  label,
  title,
  text,
  light = false,
}: {
  index: string;
  label: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-lead${light ? " section-lead-light" : ""}`}>
      <Eyebrow light={light}>
        {index} / {label}
      </Eyebrow>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function ContactBay() {
  return (
    <section className="contact-bay">
      <div>
        <Eyebrow light>Let us solve the right problem</Eyebrow>
        <h2>Bring us the engineering challenge.</h2>
      </div>
      <div className="contact-actions">
        <a className="button button-gold" href={contact.emailHref}>
          Email YUKTI{" "}
          <span>
            <ArrowUpRight />
          </span>
        </a>
        <a className="text-link text-link-light" href={contact.phoneHref}>
          Call {contact.phone}{" "}
          <span>
            <ArrowUpRight />
          </span>
        </a>
      </div>
    </section>
  );
}

export function ServiceDetail({ service }: { service: (typeof services)[number] }) {
  return (
    <main id="main">
      <PageHero
        index={service.index}
        title={service.title}
        intro={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
      >
        <a className="button button-gold" href="/contact">
          Discuss a requirement{" "}
          <span>
            <ArrowUpRight />
          </span>
        </a>
      </PageHero>
      <section className="detail-grid page-section">
        <SectionLead index="A" label="Scope" title="Engineering depth, applied with judgement." />
        <div className="capability-list">
          {service.capabilities.map((item, i) => (
            <div key={item}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="outcomes page-section">
        <SectionLead
          index="B"
          label="Outcomes"
          title="Work that moves decisions forward."
          text="Each engagement is shaped around the problem, the available evidence and the level of intervention genuinely required."
          light
        />
        <div className="outcome-grid">
          {service.outcomes.map((item, i) => (
            <article key={item}>
              <span>0{i + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="other-services page-section">
        <SectionLead
          index="C"
          label="Continue exploring"
          title="More ways YUKTI can support the project."
        />
        <SnapSlider className="related-services" label="Related services">
          {services
            .filter((item) => item.slug !== service.slug)
            .map((item) => (
              <a key={item.slug} href={`/services/${item.slug}`}>
                <span>{item.index}</span>
                <strong>{item.title}</strong>
                <b>
                  <ArrowUpRight />
                </b>
              </a>
            ))}
        </SnapSlider>
      </section>
      <ContactBay />
    </main>
  );
}
