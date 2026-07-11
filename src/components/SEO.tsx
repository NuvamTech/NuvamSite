import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

const SITE_NAME = 'NUVAM Tech';
const DEFAULT_OG_IMAGE = '/meta.png';
const BASE_URL = 'https://nuvam.in';

const DEFAULT_KEYWORDS = 'Nuvam Infotech, Nuvam Tech, software companies, software development company, custom software development, IT consulting';

/**
 * SEO component — sets document title and all meta tags dynamically.
 * Drop-in on any page: <SEO title="..." description="..." />
 */
export function SEO({
  title,
  description,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  canonical,
  noindex = false,
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : `${BASE_URL}${window.location.pathname}`;
  const mergedKeywords = keywords ? `${keywords}, ${DEFAULT_KEYWORDS}` : DEFAULT_KEYWORDS;

  useEffect(() => {
    // --- Title ---
    document.title = fullTitle;

    // --- Helper to upsert a <meta> tag ---
    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        const attr = selector.includes('[name=') ? 'name' : 'property';
        const val = selector.replace(/.*=["']?([^"'\]]+)["']?\]/, '$1');
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // --- Helper to upsert a <link> tag ---
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    setMeta('[name="description"]', description);
    setMeta('[name="keywords"]', mergedKeywords);
    setMeta('[name="robots"]', noindex ? 'noindex,nofollow' : 'index,follow');

    // Open Graph
    setMeta('[property="og:title"]', fullTitle);
    setMeta('[property="og:description"]', description);
    setMeta('[property="og:type"]', ogType);
    setMeta('[property="og:url"]', canonicalUrl);
    setMeta('[property="og:image"]', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);
    setMeta('[property="og:site_name"]', SITE_NAME);
    setMeta('[property="og:locale"]', 'en_US');

    // Twitter Card
    setMeta('[name="twitter:card"]', 'summary_large_image');
    setMeta('[name="twitter:title"]', fullTitle);
    setMeta('[name="twitter:description"]', description);
    setMeta('[name="twitter:image"]', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);

    // Canonical
    setLink('canonical', canonicalUrl);

    return () => {
      // Reset to defaults on unmount
      document.title = SITE_NAME;
    };
  }, [fullTitle, description, mergedKeywords, ogImage, ogType, canonicalUrl, noindex]);

  return null;
}
