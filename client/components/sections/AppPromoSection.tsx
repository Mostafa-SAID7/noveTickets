import { ArrowDownCircle, Smartphone, Ticket } from "lucide-react";

export const AppPromoSection = () => {
  return (
    <section id="app" className="py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,400px)]">
        <div className="space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-aqua">
            Cinemaze App
          </span>
          <h2 className="font-display text-4xl font-semibold text-white">
            Tickets, snacks, and seat upgrades in your pocket.
          </h2>
          <p className="text-base text-muted-foreground">
            Browse premieres, preview auditoriums in 3D, and sync showtimes with
            your crew in seconds. Our app unlocks lounge access and lightning-fast
            entry via wallet passes.
          </p>
          <div className="grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <Smartphone className="size-4 text-brand-purple" />
              Wallet passes with live updates
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <Ticket className="size-4 text-brand-aqua" />
              Shareable seat holds for friends
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-aqua px-8 py-3 text-sm font-semibold uppercase tracking-wide text-background shadow-glow transition hover:via-brand-purple"
            >
              <ArrowDownCircle className="size-5" /> Download for iOS
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-brand-purple/40 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition hover:border-brand-purple hover:bg-brand-purple/10"
            >
              <ArrowDownCircle className="size-5" /> Download for Android
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[320px]">
          <div className="absolute inset-0 -z-10 rounded-[38px] bg-gradient-to-br from-brand-purple/40 via-brand-magenta/30 to-brand-aqua/30 blur-3xl" />
          <div className="overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-[#1a1d33] via-[#0e1124] to-[#0a0c1b] p-6 shadow-2xl shadow-brand-purple/30">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-xs text-muted-foreground">
              <div className="flex items-center justify-between text-sm text-white">
                <span className="inline-flex items-center gap-2">
                  <Ticket className="size-4 text-brand-aqua" /> Cinemaze Pass
                </span>
                <span className="rounded-full border border-white/10 px-2 py-1 text-[0.65rem] uppercase tracking-wide text-brand-aqua">
                  Active
                </span>
              </div>
              <div className="mt-5 space-y-3 text-sm text-foreground/85">
                <div className="flex items-center justify-between">
                  <span>Upcoming show</span>
                  <span className="font-semibold">Neon Skyline</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Seats</span>
                  <span className="font-semibold">D5, D6</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Auditorium</span>
                  <span className="font-semibold">Dolby Atmos</span>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-background/80 p-3 text-xs text-muted-foreground">
                Present this pass at the door for lounge access 30 minutes before
                showtime.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
