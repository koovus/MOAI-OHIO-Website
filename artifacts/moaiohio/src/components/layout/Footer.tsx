import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-display font-bold text-3xl tracking-tighter text-foreground mb-4 block">
              moai<span className="text-primary">ohio</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              A forward-thinking web studio where craft meets code and creativity is the product — built for founders who think in systems and move fast.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">We Live to Vibe Code</Link></li>
              <li><Link href="/#portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">Selected Work</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Insights & Blog</Link></li>
              <li><Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-3">
              <li><a href="mailto:dan@moaiohio.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">dan@moaiohio.com</a></li>
              <li><a href="https://x.com/floozyspeak" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/dan-rockwell-a42388/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} moaiohio web studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <span className="text-muted-foreground text-xs uppercase tracking-widest font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              Systems Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
