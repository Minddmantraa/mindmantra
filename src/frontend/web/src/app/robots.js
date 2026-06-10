export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/'],
      },
    ],
    sitemap: 'https://mindmantraa.com/sitemap.xml',
    host: 'https://mindmantraa.com',
  };
}
