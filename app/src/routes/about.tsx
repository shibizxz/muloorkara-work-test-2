import { createFileRoute } from "@tanstack/react-router";
import { ContactBay, PageHero, SectionLead, pageHead } from "../components/Site";
import { values } from "../content/site";

const companyCapabilities = [
  "Electrical engineering solutions across industrial, infrastructure and commercial environments.",
  "Root-cause analysis, fault investigation and technical problem solving.",
  "Engineering studies, design review, drawing correction and detailed documentation.",
  "Project support focused on safety, reliability, maintainability and lifecycle value.",
];

const commitments = [
  "Client-first technical decisions based on actual site and system conditions.",
  "Avoiding unnecessary replacement, over-design and avoidable capital expenditure.",
  "Clear recommendations that explain what should be done - and why.",
  "Long-term value through reliability, energy awareness and maintainability.",
];

const deliveryPrinciples = [
  "Technically defensible solutions with clarity and accountability.",
  "Engineering studies and data to support decisions rather than assumptions.",
  "Support from assessment and design through implementation and verification.",
  "Sustainable improvements without unnecessary financial burden.",
  "Continuous improvement in engineering methods, tools and project delivery.",
];

const sustainabilityPrinciples = [
  "Energy-conscious engineering and system optimization.",
  "Reduction of avoidable losses, unnecessary replacement and premature upgrades.",
  "Lifecycle thinking across operation, maintenance, reliability and future expansion.",
  "Reuse, retrofit and optimization where technically sound and safe.",
];
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About",
      "Meet YUKTI Engineering & Projects, an engineering-led consulting and project support partner focused on practical, responsible solutions.",
    ),
  component: About,
});
function About() {
  return (
    <main id="main">
      <PageHero
        image="/assets/yukti-engineering-hero.webp"
        imageAlt="Integrated electrical, structural and mechanical engineering infrastructure"
        index="01"
        title="Engineering judgement that respects the real world."
        intro="YUKTI Engineering & Projects is an engineering-led consulting and project support partner focused on practical, technically sound and value-conscious solutions."
      />
      <section className="about-intro page-section">
        <div>
          <SectionLead
            index="A"
            label="Our commitment"
            title="Solve what matters. Intervene where it counts."
          />
        </div>
        <div className="prose">
          <p>
            YUKTI brings engineering analysis, design review, troubleshooting, audits and project
            execution support into one coordinated approach.
          </p>
          <p>
            Every recommendation is considered against safety, reliability, performance, future
            readiness and investment. We work to avoid unnecessary replacement, overdesign and
            capital expenditure that does not address the underlying need.
          </p>
        </div>
      </section>
      <section id="capabilities" className="company-capabilities page-section">
        <SectionLead
          index="B"
          label="Our capabilities"
          title="One coordinated approach to the full technical need."
        />
        <div className="capability-statement-grid">
          {companyCapabilities.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="commitment" className="commitment-section page-section">
        <SectionLead
          index="C"
          label="Our commitment"
          title="Right-sized engineering. Measurable value."
          text="Engineering should solve the real problem, not create unnecessary cost. We understand the existing system, identify the actual need and recommend proportionate interventions that improve safety, reliability, performance and future readiness."
          light
        />
        <div className="commitment-grid">
          {commitments.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="vision-grid page-section">
        <article>
          <span>VISION</span>
          <h2>To become a trusted engineering and projects partner.</h2>
          <p>Known for technical depth, practical judgement and responsible engineering.</p>
        </article>
        <article>
          <span>MISSION</span>
          <h2>To convert complex problems into clear, implementable solutions.</h2>
          <p>Solutions that protect people, assets, uptime and investment.</p>
        </article>
      </section>
      <section id="how-we-deliver" className="delivery-section page-section">
        <SectionLead
          index="D"
          label="How we deliver"
          title="Evidence, accountability and continuity through implementation."
        />
        <div className="delivery-grid">
          {deliveryPrinciples.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="responsible-engineering" className="responsibility-section page-section">
        <div>
          <SectionLead
            index="E"
            label="Sustainable engineering"
            title="Improve lifecycle performance responsibly."
            text="Sustainability at YUKTI is practical: improve efficiency, reliability and lifecycle performance while respecting the client's investment priorities."
            light
          />
          <div className="responsibility-list">
            {sustainabilityPrinciples.map((item, index) => (
              <p key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </p>
            ))}
          </div>
        </div>
        <aside>
          <span>QUALITY / SAFETY / RELIABILITY</span>
          <h2>Engineering requirements, not optional additions.</h2>
          <p>
            Every recommendation considers compliance, operational risk, maintainability and the
            consequences of failure.
          </p>
        </aside>
      </section>
      <section id="values" className="values-section page-section">
        <SectionLead index="F" label="Our values" title="The standards behind every decision." />
        <div className="values-grid">
          {values.map(([t, p], i) => (
            <article key={t}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="philosophy">
        <p>UNDERSTAND THE PROBLEM.</p>
        <p>ENGINEER THE SOLUTION.</p>
        <p>DELIVER THE VALUE.</p>
      </section>
      <ContactBay />
    </main>
  );
}
