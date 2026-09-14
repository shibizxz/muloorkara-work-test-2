import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { ArrowUpRight, PageHero, pageHead } from "../components/Site";
import { contact } from "../content/site";
export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact",
      "Contact YUKTI Engineering & Projects to discuss an engineering study, design requirement, audit or project support need.",
    ),
  component: Contact,
});
function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const fields = new FormData(event.currentTarget);
  const body = Array.from(fields.entries())
    .map(([label, value]) => `${label}: ${String(value).trim() || "Not provided"}`)
    .join("\n\n");
  window.location.href = `${contact.emailHref}?subject=${encodeURIComponent("Engineering enquiry for YUKTI")}&body=${encodeURIComponent(body)}`;
}
function Contact() {
  return (
    <main id="main">
      <PageHero
        image="/assets/yukti-project-support.webp"
        imageAlt="Engineers coordinating work at an active industrial project"
        index="04"
        title="Start with the engineering need."
        intro="Share the context, the decision you need to make and any available technical information. We will help define a focused way forward."
      />
      <section className="contact-page page-section">
        <div className="contact-direct">
          <span>DIRECT CONTACT</span>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={contact.emailHref}>{contact.email}</a>
          <p>
            For the quickest start, include the asset or system, current issue, required outcome and
            intended timeline.
          </p>
        </div>
        <form className="enquiry-form" onSubmit={prepareEnquiry}>
          <div className="field">
            <label htmlFor="name">
              Name <span aria-hidden="true">*</span>
            </label>
            <input id="name" name="Name" autoComplete="name" placeholder="Your name" required />
          </div>
          <div className="field">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="Company"
              autoComplete="organization"
              placeholder="Company or organisation"
            />
          </div>
          <div className="field">
            <label htmlFor="email">
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="Email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="Phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="Your contact number"
            />
          </div>
          <div className="field field-wide">
            <label htmlFor="service">Service or discipline</label>
            <select id="service" name="Service" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>Electrical Engineering</option>
              <option>Civil & Structural Engineering</option>
              <option>Mechanical Engineering</option>
              <option>Audit & Root Cause Analysis</option>
              <option>Design & Documentation</option>
              <option>Project Support</option>
            </select>
          </div>
          <div className="field field-wide">
            <label htmlFor="message">
              Engineering requirement <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="Requirement"
              rows={6}
              placeholder="Briefly describe the asset, issue, required outcome and timeline"
              required
            ></textarea>
          </div>
          <div className="form-submit">
            <p id="form-note">
              This prepares a complete message in your email app. Your details are not stored by
              this website.
            </p>
            <button className="button button-gold" type="submit" aria-describedby="form-note">
              Prepare enquiry{" "}
              <span>
                <ArrowUpRight />
              </span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
