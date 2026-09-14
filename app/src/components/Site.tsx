import type { ReactNode } from 'react'
import { contact, nav, services } from '../content/site'

export const pageHead = (title: string, description: string) => ({
  meta: [
    { title: `${title} | YUKTI Engineering & Projects` },
    { name: 'description', content: description },
    { property: 'og:title', content: `${title} | YUKTI Engineering & Projects` },
    { property: 'og:description', content: description },
  ],
})

export function SiteHeader() {
  return <header className="site-header">
    <a className="brand" href="/" aria-label="YUKTI Engineering and Projects home">
      <img src="/assets/yukti-logo-mark.png" alt="" width="54" height="54" />
      <span><strong>YUKTI</strong><small>ENGINEERING & PROJECTS</small></span>
    </a>
    <nav className="desktop-nav" aria-label="Primary navigation">
      {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      <a className="nav-cta" href={contact.emailHref}>Start a conversation <span>↗</span></a>
    </nav>
    <details className="mobile-menu">
      <summary aria-label="Open navigation"><span>Menu</span><i></i></summary>
      <nav aria-label="Mobile navigation">
        {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        <a href={contact.phoneHref}>{contact.phone}</a>
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
    <div className="footer-base"><span>© {new Date().getFullYear()} YUKTI Engineering & Projects</span><span><a href="/privacy-policy">Privacy</a><a href="/terms">Terms</a></span></div>
  </footer>
}

export function Eyebrow({ children, light = false }: { children: ReactNode, light?: boolean }) {
  return <p className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span></span>{children}</p>
}

export function PageHero({ index, title, intro, children }: { index: string, title: string, intro: string, children?: ReactNode }) {
  return <section className="page-hero">
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
    <div className="contact-actions"><a className="button button-gold" href={contact.emailHref}>Email YUKTI <span>↗</span></a><a className="text-link text-link-light" href={contact.phoneHref}>Call {contact.phone} <span>↗</span></a></div>
  </section>
}

export function ServiceDetail({ service }: { service: (typeof services)[number] }) {
  return <main>
    <PageHero index={service.index} title={service.title} intro={service.intro}>
      <a className="button button-gold" href="/contact">Discuss a requirement <span>↗</span></a>
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
    <ContactBay />
  </main>
}
