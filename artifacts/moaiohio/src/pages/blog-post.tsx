import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft } from "lucide-react";
import { POSTS } from "../blog-posts";

export function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center">
        <h1 className="text-4xl font-display font-bold mb-6">Post not found</h1>
        <Link href="/blog" className="text-primary font-bold hover:text-primary/80 transition-colors">
          ← Back to Insights
        </Link>
      </div>
    );
  }

  const paragraphs = post.body.split("\n\n").filter(Boolean);

  return (
    <div className="w-full">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-12 hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>

          <header className="mb-16">
            <div className="flex items-center gap-4 mb-6 text-xs font-bold uppercase tracking-widest border-b border-border pb-6">
              <span className="text-primary">{post.tag}</span>
              <span className="text-muted-foreground">{post.date}</span>
              <span className="text-muted-foreground ml-auto hidden sm:block">By MoaiOhio Studio</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-tight mb-8">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-border flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-display font-bold text-primary">M</span>
              </div>
              <div>
                <p className="font-bold">moaiohio Studio</p>
                <p className="text-sm text-muted-foreground">Future Forward Web Studio</p>
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
