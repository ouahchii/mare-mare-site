// ===== TRANSLATIONS =====
const translations = {
  fr: {
    "nav.menu": "Menu",
    "nav.gallery": "Photos",
    "nav.contact": "Contact",
    "hero.tagline": "Cuisine méditerranéenne tunisienne, fraîcheur de la mer comme à la maison, depuis 1994.",
    "hero.cta_menu": "Voir le menu",
    "hero.cta_call": "Appeler",
    "about.text": "Depuis le cœur de Sousse, Mare Mar sert une cuisine de la mer simple et généreuse — produits frais, recettes tunisiennes, vue sur l'eau.",
    "about.feat_fresh": "Produits frais",
    "about.feat_tunisian": "Recettes tunisiennes",
    "about.feat_sea": "Vue sur la mer",
    "menu.title": "Notre Menu",
    "menu.placeholder": "Le menu complet arrive bientôt.",
    "gallery.title": "Nos Plats",
    "gallery.placeholder": "Les photos arrivent bientôt.",
    "contact.title": "Nous Trouver",
    "contact.address_label": "Adresse",
    "contact.address_value": "Rue les Palmiers, Khzema Est, Sousse",
    "contact.hours_label": "Horaires",
    "contact.hours_main": "Mar – Dim : 11h30 – 22h30",
    "contact.hours_note": "Lun : 17h00 – 22h30",
    "contact.phone_label": "Téléphone",
    "contact.call": "Appeler",
    "contact.glovo": "Livraison Glovo",
    "contact.maps": "Voir sur Google Maps",
    "contact.facebook": "Facebook",
    "contact.instagram": "Instagram",
    "sticky.call": "Appeler",
    "sticky.directions": "Itinéraire",
    "footer.text": "Mare Mar Ouahchi — Sousse, Tunisie"
  },
  ar: {
    "nav.menu": "القائمة",
    "nav.gallery": "الصور",
    "nav.contact": "تواصل",
    "hero.tagline": "مأكلة متوسطية وتونسية، بنينة كيف في الدار، من 1994",
    "hero.cta_menu": "شاهد القائمة",
    "hero.cta_call": "اتصل بنا",
    "about.text": "من قلب سوسة، يقدم مار مار مأكولات بحرية بسيطة وسخية — منتجات طازجة، أطباق تونسية أصيلة، إطلالة على البحر.",
    "about.feat_fresh": "منتجات طازجة",
    "about.feat_tunisian": "وصفات تونسية",
    "about.feat_sea": "إطلالة على البحر",
    "menu.title": "قائمتنا",
    "menu.placeholder": "القائمة الكاملة ستتوفر قريباً.",
    "gallery.title": "أطباقنا",
    "gallery.placeholder": "الصور ستتوفر قريباً.",
    "contact.title": "موقعنا",
    "contact.address_label": "العنوان",
    "contact.address_value": "شارع النخيل، خزمة الشرقية، سوسة",
    "contact.hours_label": "ساعات العمل",
    "contact.hours_main": "الث – الأح : 11:30 – 22:30",
    "contact.hours_note": "الاثنين : 17:00 – 22:30",
    "contact.phone_label": "الهاتف",
    "contact.call": "اتصل بنا",
    "contact.glovo": "توصيل عبر Glovo",
    "contact.maps": "شاهد على خرائط Google",
    "contact.facebook": "فيسبوك",
    "contact.instagram": "إنستغرام",
    "sticky.call": "اتصل",
    "sticky.directions": "الاتجاهات",
    "footer.text": "مار مار الوحشي — سوسة، تونس"
  },
  en: {
    "nav.menu": "Menu",
    "nav.gallery": "Photos",
    "nav.contact": "Contact",
    "hero.tagline": "Tunisian Mediterranean cuisine — home-style freshness from the sea, since 1994.",
    "hero.cta_menu": "View menu",
    "hero.cta_call": "Call us",
    "about.text": "From the heart of Sousse, Mare Mar serves simple, generous seafood — fresh ingredients, Tunisian recipes, a view of the water.",
    "about.feat_fresh": "Fresh produce",
    "about.feat_tunisian": "Tunisian recipes",
    "about.feat_sea": "Sea view",
    "menu.title": "Our Menu",
    "menu.placeholder": "Full menu coming soon.",
    "gallery.title": "Our Dishes",
    "gallery.placeholder": "Photos coming soon.",
    "contact.title": "Find Us",
    "contact.address_label": "Address",
    "contact.address_value": "Rue les Palmiers, Khzema Est, Sousse",
    "contact.hours_label": "Hours",
    "contact.hours_main": "Tue – Sun: 11:30 – 22:30",
    "contact.hours_note": "Mon: 17:00 – 22:30",
    "contact.phone_label": "Phone",
    "contact.call": "Call us",
    "contact.glovo": "Glovo Delivery",
    "contact.maps": "View on Google Maps",
    "contact.facebook": "Facebook",
    "contact.instagram": "Instagram",
    "sticky.call": "Call",
    "sticky.directions": "Directions",
    "footer.text": "Mare Mar Ouahchi — Sousse, Tunisia"
  }
};

const RTL_LANGS = ["ar"];

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
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

  const saved = localStorage.getItem("mare-mare-lang") || "fr";
  applyLanguage(saved);
});
