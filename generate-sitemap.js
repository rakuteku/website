const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'https://rakuteku.com';
const PAGES = [
  '',              // root
  'index.html',    // main page
  '/category/bouhan-kamera/okam.html',
  '/category/dendou-ponpu/216.html',
  '/category/drones/category_drones.html',
  '/category/drones/dji_neo.html',
  '/category/drones/hoverair.html',
  '/category/gimbal-camera/feiyuTechPocket2.html',
  '/category/hochouki/category_hochouki.html',
  '/category/hochouki/denchi.html',
  '/category/hochouki/juden.html',
  '/category/mini-camera/a9.html',
  '/category/mini-camera/c1.html',
  '/category/mini-camera/category_mini_camera.html',
  '/category/mini-camera/cube.html',
  '/category/sumaho-jinbaru/aochuan-smart-xe.html',
  '/category/trail-camera/dl001.html',
  '/naire/borupen-eng.html',
  '/naire/borupen.html',
  '/naire/detail-j1001-eng.html',
  '/naire/detail-j1001.html',
  '/naire/detail-m1001-eng.html',
  '/naire/detail-m1001.html',
  '/naire/detail-m3001-eng.html',
  '/naire/detail-m3001.html',
  '/naire/detail-q1001-eng.html',
  '/naire/detail-q1001.html',
];

// Generate sitemap.xml content
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">
${PAGES.map(page => {
  const cleanPath = page.replace(/^\/|\/$/g, ''); // Remove leading/trailing slashes
  const isHomePage = page === '' || page === 'index.html';
  const url = cleanPath ? `${BASE_URL}/${cleanPath}` : BASE_URL;
  
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${isHomePage ? 'weekly' : 'monthly'}</changefreq>
    <priority>${isHomePage ? 1.0 : 0.8}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

// Write to file
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapContent);
console.log('✅ Sitemap generated with', PAGES.length, 'pages!');