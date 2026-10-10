import { useEffect } from 'react';


interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  structuredData?: object;
}

export default function SEO({
  title,
  description,
  canonicalPath,
  ogImage,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    ensureMeta('description', description);
    ensureMeta('og:title', title, 'property');
    ensureMeta('og:description', description, 'property');
    ensureMeta('og:type', 'website', 'property');
    ensureMeta('og:image', ogImage || 'https://bolt.new/static/og_default.png', 'property');
    ensureMeta('twitter:card', 'summary_large_image');
    ensureMeta('twitter:title', title);
    ensureMeta('twitter:description', description);

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalPath);

    // Structured data
    const scriptId = 'page-structured-data';
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    if (structuredData) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const sd = document.getElementById(scriptId);
      if (sd) sd.remove();
    };
  }, [title, description, canonicalPath, ogImage, structuredData]);

  return null;
}
