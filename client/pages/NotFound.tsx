import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-brand-purple">
          404
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl">
          Lost the reel?
        </h1>
        <p className="mt-4 max-w-lg text-sm text-muted-foreground">
          We couldn’t find{" "}
          <span className="text-foreground">{location.pathname}</span>. Try
          resurfacing on the homepage or explore our current showtimes below.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-aqua px-6 py-3 text-sm font-semibold uppercase tracking-wide text-background shadow-glow transition hover:via-brand-purple"
          >
            Back to homepage
          </Link>
          <a
            href="#showtimes"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-purple/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition hover:border-brand-purple hover:bg-brand-purple/10"
          >
            Browse showtimes
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
