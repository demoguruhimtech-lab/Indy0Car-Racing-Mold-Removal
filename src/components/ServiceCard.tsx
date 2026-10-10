import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
}

export default function ServiceCard({
  title,
  description,
  slug,
  ctaLabel,
  image,
  imageAlt,
}: ServiceCardProps) {
  return (
    <div className="card group overflow-hidden flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-display font-bold text-navy-900 mb-2 group-hover:text-teal-700 transition-colors">
          {title}
        </h3>
        <p className="text-navy-600 text-sm leading-relaxed mb-4 flex-1">{description}</p>
        <Link
          to={`/services/${slug}`}
          className="inline-flex items-center gap-1 text-teal-600 font-semibold text-sm hover:gap-2 transition-all"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
