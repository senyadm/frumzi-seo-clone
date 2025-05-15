// scripts/generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Замените на ваш домен
const HOSTNAME = 'https://fruuumzi.gr';

// Список всех ваших маршрутов
const routes = ['/', '/app', '/bonus'];

async function buildSitemap() {
  // Создаём поток для записи sitemap
  const sitemapStream = new SitemapStream({ hostname: HOSTNAME });
  const writeStream = createWriteStream(path.resolve(__dirname, '../public/sitemap.xml'));
  sitemapStream.pipe(writeStream);

  routes.forEach(route => {
    sitemapStream.write({ url: route, changefreq: 'weekly', priority: 0.8 });
  });
  sitemapStream.end();

  await streamToPromise(sitemapStream);
  console.log('✅ Sitemap written to public/sitemap.xml');
}

buildSitemap().catch(console.error);
