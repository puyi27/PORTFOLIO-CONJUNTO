const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/demo/saas',
  'public/images/demo/creativo',
  'public/images/demo/premium',
  'public/images/demo/tech',
  'public/images/demo/gaming',
  'public/images/demo/inmobiliaria',
];

dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

const files = {
  'saas/hero.jpg': '#05051a',
  'creativo/1.jpg': '#1a0505',
  'premium/hero.jpg': '#111',
  'tech/hero.jpg': '#051a05',
  'gaming/hero.jpg': '#1a051a',
  'inmobiliaria/hero.jpg': '#0a0a0a',
};

for (const [file, color] of Object.entries(files)) {
  const filePath = path.join('public/images/demo', file);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="${color}" />
    <text x="50%" y="50%" fill="#ffffff" font-family="monospace" font-size="24" text-anchor="middle" dominant-baseline="middle" opacity="0.3">${file}</text>
  </svg>`;
  // write as SVG but name it jpg for now to satisfy the hardcoded paths
  fs.writeFileSync(filePath, svg);
}

console.log('Images created');
