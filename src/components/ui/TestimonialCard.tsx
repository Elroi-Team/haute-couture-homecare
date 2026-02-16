import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  attribution: string;
  relationship?: string;
}

export function TestimonialCard({
  quote,
  attribution,
  relationship,
}: TestimonialCardProps) {
  return (
    <figure className="bg-warm-white border border-soft-gray p-8 md:p-10">
      <Quote
        size={32}
        className="text-gold/30 mb-6"
        strokeWidth={1}
        aria-hidden="true"
      />
      <blockquote className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed mb-6 border-0 pl-0">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="text-sm">
        <span className="font-medium text-charcoal">{attribution}</span>
        {relationship && (
          <span className="text-muted-gray ml-2">| {relationship}</span>
        )}
      </figcaption>
    </figure>
  );
}
