import { testimonials } from "@/data/home";
import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-20">
      <div className="container space-y-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-amber">
            Voices of the crowd
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white">
            Stories from the Cinemaze community.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Critics, creators, and first-time guests share why our screenings feel
            unforgettable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-card/80 p-7 shadow-card backdrop-blur"
            >
              <Quote className="size-6 text-brand-purple" />
              <blockquote className="flex-1 text-base text-foreground/85">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
