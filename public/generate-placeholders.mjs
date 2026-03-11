// Run this script once to generate placeholder images:
// node public/generate-placeholders.mjs
// Then delete this file. Or just replace the images manually.

import { writeFileSync } from 'fs'

// 1x1 px gradient PNG (base64) — used as tiny placeholder
// Replace with real images before deploying

const svgProfile = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
  </defs>
  <rect width="400" height="500" fill="url(#g)"/>
  <circle cx="200" cy="180" r="80" fill="rgba(255,255,255,0.3)"/>
  <ellipse cx="200" cy="420" rx="130" ry="100" fill="rgba(255,255,255,0.2)"/>
  <text x="200" y="490" font-family="sans-serif" font-size="14" fill="rgba(255,255,255,0.6)" text-anchor="middle">Profile Photo</text>
</svg>`

const svgProject = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <defs>
    <linearGradient id="pg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#pg)"/>
  <rect x="60" y="40" width="680" height="370" rx="8" fill="rgba(99,102,241,0.1)" stroke="rgba(99,102,241,0.3)" stroke-width="1"/>
  <circle cx="88" cy="68" r="8" fill="#ef4444"/>
  <circle cx="112" cy="68" r="8" fill="#f59e0b"/>
  <circle cx="136" cy="68" r="8" fill="#22c55e"/>
  <rect x="76" y="88" width="648" height="302" rx="4" fill="rgba(15,23,42,0.8)"/>
  <text x="400" y="240" font-family="monospace" font-size="18" fill="rgba(99,102,241,0.8)" text-anchor="middle">[ Project Screenshot ]</text>
  <text x="400" y="268" font-family="monospace" font-size="12" fill="rgba(148,163,184,0.5)" text-anchor="middle">Replace with actual project image</text>
</svg>`

writeFileSync('./profile-placeholder.jpg', svgProfile)
writeFileSync('./project-placeholder.jpg', svgProject)

console.log('✓ Placeholder images generated in /public')
console.log('  Replace profile-placeholder.jpg and project-placeholder.jpg with real images.')
