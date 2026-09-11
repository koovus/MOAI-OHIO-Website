import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BrainCircuit, Rocket, Calendar, MapPin, Sparkles, Zap } from "lucide-react";
import { useState } from "react";
import { useSubmitContact } from "@workspace/api-client-react";

const PROJECT_TYPES = [
  "Vibe coding prototype",
  "AI workflow integration",
  "Rapid MVP build",
  "Business development coaching",
  "Other",
];

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const mutation = useSubmitContact();

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) { setErrors(v); return; }
    mutation.mutate(
      { data: { name: form.name.trim(), email: form.email.trim(), projectType: form.projectType || undefined, message: form.message.trim() } },
      { onSuccess: () => setSubmitted(true) }
    );
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="text-5xl mb-6">✓</div>
        <h3 className="text-3xl font-display font-bold mb-4">Message sent!</h3>
        <p className="text-xl opacity-80 font-light">We'll be in touch soon.</p>
      </motion.div>
    );
  }

  const inputClass = "w-full bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 px-4 py-3 focus:outline-none focus:border-primary-foreground transition-colors";
  const labelClass = "block text-sm font-bold uppercase tracking-wider mb-2 opacity-80";
  const errorClass = "mt-1 text-sm text-red-300";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className={labelClass}>Project type <span className="normal-case font-normal opacity-60">(optional)</span></label>
        <select
          id="projectType"
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a project type…</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project…"
          value={form.message}
          onChange={handleChange}
          className={inputClass + " resize-none"}
        />
        {errors.message && <p className={errorClass}>{errors.message}</p>}
      </div>

      {mutation.isError && (
        <p className="text-red-300 text-sm">
          {(mutation.error as Error)?.message ?? "Something went wrong. Please try again."}
        </p>
      )}

      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full inline-flex items-center justify-center gap-3 px-10 py-5 bg-background text-foreground font-bold text-lg uppercase tracking-wider hover:bg-background/90 hover:scale-[1.02] transition-all shadow-2xl disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {mutation.isPending ? "Sending…" : (
          <>
            Send message
            <ArrowRight className="w-5 h-5 text-primary" />
          </>
        )}
      </button>
    </form>
  );
}

export function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 }
    }
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background mix-blend-multiply z-10" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen" />
          
          {/* Subtle noise/grid overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-20 pointer-events-none" />
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block py-1 px-3 mb-6 border border-primary/30 bg-primary/10 text-primary uppercase tracking-widest text-xs font-bold rounded-none">
              Future Forward Web Studio
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter leading-[1.1] mb-8 max-w-5xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Craft Meets Code. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Creativity is the Product.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 font-light"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            We build AI-powered prototypes at the speed of thought. Vibe coding, creative workflows, and strategic coaching for founders who ship.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#contact" className="px-8 py-4 bg-primary text-primary-foreground font-bold text-lg uppercase tracking-wider hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group data-[testid='hero-cta']">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="px-8 py-4 bg-transparent border border-border text-foreground font-bold text-lg uppercase tracking-wider hover:bg-secondary transition-all flex items-center justify-center">
              View Our Work
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 md:w-2/3">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">We Live to Vibe Code</h2>
            <p className="text-xl text-muted-foreground font-light">Vibe coding isn't a shortcut — it's a superpower. We obsess over the creative chemistry between human intent and AI execution. The result: real products, built absurdly fast, that don't feel rushed.</p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Service 1 — Vibe Coding */}
            <motion.div variants={itemVariants} className="bg-card p-12 hover:bg-secondary/50 transition-colors group md:col-span-1">
              <BrainCircuit className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-display font-bold mb-4">Vibe Coding Prototypes</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">This is what we love most. You bring the idea — a rough sketch, a voice note, a napkin — and we turn it into a working, polished product in days. Not a mockup. Not a wireframe. A real thing you can ship or show investors.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["Rapid MVP & prototype builds", "AI-assisted UI generation", "Full-stack vibe-coded apps", "Iterative delivery in real time"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 2 — AI & Creative */}
            <motion.div variants={itemVariants} className="bg-card p-12 hover:bg-secondary/50 transition-colors group">
              <Zap className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-display font-bold mb-4">AI & Creative Workflows</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">The same vibe coding instinct we bring to products, we bring to your process. We map where AI can accelerate your team's creative output and build the systems that make it stick — without killing the soul of the work.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["AI workflow design & integration", "Creative system automation", "Generative content pipelines", "Tool-stack audits & optimization"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 3 — Business Coaching */}
            <motion.div variants={itemVariants} className="bg-card p-12 hover:bg-secondary/50 transition-colors group md:col-span-2">
              <Rocket className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-display font-bold mb-4">Business Development Coaching</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">For founders who've felt the rush of vibe coding but need help turning that momentum into a business. We bridge the gap between a brilliant prototype and a fundable, scalable company — connecting your technical edge to real market outcomes.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {["Founder-led growth systems", "Technical roadmap advisory", "Technology commercialization", "Deep tech coaching"].map((item) => (
                  <div key={item} className="border border-border p-4 text-sm text-muted-foreground flex items-start gap-2">
                    <Sparkles className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="md:w-2/3">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Selected Work</h2>
              <p className="text-xl text-muted-foreground font-light">Artifacts of our obsession with craft.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider hover:text-primary/80 transition-colors">
              View Archive <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "KDP Trend Scout", category: "Vibecoded", desc: "A city sweeper web tool for mass prospecting — built fast, built sharp.", img: "/portfolio-prospect-os.png" },
              { title: "WriterRon", category: "Vibecoded", desc: "An AI writing tool web prototype that turns prompts into polished prose.", img: "/portfolio-writerron.png" },
              { title: "Work or Wonder", category: "Creative Work", desc: "A game of wonder — an interactive creative experience blending art and play.", img: "/portfolio-work-wonder.png" },
            ].map((project, i) => (
              <motion.div 
                key={i}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="aspect-[4/3] bg-secondary overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground">{project.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-32 border-b border-border bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-20 text-center">What Founders Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: "moaiohio transformed our online presence. They move faster than any agency I've worked with, and the quality is relentless.", name: "Sarah J.", role: "CEO, TechFlow" },
              { quote: "They don't just write code; they understand the business physics behind what they're building. True partners.", name: "David M.", role: "Founder, ScaleUp" },
              { quote: "Their vibe coding approach meant we went from napkin sketch to a production-ready MVP in under a month.", name: "Elena R.", role: "CTO, Venture AI" }
            ].map((t, i) => (
              <motion.div 
                key={i} 
                className="bg-card border border-border p-8 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-primary text-6xl font-display leading-none absolute top-4 left-4 opacity-20">"</div>
                <p className="text-lg mb-8 relative z-10 font-light mt-4">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section className="py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground font-light">Workshops and sessions for the builder community.</p>
          </div>

          <div className="flex flex-col">
            {[
              { title: "Wakeup Startup — Central Ohio Startup Pitch Event", date: "Sep 17, 2026", type: "In-person", desc: "Central Ohio's premier founder pitch event. Come watch bold ideas compete for real attention." },
              { title: "Wakeup Startup — Central Ohio Startup Pitch Event", date: "Oct 15, 2026", type: "In-person", desc: "Central Ohio's premier founder pitch event. Come watch bold ideas compete for real attention." },
              { title: "VIBE Session Training 001", date: "Date TBA", type: "Coming Soon", desc: "Our inaugural hands-on vibe coding training session. Details dropping soon — stay close." }
            ].map((event, i) => (
              <motion.div 
                key={i}
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-t border-border first:border-none hover:bg-secondary/30 transition-colors px-4 -mx-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-muted-foreground">{event.desc}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 md:w-1/3 md:justify-end">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold tracking-widest uppercase">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold tracking-widest uppercase">{event.type}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-32 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="md:w-2/3">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Latest Groove</h2>
              <p className="text-xl text-muted-foreground font-light">Things we're into right now — tools, spaces, and projects worth your attention.</p>
            </div>
            <Link href="/blog" className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider hover:text-primary/80 transition-colors">
              Read the Blog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Box Squared", tag: "Tool", url: "https://spacetypegenerator.com/boxsquad" },
              { title: "Buzz", tag: "Platform", url: "https://buzz.xyz/" },
              { title: "SpaceType", tag: "Creative", url: "https://spacetypegenerator.com/" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="aspect-[3/2] bg-secondary mb-6 border border-border group-hover:border-primary/50 transition-colors" />
                <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest">
                  <span className="text-primary">{item.tag}</span>
                </div>
                <span className="text-2xl font-display font-bold group-hover:text-primary transition-colors block">
                  {item.title}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 mb-8 border border-border text-muted-foreground uppercase tracking-widest text-xs font-bold">
            About moaiohio
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
            We are a creative studio operating at the electric intersection of design, code, and AI.
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Founded on the belief that software should feel alive, we partner with visionary teams to build digital products that refuse to be ignored. We don't do templates. We don't do average. We build systems that perform and interfaces that captivate.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Huge background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-10">
          <h2 className="text-[15vw] font-display font-black leading-none whitespace-nowrap">LET'S BUILD</h2>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">Ready to move fast?</h2>
            <p className="text-xl md:text-2xl opacity-90 font-light">
              Whether you need a new brand platform, a technical rebuild, or strategic coaching—we're ready.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
