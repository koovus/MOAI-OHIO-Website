import { motion } from "framer-motion";
import { Link } from "wouter";

const POSTS = [
  { slug: "end-of-boilerplate", title: "The End of Boilerplate: Why Vibe Coding Works", tag: "AI & Creative", date: "Sep 15, 2025", excerpt: "How AI code generation is changing the way we approach architecture, enabling faster iteration without sacrificing quality." },
  { slug: "stop-centering-divs", title: "Stop Centering Divs: Layouts for the Modern Web", tag: "Web Dev", date: "Sep 02, 2025", excerpt: "A deeper look at modern CSS Grid, Subgrid, and container queries that make complex editorial layouts effortless." },
  { slug: "first-engineer", title: "When to Hire Your First Engineer", tag: "Business", date: "Aug 20, 2025", excerpt: "Strategic coaching insights on team scaling, technical debt, and building a foundation that attracts top talent." },
  { slug: "dark-mode-defaults", title: "Why We Default to Dark Mode", tag: "Web Design", date: "Aug 05, 2025", excerpt: "The psychological and visual benefits of designing dark-first interfaces for intensive software tools." },
  { slug: "ai-design-systems", title: "Design Systems in the Age of AI", tag: "AI & Creative", date: "Jul 22, 2025", excerpt: "How tokenized design systems evolve when AI is doing the generation, and why human taste matters more than ever." },
  { slug: "shipping-speed", title: "Shipping at the Speed of Thought", tag: "Business", date: "Jul 10, 2025", excerpt: "Frameworks for decision making that allow founders to reduce time-to-market while maintaining high standards." }
];

export function BlogList() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="w-full">
      <section className="pt-32 pb-20 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-extrabold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Insights & Writing
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Thoughts on code, craft, systems, and the evolving nature of the web.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {POSTS.map((post, i) => (
              <motion.article 
                key={i} 
                variants={itemVariants}
                className="group flex flex-col"
              >
                <div className="mb-6 overflow-hidden border border-border bg-secondary aspect-[16/9]">
                  <div className="w-full h-full bg-card group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest">
                  <span className="text-primary">{post.tag}</span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </Link>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  {post.excerpt}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
