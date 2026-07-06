import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft } from "lucide-react";

export function BlogPost() {
  const { slug } = useParams();
  
  // Create a pseudo-title from slug just for placeholder
  const formattedTitle = slug 
    ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : "The End of Boilerplate: Why Vibe Coding Works";

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
              <span className="text-primary">AI & Creative</span>
              <span className="text-muted-foreground">Sep 15, 2025</span>
              <span className="text-muted-foreground ml-auto hidden sm:block">By MoaiOhio Studio</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-tight mb-8">
              {formattedTitle}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              How AI code generation is changing the way we approach architecture, enabling faster iteration without sacrificing quality.
            </p>
          </header>

          <div className="aspect-video bg-secondary border border-border mb-16 w-full" />

          <div className="prose prose-invert prose-lg max-w-none">
            <p>
              The landscape of web development is shifting beneath our feet. For the past decade, we've focused heavily on frameworks, boilerplate generation, and scaffolding tools just to get a project to the starting line. Now, we're seeing a paradigm shift where the starting line is drawn for us, instantaneously, by AI.
            </p>
            
            <h2>The Shift from Syntax to Systems</h2>
            
            <p>
              Vibe coding isn't about letting AI write all your code and walking away. It's about elevating the developer's role from syntax dictation to systems thinking. When you no longer have to manually type out every React component or API route, your focus naturally shifts to architecture, user experience, and the connective tissue that makes an application truly great.
            </p>
            
            <p>
              We've found that teams embracing this approach aren't just shipping faster—they're shipping better products. By reducing the cognitive load of boilerplate, developers have the energy to sweat the details that actually matter: performance bottlenecks, accessibility, and micro-interactions.
            </p>

            <blockquote>
              "The best developers of tomorrow won't be measured by how fast they type, but by how well they orchestrate systems and define the boundaries of what AI generates."
            </blockquote>

            <h2>Maintaining the Soul of the Product</h2>

            <p>
              The danger of heavily automated workflows is creating products that feel generic—software without a soul. This is where craft comes back into the picture. A great web studio doesn't use AI to replace design; it uses AI to implement the structural components so human creativity can be spent entirely on differentiation.
            </p>
            
            <p>
              Electric color palettes, bespoke animations, and carefully considered typography are harder to automate because they rely on human taste. The future belongs to those who use AI to move fast on the predictable parts, while slowing down to obsess over the artistic moments.
            </p>
          </div>
          
          <div className="mt-20 pt-10 border-t border-border flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-display font-bold text-primary">M</span>
              </div>
              <div>
                <p className="font-bold">moaiohio Studio</p>
                <p className="text-sm text-muted-foreground">Web Design & Development</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-secondary text-foreground font-bold text-sm uppercase tracking-wider hover:bg-secondary/80 transition-colors">
              Share Article
            </button>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
