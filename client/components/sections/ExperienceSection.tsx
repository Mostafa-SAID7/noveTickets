import { Headphones, Popcorn, Sparkles, Wifi } from "lucide-react";

const highlights = [
  {
    title: "Immersive soundscapes",
    description:
      "Dolby Atmos and DTS:X auditoriums engineered for clarity and resonance no matter your seat.",
    icon: Headphones,
  },
  {
    title: "Curated lounge service",
    description:
      "Sip signature cocktails and pre-order artisanal snacks timed for intermissions and credits.",
    icon: Popcorn,
  },
  {
    title: "Personalized lighting",
    description:
      "Ambient aisle lighting adapts to your selection, guiding your crew directly to premium seats.",
    icon: Sparkles,
  },
  {
    title: "Seamless connectivity",
    description:
      "Ultra-fast in-theatre Wi-Fi keeps your group chat synced for spontaneous post-film plans.",
    icon: Wifi,
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container space-y-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-purple">
            Experience Elevated
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white">
            Designed for the way you watch.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            From foyer to finale, Cinemaze orchestrates every touchpoint so you
            can enter the story without distraction.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-7 shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-brand-purple/40"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple/40 via-brand-magenta/40 to-brand-aqua/40 text-brand-aqua transition group-hover:scale-105">
                <Icon className="size-5" />
              </span>
              <h3 className="font-display text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground/80">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
