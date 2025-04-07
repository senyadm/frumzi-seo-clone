import { writeFileSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

const hostname = process.env.SITE_URL || 'http://localhost:5173';
const sitemap = new SitemapStream({ hostname });

const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  // добавь все свои маршруты сюда
];

routes.forEach(route => {
  sitemap.write({ url: route, changefreq: 'weekly', priority: 0.7 });
});

sitemap.end();

streamToPromise(sitemap).then(data => {
  writeFileSync('./public/sitemap.xml', data.toString());
});
