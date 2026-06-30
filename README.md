# Mare Mar Ouahchi — Restaurant Website

Website for **Mare Mar Ouahchi**, a seafood and Tunisian restaurant in Sousse, Tunisia, since 1994.

**Live site:** [mare-mar-ouahchi.netlify.app](https://mare-mar-ouahchi.netlify.app)

## Stack

Vanilla HTML/CSS/JS — no framework, no build step, no npm.

## File structure

```
index.html              main page (all sections)
css/style.css           all styles
js/i18n.js              translation strings + language switching
js/main.js              CONFIG (menu data, restaurant info) + rendering
assets/
  logo/                 logo-light.png, logo-dark.png
  icons/                favicon.svg
  gallery/              restaurant and food photos
```

## Languages

French (default), Arabic (RTL), and English — switchable without page reload. Language is persisted in `localStorage`.

## Menu data

All menu content lives in `CONFIG.menuCategories` in `js/main.js`. Each category has a `title` and `items` array with `price`, `name`, and optional `desc` — all in `{fr, ar, en}` format. Edit prices and items there directly.

## Restaurant config

All contact info, URLs, and toggleable features are in the `CONFIG` object at the top of `js/main.js`:

| Key | Description |
|-----|-------------|
| `phoneDisplay` / `phoneLink` | Phone number shown and dialed |
| `glovoUrl` | Glovo order link (button hidden when empty) |
| `googleMapsEmbedUrl` | Google Maps embed (from Share > Embed) |
| `galleryImages` | Array of image paths under `assets/` |

## Deploy

Netlify auto-deploys on every push to `main`:

```bash
git add .
git commit -m "your message"
git push
```
