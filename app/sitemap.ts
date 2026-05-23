import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.laculverde.com'
  return [
    { url: base,                      lastModified: new Date(), priority: 1 },
    { url: `${base}/specii`,          lastModified: new Date(), priority: 0.8 },
    { url: `${base}/pret`,            lastModified: new Date(), priority: 0.8 },
    { url: `${base}/capturi`,         lastModified: new Date(), priority: 0.6 },
    { url: `${base}/contact`,         lastModified: new Date(), priority: 0.7 },
    { url: `${base}/regulament`,      lastModified: new Date(), priority: 0.5 },
  ]
}
