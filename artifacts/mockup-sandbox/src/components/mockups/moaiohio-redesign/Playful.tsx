import { useState, type FormEvent, type ChangeEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Check, Code2, Compass, Leaf, MapPin, Menu, Orbit, Sparkles, X, Zap } from "lucide-react";
import "./_group.css";
import "./_playful.css";

const projects = [
  { title: "KDP Trend Scout", kind: "Vibecoded", description: "A trend and analysis tool for Amazon's Kindle Direct Publishing Platform", image: "/__mockup/images/portfolio-prospect-os.png", tone: "project-lime" },
  { title: "WriterRon", kind: "Vibecoded", description: "An AI writing tool web prototype that turns prompts into polished prose.", image: "/__mockup/images/portfolio-writerron.png", tone: "project-blue" },
  { title: "Work or Wonder", kind: "Creative Work", description: "A game of wonder — an interactive creative experience blending art and play.", image: "/__mockup/images/portfolio-work-wonder.png", tone: "project-coral" },
];
const events = [
  { title: "Wakeup Startup — Central Ohio Startup Pitch Event", date: "Sep 17, 2026", type: "In-person", description: "Central Ohio's premier founder pitch event. Come watch bold ideas compete for real attention." },
  { title: "Wakeup Startup — Central Ohio Startup Pitch Event", date: "Oct 15, 2026", type: "In-person", description: "Central Ohio's premier founder pitch event. Come watch bold ideas compete for real attention." },
  { title: "VIBE Session Training 001", date: "Date TBA", type: "Coming Soon", description: "Our inaugural hands-on vibe coding training session. Details dropping soon — stay close." },
];
const prototypeTypes = ["Vibe coding prototype", "AI workflow integration", "Rapid MVP build", "Business development coaching", "Other"];

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="play-header">
      <a className="play-logo" href="#top" aria-label="moaiohio home">moai<span>ohio</span><i>®</i></a>
      <span className="play-header-note"><span /> Ohio-based, wide-open thinking</span>
      <nav className={open ? "play-nav is-open" : "play-nav"} aria-label="Main navigation">
        <a href="#services" onClick={close}>What we do</a><a href="#portfolio" onClick={close}>Work</a><a href="#about" onClick={close}>Studio</a>
        <a className="play-nav-cta" href="#contact" onClick={close}>Let's talk <ArrowUpRight size={15} /></a>
      </nav>
      <button className="play-menu" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}

function Contact() {
  const [values, setValues] = useState({ name: "", email: "", projectType: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [previewSent, setPreviewSent] = useState(false);
  function change(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => { const next = { ...current }; delete next[name]; return next; });
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!values.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email";
    if (!values.message.trim()) next.message = "Message is required";
    setErrors(next);
    if (!Object.keys(next).length) setPreviewSent(true);
  }
  return previewSent ? (
    <div className="play-success" role="status"><span className="success-mark"><Check /></span><h3>Message preview complete.</h3><p>This is a design preview — nothing was sent.</p><button type="button" onClick={() => setPreviewSent(false)}>Write another message</button></div>
  ) : (
    <form className="play-form" onSubmit={submit} noValidate>
      <div className="play-form-row">
        <label>Name<input name="name" autoComplete="name" value={values.name} onChange={change} placeholder="Your name" aria-invalid={!!errors.name} />{errors.name && <small>{errors.name}</small>}</label>
        <label>Email<input name="email" type="email" autoComplete="email" value={values.email} onChange={change} placeholder="you@example.com" aria-invalid={!!errors.email} />{errors.email && <small>{errors.email}</small>}</label>
      </div>
      <label>Project type <em>(optional)</em><select name="projectType" value={values.projectType} onChange={change}><option value="">Choose a starting point</option>{prototypeTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
      <label>Tell us what's on your mind<textarea name="message" rows={4} value={values.message} onChange={change} placeholder="The rough version is welcome." aria-invalid={!!errors.message} />{errors.message && <small>{errors.message}</small>}</label>
      <button className="play-submit" type="submit">Send a note <ArrowRight size={19} /></button>
      <p className="preview-note">Preview only. This form does not send or store your message.</p>
    </form>
  );
}

export function Playful() {
  return (
    <div className="playful" id="top">
      <Header />
      <main>
        <section className="play-hero" aria-labelledby="hero-heading">
          <div className="hero-scribble scribble-one">Ideas<br />in motion</div>
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-star">✳</span> A creative studio for founders</div>
            <h1 id="hero-heading">Craft meets<br /><span>code.</span><br />Creativity is<br className="mobile-break" /> the product.</h1>
            <p>We build AI-powered prototypes at the speed of thought. Vibe coding, creative workflows, and strategic coaching for founders who ship.</p>
            <div className="hero-actions"><a className="hero-primary" href="#portfolio">See what we make <ArrowRight size={18} /></a><a className="hero-secondary" href="#services">How we can help <ArrowDown size={16} /></a></div>
            <div className="hero-coordinate"><Compass size={15} /> Columbus, Ohio <span>·</span> Curious everywhere</div>
          </div>
          <div className="hero-art-wrap">
            <div className="hero-orbit orbit-a" /><div className="hero-orbit orbit-b" />
            <img className="hero-muse" src="/__mockup/images/playful-moai-muse.png" alt="Playful illustrated Moai studio muse among sun and tropical leaves" />
            <span className="art-sticker sticker-code"><Code2 size={17} /> MAKE IT REAL</span>
            <span className="art-sticker sticker-ai"><Sparkles size={15} /> AI + HUMAN</span>
            <span className="art-caption">A little weird.<br />A lot useful.</span>
            <span className="art-number">OH / 001</span>
          </div>
          <a className="hero-down" href="#services" aria-label="Scroll to services"><span>Scroll to explore</span><ArrowDown size={16} /></a>
          <div className="hero-side-note">NOT A TEMPLATE STUDIO</div>
        </section>

        <section className="intro-strip" aria-label="Studio focus"><span><Zap size={15} /> Built at the speed of thought</span><i>✳</i><span>Ohio roots, open horizons</span><i>✳</i><span>Good ideas deserve to ship</span></section>

        <section className="play-section services-section" id="services">
          <div className="section-head">
            <div><span className="eyebrow">01 / THE GOOD STUFF</span><h2>We Live to<br /><span>Vibe Code.</span></h2></div>
            <p>Vibe coding isn't a shortcut — it's a superpower. We obsess over the creative chemistry between human intent and AI execution. The result: real products, built absurdly fast, that don't feel rushed.</p>
          </div>
          <div className="service-board">
            <article className="service-card service-one"><div className="service-top"><span className="service-index">01</span><span className="service-doodle"><Code2 /></span></div><h3>Vibe Coding<br />Prototypes</h3><p>This is what we love most. You bring the idea — a rough sketch, a voice note, a napkin — and we turn it into a working, polished product in days. Not a mockup. Not a wireframe. A real thing you can ship or show investors.</p><ul><li>Rapid MVP & prototype builds</li><li>AI-assisted UI generation</li><li>Full-stack vibe-coded apps</li><li>Iterative delivery in real time</li></ul></article>
            <article className="service-card service-two"><div className="service-top"><span className="service-index">02</span><span className="service-doodle"><Orbit /></span></div><h3>AI & Creative<br />Workflows</h3><p>The same vibe coding instinct we bring to products, we bring to your process. We map where AI can accelerate your team's creative output and build the systems that make it stick — without killing the soul of the work.</p><ul><li>AI workflow design & integration</li><li>Creative system automation</li><li>Generative content pipelines</li><li>Tool-stack audits & optimization</li></ul></article>
            <article className="service-card service-three"><div className="service-top"><span className="service-index">03</span><span className="service-doodle"><Compass /></span></div><h3>Business Development<br />Coaching</h3><p>For founders who've felt the rush of vibe coding but need help turning that momentum into a business. We bridge the gap between a brilliant prototype and a fundable, scalable company — connecting your technical edge to real market outcomes.</p><div className="coaching-tags"><span>Founder-led growth systems</span><span>Technical roadmap advisory</span><span>Technology commercialization</span><span>Deep tech coaching</span></div></article>
          </div>
        </section>

        <section className="work-section" id="portfolio">
          <div className="work-heading"><div><span className="eyebrow">02 / MADE WITH CURIOSITY</span><h2>Selected<br /><em>work.</em></h2></div><div className="work-heading-note"><span className="hand-star">✳</span><p>Artifacts of our obsession with craft.</p><a href="#contact">Have an idea? Let's make it <ArrowUpRight size={15} /></a></div></div>
          <div className="project-grid">{projects.map((project, index) => <article className={`project-card ${project.tone}`} key={project.title}><div className="project-visual"><div className="project-number">0{index + 1}</div><img src={project.image} alt={project.title} loading="lazy" /><span className="project-arrow"><ArrowUpRight size={19} /></span></div><div className="project-meta"><span>{project.kind}</span><span>MOAIOHIO / {String(index + 1).padStart(2, "0")}</span></div><h3>{project.title}</h3><p>{project.description}</p></article>)}</div>
        </section>

        <section className="events-section">
          <div className="events-stamp"><Leaf size={25} /><span>SHOW UP<br />CURIOUS</span></div>
          <div className="events-main"><div className="events-heading"><span className="eyebrow">03 / COME MAKE THINGS</span><h2>Upcoming<br /><span>Events.</span></h2><p>Workshops and sessions for the builder community.</p></div>
            <div className="event-list">{events.map((event, index) => <article className="event-row" key={`${event.title}-${event.date}`}><span className="event-count">0{index + 1}</span><div className="event-info"><h3>{event.title}</h3><p>{event.description}</p></div><div className="event-details"><span><CalendarDays size={15} />{event.date}</span><span><MapPin size={15} />{event.type}</span></div></article>)}</div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-doodle">✳</div><span className="eyebrow">04 / THE STUDIO</span>
          <h2>We are a creative studio operating at the electric intersection of <span>design, code, and AI.</span></h2>
          <p>Founded on the belief that software should feel alive, we partner with visionary teams to build digital products that refuse to be ignored. We don't do templates. We don't do average. We build systems that perform and interfaces that captivate.</p>
          <div className="about-signoff"><span className="signature">moaiohio</span><span>Independent minds. Collaborative spirit.</span></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-backdrop" aria-hidden="true">LET'S<br />MAKE IT.</div>
          <div className="contact-content"><div className="contact-copy"><span className="eyebrow">05 / YOUR MOVE</span><h2>Ready to<br /><em>move fast?</em></h2><p>Whether you need a new brand platform, a technical rebuild, or strategic coaching—we're ready.</p><span className="contact-aside"><span className="contact-dot" /> Good ideas start with a conversation.</span></div><div className="contact-form-wrap"><Contact /></div></div>
        </section>
      </main>
      <footer className="play-footer">
        <div className="footer-top"><div className="footer-brand"><a className="play-logo" href="#top">moai<span>ohio</span><i>®</i></a><p>We are in unique times. Vibe coding is part of a trend that will upend the norms and make way for all kinds of innovation.</p></div><div className="footer-links"><h3>Explore</h3><a href="#services">We Live to Vibe Code</a><a href="#portfolio">Selected Work</a><a href="#about">About Us</a></div><div className="footer-links"><h3>Say hello</h3><a href="mailto:dan@moaiohio.com">dan@moaiohio.com <ArrowUpRight size={13} /></a><a href="https://x.com/floozyspeak" target="_blank" rel="noreferrer">Twitter <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/dan-rockwell-a42388/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} moaiohio web studio. All rights reserved.</span><span><i /> Systems Online</span><a href="#top">Back to the top ↑</a></div>
      </footer>
    </div>
  );
}