import { useEffect, type ReactNode } from 'react'
import { contact, nav, services } from '../content/site'

export function ArrowUpRight({ className = '' }: { className?: string }) {
  return <svg className={`arrow-icon arrow-up-right ${className}`.trim()} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path d="M5.5 14.5 14.5 5.5M7 5.5h7.5V13" />
  </svg>
}

export function ChevronDown({ className = '' }: { className?: string }) {
  return <svg className={`arrow-icon chevron-down ${className}`.trim()} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path d="m5.25 7.5 4.75 4.75 4.75-4.75" />
  </svg>
}

export const pageHead = (title: string, description: string) => ({
  meta: [
    { title: `${title} | YUKTI Engineering & Projects` },
    { name: 'description', content: description },
    { property: 'og:title', content: `${title} | YUKTI Engineering & Projects` },
    { property: 'og:description', content: description },
  ],
})

export function SiteHeader() {
  useEffect(() => {
    const menu = document.querySelector<HTMLDetailsElement>('.desktop-nav .services-dropdown')
    const closeOutside = (event: PointerEvent) => {
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) menu.open = false
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menu?.open) {
        menu.open = false
        menu.querySelector<HTMLElement>('summary')?.focus()
      }
    }
    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  return <header className="site-header">
    <a className="brand" href="/" aria-label="YUKTI Engineering and Projects home">
      <img src="/assets/yukti-logo-mark.png" alt="" width="54" height="54" />
      <span><strong>YUKTI</strong><small>ENGINEERING & PROJECTS</small></span>
    </a>
    <nav className="desktop-nav" aria-label="Primary navigation">
      <a href="/about">About</a>
      <details className="services-dropdown">
        <summary className="services-trigger">Services <span className="dropdown-arrow" aria-hidden="true"><ChevronDown /></span></summary>
        <div className="services-mega">
          <div className="services-mega-intro"><small>01 / EXPERTISE</small><strong>Engineering depth across every project layer.</strong><a href="/services">View all services <span><ArrowUpRight /></span></a></div>
          <div className="services-mega-links">{services.map((item) => <a key={item.slug} href={`/services/${item.slug}`}><span>{item.index}</span><strong>{item.title}</strong><b><ArrowUpRight /></b></a>)}</div>
        </div>
      </details>
      <a href="/sectors">Sectors</a>
      <a href="/contact">Contact</a>
      <a className="nav-cta" href={contact.emailHref}>Start a conversation <span><ArrowUpRight /></span></a>
    </nav>
    <details className="mobile-menu">
      <summary aria-label="Open navigation"><span className="menu-label"><small>Explore</small><strong>Menu</strong></span><i aria-hidden="true"><b></b></i></summary>
      <nav aria-label="Mobile navigation">
        <div className="mobile-menu-head"><img src="/assets/yukti-logo-mark.png" alt="" /><span>YEP / NAVIGATION 01</span></div>
        <div className="mobile-nav-links">{nav.map(([label, href], index) => label === 'Services' ? <details className="mobile-services-dropdown" key={href}><summary><span>0{index + 1}</span><strong>Services</strong><b className="mobile-dropdown-arrow"><ChevronDown /></b></summary><div><a href="/services"><span>00</span><strong>All services</strong><b><ArrowUpRight /></b></a>{services.map((item) => <a key={item.slug} href={`/services/${item.slug}`}><span>{item.index}</span><strong>{item.title}</strong><b><ArrowUpRight /></b></a>)}</div></details> : <a key={href} href={href}><span>0{index + 1}</span><strong>{label}</strong><b><ArrowUpRight /></b></a>)}</div>
        <div className="mobile-menu-contact"><p>Engineering support starts with a clear conversation.</p><a href={contact.emailHref}>Start a conversation <span><ArrowUpRight /></span></a><a href={contact.phoneHref}>{contact.phone}</a></div>
      </nav>
    </details>
  </header>
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-brand">
        <img src="/assets/yukti-logo-mark.png" alt="YUKTI symbol" width="96" height="96" />
        <p>Engineering every need.</p>
      </div>
      <div><span className="footer-label">Navigate</span>{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
      <div><span className="footer-label">Core disciplines</span>{services.slice(0,3).map((service) => <a key={service.slug} href={`/services/${service.slug}`}>{service.title}</a>)}</div>
      <div><span className="footer-label">Direct contact</span><a href={contact.phoneHref}>{contact.phone}</a><a href={contact.emailHref}>{contact.email}</a></div>
    </div>
    <div className="footer-base"><span>© {new Date().getFullYear()} YUKTI Engineering & Projects</span><a className="powered-by" href="https://webappzz.com/" target="_blank" rel="noopener noreferrer">Powered by Webappzz Technologies <span aria-hidden="true"><ArrowUpRight /></span></a><span><a href="/privacy-policy">Privacy</a><a href="/terms">Terms</a></span></div>
  </footer>
}

export function Eyebrow({ children, light = false }: { children: ReactNode, light?: boolean }) {
  return <p className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span></span>{children}</p>
}

export function PageHero({ index, title, intro, children, image = '/assets/yukti-engineering-hero.webp', imageAlt = 'YUKTI multidisciplinary engineering infrastructure' }: { index: string, title: string, intro: string, children?: ReactNode, image?: string, imageAlt?: string }) {
  return <section className="page-hero page-hero-image-led">
    <img className="page-hero-image" src={image} alt={imageAlt} fetchPriority="high" />
    <div className="page-hero-shade"></div>
    <div className="page-hero-grid">
      <Eyebrow light>{index} / YUKTI</Eyebrow>
      <h1>{title}</h1>
      <p>{intro}</p>
      {children}
    </div>
    <div className="technical-mark" aria-hidden="true"><span></span><span></span><b>Y</b></div>
  </section>
}

export function SectionLead({ index, label, title, text, light = false }: { index: string, label: string, title: string, text?: string, light?: boolean }) {
  return <div className={`section-lead${light ? ' section-lead-light' : ''}`}>
    <Eyebrow light={light}>{index} / {label}</Eyebrow>
    <h2>{title}</h2>{text && <p>{text}</p>}
  </div>
}

export function ContactBay() {
  return <section className="contact-bay">
    <div><Eyebrow light>Let us solve the right problem</Eyebrow><h2>Bring us the engineering challenge.</h2></div>
    <div className="contact-actions"><a className="button button-gold" href={contact.emailHref}>Email YUKTI <span><ArrowUpRight /></span></a><a className="text-link text-link-light" href={contact.phoneHref}>Call {contact.phone} <span><ArrowUpRight /></span></a></div>
  </section>
}

export function ServiceDetail({ service }: { service: (typeof services)[number] }) {
  return <main>
    <PageHero index={service.index} title={service.title} intro={service.intro} image={service.image} imageAlt={service.imageAlt}>
      <a className="button button-gold" href="/contact">Discuss a requirement <span><ArrowUpRight /></span></a>
    </PageHero>
    {service.image && <figure className="detail-image"><img src={service.image} alt={service.imageAlt} /></figure>}
    <section className="detail-grid page-section">
      <SectionLead index="A" label="Scope" title="Engineering depth, applied with judgement." />
      <div className="capability-list">{service.capabilities.map((item, i) => <div key={item}><span>{String(i+1).padStart(2,'0')}</span><p>{item}</p></div>)}</div>
    </section>
    <section className="outcomes page-section">
      <SectionLead index="B" label="Outcomes" title="Work that moves decisions forward." text="Each engagement is shaped around the problem, the available evidence and the level of intervention genuinely required." light />
      <div className="outcome-grid">{service.outcomes.map((item, i) => <article key={item}><span>0{i+1}</span><p>{item}</p></article>)}</div>
    </section>
    <section className="other-services page-section">
      <SectionLead index="C" label="Continue exploring" title="More ways YUKTI can support the project." />
      <div className="related-services">{services.filter((item) => item.slug !== service.slug).map((item) => <a key={item.slug} href={`/services/${item.slug}`}><span>{item.index}</span><strong>{item.title}</strong><b><ArrowUpRight /></b></a>)}</div>
    </section>
    <ContactBay />
  </main>
}
