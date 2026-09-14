import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, ContactBay, Eyebrow, SectionLead } from '../components/Site'
import { sectors, services } from '../content/site'
export const Route = createFileRoute('/')({ component: Home })
function Home() { return <main id="main">
  <section className="home-hero">
    <img className="home-hero-image" src="/assets/yukti-engineering-hero.webp" alt="Integrated electrical, structural and mechanical engineering infrastructure at blue hour" fetchPriority="high" />
    <div className="hero-shade"></div>
    <div className="hero-gridlines" aria-hidden="true"></div>
    <div className="hero-content">
      <Eyebrow light>Consulting / Design / Solutions</Eyebrow>
      <h1>Engineering clarity.<br/><em>Project confidence.</em></h1>
      <p>Practical, technically sound engineering support across electrical, civil, structural and mechanical disciplines.</p>
      <div className="hero-actions"><a className="button button-gold" href="/services">Explore expertise <span><ArrowUpRight /></span></a><a className="text-link text-link-light" href="/contact">Discuss a project <span><ArrowUpRight /></span></a></div>
    </div>
    <div className="hero-coordinate"><span>YEP / 01</span><span>ENGINEERING EVERY NEED</span></div>
  </section>

  <section className="manifesto page-section">
    <Eyebrow>Our position</Eyebrow>
    <p className="manifesto-statement">We turn complex engineering problems into <strong>implementable solutions</strong> that protect people, assets, uptime and investment.</p>
    <aside><span>01</span><p>Understand the real problem before defining the intervention.</p><span>02</span><p>Engineer in proportion to risk, need and operating context.</p><span>03</span><p>Carry technical intent through documentation and execution.</p></aside>
  </section>

  <section className="services-section page-section">
    <SectionLead index="01" label="Core disciplines" title="Multidisciplinary thinking. One practical direction." text="Deep discipline capability, coordinated around the outcome your project actually needs." />
    <div className="discipline-list">{services.slice(0,3).map((service) => <a key={service.slug} href={`/services/${service.slug}`} className="discipline-row"><span>{service.index}</span><h3>{service.title}</h3><p>{service.short}</p><b><ArrowUpRight /></b></a>)}</div>
    <div className="specialist-rail">{services.slice(3).map((service) => <a key={service.slug} href={`/services/${service.slug}`}><span>{service.index}</span>{service.title}<b><ArrowUpRight /></b></a>)}</div>
  </section>

  <section className="method-section">
    <div className="page-section"><SectionLead index="02" label="Method" title="A direct line from uncertainty to value." light />
      <div className="method-line">{[['01','Understand','Evidence, context and root cause.'],['02','Engineer','Analysis, options and proportionate design.'],['03','Deliver','Clear documentation and execution support.']].map(([i,t,p]) => <article key={t}><span>{i}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
      <p className="method-mantra">UNDERSTAND THE PROBLEM. <strong>ENGINEER THE SOLUTION.</strong> DELIVER THE VALUE.</p>
    </div>
  </section>

  <section className="image-story page-section">
    <SectionLead index="03" label="In practice" title="Systems do not work in silos. Neither do we." text="Our approach connects analysis, equipment, structures, documentation and site reality across discipline boundaries." />
    <div className="image-composition">
      <figure className="image-a"><img src="/assets/yukti-electrical-engineering.webp" alt="Industrial electrical substation" loading="lazy"/><figcaption>Electrical / Power systems</figcaption></figure>
      <figure className="image-b"><img src="/assets/yukti-civil-structural-engineering.webp" alt="Bridge and complex structural systems" loading="lazy"/><figcaption>Civil / Structural systems</figcaption></figure>
      <figure className="image-c"><img src="/assets/yukti-mechanical-engineering.webp" alt="Conveyor and industrial process equipment" loading="lazy"/><figcaption>Mechanical / Plant systems</figcaption></figure>
    </div>
  </section>

  <section className="sectors-section page-section">
    <SectionLead index="04" label="Sectors" title="Engineering judgement for demanding operating contexts." />
    <div className="sector-matrix">{sectors.map(([i,t,p]) => <a key={t} href="/sectors"><span>{i}</span><h3>{t}</h3><p>{p}</p></a>)}</div>
  </section>

  <section className="sector-feature">
    <img src="/assets/yukti-energy-infrastructure.webp" alt="Integrated substation, renewable energy, process plant and bridge infrastructure" loading="lazy" />
    <div><Eyebrow light>Connected infrastructure</Eyebrow><h2>One engineering view across the whole asset.</h2><a className="text-link text-link-light" href="/sectors">Explore sectors <span><ArrowUpRight /></span></a></div>
  </section>

  <section className="why-section"><div className="page-section"><SectionLead index="05" label="Why YUKTI" title="Technical depth without unnecessary complexity." light />
    <div className="why-grid">{['Engineering-first decisions','Root cause before remedy','Practical, right-sized interventions','Study-to-site continuity','Cost-conscious recommendations','Clear communication and documentation'].map((item,i)=><div key={item}><span>0{i+1}</span><p>{item}</p></div>)}</div>
  </div></section>
  <ContactBay />
</main> }
