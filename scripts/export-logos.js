import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Icon SVG template
const iconSvg = `
<svg width="512" height="512" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="spine-grad" x1="10" y1="8" x2="20" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#4285f4" />
      <stop offset="50%" stop-color="#1a73e8" />
      <stop offset="100%" stop-color="#0d47a1" />
    </linearGradient>
    <linearGradient id="loop-grad" x1="16" y1="8" x2="40" y2="28" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="40%" stop-color="#1a73e8" />
      <stop offset="100%" stop-color="#0f4bb8" />
    </linearGradient>
    <linearGradient id="kick-grad" x1="22" y1="23" x2="42" y2="41" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#4ade80" />
      <stop offset="50%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
    <linearGradient id="badge-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0b1329" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
  </defs>
  <rect x="1.5" y="1.5" width="45" height="45" rx="13" fill="url(#badge-bg)" stroke="#1a73e8" stroke-width="1.2" stroke-opacity="0.4" />
  <circle cx="24" cy="24" r="16" fill="#1a73e8" fill-opacity="0.18" />
  <path d="M11 11.5C11 9.567 12.567 8 14.5 8H17C18.933 8 20.5 9.567 20.5 11.5V36.5C20.5 38.433 18.933 40 17 40H14.5C12.567 40 11 38.433 11 36.5V11.5Z" fill="url(#spine-grad)" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17 8H28C34.075 8 39 12.253 39 17.5C39 22.747 34.075 27 28 27H17V8ZM20.5 14H27.5C30.538 14 33 15.567 33 17.5C33 19.433 30.538 21 27.5 21H20.5V14Z" fill="url(#loop-grad)" />
  <path d="M23 23.5C23.8 23.5 24.5 23.9 25 24.6L36.2 38.4C36.9 39.3 36.2 40 35.1 40H29.8C29.1 40 28.5 39.6 28 39L18.8 26.8C18.4 26.2 18.7 25.5 19.4 25.5H23V23.5Z" fill="url(#kick-grad)" />
  <circle cx="26.5" cy="17.5" r="2.6" fill="#38bdf8" />
  <circle cx="26.5" cy="17.5" r="1.2" fill="#ffffff" />
</svg>
`;

// 2. Horizontal Logo SVG (Light Background / Transparent)
const horizontalSvgLight = `
<svg width="1200" height="360" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="h-spine" x1="10" y1="8" x2="20" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#4285f4" />
      <stop offset="50%" stop-color="#1a73e8" />
      <stop offset="100%" stop-color="#0d47a1" />
    </linearGradient>
    <linearGradient id="h-loop" x1="16" y1="8" x2="40" y2="28" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="40%" stop-color="#1a73e8" />
      <stop offset="100%" stop-color="#0f4bb8" />
    </linearGradient>
    <linearGradient id="h-kick" x1="22" y1="23" x2="42" y2="41" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#4ade80" />
      <stop offset="50%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
    <linearGradient id="h-badge" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0b1329" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="text-blue" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1a73e8" />
      <stop offset="100%" stop-color="#0052cc" />
    </linearGradient>
  </defs>

  <!-- Icon scaled and positioned at (20, 20) with size 80x80 -->
  <g transform="translate(20, 20) scale(1.6667)">
    <rect x="1.5" y="1.5" width="45" height="45" rx="13" fill="url(#h-badge)" stroke="#1a73e8" stroke-width="1.2" stroke-opacity="0.4" />
    <circle cx="24" cy="24" r="16" fill="#1a73e8" fill-opacity="0.18" />
    <path d="M11 11.5C11 9.567 12.567 8 14.5 8H17C18.933 8 20.5 9.567 20.5 11.5V36.5C20.5 38.433 18.933 40 17 40H14.5C12.567 40 11 38.433 11 36.5V11.5Z" fill="url(#h-spine)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 8H28C34.075 8 39 12.253 39 17.5C39 22.747 34.075 27 28 27H17V8ZM20.5 14H27.5C30.538 14 33 15.567 33 17.5C33 19.433 30.538 21 27.5 21H20.5V14Z" fill="url(#h-loop)" />
    <path d="M23 23.5C23.8 23.5 24.5 23.9 25 24.6L36.2 38.4C36.9 39.3 36.2 40 35.1 40H29.8C29.1 40 28.5 39.6 28 39L18.8 26.8C18.4 26.2 18.7 25.5 19.4 25.5H23V23.5Z" fill="url(#h-kick)" />
    <circle cx="26.5" cy="17.5" r="2.6" fill="#38bdf8" />
    <circle cx="26.5" cy="17.5" r="1.2" fill="#ffffff" />
  </g>

  <!-- Typography -->
  <text x="120" y="66" font-family="Plus Jakarta Sans, Inter, sans-serif" font-size="38" font-weight="800" fill="#191c20" letter-spacing="-0.03em">Ricks <tspan fill="url(#text-blue)">Marketing</tspan></text>
  <text x="122" y="90" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#45474e" letter-spacing="0.08em">GOOGLE PARTNER SPECIALIST</text>
</svg>
`;

// 3. Horizontal Logo SVG for Dark Background
const horizontalSvgDark = `
<svg width="1200" height="360" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hd-spine" x1="10" y1="8" x2="20" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#4285f4" />
      <stop offset="50%" stop-color="#1a73e8" />
      <stop offset="100%" stop-color="#0d47a1" />
    </linearGradient>
    <linearGradient id="hd-loop" x1="16" y1="8" x2="40" y2="28" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="40%" stop-color="#1a73e8" />
      <stop offset="100%" stop-color="#0f4bb8" />
    </linearGradient>
    <linearGradient id="hd-kick" x1="22" y1="23" x2="42" y2="41" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#4ade80" />
      <stop offset="50%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
    <linearGradient id="hd-badge" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="hd-text-blue" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#60a5fa" />
    </linearGradient>
  </defs>

  <rect width="400" height="120" rx="16" fill="#0b1329" />

  <!-- Icon scaled and positioned at (20, 20) with size 80x80 -->
  <g transform="translate(20, 20) scale(1.6667)">
    <rect x="1.5" y="1.5" width="45" height="45" rx="13" fill="url(#hd-badge)" stroke="#38bdf8" stroke-width="1.2" stroke-opacity="0.5" />
    <circle cx="24" cy="24" r="16" fill="#1a73e8" fill-opacity="0.25" />
    <path d="M11 11.5C11 9.567 12.567 8 14.5 8H17C18.933 8 20.5 9.567 20.5 11.5V36.5C20.5 38.433 18.933 40 17 40H14.5C12.567 40 11 38.433 11 36.5V11.5Z" fill="url(#hd-spine)" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 8H28C34.075 8 39 12.253 39 17.5C39 22.747 34.075 27 28 27H17V8ZM20.5 14H27.5C30.538 14 33 15.567 33 17.5C33 19.433 30.538 21 27.5 21H20.5V14Z" fill="url(#hd-loop)" />
    <path d="M23 23.5C23.8 23.5 24.5 23.9 25 24.6L36.2 38.4C36.9 39.3 36.2 40 35.1 40H29.8C29.1 40 28.5 39.6 28 39L18.8 26.8C18.4 26.2 18.7 25.5 19.4 25.5H23V23.5Z" fill="url(#hd-kick)" />
    <circle cx="26.5" cy="17.5" r="2.6" fill="#38bdf8" />
    <circle cx="26.5" cy="17.5" r="1.2" fill="#ffffff" />
  </g>

  <!-- Typography -->
  <text x="120" y="66" font-family="Plus Jakarta Sans, Inter, sans-serif" font-size="38" font-weight="800" fill="#ffffff" letter-spacing="-0.03em">Ricks <tspan fill="url(#hd-text-blue)">Marketing</tspan></text>
  <text x="122" y="90" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#94a3b8" letter-spacing="0.08em">GOOGLE PARTNER SPECIALIST</text>
</svg>
`;

function renderAndSave(svgString, filename, targetWidth) {
  const resvg = new Resvg(svgString, {
    fitTo: targetWidth ? { mode: 'width', value: targetWidth } : { mode: 'original' },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  const filePath = path.join(publicDir, filename);
  fs.writeFileSync(filePath, pngBuffer);
  console.log(`Saved ${filename} (${pngBuffer.length} bytes)`);
}

// Generate multiple sizes and variations:
// 1. Icon symbol PNGs (square, transparent background)
renderAndSave(iconSvg, 'ricks-logo-icone-512.png', 512);
renderAndSave(iconSvg, 'ricks-logo-icone-1024.png', 1024);
renderAndSave(iconSvg, 'ricks-logo-icone-2048.png', 2048);
renderAndSave(iconSvg, 'logo-icon.png', 512);

// 2. Horizontal logo PNG (Transparent background)
renderAndSave(horizontalSvgLight, 'ricks-logo-completo-transparente.png', 1600);
renderAndSave(horizontalSvgLight, 'logo.png', 1200);

// 3. Horizontal logo PNG (Dark background version for dark headers / banners)
renderAndSave(horizontalSvgDark, 'ricks-logo-completo-fundo-escuro.png', 1600);

console.log('All PNG logos generated successfully into /public!');
