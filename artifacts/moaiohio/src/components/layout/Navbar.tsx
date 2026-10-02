import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const home = import.meta.env.BASE_URL;
  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);
  return (
    <header className="play-header">
      <a className="play-logo" href={home + "#top"} aria-label="moaiohio home" data-testid="nav-logo">moai<span>ohio</span></a>
      <span className="play-header-note"><span /> Ohio-based, wide-open thinking</span>
      <nav id="main-navigation" className={open ? "play-nav is-open" : "play-nav"} aria-label="Main navigation">
        <a href={home + "#services"} data-testid="link-nav-services" onClick={close}>What we do</a><a href={home + "#portfolio"} data-testid="link-nav-work" onClick={close}>Work</a><a href={home + "#about"} data-testid="link-nav-about" onClick={close}>Studio</a>
        <a className="play-nav-cta" data-testid="nav-cta" href={home + "#contact"} onClick={close}>Let's talk <ArrowUpRight size={15} /></a>
      </nav>
      <button className="play-menu" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-navigation" data-testid="nav-menu-toggle" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}

