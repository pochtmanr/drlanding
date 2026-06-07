import type { Testimonial } from "@/content/types";
import { Card } from "@/components/ui/card";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card tinted className="flex h-full flex-col">
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="size-8 text-primary/40 rtl:-scale-x-100"
      >
        <path
          d="M5 16c0-4.4 2.4-7.7 6-9l.8 1.6C9.4 9.8 8.2 11.5 8 13c.3-.1.7-.2 1.1-.2 1.7 0 3 1.3 3 3.1 0 1.8-1.4 3.1-3.2 3.1C6.6 19 5 17.7 5 16zm9 0c0-4.4 2.4-7.7 6-9l.8 1.6c-2.4 1.2-3.6 2.9-3.8 4.4.3-.1.7-.2 1.1-.2 1.7 0 3 1.3 3 3.1 0 1.8-1.4 3.1-3.2 3.1-2.3 0-3.9-1.3-3.9-3z"
          fill="currentColor"
        />
      </svg>
      <blockquote className="mt-4 flex-1 leading-relaxed text-ink/85">
        {testimonial.quote}
      </blockquote>
      <footer className="mt-5">
        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-sm text-muted">{testimonial.context}</p>
      </footer>
    </Card>
  );
}
