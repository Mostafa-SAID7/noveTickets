import { Button } from "@/components/ui/button";
import { showtimes } from "@/data/home";
import { ArrowRight, MapPin, MonitorSmartphone } from "lucide-react";

export const ShowtimesSection = () => {
  return (
    <section id="showtimes" className="py-20">
      <div className="container space-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-amber">
              Showtimes
            </span>
            <h2 className="font-display text-4xl font-semibold text-white">
              Reserve premium seats across our signature auditoriums.
            </h2>
            <p className="text-base text-muted-foreground">
              Choose from IMAX, Dolby Atmos, and private balcony screenings.
              Your tickets sync instantly with the Cinemaze app and digital
              wallet.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
              <MonitorSmartphone className="size-4 text-brand-aqua" />
              Mobile wallet ready
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
              <MapPin className="size-4 text-brand-purple" />
              72 partner cinemas
            </span>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            {showtimes.map((showtime) => (
              <article
                key={showtime.id}
                className="rounded-3xl border border-white/10 bg-card/80 p-6 shadow-card backdrop-blur"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.35em] text-brand-aqua">
                      {showtime.format}
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {showtime.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {showtime.cinema}
                    </p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">
                      {showtime.date}
                    </p>
                    <p>Best seats from $21.50</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {showtime.times.map((time) => (
                    <button
                      key={`${showtime.id}-${time}`}
                      className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-foreground/90 transition hover:border-brand-purple/60 hover:bg-brand-purple/10 hover:text-white"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="rounded-3xl border border-brand-purple/20 bg-gradient-to-br from-brand-purple/30 via-brand-magenta/20 to-brand-aqua/20 p-8 shadow-glow backdrop-blur">
            <h3 className="font-display text-3xl font-semibold text-white">
              Cinemaze Platinum
            </h3>
            <p className="mt-3 text-sm text-foreground/80">
              Unlock concierge bookings, lounge access, and surprise preview
              nights tailored to your favourite genres.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/90">
              <li className="flex items-start gap-2">
                <span className="mt-1 size-2 rounded-full bg-brand-aqua" />
                Two complimentary upgrades monthly
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 size-2 rounded-full bg-brand-purple" />
                Seat concierge for premieres
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 size-2 rounded-full bg-brand-amber" />
                Private lounge invitations
              </li>
            </ul>
            <Button className="mt-8 inline-flex h-12 rounded-full bg-background/90 px-6 text-sm font-semibold uppercase tracking-wide text-foreground shadow-lg shadow-brand-purple/30 transition hover:bg-background">
              Join Platinum
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </aside>
        </div>
      </div>
    </section>
  );
};
