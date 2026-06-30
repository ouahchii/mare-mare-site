# Mare Mar Ouahchi — Restaurant Website

## Project overview

Single-page restaurant website for **Mare Mar Ouahchi**, a seafood/Tunisian restaurant in Sousse, Tunisia (Since 1994).

- **Live site:** mare-mar-ouahchi.netlify.app
- **Deploys:** automatically on every push to `main` (Netlify)
- **Stack:** vanilla HTML/CSS/JS — no framework, no build step, no npm

## File structure

```
index.html          main page (all sections)
css/style.css       all styles
js/i18n.js          translation strings + language switching logic
js/main.js          CONFIG (menu data, restaurant details) + rendering logic
```

## Languages

Three languages switchable via buttons, no page reload:
- French (`fr`) — default, LTR
- Arabic (`ar`) — RTL, uses Noto Naskh Arabic (Google Fonts)
- English (`en`) — LTR

Language is persisted in `localStorage` under key `mare-mare-lang`.

## How the menu works

All menu data lives in `CONFIG.menuCategories` in `js/main.js` — an array of category objects, each with `title: {fr, ar, en}` and `items: [{price, name: {fr, ar, en}, desc?: {fr, ar, en}}]`.

`renderMenu()` reads `document.documentElement.lang` to pick the right language and injects HTML into `#menu-grid`. It is called on `DOMContentLoaded` and re-called (via `setTimeout 0`) whenever a language tab is clicked.

## Brand

- **Primary red:** `#6B1020` (deep wine/burgundy — from the official logo)
- **Dark/black:** `#111111`
- **White:** `#FFFFFF`
- **Font (display):** Arial Black / Impact (system) for headings
- **Font (body):** Segoe UI / Helvetica Neue (system)
- **Font (Arabic):** Noto Naskh Arabic (Google Fonts)

Category headers in the menu use a red background bar with white bold text — matching the printed menu aesthetic.

## Restaurant details

- **Phone:** +216 73 244 250 (stored in `CONFIG.phoneDisplay` and `CONFIG.phoneLink`)
- **Address:** Rue les Palmiers, Khzema Est, Sousse
- **Facebook:** MARE_MAR OUAHCHI
- **Glovo URL:** empty — set `CONFIG.glovoUrl` when available (button auto-hides when empty)
- **Google Maps embed:** empty — set `CONFIG.googleMapsEmbedUrl` from Google Maps "Share > Embed"

## What's not done yet

- `CONFIG.glovoUrl` — waiting on Glovo restaurant page link
- `CONFIG.googleMapsEmbedUrl` — waiting on embed URL from Google Maps
- Gallery photos — `CONFIG.galleryImages` is empty; add paths under `assets/` when photos are ready
- WhatsApp removed for now — can be re-added to hero, contact, and sticky bar when ready
- Opening hours — currently "À confirmer" in all languages

## Prices

Prices are in **TND** as printed on the physical menu. Last updated from the 2024 printed menu. If prices change, edit the `price` field on each item in `CONFIG.menuCategories` in `js/main.js`.

## Committing and deploying

```bash
git add .
git commit -m "your message"
git push
```

Netlify auto-redeploys within ~30 seconds of the push.
