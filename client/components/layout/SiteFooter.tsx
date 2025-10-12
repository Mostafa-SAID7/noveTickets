import { Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const footerNav = [
  { label: "Showtimes", href: "#showtimes" },
  { label: "Movies", href: "#movies" },
  { label: "Experience", href: "#experience" },
  { label: "Reviews", href: "#reviews" },
  { label: "Get the App", href: "#app" },
];

export const SiteFooter = () => {
  return (
    <footer className="border-t border-white/10 bg-secondary/40">
      <div className="container gap-12 py-14 md:grid md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple via-brand-magenta to-brand-aqua text-lg font-semibold text-background shadow-glow">
              CM
            </span>
            <div className="leading-tight">
              <p className="font-display text-lg font-semibold">Cinemaze</p>
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Premiere Tickets
              </p>
            </div>
          </Link>
          <p className="max-w-sm text-sm text-muted-foreground">
            Discover premieres the moment they launch, reserve luxury seating,
            and curate your perfect film night in minutes.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition hover:border-brand-purple hover:text-foreground"
            >
              <Instagram className="size-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition hover:border-brand-purple hover:text-foreground"
            >
              <Twitter className="size-4" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition hover:border-brand-purple hover:text-foreground"
            >
              <Youtube className="size-4" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-sm font-semibold text-foreground/80">Navigate</p>
          <nav className="grid gap-3 text-sm text-muted-foreground">
            {footerNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors duration-200 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-5">
          <p className="text-sm font-semibold text-foreground/80">
            Stay in the loop
          </p>
          <p className="text-sm text-muted-foreground">
            Join premiere alerts for surprise screenings, exclusive merch drops,
            and VIP lounge invitations.
          </p>
          <form className="space-y-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-full border border-white/15 bg-background/60 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-aqua py-3 text-sm font-semibold uppercase tracking-wide text-background shadow-glow transition hover:via-brand-purple"
            >
              Join Premieres
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 bg-background/60">
        <div className="container flex flex-col gap-4 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Cinemaze. Crafted for film
            devotees.
          </p>
          <div className="flex justify-center gap-4 sm:justify-end">
            <a href="#movies" className="transition hover:text-foreground">
              Now Showing
            </a>
            <a href="#showtimes" className="transition hover:text-foreground">
              Showtimes
            </a>
            <a
              href="mailto:hello@cinemaze.com"
              className="transition hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
