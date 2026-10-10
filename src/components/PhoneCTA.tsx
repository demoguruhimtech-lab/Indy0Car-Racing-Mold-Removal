import { BUSINESS } from '@/data/business';
import { Phone } from 'lucide-react';

export default function PhoneCTA({
  variant = 'primary',
  size = 'md',
  className = '',
  label,
}: {
  variant?: 'primary' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variants = {
    primary:
      'bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/30',
    light:
      'bg-white text-navy-900 hover:bg-navy-50 shadow-lg shadow-navy-900/10 hover:shadow-xl',
    dark:
      'bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/20 hover:shadow-xl',
  };

  return (
    <a
      href={BUSINESS.phoneLink}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-all duration-300 hover:-translate-y-0.5 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <Phone className="h-5 w-5" />
      {label || `Call ${BUSINESS.phoneDisplay}`}
    </a>
  );
}
