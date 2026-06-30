I'm building a restaurant website for Mare Mar Ouahchi, a seafood/Tunisian restaurant in Sousse, Tunisia. The project is already built and deployed — I need help debugging and continuing it, not starting over.

CONTEXT:
- Single-page site, vanilla HTML/CSS/JS (no framework, no build step)
- Three languages: French, Arabic (RTL), English — switched via buttons, no page reload
- Files: index.html, css/style.css, js/i18n.js (translation dictionary + language switching), js/main.js (CONFIG object with restaurant details, full menu data, and rendering logic for menu/gallery/contact links)
- Real menu is already transcribed into CONFIG.menuCategories in main.js — 12 categories, ~76 items, each with fr/ar/en names
- Deployed via GitHub repo "mare-mare-site" -> Netlify, live at mare-mar-ouahchi.netlify.app, auto-redeploys on every push to main

CURRENT ISSUE TO DEBUG:
When viewing the deployed site through what appears to be a browser reader/accessibility view, the page showed unstyled text and the menu placeholder text ("Le menu complet arrive bientôt") instead of the real 76-item menu. This suggests one of two things: either it was just a reader-mode rendering (which strips CSS/JS, so this would be expected and not a real bug), or there's an actual issue where the JavaScript in main.js isn't executing/rendering on the real site. 

Please open index.html, css/style.css, js/main.js, and js/i18n.js, and:
1. Check that the script tags in index.html correctly reference js/i18n.js and js/main.js with correct relative paths
2. Check that renderMenu() in main.js is being called on DOMContentLoaded and is correctly populating #menu-grid from CONFIG.menuCategories
3. Ideally run it with Live Server (or equivalent) and open the actual browser dev tools console to check for any JavaScript errors that would prevent rendering
4. Confirm whether this looks like it would work correctly in a normal browser view, separate from any reader-mode question

STILL TODO after this is resolved:
- CONFIG.glovoUrl and CONFIG.googleMapsEmbedUrl are still empty placeholders — need real values once available
- CONFIG.phoneDisplay/whatsappNumber are already set to the real number (+216 73 244 250)
- Gallery section has no photos yet (CONFIG.galleryImages is empty)

Once you've confirmed the code is correct, walk me through committing and pushing any fixes via the Source Control panel so Netlify redeploys automatically.
