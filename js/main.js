// ===== RESTAURANT CONFIG =====
// This is the only file you need to edit when real details arrive.
// Phone format: country code + number, no spaces, no leading 00 or +
const CONFIG = {
  whatsappNumber: "21673244250", // confirmed from menu infoline + Facebook page
  phoneDisplay: "+216 73 244 250",
  glovoUrl: "", // ADD when Glovo restaurant page link is available, leave empty to hide button
  googleMapsUrl: "https://maps.google.com/?q=Mare+Mar+Ouahchi+Sousse",
  googleMapsEmbedUrl: "", // ADD embed src URL from Google Maps "Share > Embed" once chosen

  whatsappMessage: {
    fr: "Bonjour, je voudrais commander chez Mare Mar Ouahchi.",
    ar: "السلام عليكم، أريد الطلب من مار مار الوحشي.",
    en: "Hello, I'd like to place an order at Mare Mar Ouahchi."
  },

  // Full menu transcribed from the restaurant's printed menu, 13 categories, ~80 items.
  // Prices are in TND as printed. Category order matches the printed menu layout.
  menuCategories: [
    {
      id: "salades",
      title: { fr: "Les hors d'oeuvre", ar: "السلطات", en: "Starters & salads" },
      items: [
        { price: "7.000", name: { fr: "Salade tunisienne", ar: "سلطة تونسية", en: "Tunisian salad" } },
        { price: "8.500", name: { fr: "Salade mechouia", ar: "سلطة مشوية", en: "Mechouia salad" } },
        { price: "8.000", name: { fr: "Salade variée", ar: "سلطة متنوعة", en: "Mixed salad" } }
      ]
    },
    {
      id: "entrees",
      title: { fr: "Les entrées", ar: "المفتحات", en: "Entrées" },
      items: [
        { price: "8.500", name: { fr: "Chorba frik au poisson", ar: "شربة فريك حوت", en: "Frik soup with fish" } },
        { price: "5.000", name: { fr: "Brik au thon", ar: "بريك بالتن", en: "Tuna brick" } },
        { price: "9.000", name: { fr: "Brik aux fruits de mer", ar: "بريك بغلال البحر", en: "Seafood brick" } },
        { price: "19.500", name: { fr: "Ojja aux merguez", ar: "عجة مرقاز", en: "Ojja with merguez" } },
        { price: "25.000", name: { fr: "Ojja aux fruits de mer", ar: "عجة بغلال البحر", en: "Ojja with seafood" } }
      ]
    },
    {
      id: "fruits-de-mer",
      title: { fr: "Fruits de mer", ar: "غلال البحر", en: "Seafood" },
      items: [
        { price: "23.500", name: { fr: "Calamar doré", ar: "كلمار ذهبي", en: "Golden fried calamari" } },
        { price: "26.500", name: { fr: "Chevrettes sauce à l'ail", ar: "قمبري بصلصة الثوم", en: "Shrimp in garlic sauce" } },
        { price: "26.500", name: { fr: "Chevrettes panées", ar: "قمبري ملفوف", en: "Breaded shrimp" } },
        { price: "35.000", name: { fr: "Mixte mer", ar: "طبق بحري متنوع", en: "Mixed seafood platter" }, desc: { fr: "Dorade ou loup, chevrettes, calamar doré", ar: "وراطة أو قاروص، قمبري، كلمار ذهبي", en: "Sea bream or sea bass, shrimp, golden calamari" } }
      ]
    },
    {
      id: "poisson-du-jour",
      title: { fr: "Poissons du jour", ar: "سمك اليوم", en: "Catch of the day" },
      items: [
        { price: "", name: { fr: "Prix : voir le présentoir", ar: "الثمن حسب العرض", en: "Price: see display" } }
      ]
    },
    {
      id: "volailles",
      title: { fr: "Les volailles", ar: "الطيور", en: "Poultry" },
      items: [
        { price: "23.500", name: { fr: "Mixte volaille", ar: "لحوم طيور متنوعة", en: "Mixed poultry platter" }, desc: { fr: "Escalope panée, escalope grillée, cordon bleu", ar: "إسكالوب مقلي، إسكالوب مشوي، كوردون بلو", en: "Breaded escalope, grilled escalope, cordon bleu" } },
        { price: "16.000", name: { fr: "1/4 poulet rôti", ar: "ربع دجاج محمر", en: "Quarter roast chicken" } },
        { price: "19.500", name: { fr: "1/2 poulet rôti", ar: "نصف دجاج محمر", en: "Half roast chicken" } },
        { price: "20.000", name: { fr: "1/2 poulet grillé", ar: "نصف دجاج مشوي", en: "Half grilled chicken" } },
        { price: "25.000", name: { fr: "Escalope crème de champignons", ar: "إسكالوب بصلصة الفقاع", en: "Escalope with mushroom cream" } },
        { price: "20.000", name: { fr: "Escalope grillée (poulet)", ar: "إسكالوب مشوي (دجاج)", en: "Grilled chicken escalope" } },
        { price: "20.000", name: { fr: "Escalope panée (poulet)", ar: "إسكالوب مقلي (دجاج)", en: "Breaded chicken escalope" } },
        { price: "20.000", name: { fr: "Escalope cordon bleu (dinde)", ar: "إسكالوب الطوق الأزرق (ديك رومي)", en: "Turkey cordon bleu" } },
        { price: "20.000", name: { fr: "Chich taouk (poulet)", ar: "شيش طاووق", en: "Chicken shish taouk" } },
        { price: "20.000", name: { fr: "Steak de dinde", ar: "ستاك مشوي ديك رومي", en: "Turkey steak" } }
      ]
    },
    {
      id: "pizzas",
      title: { fr: "Les pizzas", ar: "بيتزا", en: "Pizzas" },
      items: [
        { price: "12.500", name: { fr: "Margherita", ar: "بيتزا مارغريتا", en: "Margherita" }, desc: { fr: "Tomate, fromage", ar: "طماطم، جبن", en: "Tomato, cheese" } },
        { price: "17.500", name: { fr: "Thon", ar: "بيتزا بالتن", en: "Tuna" }, desc: { fr: "Tomate, fromage, thon, olive, poivron, persil, câpres, oignon", ar: "طماطم، جبن، تن، زيتون، فلفل، بقدونس، كابر، بصل", en: "Tomato, cheese, tuna, olive, pepper, parsley, capers, onion" } },
        { price: "16.000", name: { fr: "4 saisons", ar: "بيتزا 4 فصول", en: "Four seasons" }, desc: { fr: "Tomate, fromage, jambon, champignons, persil, olive", ar: "طماطم، جبن، جامبون، فطر، بقدونس، زيتون", en: "Tomato, cheese, ham, mushrooms, parsley, olive" } },
        { price: "14.500", name: { fr: "Jambon", ar: "بيتزا جامبون", en: "Ham" }, desc: { fr: "Tomate, fromage, jambon, persil, olive", ar: "طماطم، جبن، جامبون، بقدونس، زيتون", en: "Tomato, cheese, ham, parsley, olive" } },
        { price: "15.000", name: { fr: "Pepperoni", ar: "بيتزا بيبروني", en: "Pepperoni" }, desc: { fr: "Tomate, fromage, pepperoni, persil, olive", ar: "طماطم، جبن، بيبروني، بقدونس، زيتون", en: "Tomato, cheese, pepperoni, parsley, olive" } },
        { price: "16.000", name: { fr: "Chawarma", ar: "بيتزا شاورما", en: "Chawarma" }, desc: { fr: "Tomate, fromage, poivron, chawarma, persil, olive", ar: "طماطم، جبن، فلفل، شاورما، بقدونس، زيتون", en: "Tomato, cheese, pepper, shawarma, parsley, olive" } },
        { price: "17.500", name: { fr: "Arabe pizza", ar: "بيتزا بالقفعة", en: "Arabe pizza" }, desc: { fr: "Tomate, fromage, viande achée, olive, persil, oignon, câpres", ar: "طماطم، جبن، لحم مفروم، زيتون، بقدونس، بصل، كابر", en: "Tomato, cheese, minced meat, olive, parsley, onion, capers" } },
        { price: "16.000", name: { fr: "Paysane", ar: "بيتزا بالفقاع", en: "Paysane" }, desc: { fr: "Tomate, fromagen poivron, champignon, oignon, persil, câpres", ar: "طماطم، جبن، فلفل، فطر، بصل، بقدونس، كابر", en: "Tomato, cheese, pepper, mushroom, onion, parsley, capers" } },
        { price: "24.500", name: { fr: "Fruits de mer", ar: "بيتزا بغلال البحر", en: "Seafood" }, desc: { fr: "Tomate, fromage, poivron, fruits de mer, persil, oignon", ar: "طماطم، جبن، فلفل، غلال البحر، بقدونس، بصل", en: "Tomato, cheese, pepper, seafood, parsley, onion" } },
        { price: "22.500", name: { fr: "Mare Mar", ar: "بيتزا ماريمار", en: "Mare Mar" }, desc: { fr: "Tomate, fromage, fruits de mer, olive, jambon, champignon, oeuf", ar: "طماطم، جبن، غلال البحر، زيتون، جامبون، فطر، بيض", en: "Tomato, cheese, seafood, olive, ham, mushroom, egg" } }
      ]
    },
    {
      id: "plats-tunisiens",
      title: { fr: "Plats tunisien", ar: "أطباق تونسية", en: "Tunisian dishes" },
      items: [
        { price: "16.500", name: { fr: "Couscous aux poulet", ar: "كسكسي بالدجاج", en: "Chicken couscous" } },
        { price: "31.000", name: { fr: "Couscous royal (agneau)", ar: "كسكسي ملكي (علوش)", en: "Royal couscous (lamb)" } },
        { price: "22.500", name: { fr: "Couscous osbene (1 pièce)", ar: "كسكسي عصبان (1 عصبان)", en: "Couscous osbene (1 piece)" } },
        { price: "31.500", name: { fr: "Couscous osbene (2 pièces)", ar: "كسكسي عصبان (2 عصبان)", en: "Couscous osbene (2 pieces)" } },
        { price: "31.000", name: { fr: "Couscous osbene & agneau", ar: "كسكسي عصبان و علوش", en: "Couscous osbene & lamb" } },
        { price: "26.500", name: { fr: "Couscous aux poissons", ar: "كسكسي بالحوت", en: "Fish couscous" } },
        { price: "18.500", name: { fr: "Riz jerbi (poulet)", ar: "أرز جربي بالدجاج", en: "Jerbi rice (chicken)" } },
        { price: "23.500", name: { fr: "Kamounia foiet et viande", ar: "كمونية كبدة ولحم", en: "Kamounia liver and meat" } },
        { price: "29.500", name: { fr: "Spaghetti agneau (penne ou fell)", ar: "سباقتي بالعلوش (بلومة أو فل)", en: "Lamb spaghetti (penne or fell)" } }
      ]
    },
    {
      id: "viandes",
      title: { fr: "Les viandes", ar: "اللحوم", en: "Meats" },
      items: [
        { price: "27.500", name: { fr: "Steak grillé", ar: "ستاك مشوي", en: "Grilled steak" } },
        { price: "29.500", name: { fr: "Foie du veau", ar: "كبدة", en: "Veal liver" } },
        { price: "25.000", name: { fr: "Mixte viandes", ar: "لحوم متنوعة", en: "Mixed meat platter" }, desc: { fr: "Steak, steak haché, foie, merguez, 1 cotelette d'agneau", ar: "ستاك، مرقاز، كبدة، لحم مفروم، 1 كتلات علوش", en: "Steak, minced steak, liver, merguez, 1 lamb chop" } }
      ]
    },
    {
      id: "pates",
      title: { fr: "Les pâtes", ar: "المعجنات", en: "Pasta" },
      items: [
        { price: "18.500", name: { fr: "Spaghetti bolognaise", ar: "سباقتي بولونياز", en: "Spaghetti bolognese" } },
        { price: "16.500", name: { fr: "Spaghetti au poulet rôti", ar: "سباقتي بالدجاج المحمر", en: "Spaghetti with roast chicken" } },
        { price: "19.500", name: { fr: "Spaghetti à l'émincé de poulet", ar: "سباقتي بإسكالوب الدجاج", en: "Spaghetti with sliced chicken" } },
        { price: "26.000", name: { fr: "Spaghetti aux fruits de mer", ar: "سباقتي بغلال البحر", en: "Spaghetti with seafood" } },
        { price: "18.500", name: { fr: "Lasagne au four", ar: "لازانيا في الفرن", en: "Baked lasagna" } },
        { price: "26.500", name: { fr: "Riz aux fruits de mer", ar: "أرز بغلال البحر", en: "Rice with seafood" } },
        { price: "29.500", name: { fr: "Paella (pour une personne)", ar: "بايلا (لشخص واحد)", en: "Paella (single portion)" } }
      ]
    },
    {
      id: "burger",
      title: { fr: "Burger", ar: "همبورقر", en: "Burgers" },
      items: [
        { price: "8.500", name: { fr: "Hamburger (poulet panée) & frites", ar: "همبورقر دجاج مقلي وبطاطس مقلية", en: "Hamburger (breaded chicken) & fries" } },
        { price: "9.500", name: { fr: "Hamburger chicken cheese & frites", ar: "همبورقر دجاج مقلي بالجبن", en: "Hamburger chicken cheese & fries" } },
        { price: "11.000", name: { fr: "Big Mac chicken & frites", ar: "همبورقر مزدوج دجاج مقلي وبطاطس مقلية", en: "Big Mac chicken & fries" } },
        { price: "12.500", name: { fr: "Big cheese chicken & frites", ar: "همبورقر مزدوج دجاج بالجبن بطاطس مقلية", en: "Big cheese chicken & fries" } },
        { price: "10.000", name: { fr: "Hamburger & frites", ar: "همبورقر/بطاطا مقلية", en: "Hamburger & fries" } },
        { price: "11.000", name: { fr: "Cheese burger & frites", ar: "همبورقر بالجبن/بطاطا مقلية", en: "Cheeseburger & fries" } },
        { price: "13.000", name: { fr: "Big Mac & frites", ar: "همبورقر مزدوج/بطاطا مقلية", en: "Big Mac & fries" } },
        { price: "14.500", name: { fr: "Big cheese & frites", ar: "همبورقر مزدوج بالجبن/بطاطا مقلية", en: "Big cheese & fries" } },
        { price: "3.500", name: { fr: "Pommes frites", ar: "بطاطا مقلية", en: "French fries" } }
      ]
    },
    {
      id: "sandwichs",
      title: { fr: "Les sandwichs", ar: "سندويتش", en: "Sandwiches" },
      items: [
        { price: "8.500", name: { fr: "Escalope grillé (poulet) & frites", ar: "سندويتش إسكالوب مشوي (دجاج) بطاطا مقلية", en: "Grilled chicken escalope & fries" } },
        { price: "8.500", name: { fr: "Escalope panée (poulet) & frites", ar: "سندويتش إسكالوب مقلي (دجاج) بطاطا مقلية", en: "Breaded chicken escalope & fries" } },
        { price: "8.500", name: { fr: "Chawarma & frites", ar: "سندويتش شاورما بطاطا مقلية", en: "Shawarma & fries" } },
        { price: "8.500", name: { fr: "Cordon bleu & frites", ar: "سندويتش الطوق الأزرق بطاطا مقلية", en: "Cordon bleu & fries" } },
        { price: "11.500", name: { fr: "Foie & frites", ar: "سندويتش كبدة بطاطا مقلية", en: "Liver & fries" } },
        { price: "11.500", name: { fr: "Steak & frites", ar: "سندويتش ستاك بطاطا مقلية", en: "Steak & fries" } },
        { price: "9.000", name: { fr: "Thon & frites", ar: "سندويتش بالتن بطاطا مقلية", en: "Tuna & fries" } },
        { price: "10.000", name: { fr: "Makloub escalope grillé (poulet) & frites", ar: "مقلوب إسكالوب مشوي (دجاج) بطاطا مقلية", en: "Makloub grilled chicken escalope & fries" } },
        { price: "10.000", name: { fr: "Makloub escalope panée (poulet) & frites", ar: "مقلوب إسكالوب مقلي (دجاج) بطاطا مقلية", en: "Makloub breaded chicken escalope & fries" } },
        { price: "10.000", name: { fr: "Makloub chawarma & frites", ar: "مقلوب شاورما بطاطا مقلية", en: "Makloub shawarma & fries" } },
        { price: "10.000", name: { fr: "Makloub cordon bleu & frites", ar: "مقلوب الطوق الأزرق بطاطا مقلية", en: "Makloub cordon bleu & fries" } },
        { price: "13.000", name: { fr: "Makloub foie ou steak & frites", ar: "مقلوب كبدة أو ستاك بطاطا مقلية", en: "Makloub liver or steak & fries" } }
      ]
    },
    {
      id: "calzone",
      title: { fr: "Calzone", ar: "كلزوني", en: "Calzone" },
      items: [
        { price: "8.000", name: { fr: "Calzone au thon", ar: "كلزوني بالتن", en: "Tuna calzone" } },
        { price: "8.000", name: { fr: "Calzone escalope ou chawarma", ar: "كلزوني بالسكالوب أو بالشاورما", en: "Escalope or shawarma calzone" } },
        { price: "11.000", name: { fr: "Calzone aux fruits de mer", ar: "كلزوني بغلال البحر", en: "Seafood calzone" } }
      ]
    }
  ],

  // Gallery images: just file paths once photos are added to /assets
  galleryImages: [
    // "assets/photo1.jpg",
    // "assets/photo2.jpg",
  ]
};

function buildWhatsappLink(lang) {
  const msg = CONFIG.whatsappMessage[lang] || CONFIG.whatsappMessage.fr;
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

function renderMenu() {
  const grid = document.getElementById("menu-grid");
  if (!CONFIG.menuCategories || !CONFIG.menuCategories.length) return; // keep placeholder visible

  grid.innerHTML = "";
  const lang = document.documentElement.lang || "fr";

  CONFIG.menuCategories.forEach(category => {
    const catEl = document.createElement("div");
    catEl.className = "menu-category";

    const heading = document.createElement("h3");
    heading.className = "menu-category-title";
    heading.textContent = category.title[lang] || category.title.fr;
    catEl.appendChild(heading);

    const itemsWrap = document.createElement("div");
    itemsWrap.className = "menu-category-items";

    category.items.forEach(item => {
      const el = document.createElement("div");
      el.className = "menu-item";
      const priceHtml = item.price ? `<span class="menu-item-price">${item.price} TND</span>` : "";
      const descHtml = item.desc ? `<p class="menu-item-desc">${item.desc[lang] || item.desc.fr}</p>` : "";
      el.innerHTML = `
        <div class="menu-item-row">
          <span class="menu-item-name">${item.name[lang] || item.name.fr}</span>
          ${priceHtml}
        </div>
        ${descHtml}
      `;
      itemsWrap.appendChild(el);
    });

    catEl.appendChild(itemsWrap);
    grid.appendChild(catEl);
  });
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!CONFIG.galleryImages.length) return; // keep placeholder visible

  grid.innerHTML = "";
  CONFIG.galleryImages.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Mare Mare";
    img.loading = "lazy";
    grid.appendChild(img);
  });
}

function wireContactLinks() {
  const currentLang = () => document.documentElement.lang || "fr";

  ["hero-whatsapp", "contact-whatsapp", "sticky-whatsapp"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", e => {
      e.preventDefault();
      window.open(buildWhatsappLink(currentLang()), "_blank");
    });
  });

  const callBtn = document.getElementById("sticky-call");
  if (callBtn) callBtn.href = `tel:+${CONFIG.whatsappNumber}`;

  document.getElementById("contact-phone").textContent = CONFIG.phoneDisplay;

  const mapsLinks = ["contact-maps", "sticky-maps"];
  mapsLinks.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = CONFIG.googleMapsUrl;
  });

  const glovoBtn = document.getElementById("contact-glovo");
  if (glovoBtn) {
    if (CONFIG.glovoUrl) {
      glovoBtn.href = CONFIG.glovoUrl;
    } else {
      glovoBtn.style.display = "none";
    }
  }

  const mapEmbed = document.getElementById("map-embed");
  if (CONFIG.googleMapsEmbedUrl) {
    mapEmbed.innerHTML = `<iframe src="${CONFIG.googleMapsEmbedUrl}" width="100%" height="320" style="border:0; border-radius:14px;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  } else {
    mapEmbed.textContent = "Carte Google Maps à venir";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  wireContactLinks();
  renderMenu();
  renderGallery();
});

// Re-render menu/gallery text when language changes (names need to update too)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      setTimeout(() => { renderMenu(); }, 0);
    });
  });
});
