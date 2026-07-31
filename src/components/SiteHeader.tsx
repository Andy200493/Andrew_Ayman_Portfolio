import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-glass-border bg-background/80 backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-500 md:flex md:justify-between",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <a
          href="#top"
          className="min-w-0 font-display text-lg font-extrabold tracking-tight"
        >
          Andrew<span className="text-gradient">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contact"
            className="btn-primary hidden rounded-full px-5 py-2.5 text-sm font-bold md:inline-flex"
          >
            Hire me
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="btn-ghost grid h-10 w-10 place-items-center rounded-full md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-glass-border bg-background/95 px-5 py-4 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-glass-border py-3 text-sm font-semibold text-muted-foreground last:border-0 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold"
            >
              Hire me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
