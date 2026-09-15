import { createFileRoute } from "@tanstack/react-router";
import { ContactBay, PageHero, SectionLead, pageHead } from "../components/Site";
import { sectors } from "../content/site";
export const Route = createFileRoute("/sectors")({
  head: () =>
    pageHead(
      "Sectors",
      "YUKTI supports industrial, energy, process, infrastructure, building, renewable and existing asset engineering needs.",
    ),
  component: Sectors,
});
function Sectors() {
  return (
    <main id="main">
      <PageHero
        image="/assets/yukti-civil-structural-engineering.webp"
        imageAlt="Bridge and structural infrastructure in a demanding coastal setting"
        index="03"
        title="Engineering where performance is consequential."
        intro="YUKTI's engineering approach is transferable across sectors because the underlying objective remains the same: safe, reliable and value-driven infrastructure."
      />
      <figure className="sector-panorama">
        <img
          src="/assets/yukti-energy-infrastructure.webp"
          alt="Integrated renewable energy, electrical, industrial and bridge infrastructure at blue hour"
          fetchPriority="high"
        />
        <figcaption>
          <span>ENERGY / INFRASTRUCTURE / INDUSTRY</span>
          <strong>Systems connected by engineering judgement.</strong>
        </figcaption>
      </figure>
      <section className="sector-detail page-section">
        <SectionLead
          index="A"
          label="Operating contexts"
          title="One discipline or many. One accountable direction."
        />
        <div>
          {sectors.map(([i, t, p]) => (
            <article key={t}>
              <span>{i}</span>
              <h2>{t}</h2>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="multidisciplinary-coordination" className="coordination-feature page-section">
        <SectionLead
          index="B"
          label="Multidisciplinary coordination"
          title="Studies, drawings, site conditions and execution - connected."
          text="YUKTI brings engineering analysis, design review, troubleshooting, audits and project execution support into one coordinated approach."
          light
        />
        <div>
          <span>Electrical systems</span>
          <span>Civil & structural systems</span>
          <span>Mechanical & plant systems</span>
        </div>
      </section>
      <section className="engagement page-section">
        <SectionLead
          index="C"
          label="How we engage"
          title="Support proportionate to the problem."
          light
        />
        <div>
          <p>Independent study or review</p>
          <p>Targeted troubleshooting</p>
          <p>Concept and detailed design</p>
          <p>Brownfield modification</p>
          <p>Project and execution support</p>
          <p>Ongoing technical advisory</p>
        </div>
      </section>
      <ContactBay />
    </main>
  );
}
