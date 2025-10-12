import { featuredMovies } from "@/data/home";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CalendarDays,
  ChevronRight,
  PlayCircle,
  Sparkles,
  Ticket,
} from "lucide-react";

const stats = [
  { label: "Partner cinemas", value: "72" },
  { label: "Premium auditoriums", value: "148" },
  { label: "Members worldwide", value: "3.1M" },
];

const trending = featuredMovies.slice(0, 3).map((movie) => movie.title);

const seatRows = ["A", "B", "C", "D", "E"];
const seatNumbers = Array.from({ length: 8 }, (_, index) => index + 1);
const selectedSeats = new Set(["B4", "B5", "C4"]);
const reservedSeats = new Set(["A6", "D2", "E7"]);

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div className="container grid items-center gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,420px)]">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-brand-amber" />
            Premiere Access
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Book cinematic moments without the queue.
            </h1>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              Discover premieres as soon as they drop, reserve luxury seating, and
              curate snack pairings in one seamless flow. Cinemaze makes movie
              night a statement.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button className="h-12 rounded-full bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-aqua px-8 text-base font-semibold uppercase tracking-wide text-background shadow-glow transition hover:via-brand-purple">
              Book Tickets
            </Button>
            <a
              href="#showtimes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/85 transition hover:text-foreground"
            >
              <PlayCircle className="size-5 text-brand-aqua" />
              Watch the latest trailers
              <ChevronRight className="size-4" />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center shadow-card backdrop-blur"
              >
                <p className="font-display text-3xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="uppercase tracking-[0.4em] text-muted-foreground/60">
              Now trending
            </span>
            {trending.map((title) => (
              <span
                key={title}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
              >
                <span className="size-2 rounded-full bg-brand-purple" />
                {title}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col gap-5">
          <div className="rounded-[32px] border border-white/15 bg-card/80 p-6 shadow-card backdrop-blur">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                <Ticket className="size-4 text-brand-aqua" /> Premiere Screen 1
              </span>
              <span>Jan 24 • 19:10</span>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-ticket-grid p-4">
              <div className="space-y-2">
                {seatRows.map((row) => (
                  <div key={row} className="flex items-center gap-3">
                    <span className="w-6 text-center text-xs text-muted-foreground/70">
                      {row}
                    </span>
                    <div className="grid flex-1 grid-cols-8 gap-2">
                      {seatNumbers.map((seat) => {
                        const seatId = `${row}${seat}`;
                        const isSelected = selectedSeats.has(seatId);
                        const isReserved = reservedSeats.has(seatId);

                        return (
                          <span
                            key={seatId}
                            className={cn(
                              "flex h-8 items-center justify-center rounded-lg border text-[0.65rem] font-semibold transition",
                              isSelected
                                ? "border-brand-purple/70 bg-gradient-to-br from-brand-purple via-brand-magenta to-brand-aqua text-background shadow-glow"
                                : isReserved
                                ? "border-white/10 bg-white/10 text-muted-foreground/60"
                                : "border-white/10 bg-white/5 text-foreground/80 hover:-translate-y-0.5 hover:border-brand-purple/40 hover:text-white",
                            )}
                          >
                            {seat}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="size-2 rounded-full bg-gradient-to-br from-brand-purple to-brand-magenta" />
                  Selected seats
                </span>
                <span className="font-semibold text-foreground">B4, B5, C4</span>
                <span className="font-semibold text-brand-aqua">$68.00</span>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-sm text-muted-foreground shadow-card backdrop-blur">
            <p className="font-display text-lg font-semibold text-white">
              Reserve, relax, arrive late.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Mobile tickets sync to your wallet and unlock lounge privileges 30
              minutes before showtime.
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-muted-foreground/80">
                <CalendarDays className="size-3.5 text-brand-amber" />
                Sync calendar
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-muted-foreground/80">
                <Sparkles className="size-3.5 text-brand-aqua" />
                Auto snack pairing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
