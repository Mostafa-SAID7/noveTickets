import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Ticket, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Showtimes", href: "#showtimes" },
  { label: "Movies", href: "#movies" },
  { label: "Experience", href: "#experience" },
  { label: "Reviews", href: "#reviews" },
  { label: "Get the App", href: "#app" },
];

export const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavigate = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="inline-flex h-11 w-11 rotate-3 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple via-brand-magenta to-brand-aqua text-lg font-semibold text-background shadow-glow transition-transform duration-300 group-hover:-rotate-3">
            <Ticket className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight">
              Cinemaze
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Premiere Tickets
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-muted-foreground transition-colors duration-200 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-brand-purple after:to-brand-magenta after:transition-transform hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#memberships"
            className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Memberships
          </a>
          <Button className="h-11 rounded-full bg-gradient-to-br from-brand-purple via-brand-magenta to-brand-aqua px-6 text-sm font-semibold uppercase tracking-wide text-background shadow-glow transition hover:via-brand-purple">
            Book Tickets
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-foreground/80 transition hover:text-foreground md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="site-mobile-nav"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>

      <div
        id="site-mobile-nav"
        className={cn(
          "md:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="border-t border-white/10 bg-background/95 backdrop-blur-2xl transition-opacity duration-200">
          <nav className="container flex flex-col gap-6 py-8 text-lg font-medium">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavigate}
                className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button className="h-12 rounded-full bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-aqua text-base font-semibold text-background shadow-glow">
              Book Tickets
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
