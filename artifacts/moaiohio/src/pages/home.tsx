import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Code2, Compass, Leaf, MapPin, Orbit, Sparkles, Zap } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

const assetBase = import.meta.env.BASE_URL;
const projects = [
  { title: "KDP Trend Scout", kind: "Publishing research tool", description: "Explore and analyze publishing trends on Amazon's Kindle Direct Publishing platform.", image: assetBase + "portfolio-prospect-os.png", tone: "project-lime" },
  { title: "WriterRon", kind: "AI writing prototype", description: "Start with a prompt. Shape it into polished prose with an AI-powered writing assistant.", image: assetBase + "portfolio-writerron.png", tone: "project-blue" },
  { title: "Work or Wonder", kind: "Interactive creative experience", description: "Step into an interactive experience that brings art, play, and curiosity together.", image: assetBase + "portfolio-work-wonder.png", tone: "project-coral" },
];
const events = [
  { title: "Wakeup Startup — Central Ohio Startup Pitch Event", date: "Sep 17, 2026", type: "In-person", description: "Meet Central Ohio founders, hear their pitches, and see the ideas they're working to bring to life." },
  { title: "Wakeup Startup — Central Ohio Startup Pitch Event", date: "Oct 15, 2026", type: "In-person", description: "See what local founders are building at a live pitch event for the Central Ohio startup community." },
  { title: "VIBE Session Training 001", date: "Date TBA", type: "Coming Soon", description: "Get hands-on with vibe coding and explore how AI can help turn an idea into a working prototype. Training date to be announced." },
];

export function Home() {
  return (
    <>

        <section className="play-hero" aria-labelledby="hero-heading">
           <div className="hero-scribble scribble-one">Think bigger.<br />Start building.</div>
          <div className="hero-copy">
             <div className="hero-kicker"><span className="kicker-star">✳</span> For founders with ideas worth building</div>
             <h1 id="hero-heading" data-testid="text-hero-heading">From big idea<br />to working<br /><span>product.</span></h1>
             <p>moaiohio partners with founders to turn ambitious ideas into working prototypes, useful AI workflows, and clear next steps for growth.</p>
             <div className="hero-actions"><a className="hero-primary" href="#contact" data-testid="hero-cta">Let's Build Your Idea <ArrowRight size={18} /></a><a className="hero-secondary" href="#portfolio" data-testid="link-hero-work">See What We've Built <ArrowDown size={16} /></a></div>
             <div className="hero-coordinate"><Compass size={15} /> Built in Ohio <span>·</span> Open to big ideas</div>
          </div>
          <div className="hero-art-wrap">
            <div className="hero-orbit orbit-a" /><div className="hero-orbit orbit-b" />
            <img className="hero-muse" src={assetBase + "playful-moai-muse.png"} data-testid="img-island-moai" alt="Playful illustrated Moai studio muse among sun and tropical leaves" />
             <span className="art-sticker sticker-code"><Code2 size={17} /> IDEA → FIRST BUILD</span>
             <span className="art-sticker sticker-ai"><Sparkles size={15} /> HUMAN-LED AI</span>
             <span className="art-caption">Creative by nature.<br />Useful by design.</span>
            <span className="art-number">OH / 001</span>
          </div>
           <a className="hero-down" href="#services" aria-label="Explore our services" data-testid="link-scroll-services"><span>Find your next step</span><ArrowDown size={16} /></a>
           <div className="hero-side-note">BUILT AROUND YOUR IDEA</div>
        </section>

         <section className="intro-strip" aria-label="How we work"><span><Zap size={15} /> From idea to first build</span><i>✳</i><span>AI with human judgment</span><i>✳</i><span>Creative thinking. Practical progress.</span></section>

        <section className="play-section services-section" id="services">
          <div className="section-head">
             <div><span className="eyebrow">01 / HOW WE HELP</span><h2>Build better.<br /><span>Move ahead.</span></h2></div>
             <p>You don't need every answer before you begin. We bring product thinking, creative design, and AI-assisted development together to help you test an idea, improve how you work, and choose your next move.</p>
          </div>
          <div className="service-board">
             <article className="service-card service-one"><div className="service-top"><span className="service-index">01</span><span className="service-doodle"><Code2 /></span></div><h3>Working Prototypes<br />& MVPs</h3><p>Move beyond the pitch deck. We use vibe coding and thoughtful design to build a working version of your idea—something you can try, demonstrate, and improve before committing to the bigger build.</p><ul><li>Rapid prototypes & MVPs</li><li>AI-assisted interface design</li><li>Full-stack product builds</li><li>Collaborative iteration</li></ul></article>
             <article className="service-card service-two"><div className="service-top"><span className="service-index">02</span><span className="service-doodle"><Orbit /></span></div><h3>Practical AI &<br />Creative Workflows</h3><p>Put AI to work where it can actually help. We design workflows around your team's needs, connect the right tools, and automate repetitive steps so there's more room for the work that needs a human.</p><ul><li>Workflow design & integration</li><li>Creative process automation</li><li>Generative content systems</li><li>Tool audits & optimization</li></ul></article>
             <article className="service-card service-three"><div className="service-top"><span className="service-index">03</span><span className="service-doodle"><Compass /></span></div><h3>Business Coaching<br />for Founders</h3><p>A promising prototype is a starting point, not a business plan. We help founders connect what they're building to the opportunity ahead—with guidance on growth, technical roadmaps, and bringing new technology to market.</p><div className="coaching-tags"><span>Founder-led growth</span><span>Technical product roadmaps</span><span>From technology to market</span><span>Deep-tech business coaching</span></div></article>
          </div>
        </section>

        <section className="work-section" id="portfolio">
           <div className="work-heading"><div><span className="eyebrow">02 / SELECTED PROJECTS</span><h2>Ideas.<br /><em>In action.</em></h2></div><div className="work-heading-note"><span className="hand-star">✳</span><p>A few builds that bring creative thinking and practical technology together.</p><a href="#contact" data-testid="link-work-contact">Let's talk about your project <ArrowUpRight size={15} /></a></div></div>
          <div className="project-grid">{projects.map((project, index) => <article className={`project-card ${project.tone}`} key={project.title}><div className="project-visual"><div className="project-number">0{index + 1}</div><img src={project.image} alt={project.title} loading="lazy" /><span className="project-arrow"><ArrowUpRight size={19} /></span></div><div className="project-meta"><span>{project.kind}</span><span>MOAIOHIO / {String(index + 1).padStart(2, "0")}</span></div><h3>{project.title}</h3><p>{project.description}</p></article>)}</div>
        </section>

        <section className="events-section">
           <div className="events-stamp"><Leaf size={25} /><span>MEET. MAKE.<br />KEEP GOING.</span></div>
           <div className="events-main"><div className="events-heading"><span className="eyebrow">03 / THE BUILDER COMMUNITY</span><h2>Good ideas<br /><span>grow together.</span></h2><p>Pitch events and hands-on sessions for founders, makers, and people curious about building with AI.</p></div>
            <div className="event-list">{events.map((event, index) => <article className="event-row" key={`${event.title}-${event.date}`}><span className="event-count">0{index + 1}</span><div className="event-info"><h3>{event.title}</h3><p>{event.description}</p></div><div className="event-details"><span><CalendarDays size={15} />{event.date}</span><span><MapPin size={15} />{event.type}</span></div></article>)}</div>
          </div>
        </section>

        <section className="about-section" id="about">
           <div className="about-doodle">✳</div><span className="eyebrow">04 / MEET MOAIOHIO</span>
           <h2>Creative thinking.<br /><span>Technical follow-through.</span></h2>
           <p>We're an Ohio-based creative studio for founders who want to move an idea forward. Product design, AI-assisted development, and business coaching work together here—so what you build is connected to where you want to go. Bring the ambition. We'll bring a hands-on, collaborative approach to making progress.</p>
           <div className="about-signoff"><span className="signature">moaiohio</span><span>Independent thinking. Built together.</span></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-backdrop" aria-hidden="true">LET'S TALK</div>
           <div className="contact-content"><div className="contact-copy"><span className="eyebrow">05 / START WITH YOUR IDEA</span><h2>Let's make<br /><em>your next<br />move.</em></h2><p>Tell us what you're trying to build, improve, or figure out. Whether it's a first prototype, an AI workflow, or a clearer path for your business, the next step starts with a conversation.</p><span className="contact-aside"><span className="contact-dot" /> A rough idea is a perfectly good place to start.</span></div><div className="contact-form-wrap"><ContactForm /></div></div>
        </section>

    </>
  );
}
