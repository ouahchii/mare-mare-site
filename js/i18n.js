// ===== TRANSLATIONS =====
// Edit the strings below directly once final wording is confirmed.
const translations = {
  fr: {
    "hero.eyebrow": "Sousse, Tunisie",
    "hero.tagline": "Cuisine de la mer, face à la mer",
    "hero.cta_menu": "Voir le menu",
    "hero.cta_order": "Commander sur WhatsApp",
    "about.text": "Depuis le cœur de Sousse, Mare Mare sert une cuisine de la mer simple et généreuse — produits frais, recettes tunisiennes, vue sur l'eau.",
    "menu.title": "Notre Menu",
    "menu.placeholder": "Le menu complet arrive bientôt.",
    "gallery.title": "L'Ambiance",
    "gallery.placeholder": "Les photos arrivent bientôt.",
    "contact.title": "Nous Trouver",
    "contact.address_label": "Adresse",
    "contact.address_value": "Ouahchi, Sousse, Tunisie",
    "contact.hours_label": "Horaires",
    "contact.hours_value": "À confirmer",
    "contact.phone_label": "Téléphone",
    "contact.whatsapp": "Commander sur WhatsApp",
    "contact.glovo": "Livraison Glovo",
    "contact.maps": "Voir sur Google Maps",
    "sticky.whatsapp": "WhatsApp",
    "sticky.call": "Appeler",
    "sticky.directions": "Itinéraire",
    "footer.text": "Mare Mare — Sousse, Tunisie"
  },
  ar: {
    "hero.eyebrow": "سوسة، تونس",
    "hero.tagline": "مأكولات بحرية، أمام البحر",
    "hero.cta_menu": "شاهد القائمة",
    "hero.cta_order": "اطلب عبر واتساب",
    "about.text": "من قلب سوسة، يقدم مار مار مأكولات بحرية بسيطة وسخية — منتجات طرية، أطباق تونسية أصيلة، إطلالة على البحر.",
    "menu.title": "قائمتنا",
    "menu.placeholder": "القائمة الكاملة ستتوفر قريباً.",
    "gallery.title": "الجو العام",
    "gallery.placeholder": "الصور ستتوفر قريباً.",
    "contact.title": "موقعنا",
    "contact.address_label": "العنوان",
    "contact.address_value": "وعاشي، سوسة، تونس",
    "contact.hours_label": "ساعات العمل",
    "contact.hours_value": "قريباً",
    "contact.phone_label": "الهاتف",
    "contact.whatsapp": "اطلب عبر واتساب",
    "contact.glovo": "توصيل عبر Glovo",
    "contact.maps": "شاهد على خرائط Google",
    "sticky.whatsapp": "واتساب",
    "sticky.call": "اتصل",
    "sticky.directions": "الاتجاهات",
    "footer.text": "مار مار — سوسة، تونس"
  },
  en: {
    "hero.eyebrow": "Sousse, Tunisia",
    "hero.tagline": "Seaside dining, by the sea",
    "hero.cta_menu": "View menu",
    "hero.cta_order": "Order on WhatsApp",
    "about.text": "From the heart of Sousse, Mare Mare serves simple, generous seafood — fresh ingredients, Tunisian recipes, a view of the water.",
    "menu.title": "Our Menu",
    "menu.placeholder": "Full menu coming soon.",
    "gallery.title": "The Atmosphere",
    "gallery.placeholder": "Photos coming soon.",
    "contact.title": "Find Us",
    "contact.address_label": "Address",
    "contact.address_value": "Ouahchi, Sousse, Tunisia",
    "contact.hours_label": "Hours",
    "contact.hours_value": "Coming soon",
    "contact.phone_label": "Phone",
    "contact.whatsapp": "Order on WhatsApp",
    "contact.glovo": "Glovo Delivery",
    "contact.maps": "View on Google Maps",
    "sticky.whatsapp": "WhatsApp",
    "sticky.call": "Call",
    "sticky.directions": "Directions",
    "footer.text": "Mare Mare — Sousse, Tunisia"
  }
};

const RTL_LANGS = ["ar"];

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
  document.body.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

  document.querySelectorAll(".lang-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.lang === lang);
  });

  localStorage.setItem("mare-mare-lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-tab").forEach(tab => {
    tab.addEventListener("click", () => applyLanguage(tab.dataset.lang));
  });

  const saved = localStorage.getItem("mare-mare-lang");
  applyLanguage(saved || "fr");
});
