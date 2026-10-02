import { useState, type FormEvent } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, CalendarDays, Check, MapPin, Menu, Sparkles, X } from "lucide-react";
import "./atlas.css";

const projects = [
  { no: "01", title: "KDP Trend Scout", kind: "Vibecoded", desc: "A trend and analysis tool for Amazon's Kindle Direct Publishing platform." },
  { no: "02", title: "WriterRon", kind: "Vibecoded", desc: "An AI writing tool web prototype that turns prompts into polished prose." },
  { no: "03", title: "Work or Wonder", kind: "Creative work", desc: "A game of wonder — an interactive creative experience blending art and play." },
];

const serviceRows = [
  {
    no: "01",
    title: "Vibe Coding Prototypes",
    icon: "✳",
    desc: "This is what we love most. You bring the idea — a rough sketch, a voice note, a napkin — and we turn it into a working, polished product in days. Not a mockup. Not a wireframe. A real thing you can ship or show investors.",
    points: ["Rapid MVP & prototype builds", "AI-assisted UI generation", "Full-stack vibe-coded apps", "Iterative delivery in real time"],
  },
  {
    no: "02",
    title: "AI & Creative Workflows",
    icon: "⌁",
    desc: "The same vibe coding instinct we bring to products, we bring to your process. We map where AI can accelerate your team's creative output and build the systems that make it stick — without killing the soul of the work.",
    points: ["AI workflow design & integration", "Creative system automation", "Generative content pipelines", "Tool-stack audits & optimization"],
  },
  {
    no: "03",
    title: "Business Development Coaching",
    icon: "↗",
    desc: "For founders who've felt the rush of vibe coding but need help turning that momentum into a business. We bridge the gap between a brilliant prototype and a fundable, scalable company — connecting your technical edge to real market outcomes.",
    points: ["Founder-led growth systems", "Technical roadmap advisory", "Technology commercialization", "Deep tech coaching"],
  },
];

const events = [
  { date: "SEP 17", year: "2026", name: "Wakeup Startup — Central Ohio Startup Pitch Event", type: "In-person", note: "Central Ohio's premier founder pitch event. Come watch bold ideas compete for real attention." },
  { date: "OCT 15", year: "2026", name: "Wakeup Startup — Central Ohio Startup Pitch Event", type: "In-person", note: "Central Ohio's premier founder pitch event. Come watch bold ideas compete for real attention." },
  { date: "TBA", year: "SOON", name: "VIBE Session Training 001", type: "Coming soon", note: "Our inaugural hands-on vibe coding training session. Details dropping soon — stay close." },
];

export function Atlas() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!String(data.get("name") || "").trim() || !String(data.get("email") || "").trim() || !String(data.get("message") || "").trim()) {
      setError("Please add your name, email and a short note.");
      return;
    }
    setError("");
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <main className="atlas">
      <header className="atlas-nav">
        <a className="atlas-mark" href="#top" aria-label="moaiohio home"><span className="atlas-mark-shape">m</span><span>moaiohio<span className="atlas-period">.</span></span></a>
        <span className="atlas-nav-note">Creative studio / Central Ohio</span>
        <button className="atlas-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
          {menuOpen ? <X size={19} /> : <Menu size={19} />} <span>Menu</span>
        </button>
        <nav className={`atlas-nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>What we do</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#events" onClick={() => setMenuOpen(false)}>Gatherings</a>
          <a className="atlas-nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Start a project <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section className="atlas-hero" id="top">
        <div className="atlas-hero-rail"><span>01 / The studio</span><span className="atlas-rail-line" /><span>40° N — 83° W</span></div>
        <div className="atlas-hero-copy">
          <p className="atlas-kicker"><i /> Future Forward Web Studio</p>
          <h1>Craft meets<br /><em>code.</em></h1>
          <div className="atlas-hero-bottom">
            <p>Creativity is the product. We build AI-powered prototypes at the speed of thought — for founders who ship.</p>
            <div className="atlas-hero-actions">
              <a className="atlas-pill atlas-pill-dark" href="#contact">Start a project <ArrowUpRight size={17} /></a>
              <a className="atlas-text-link" href="#work">See what we make <ArrowDownRight size={15} /></a>
            </div>
          </div>
        </div>
        <div className="atlas-hero-art" aria-label="Abstract sculptural artwork">
          <div className="atlas-sun" />
          <div className="atlas-orbit orbit-one" /><div className="atlas-orbit orbit-two" />
          <div className="atlas-stone stone-back" /><div className="atlas-stone stone-front" />
          <div className="atlas-art-caption"><span>Human intent<br />× machine speed</span><Sparkles size={17} /></div>
          <div className="atlas-art-index">STUDIO NOTES<br />VOL. 01 — 2026</div>
        </div>
        <div className="atlas-scroll-note"><span>Scroll to explore</span><span className="atlas-scroll-stick" /></div>
      </section>

      <div className="atlas-manifesto">
        <span className="atlas-section-index">A better way to build / 01</span>
        <p>Vibe coding isn't a shortcut — it's a <em>superpower.</em> Real products, built absurdly fast, that don't feel rushed.</p>
        <a href="#services" aria-label="Explore what we do"><ArrowDownRight size={22} /></a>
      </div>

      <section className="atlas-services" id="services">
        <div className="atlas-section-heading">
          <div><span className="atlas-kicker"><i /> How we help</span><h2>Make the<br /><em>next thing.</em></h2></div>
          <p>We obsess over the creative chemistry between human intent and AI execution. Here's where we put that energy to work.</p>
        </div>
        <div className="atlas-service-list">
          {serviceRows.map((service) => (
            <article className="atlas-service-row" key={service.no}>
              <span className="atlas-service-no">{service.no}</span>
              <span className="atlas-service-symbol">{service.icon}</span>
              <div className="atlas-service-main"><h3>{service.title}</h3><p>{service.desc}</p></div>
              <ul>{service.points.map((point) => <li key={point}><span>↳</span>{point}</li>)}</ul>
              <a href="#contact" className="atlas-service-arrow" aria-label={`Ask about ${service.title}`}><ArrowUpRight size={18} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="atlas-work" id="work">
        <div className="atlas-work-head"><div><span className="atlas-kicker"><i /> Made in the flow</span><h2>Selected<br /><em>work.</em></h2></div><p>Artifacts of our<br />obsession with craft.</p></div>
        <div className="atlas-project-feature">
          <div className="atlas-project-image">
            <img src="/__mockup/images/moaiohio-atlas-projects.png" alt="A montage of product interfaces and creative experiments" />
            <span className="atlas-image-label">A few things we've put into the world <ArrowUpRight size={15} /></span>
          </div>
          <div className="atlas-project-index">
            {projects.map((project) => <article key={project.no} className="atlas-project-row">
              <span className="atlas-project-no">{project.no}</span>
              <div><span className="atlas-project-kind">{project.kind}</span><h3>{project.title}</h3><p>{project.desc}</p></div>
              <ArrowUpRight size={17} className="atlas-project-arrow" />
            </article>)}
            <a href="#contact" className="atlas-archive-link">Ask about our work <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="atlas-events" id="events">
        <div className="atlas-event-aside"><span className="atlas-kicker"><i /> Get together</span><h2>Good ideas<br />travel <em>further.</em></h2><p>Workshops and sessions for the builder community. See you out there.</p><span className="atlas-event-stamp">COLUMBUS<br />OHIO · USA</span></div>
        <div className="atlas-event-list">{events.map((event, index) => <article className="atlas-event-row" key={event.date + index}>
          <div className="atlas-event-date"><strong>{event.date}</strong><span>{event.year}</span></div>
          <div className="atlas-event-details"><h3>{event.name}</h3><p>{event.note}</p></div>
          <span className="atlas-event-type"><MapPin size={13} />{event.type}</span>
          <CalendarDays className="atlas-event-icon" size={17} />
        </article>)}</div>
      </section>

      <section className="atlas-about" id="about">
        <div className="atlas-about-label"><span className="atlas-kicker"><i /> About moaiohio</span><span className="atlas-about-coordinates">40° 06' N<br />83° 01' W</span></div>
        <div className="atlas-about-copy"><h2>Software should<br />feel <em>alive.</em></h2><p>We are a creative studio operating at the electric intersection of design, code, and AI. Founded on the belief that software should feel alive, we partner with visionary teams to build digital products that refuse to be ignored. We don't do templates. We don't do average. We build systems that perform and interfaces that captivate.</p><a href="#contact" className="atlas-text-link">A little more about us <ArrowUpRight size={15} /></a></div>
        <div className="atlas-about-mark">m.</div>
      </section>

      <section className="atlas-contact" id="contact">
        <div className="atlas-contact-intro"><span className="atlas-kicker"><i /> The beginning of something</span><h2>Ready to<br />move <em>fast?</em></h2><p>Whether you need a new brand platform, a technical rebuild, or strategic coaching—we're ready.</p><div className="atlas-contact-note"><span className="atlas-contact-dot" /> Currently taking on a small number of new projects</div></div>
        <div className="atlas-contact-form-wrap">
          {sent ? <div className="atlas-sent"><span><Check size={20} /></span><h3>Message received.</h3><p>We'll be in touch soon.</p><button onClick={() => setSent(false)}>Send another note <ArrowRight size={15} /></button></div> : <form className="atlas-form" onSubmit={handleSubmit}>
            <label>Your name<input name="name" placeholder="What should we call you?" /></label>
            <label>Email address<input name="email" type="email" placeholder="you@yourstudio.com" /></label>
            <label>What are you thinking?<select name="projectType" defaultValue=""><option value="">Choose a starting point</option><option>Vibe coding prototype</option><option>AI workflow integration</option><option>Rapid MVP build</option><option>Business development coaching</option><option>Something else</option></select></label>
            <label>A little about your idea<textarea name="message" rows={3} placeholder="The napkin sketch, the big question, the thing you can't stop thinking about..." /></label>
            {error && <p className="atlas-form-error">{error}</p>}
            <button className="atlas-submit" type="submit">Send the first note <ArrowUpRight size={18} /></button>
            <span className="atlas-form-small">No pitch deck required. Just tell us what's on your mind.</span>
          </form>}
        </div>
      </section>
      <footer className="atlas-footer"><a className="atlas-mark" href="#top"><span className="atlas-mark-shape">m</span><span>moaiohio<span className="atlas-period">.</span></span></a><span>Creative studio, Central Ohio</span><a href="#top">Back to top ↑</a><span>© 2026 moaiohio</span></footer>
    </main>
  );
}