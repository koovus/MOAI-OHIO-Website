import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, Menu, X, Shapes, WandSparkles } from "lucide-react";
import "./_group.css";
import "./_sculpture.css";

const services = [
  {
    title: "Vibe Coding Prototypes",
    body: "This is what we love most. You bring the idea — a rough sketch, a voice note, a napkin — and we turn it into a working, polished product in days. Not a mockup. Not a wireframe. A real thing you can ship or show investors.",
    points: ["Rapid MVP & prototype builds", "AI-assisted UI generation", "Full-stack vibe-coded apps", "Iterative delivery in real time"],
  },
  {
    title: "AI & Creative Workflows",
    body: "The same vibe coding instinct we bring to products, we bring to your process. We map where AI can accelerate your team's creative output and build the systems that make it stick — without killing the soul of the work.",
    points: ["AI workflow design & integration", "Creative system automation", "Generative content pipelines", "Tool-stack audits & optimization"],
  },
  {
    title: "Business Development Coaching",
    body: "For founders who've felt the rush of vibe coding but need help turning that momentum into a business. We bridge the gap between a brilliant prototype and a fundable, scalable company — connecting your technical edge to real market outcomes.",
    points: ["Founder-led growth systems", "Technical roadmap advisory", "Technology commercialization", "Deep tech coaching"],
  },
];
const projects = [
  { title: "KDP Trend Scout", category: "Vibecoded", description: "A trend and analysis tool for Amazon's Kindle Direct Publishing Platform", image: "/__mockup/images/portfolio-prospect-os.png", alt: "KDP Trend Scout interface" },
  { title: "WriterRon", category: "Vibecoded", description: "An AI writing tool web prototype that turns prompts into polished prose.", image: "/__mockup/images/portfolio-writerron.png", alt: "WriterRon writing tool" },
  { title: "Work or Wonder", category: "Creative Work", description: "A game of wonder — an interactive creative experience blending art and play.", image: "/__mockup/images/portfolio-work-wonder.png", alt: "Work or Wonder creative experience" },
];
const events = [
  { title: "Wakeup Startup — Central Ohio Startup Pitch Event", description: "Central Ohio's premier founder pitch event. Come watch bold ideas compete for real attention.", date: "Sep 17, 2026", format: "In-person" },
  { title: "Wakeup Startup — Central Ohio Startup Pitch Event", description: "Central Ohio's premier founder pitch event. Come watch bold ideas compete for real attention.", date: "Oct 15, 2026", format: "In-person" },
  { title: "VIBE Session Training 001", description: "Our inaugural hands-on vibe coding training session. Details dropping soon — stay close.", date: "Date TBA", format: "Coming Soon" },
];
const projectTypes = ["Vibe coding prototype", "AI workflow integration", "Rapid MVP build", "Business development coaching", "Other"];

export function Sculpture() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");
  function submitPreview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Preview only — this form does not send or store your message.");
  }
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="sc-page" id="top">
      <header className="sc-nav">
        <a className="sc-logo" href="#top" aria-label="moaiohio home">moai<span>ohio</span></a>
        <nav className="sc-navlinks" aria-label="Main navigation">
          <a href="#services">Studio</a><a href="#portfolio">Selected work</a><a href="#about">About</a>
          <a className="sc-nav-cta" href="#contact">Let's talk <ArrowRight size={14} /></a>
        </nav>
        <button className="sc-menu-button" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {menuOpen && <nav className="sc-mobile-nav" aria-label="Mobile navigation">
          <a href="#services" onClick={closeMenu}>Studio</a><a href="#portfolio" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Let's talk</a>
        </nav>}
      </header>

      <main>
        <section className="sc-hero">
          <div className="sc-wrap sc-hero-grid">
            <div className="sc-hero-copy">
              <span className="sc-eyebrow">Future-forward web studio · Ohio</span>
              <h1>Craft meets<br />code.<br /><em>Creativity is</em><br />the product.</h1>
              <p>We build AI-powered prototypes at the speed of thought. Vibe coding, creative workflows, and strategic coaching for founders who ship.</p>
              <div className="sc-hero-actions">
                <a className="sc-button" href="#contact">Start a project <ArrowRight size={15} /></a>
                <a className="sc-button sc-button-quiet" href="#portfolio">Explore the work <ArrowDown size={15} /></a>
              </div>
              <div className="sc-hero-note"><span className="sc-note-seal">OH</span><span>Built for curious founders<br />with somewhere to go.</span></div>
            </div>
            <div className="sc-hero-art" aria-label="Sculptural Moai-inspired stone object in a sunlit atelier">
              <div className="sc-hero-photo"><img src="/__mockup/images/sculpture-hero.png" alt="Original contemporary stone head sculpture in a sunlit, foliage-filled atelier" /></div>
              <div className="sc-art-stamp">Make<br />something<br />real</div>
              <div className="sc-art-caption"><strong>Made with intent</strong><span /> Studio notes, Ohio / 2026</div>
            </div>
          </div>
        </section>

        <div className="sc-marquee" aria-label="Studio specialties">
          <div className="sc-marquee-inner"><span>Vibe coding</span><b>·</b><span>AI workflows</span><b>·</b><span>Deep tech</span><b>·</b><span>Technology commercialization</span><b>·</b><span>Vibe coding</span></div>
        </div>

        <section className="sc-section sc-services" id="services">
          <div className="sc-wrap">
            <div className="sc-section-heading">
              <div><span className="sc-kicker">The studio / 01</span><h2>We Live to<br />Vibe Code</h2></div>
              <p>Vibe coding isn't a shortcut — it's a superpower. We obsess over the creative chemistry between human intent and AI execution. The result: real products, built absurdly fast, that don't feel rushed.</p>
            </div>
            <div className="sc-service-layout">
              <aside className="sc-service-aside"><span className="sc-kicker">Good work, in good company</span><strong>Bring the rough sketch. Leave with a real next step.</strong><p>From first spark to a clearer business, we bring the right mix of builder energy and founder-level perspective.</p></aside>
              <div className="sc-service-list">
                {services.map((service, index) => <article className="sc-service" key={service.title}>
                  <span className="sc-service-num">0{index + 1}</span>
                  <div><h3>{service.title}</h3><p>{service.body}</p><ul>{service.points.map(point => <li key={point}>{point}</li>)}</ul></div>
                  <span className="sc-service-mark">{index === 0 ? <WandSparkles size={16} /> : index === 1 ? <Shapes size={16} /> : <ArrowRight size={16} />}</span>
                </article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="sc-section sc-work" id="portfolio">
          <div className="sc-wrap">
            <div className="sc-work-heading">
              <div><span className="sc-kicker">Selected work / 02</span><h2>Ideas, made tangible.</h2><p>Artifacts of our obsession with craft.</p></div>
              <a className="sc-archive-link" href="#contact">Have an idea? Let's talk <ArrowRight size={14} /></a>
            </div>
            <div className="sc-project-grid">
              {projects.map(project => <article className="sc-project" key={project.title}>
                <div className="sc-project-image"><img src={project.image} alt={project.alt} loading="lazy" /></div>
                <div className="sc-project-copy"><span className="sc-project-type">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="sc-section sc-events">
          <div className="sc-wrap">
            <div className="sc-section-heading">
              <div><span className="sc-kicker">Gather & make / 03</span><h2>Upcoming<br />Events</h2></div>
              <p>Workshops and sessions for the builder community.</p>
            </div>
            <div className="sc-event-list">{events.map((event, i) => <article className="sc-event" key={`${event.title}-${i}`}>
              <div><h3>{event.title}</h3><p>{event.description}</p></div>
              <span className="sc-event-meta">{event.date}</span><span className="sc-event-meta">{event.format}</span>
            </article>)}</div>
          </div>
        </section>

        <section className="sc-about" id="about">
          <div className="sc-wrap sc-about-grid">
            <div className="sc-about-label"><span className="sc-kicker">About moaiohio</span><strong>A creative studio, rooted in Ohio.</strong></div>
            <div className="sc-about-copy">
              <h2>We are a creative studio operating at the electric intersection of design, code, and AI.</h2>
              <p>Founded on the belief that software should feel alive, we partner with visionary teams to build digital products that refuse to be ignored. We don't do templates. We don't do average. We build systems that perform and interfaces that captivate.</p>
            </div>
          </div>
        </section>

        <section className="sc-contact" id="contact">
          <div className="sc-wrap sc-contact-grid">
            <div className="sc-contact-intro">
              <span className="sc-kicker">The first conversation</span>
              <h2>Ready to move fast?</h2>
              <p>Whether you need a new brand platform, a technical rebuild, or strategic coaching—we're ready.</p>
              <a className="sc-contact-email" href="mailto:dan@moaiohio.com">dan@moaiohio.com <ArrowRight size={14} /></a>
            </div>
            <form className="sc-form" onSubmit={submitPreview}>
              <div className="sc-field"><label htmlFor="sc-name">Name</label><input id="sc-name" name="name" autoComplete="name" placeholder="Your name" required /></div>
              <div className="sc-field"><label htmlFor="sc-email">Email</label><input id="sc-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></div>
              <div className="sc-field sc-field-wide"><label htmlFor="sc-type">Project type <span>(optional)</span></label><select id="sc-type" name="projectType" defaultValue=""><option value="">Select a project type…</option>{projectTypes.map(type => <option key={type}>{type}</option>)}</select></div>
              <div className="sc-field sc-field-wide"><label htmlFor="sc-message">Message</label><textarea id="sc-message" name="message" placeholder="Tell us about your project…" required /></div>
              <div className="sc-field-wide"><button className="sc-button" type="submit">Send a note <ArrowRight size={15} /></button></div>
              <p className="sc-form-note" aria-live="polite">{notice || "A visual preview only — nothing you enter is sent or stored."}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="sc-footer">
        <div className="sc-wrap">
          <div className="sc-footer-main">
            <div><a className="sc-logo" href="#top">moai<span>ohio</span></a><p>We are in unique times. Vibe coding is part of a trend that will upend the norms and make way for all kinds of innovation.</p></div>
            <div><h4>Navigation</h4><div className="sc-footer-links"><a href="#services">We Live to Vibe Code</a><a href="#portfolio">Selected Work</a><a href="#about">About Us</a></div></div>
            <div><h4>Connect</h4><div className="sc-footer-links"><a href="mailto:dan@moaiohio.com">dan@moaiohio.com</a><a href="https://x.com/floozyspeak" target="_blank" rel="noopener noreferrer">Twitter</a><a href="https://www.linkedin.com/in/dan-rockwell-a42388/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div>
          </div>
          <div className="sc-footer-bottom"><span>© {new Date().getFullYear()} moaiohio web studio. All rights reserved.</span><span>Ohio · Made for what's next</span></div>
        </div>
      </footer>
    </div>
  );
}