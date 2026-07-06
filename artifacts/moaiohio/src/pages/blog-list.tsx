import { motion } from "framer-motion";
import { Link } from "wouter";
import { POSTS } from "../blog-posts";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
};

export function BlogList() {
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
              <motion.article key={i} variants={itemVariants} className="group flex flex-col">
                <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest">
                  <span className="text-primary">{post.tag}</span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </Link>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">{post.excerpt}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
