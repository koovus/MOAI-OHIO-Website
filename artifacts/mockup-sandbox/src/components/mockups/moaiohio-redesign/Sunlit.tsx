import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import "./_group.css";
import "./_sunlit.css";

const offerings = [
  {
    title: "Vibe Coding Prototypes",
    copy: "This is what we love most. You bring the idea — a rough sketch, a voice note, a napkin — and we turn it into a working, polished product in days. Not a mockup. Not a wireframe. A real thing you can ship or show investors.",
    tags: ["Rapid MVP & prototype builds", "AI-assisted UI generation", "Full-stack vibe-coded apps", "Iterative delivery in real time"],
  },
  {
    title: "AI & Creative Workflows",
    copy: "The same vibe coding instinct we bring to products, we bring to your process. We map where AI can accelerate your team's creative output and build the systems that make it stick — without killing the soul of the work.",
    tags: ["AI workflow design & integration", "Creative system automation", "Generative content pipelines", "Tool-stack audits & optimization"],
  },
  {
    title: "Business Development Coaching",
    copy: "For founders who've felt the rush of vibe coding but need help turning that momentum into a business. We bridge the gap between a brilliant prototype and a fundable, scalable company — connecting your technical edge to real market outcomes.",
    tags: ["Founder-led growth systems", "Technical roadmap advisory", "Technology commercialization", "Deep tech coaching"],
  },
];

const projects = [
  { title: "KDP Trend Scout", category: "Vibecoded", desc: "A trend and analysis tool for Amazon's Kindle Direct Publishing Platform", img: "/__mockup/images/portfolio-prospect-os.png", alt: "KDP Trend Scout interface" },
  { title: "WriterRon", category: "Vibecoded", desc: "An AI writing tool web prototype that turns prompts into polished prose.", img: "/__mockup/images/portfolio-writerron.png", alt: "WriterRon writing interface" },
  { title: "Work or Wonder", category: "Creative Work", desc: "A game of wonder — an interactive creative experience blending art and play.", img: "/__mockup/images/portfolio-work-wonder.png", alt: "Work or Wonder visual experience" },
];

const events = [
  { title: "Wakeup Startup — Central Ohio Startup Pitch Event", date: "Sep 17, 2026", type: "In-person", desc: "Central Ohio's premier founder pitch event. Come watch bold ideas compete for real attention." },
  { title: "Wakeup Startup — Central Ohio Startup Pitch Event", date: "Oct 15, 2026", type: "In-person", desc: "Central Ohio's premier founder pitch event. Come watch bold ideas compete for real attention." },
  { title: "VIBE Session Training 001", date: "Date TBA", type: "Coming Soon", desc: "Our inaugural hands-on vibe coding training session. Details dropping soon — stay close." },
];

const projectTypes = ["Vibe coding prototype", "AI workflow integration", "Rapid MVP build", "Business development coaching", "Other"];

export function Sunlit() {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    if (!Object.keys(next).length) setSubmitted(true);
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => { const updated = { ...current }; delete updated[name]; return updated; });
  }
  return (
    <div className="sunlit-root" id="top">
      <nav className="sunlit-nav" aria-label="Main navigation">
        <a className="sunlit-brand" href="#top">moai<span>ohio</span></a>
        <div className="sunlit-navlinks">
          <a href="#services">What we do</a><a href="#portfolio">Selected work</a><a href="#about">Studio</a>
          <a className="sunlit-nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
        </div>
      </nav>
      <main>
        <section className="sunlit-hero">
          <div className="sunlit-hero-copy">
            <span className="sunlit-kicker">Future-forward web studio · Ohio</span>
            <h1 className="sun-display">Make room<br />for <em>what's next.</em></h1>
            <p>We build AI-powered prototypes at the speed of thought. Vibe coding, creative workflows, and strategic coaching for founders who ship.</p>
            <div className="sunlit-hero-actions">
              <a className="sunlit-button" href="#contact">Start a project <ArrowRight size={17} /></a>
              <a className="sunlit-text-link" href="#portfolio">See what we're making <ArrowDown size={15} /></a>
            </div>
          </div>
          <span className="sunlit-hero-note">A new kind of studio, under an old sun</span>
          <a className="sunlit-scroll" href="#services"><i /> Scroll to explore</a>
        </section>
        <div className="sunlit-ticker" aria-label="Studio capabilities"><div className="sunlit-ticker-track">
          <span>Human intent <b>·</b></span><span>AI execution <b>·</b></span><span>Ohio ingenuity <b>·</b></span><span>Ideas made real <b>·</b></span><span>Human intent <b>·</b></span>
        </div></div>
        <section className="sunlit-section sunlit-services" id="services">
          <div className="sunlit-service-layout">
            <div className="sunlit-service-intro">
              <span className="sunlit-eyebrow">Our practice</span>
              <h2>We Live to<br />Vibe Code</h2>
              <p>Vibe coding isn't a shortcut — it's a superpower. We obsess over the creative chemistry between human intent and AI execution. The result: real products, built absurdly fast, that don't feel rushed.</p>
              <a href="#contact" className="sunlit-text-link">Bring us your rough idea <ArrowRight size={16} /></a>
            </div>
            <div className="sunlit-service-list">
              {offerings.map((offering, index) => <article className="sunlit-service" key={offering.title}>
                <span className="sunlit-service-num">0{index + 1}</span>
                <div><h3>{offering.title}</h3><p>{offering.copy}</p><div className="sunlit-pills">{offering.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              </article>)}
            </div>
          </div>
        </section>
        <section className="sunlit-section sunlit-work" id="portfolio">
          <div className="sunlit-section-head">
            <div><span className="sunlit-eyebrow">Proof of play</span><h2>Selected work</h2></div>
            <p>Artifacts of our obsession with craft. A few ideas that made it out of the notebook and into the world.</p>
          </div>
          <div className="sunlit-projects">
            {projects.map((project) => <article className="sunlit-project" key={project.title}>
              <div className="sunlit-project-img"><img src={project.img} alt={project.alt} /></div>
              <div className="sunlit-project-caption"><div><h3>{project.title}</h3><p>{project.desc}</p></div><small>{project.category}</small></div>
            </article>)}
          </div>
        </section>
        <section className="sunlit-section sunlit-events">
          <div className="sunlit-section-head">
            <div><span className="sunlit-eyebrow">Come make a little noise</span><h2>On the calendar</h2></div>
            <p>Workshops and sessions for the builder community. Pull up a chair, bring a big idea.</p>
          </div>
          <div className="sunlit-event-list">
            {events.map((event) => <article className="sunlit-event" key={`${event.title}-${event.date}`}>
              <div><h3>{event.title}</h3><p>{event.desc}</p></div>
              <div className="sunlit-event-meta"><small>When</small>{event.date}</div>
              <div className="sunlit-event-meta"><small>Format</small>{event.type}</div>
            </article>)}
          </div>
        </section>
        <section className="sunlit-section sunlit-about" id="about">
          <div className="sunlit-about-art" aria-hidden="true"><div className="sunlit-orb" /><span>Ohio roots · wide-open horizon</span></div>
          <div className="sunlit-about-copy">
            <span className="sunlit-eyebrow">About moaiohio</span>
            <h2>Good ideas deserve to feel alive.</h2>
            <p>We are a creative studio operating at the electric intersection of design, code, and AI.</p>
            <p>Founded on the belief that software should feel alive, we partner with visionary teams to build digital products that refuse to be ignored. We don't do templates. We don't do average. We build systems that perform and interfaces that captivate.</p>
          </div>
        </section>
        <section className="sunlit-section sunlit-contact" id="contact">
          <div className="sunlit-contact-inner">
            <div className="sunlit-contact-copy">
              <span className="sunlit-eyebrow">The next good thing</span>
              <h2>Ready to<br />move fast?</h2>
              <p>Whether you need a new brand platform, a technical rebuild, or strategic coaching—we're ready.</p>
              <p>Tell us the idea that's keeping you up. We like the early, messy version.</p>
            </div>
            {submitted ? <div className="sunlit-confirm" role="status"><h3>Thanks for the note.</h3><p>This is a visual preview only, so nothing has been sent. Your idea is looking good already.</p><button className="sunlit-submit" type="button" onClick={() => setSubmitted(false)}>Send another note</button></div> :
              <form className="sunlit-form" onSubmit={handleSubmit} noValidate>
                <div className="sunlit-field"><label htmlFor="sun-name">Name</label><input id="sun-name" name="name" autoComplete="name" placeholder="Your name" value={form.name} onChange={handleChange} />{errors.name && <span className="sunlit-error">{errors.name}</span>}</div>
                <div className="sunlit-field"><label htmlFor="sun-email">Email</label><input id="sun-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />{errors.email && <span className="sunlit-error">{errors.email}</span>}</div>
                <div className="sunlit-field full"><label htmlFor="sun-type">Project type <span>(optional)</span></label><select id="sun-type" name="projectType" value={form.projectType} onChange={handleChange}><option value="">Select a project type…</option>{projectTypes.map((type) => <option key={type}>{type}</option>)}</select></div>
                <div className="sunlit-field full"><label htmlFor="sun-message">Message</label><textarea id="sun-message" name="message" placeholder="Tell us about your project…" value={form.message} onChange={handleChange} />{errors.message && <span className="sunlit-error">{errors.message}</span>}</div>
                <button className="sunlit-submit full" type="submit">Send a preview message <ArrowRight size={17} /></button>
              </form>}
          </div>
        </section>
      </main>
      <footer className="sunlit-footer">
        <div><a className="sunlit-footer-logo" href="#top">moai<span>ohio</span></a><p>We are in unique times. Vibe coding is part of a trend that will upend the norms and make way for all kinds of innovation.</p></div>
        <div className="sunlit-footer-links"><a href="#services">We Live to Vibe Code</a><a href="#portfolio">Selected Work</a><a href="#about">About Us</a><a href="mailto:dan@moaiohio.com">Email us</a><a href="https://x.com/floozyspeak" target="_blank" rel="noreferrer">Twitter</a><a href="https://www.linkedin.com/in/dan-rockwell-a42388/" target="_blank" rel="noreferrer">LinkedIn</a></div>
      </footer>
      <div className="sunlit-copyright"><span>© {new Date().getFullYear()} moaiohio web studio. All rights reserved.</span><span>Systems online · Ohio</span></div>
    </div>
  );
}