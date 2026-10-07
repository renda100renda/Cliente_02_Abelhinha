const fs = require('fs');

// 1) Decodifica chunks base64 -> arquivos de imagem reais
const cat = p => fs.readdirSync('assets')
  .filter(f => f.startsWith(p))
  .sort()
  .map(f => fs.readFileSync('assets/' + f, 'utf8'))
  .join('');
const dec = (p, o) => fs.writeFileSync(o, Buffer.from(cat(p), 'base64'));
dec('mascote-p0', 'out/assets/mascote.webp');
dec('og-p0', 'out/og-image.jpg');
dec('favicon-p0', 'out/favicon.png');

// 2) Reescreve index.html: URLs de imagem do Drive -> assets locais
const ID = '12UP8aILJkikWd1MktRewLs7dsTqyJ99E';
const DRV = 'https://lh3.googleusercontent.com/d/' + ID;
let html = fs.readFileSync('index.html', 'utf8');
html = html.split(DRV + '=w64').join('favicon.png');
html = html.split(DRV + '=w400').join('assets/mascote.webp');
html = html.split(DRV + '=w1200').join('https://cliente-02-abelhinha.vercel.app/og-image.jpg');
html = html.split(DRV).join('assets/mascote.webp');
fs.writeFileSync('out/index.html', html);

const left = (html.match(/lh3\.googleusercontent\.com/g) || []).length;
console.log('build-images OK | refs drive restantes no html:', left);
