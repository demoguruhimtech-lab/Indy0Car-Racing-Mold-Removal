import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-page pt-6 pb-2">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-navy-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {item.path ? (
              <Link
                to={item.path}
                className="hover:text-teal-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-navy-700 font-medium">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <ChevronRight className="h-4 w-4 text-navy-300" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
