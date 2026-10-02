import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const home = import.meta.env.BASE_URL;
  return (
      <footer className="play-footer">
        <div className="footer-top"><div className="footer-brand"><a className="play-logo" href={home + "#top"}>moai<span>ohio</span></a><p>We are in unique times. Vibe coding is part of a trend that will upend the norms and make way for all kinds of innovation.</p></div><div className="footer-links"><h3>Explore</h3><a href={home + "#services"}>We Live to Vibe Code</a><a href={home + "#portfolio"}>Selected Work</a><a href={home + "#about"}>About Us</a></div><div className="footer-links"><h3>Say hello</h3><a href="mailto:dan@moaiohio.com">dan@moaiohio.com <ArrowUpRight size={13} /></a><a href="https://x.com/floozyspeak" target="_blank" rel="noopener noreferrer">Twitter <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/dan-rockwell-a42388/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} /></a></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} moaiohio web studio. All rights reserved.</span><span><i /> Systems Online</span><a href={home + "#top"}>Back to the top ↑</a></div>
      </footer>
  );
}
