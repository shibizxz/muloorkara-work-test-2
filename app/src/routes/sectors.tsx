import { createFileRoute } from '@tanstack/react-router'
import { ContactBay, PageHero, SectionLead, pageHead } from '../components/Site'
import { sectors } from '../content/site'
export const Route = createFileRoute('/sectors')({ head: () => pageHead('Sectors', 'YUKTI supports industrial, energy, process, infrastructure, building, renewable and existing asset engineering needs.'), component: Sectors })
function Sectors(){ return <main id="main"><PageHero index="03" title="Engineering where performance is consequential." intro="We support new and existing assets across sectors where safety, reliability, constructability and operational continuity demand clear technical decisions." />
<section className="sector-detail page-section"><SectionLead index="A" label="Operating contexts" title="One discipline or many. One accountable direction." /><div>{sectors.map(([i,t,p])=><article key={t}><span>{i}</span><h2>{t}</h2><p>{p}</p></article>)}</div></section>
<section className="engagement page-section"><SectionLead index="B" label="How we engage" title="Support proportionate to the problem." light/><div><p>Independent study or review</p><p>Targeted troubleshooting</p><p>Concept and detailed design</p><p>Brownfield modification</p><p>Project and execution support</p><p>Ongoing technical advisory</p></div></section><ContactBay /></main> }
