// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const HOSTNAME = 'https://fruuumzi.gr';
const routes = ['/', '/app', '/bonus'];

async function build() {
  const sitemap = new SitemapStream({ hostname: HOSTNAME });
  const out = createWriteStream(resolve(process.cwd(), 'public/sitemap.xml'));
  sitemap.pipe(out);
  for (const url of routes) {
    sitemap.write({ url, changefreq: 'weekly', priority: 0.8 });
  }
  sitemap.end();
  await streamToPromise(sitemap);
  console.log('✅ sitemap.xml generated');
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
