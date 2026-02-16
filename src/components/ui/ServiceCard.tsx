import Link from "next/link";
import {
  Heart,
  Sparkles,
  Home,
  RefreshCw,
  Activity,
  Brain,
  Moon,
  Car,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Sparkles,
  Home,
  RefreshCw,
  Activity,
  Brain,
  Moon,
  Car,
};

interface ServiceCardProps {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  featured?: boolean;
}

export function ServiceCard({
  id,
  title,
  shortDescription,
  icon,
  featured = false,
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Heart;

  return (
    <article
      className={`group relative bg-warm-white border transition-all duration-300 hover:shadow-lg ${
        featured
          ? "border-gold/30 hover:border-gold"
          : "border-soft-gray hover:border-champagne-dark"
      }`}
    >
      <div className="p-8">
        {/* Icon */}
        <div
          className={`w-14 h-14 flex items-center justify-center mb-6 transition-colors ${
            featured ? "bg-gold/10 text-gold" : "bg-champagne-light text-charcoal"
          } group-hover:bg-gold/10 group-hover:text-gold`}
        >
          <IconComponent size={28} strokeWidth={1.5} />
        </div>

        {/* Content */}
        <h3 className="font-serif text-xl mb-3 text-charcoal">{title}</h3>
        <p className="text-charcoal-light text-sm leading-relaxed mb-6">
          {shortDescription}
        </p>

        {/* Link */}
        <Link
          href={`/services#${id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-gold transition-colors group/link"
          aria-label={`Learn more about ${title}`}
        >
          Learn More
          <ArrowRight
            size={16}
            className="transition-transform group-hover/link:translate-x-1"
          />
        </Link>
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4">
          <span className="text-xs font-medium tracking-wider uppercase text-gold">
            Popular
          </span>
        </div>
      )}
    </article>
  );
}
