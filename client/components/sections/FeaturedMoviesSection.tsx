import { Button } from "@/components/ui/button";
import { featuredMovies } from "@/data/home";
import { CalendarDays, Clock, Film, Star } from "lucide-react";

export const FeaturedMoviesSection = () => {
  return (
    <section id="movies" className="py-20">
      <div className="container space-y-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-aqua">
            Spotlight Premieres
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white">
            Curated films for the devoted cinephile.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Every week we hand-pick premieres with immersive formats, bespoke
            soundscapes, and thoughtful storytelling. Glide into a theatre built
            for feeling.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredMovies.map((movie) => (
            <article
              key={movie.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-card/80 shadow-card backdrop-blur"
            >
              <div className="relative overflow-hidden">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                  <Film className="size-3.5 text-brand-amber" />{" "}
                  {movie.releaseStatus}
                </span>
                <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Star className="size-3.5 text-brand-amber" /> {movie.rating}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-6 p-7">
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {movie.title}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
                    {movie.genre}
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    {movie.synopsis}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Clock className="size-4 text-brand-aqua" />
                    {movie.runtime}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="size-4 text-brand-purple" />
                    Reserved seating available
                  </span>
                </div>

                <Button className="mt-auto h-11 rounded-full bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-aqua text-sm font-semibold uppercase tracking-wide text-background shadow-glow transition hover:via-brand-purple">
                  View showtimes
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
