import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const home = import.meta.env.BASE_URL;
  return (
      <footer className="play-footer">
         <div className="footer-top"><div className="footer-brand"><a className="play-logo" href={home + "#top"}>moai<span>ohio</span></a><p>Creative product builds, practical AI workflows, and business coaching for founders with ideas worth pursuing. Let's turn your next “what if” into a working first step.</p></div><div className="footer-links"><h3>Take a closer look</h3><a href={home + "#services"}>How we can help</a><a href={home + "#portfolio"}>Explore our projects</a><a href={home + "#about"}>Meet moaiohio</a></div><div className="footer-links"><h3>Start a conversation</h3><a href="mailto:dan@moaiohio.com">dan@moaiohio.com <ArrowUpRight size={13} /></a><a href="https://x.com/floozyspeak" target="_blank" rel="noopener noreferrer">X / Twitter <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/dan-rockwell-a42388/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight size={13} /></a></div></div>
         <div className="footer-bottom"><span>© {new Date().getFullYear()} moaiohio web studio. All rights reserved.</span><span><i /> Ohio roots. Big ideas.</span><a href={home + "#top"}>Back to the beginning ↑</a></div>
      </footer>
  );
}
