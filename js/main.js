let menuTabObserver = null;

// ===== RESTAURANT CONFIG =====
const CONFIG = {
  phoneDisplay: "+216 73 244 250",
  phoneLink: "tel:+21673244250",
  glovoUrl: "",           // ADD when available — leave empty to hide button
  googleMapsUrl: "https://maps.app.goo.gl/DXmjEQfioW4HURas9",
  googleMapsEmbedUrl: "", // ADD embed src from Google Maps "Share > Embed"
  facebookUrl: "https://www.facebook.com/Mare.mar.ouahchi/",
  instagramUrl: "https://www.instagram.com/restaurant.ouahchi/",

  // Prices corrected from printed menu (2024 version)
  menuCategories: [
    {
      id: "salades",
      title: { fr: "Les hors d'oeuvre", ar: "السلاطات", en: "Starters & salads" },
      items: [
        { price: "7.500", name: { fr: "Salade tunisienne", ar: "سلطة تونسية", en: "Tunisian salad" } },
        { price: "9.000", name: { fr: "Salade mechouia", ar: "سلطة مشوية", en: "Mechouia salad" } },
        { price: "8.500", name: { fr: "Salade variée", ar: "سلطة متنوعة", en: "Mixed salad" } }
      ]
    },
    {
      id: "entrees",
      title: { fr: "Les entrées", ar: "المفتحات", en: "Entrées" },
      items: [
        { price: "9.500", name: { fr: "Chorba frik au poisson", ar: "شربة فريك حوت", en: "Frik soup with fish" } },
        { price: "5.000", name: { fr: "Brik au thon", ar: "بريك بالتن", en: "Tuna brick" } },
        { price: "10.000", name: { fr: "Brik aux fruits de mer", ar: "بريك بغلال البحر", en: "Seafood brick" } },
        { price: "22.000", name: { fr: "Ojja aux merguez", ar: "عجة مرقاز", en: "Ojja with merguez" } },
        { price: "27.000", name: { fr: "Ojja aux fruits de mer", ar: "عجة بغلال البحر", en: "Ojja with seafood" } }
      ]
    },
    {
      id: "fruits-de-mer",
      title: { fr: "Fruits de mer", ar: "غلال البحر", en: "Seafood" },
      items: [
        { price: "26.000", name: { fr: "Calamar doré", ar: "كلمار ذهبي", en: "Golden fried calamari" } },
        { price: "28.000", name: { fr: "Chevrettes sauce à l'ail", ar: "قمبري بصلصة الثوم", en: "Shrimp in garlic sauce" } },
        { price: "28.000", name: { fr: "Chevrettes panées", ar: "قمبري ملفوف", en: "Breaded shrimp" } },
        { price: "37.500", name: { fr: "Mixte mer", ar: "طبق بحري متنوع", en: "Mixed seafood platter" }, desc: { fr: "Dorade ou loup, chevrettes, calamar doré", ar: "وراطة أو قاروص، قمبري، كلمار ذهبي", en: "Sea bream or sea bass, shrimp, golden calamari" } }
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
        { price: "25.500", name: { fr: "Mixte volaille", ar: "لحوم طيور متنوعة", en: "Mixed poultry platter" }, desc: { fr: "Escalope panée, escalope grillée, cordon bleu", ar: "إسكالوب مقلي، إسكالوب مشوي، كوردون بلو", en: "Breaded escalope, grilled escalope, cordon bleu" } },
        { price: "17.000", name: { fr: "1/4 poulet rôti", ar: "ربع دجاج محمر", en: "Quarter roast chicken" } },
        { price: "21.000", name: { fr: "1/2 poulet rôti", ar: "نصف دجاج محمر", en: "Half roast chicken" } },
        { price: "21.500", name: { fr: "1/2 poulet grillé", ar: "نصف دجاج مشوي", en: "Half grilled chicken" } },
        { price: "27.000", name: { fr: "Escalope crème de champignons", ar: "إسكالوب بصلصة الفقاع", en: "Escalope with mushroom cream" } },
        { price: "22.000", name: { fr: "Escalope grillée (poulet)", ar: "إسكالوب مشوي (دجاج)", en: "Grilled chicken escalope" } },
        { price: "22.000", name: { fr: "Escalope panée (poulet)", ar: "إسكالوب مقلي (دجاج)", en: "Breaded chicken escalope" } },
        { price: "22.000", name: { fr: "Escalope cordon bleu (dinde)", ar: "إسكالوب الطوق الأزرق (ديك رومي)", en: "Turkey cordon bleu" } },
        { price: "22.000", name: { fr: "Chich taouk (poulet)", ar: "شيش طاووق", en: "Chicken shish taouk" } },
        { price: "22.000", name: { fr: "Steak de dinde", ar: "ستاك مشوي ديك رومي", en: "Turkey steak" } }
      ]
    },
    {
      id: "pizzas",
      title: { fr: "Les pizzas", ar: "بيتزا", en: "Pizzas" },
      items: [
        { price: "14.000", name: { fr: "Margherita", ar: "بيتزا مارغريتا", en: "Margherita" }, desc: { fr: "Tomate, fromage", ar: "طماطم، جبن", en: "Tomato, cheese" } },
        { price: "19.000", name: { fr: "Thon", ar: "بيتزا بالتن", en: "Tuna" }, desc: { fr: "Tomate, fromage, thon, olive, poivron, persil, câpres, oignon", ar: "طماطم، جبن، تن، زيتون، فلفل، بقدونس، كابر، بصل", en: "Tomato, cheese, tuna, olive, pepper, parsley, capers, onion" } },
        { price: "17.500", name: { fr: "4 saisons", ar: "بيتزا 4 فصول", en: "Four seasons" }, desc: { fr: "Tomate, fromage, jambon, champignons, persil, olive", ar: "طماطم، جبن، جامبون، فطر، بقدونس، زيتون", en: "Tomato, cheese, ham, mushrooms, parsley, olive" } },
        { price: "16.500", name: { fr: "Jambon", ar: "بيتزا جامبون", en: "Ham" }, desc: { fr: "Tomate, fromage, jambon, persil, olive", ar: "طماطم، جبن، جامبون، بقدونس، زيتون", en: "Tomato, cheese, ham, parsley, olive" } },
        { price: "16.500", name: { fr: "Pepperoni", ar: "بيتزا بيبروني", en: "Pepperoni" }, desc: { fr: "Tomate, fromage, pepperoni, persil, olive", ar: "طماطم، جبن، بيبروني، بقدونس، زيتون", en: "Tomato, cheese, pepperoni, parsley, olive" } },
        { price: "17.500", name: { fr: "Chawarma", ar: "بيتزا شاورما", en: "Shawarma" }, desc: { fr: "Tomate, fromage, poivron, chawarma, persil, olive", ar: "طماطم، جبن، فلفل، شاورما، بقدونس، زيتون", en: "Tomato, cheese, pepper, shawarma, parsley, olive" } },
        { price: "19.000", name: { fr: "Arabe pizza", ar: "بيتزا بالقفعة", en: "Arabe pizza" }, desc: { fr: "Tomate, fromage, viande hachée, olive, persil, oignon, câpres", ar: "طماطم، جبن، لحم مفروم، زيتون، بقدونس، بصل، كابر", en: "Tomato, cheese, minced meat, olive, parsley, onion, capers" } },
        { price: "17.500", name: { fr: "Paysane", ar: "بيتزا بالفقاع", en: "Paysane" }, desc: { fr: "Tomate, fromage, poivron, champignon, oignon, persil, câpres", ar: "طماطم، جبن، فلفل، فطر، بصل، بقدونس، كابر", en: "Tomato, cheese, pepper, mushroom, onion, parsley, capers" } },
        { price: "26.500", name: { fr: "Fruits de mer", ar: "بيتزا بغلال البحر", en: "Seafood" }, desc: { fr: "Tomate, fromage, poivron, fruits de mer, persil, oignon", ar: "طماطم، جبن، فلفل، غلال البحر، بقدونس، بصل", en: "Tomato, cheese, pepper, seafood, parsley, onion" } },
        { price: "24.500", name: { fr: "Mare Mar", ar: "بيتزا ماريمار", en: "Mare Mar" }, desc: { fr: "Tomate, fromage, fruits de mer, olive, jambon, champignon, oeuf", ar: "طماطم، جبن، غلال البحر، زيتون، جامبون، فطر، بيض", en: "Tomato, cheese, seafood, olive, ham, mushroom, egg" } }
      ]
    },
    {
      id: "plats-tunisiens",
      title: { fr: "Plats tunisien", ar: "أطباق تونسية", en: "Tunisian dishes" },
      items: [
        { price: "18.000", name: { fr: "Couscous aux poulet", ar: "كسكسي بالدجاج", en: "Chicken couscous" } },
        { price: "33.000", name: { fr: "Couscous royal (agneau)", ar: "كسكسي ملكي (علوش)", en: "Royal couscous (lamb)" } },
        { price: "24.000", name: { fr: "Couscous osbene (1 pièce)", ar: "كسكسي عصبان (1 عصبان)", en: "Couscous osbene (1 piece)" } },
        { price: "33.500", name: { fr: "Couscous osbene (2 pièces)", ar: "كسكسي عصبان (2 عصبان)", en: "Couscous osbene (2 pieces)" } },
        { price: "33.000", name: { fr: "Couscous osbene & agneau", ar: "كسكسي عصبان و علوش", en: "Couscous osbene & lamb" } },
        { price: "28.000", name: { fr: "Couscous aux poissons", ar: "كسكسي بالحوت", en: "Fish couscous" } },
        { price: "20.000", name: { fr: "Riz jerbi (poulet)", ar: "أرز جربي بالدجاج", en: "Jerbi rice (chicken)" } },
        { price: "26.000", name: { fr: "Kamounia foiet et viande", ar: "كمونية كبدة ولحم", en: "Kamounia liver and meat" } },
        { price: "31.000", name: { fr: "Spaghetti agneau (penne ou fell)", ar: "سباقتي بالعلوش (بلومة أو فل)", en: "Lamb spaghetti (penne or fell)" } }
      ]
    },
    {
      id: "viandes",
      title: { fr: "Les viandes", ar: "اللحوم", en: "Meats" },
      items: [
        { price: "29.000", name: { fr: "Steak grillé", ar: "ستاك مشوي", en: "Grilled steak" } },
        { price: "29.000", name: { fr: "Foie du veau", ar: "كبدة", en: "Veal liver" } },
        { price: "34.000", name: { fr: "Mixte viandes", ar: "لحوم متنوعة", en: "Mixed meat platter" }, desc: { fr: "Steak, steak haché, foie, merguez, 1 cotelette d'agneau", ar: "ستاك، مرقاز، كبدة، لحم مفروم، كتلات علوش", en: "Steak, minced steak, liver, merguez, 1 lamb chop" } }
      ]
    },
    {
      id: "pates",
      title: { fr: "Les pâtes", ar: "المعجنات", en: "Pasta" },
      items: [
        { price: "20.000", name: { fr: "Spaghetti bolognaise", ar: "سباقتي بولونياز", en: "Spaghetti bolognese" } },
        { price: "18.000", name: { fr: "Spaghetti au poulet rôti", ar: "سباقتي بالدجاج المحمر", en: "Spaghetti with roast chicken" } },
        { price: "21.000", name: { fr: "Spaghetti à l'émincé de poulet", ar: "سباقتي بإسكالوب الدجاج", en: "Spaghetti with sliced chicken" } },
        { price: "28.500", name: { fr: "Spaghetti aux fruits de mer", ar: "سباقتي بغلال البحر", en: "Spaghetti with seafood" } },
        { price: "20.000", name: { fr: "Lasagne au four", ar: "لازانيا في الفرن", en: "Baked lasagna" } },
        { price: "28.500", name: { fr: "Riz aux fruits de mer", ar: "أرز بغلال البحر", en: "Rice with seafood" } },
        { price: "32.000", name: { fr: "Paella (pour une personne)", ar: "بايلا (لشخص واحد)", en: "Paella (single portion)" } }
      ]
    },
    {
      id: "burger",
      title: { fr: "Burger", ar: "همبورقر", en: "Burgers" },
      items: [
        { price: "9.000",  name: { fr: "Hamburger (poulet panée) & frites", ar: "همبورقر دجاج مقلي وبطاطس مقلية", en: "Hamburger (breaded chicken) & fries" } },
        { price: "10.000", name: { fr: "Hamburger chicken cheese & frites", ar: "همبورقر دجاج مقلي بالجبن وبطاطس", en: "Hamburger chicken cheese & fries" } },
        { price: "11.500", name: { fr: "Big Mac chicken & frites", ar: "همبورقر مزدوج دجاج مقلي وبطاطس مقلية", en: "Big Mac chicken & fries" } },
        { price: "13.000", name: { fr: "Big cheese chicken & frites", ar: "همبورقر مزدوج دجاج بالجبن وبطاطس مقلية", en: "Big cheese chicken & fries" } },
        { price: "11.000", name: { fr: "Hamburger & frites", ar: "همبورقر/بطاطا مقلية", en: "Hamburger & fries" } },
        { price: "12.000", name: { fr: "Cheese burger & frites", ar: "همبورقر بالجبن/بطاطا مقلية", en: "Cheeseburger & fries" } },
        { price: "14.000", name: { fr: "Big Mac & frites", ar: "همبورقر مزدوج/بطاطا مقلية", en: "Big Mac & fries" } },
        { price: "15.500", name: { fr: "Big cheese & frites", ar: "همبورقر مزدوج بالجبن/بطاطا مقلية", en: "Big cheese & fries" } },
        { price: "3.500",  name: { fr: "Pommes frites", ar: "بطاطا مقلية", en: "French fries" } }
      ]
    },
    {
      id: "sandwichs",
      title: { fr: "Les sandwichs", ar: "سندويتش", en: "Sandwiches" },
      items: [
        { price: "9.500",  name: { fr: "Escalope grillé (poulet) & frites", ar: "سندويتش إسكالوب مشوي (دجاج) بطاطا مقلية", en: "Grilled chicken escalope & fries" } },
        { price: "9.500",  name: { fr: "Escalope panée (poulet) & frites", ar: "سندويتش إسكالوب مقلي (دجاج) بطاطا مقلية", en: "Breaded chicken escalope & fries" } },
        { price: "9.500",  name: { fr: "Chawarma & frites", ar: "سندويتش شاورما بطاطا مقلية", en: "Shawarma & fries" } },
        { price: "9.500",  name: { fr: "Cordon bleu & frites", ar: "سندويتش الطوق الأزرق بطاطا مقلية", en: "Cordon bleu & fries" } },
        { price: "12.500", name: { fr: "Foie & frites", ar: "سندويتش كبدة بطاطا مقلية", en: "Liver & fries" } },
        { price: "12.500", name: { fr: "Steak & frites", ar: "سندويتش ستاك بطاطا مقلية", en: "Steak & fries" } },
        { price: "10.000", name: { fr: "Thon & frites", ar: "سندويتش بالتن بطاطا مقلية", en: "Tuna & fries" } },
        { price: "11.000", name: { fr: "Makloub escalope grillé (poulet) & frites", ar: "مقلوب إسكالوب مشوي (دجاج) بطاطا مقلية", en: "Makloub grilled chicken escalope & fries" } },
        { price: "11.000", name: { fr: "Makloub escalope panée (poulet) & frites", ar: "مقلوب إسكالوب مقلي (دجاج) بطاطا مقلية", en: "Makloub breaded chicken escalope & fries" } },
        { price: "11.000", name: { fr: "Makloub chawarma & frites", ar: "مقلوب شاورما بطاطا مقلية", en: "Makloub shawarma & fries" } },
        { price: "11.000", name: { fr: "Makloub cordon bleu & frites", ar: "مقلوب الطوق الأزرق بطاطا مقلية", en: "Makloub cordon bleu & fries" } },
        { price: "14.000", name: { fr: "Makloub foie ou steak & frites", ar: "مقلوب كبدة أو ستاك بطاطا مقلية", en: "Makloub liver or steak & fries" } }
      ]
    },
    {
      id: "calzone",
      title: { fr: "Calzone", ar: "كلزوني", en: "Calzone" },
      items: [
        { price: "9.000",  name: { fr: "Calzone au thon", ar: "كلزوني بالتن", en: "Tuna calzone" } },
        { price: "9.000",  name: { fr: "Calzone escalope ou chawarma", ar: "كلزوني بالسكالوب أو بالشاورما", en: "Escalope or shawarma calzone" } },
        { price: "12.000", name: { fr: "Calzone aux fruits de mer", ar: "كلزوني بغلال البحر", en: "Seafood calzone" } }
      ]
    },
    {
      id: "boissons",
      title: { fr: "Les boissons", ar: "المشروبات", en: "Drinks" },
      items: [
        { price: "2.900", name: { fr: "Boisson en boite 25cl", ar: "قارورة علبة 25 سل", en: "Canned drink 25cl" } },
        { price: "5.900", name: { fr: "Boisson 1L (plastique)", ar: "قارورة 1 ل (بلاستيك)", en: "Drink 1L (plastic)" } },
        { price: "1.500", name: { fr: "Eau minérale 0,5L", ar: "ماء معدني نصف لتر", en: "Mineral water 0.5L" } },
        { price: "3.500", name: { fr: "Eau minérale 1,5L", ar: "ماء معدني لتر ونصف", en: "Mineral water 1.5L" } },
        { price: "3.500", name: { fr: "Eau minérale gazeifiée", ar: "ماء معدني غازي", en: "Sparkling water" } },
        { price: "3.500", name: { fr: "Jus d'orange frais", ar: "عصير برتقال طازج", en: "Fresh orange juice" } },
        { price: "3.000", name: { fr: "Jus citron", ar: "عصير ليمون", en: "Lemon juice" } }
      ]
    }
  ],

  galleryImages: [
    "assets/gallery/Mare MARR/poisson1.jpg",
    "assets/gallery/Mare MARR/Fruits de Mer/Calamar Doré.jpg",
    "assets/gallery/Mare MARR/Fruits de Mer/Chevrettes sauce a l'ail.jpg",
    "assets/gallery/Mare MARR/Fruits de Mer/Chevrette Panées 2.jpg",
    "assets/gallery/Mare MARR/Les entrées/Ojja Fruit de Mer.jpg",
    "assets/gallery/Mare MARR/Les entrées/Ojja Merguez (3).jpg",
    "assets/gallery/Mare MARR/Les entrées/Soupe de Poisson et Brik.jpg",
    "assets/gallery/Mare MARR/Les hors d'oeuvre/Salade Mechwiya.jpg",
    "assets/gallery/Mare MARR/Les hors d'oeuvre/Salade Variée.jpg",
    "assets/gallery/Mare MARR/Les hors d'oeuvre/Salade mechouia et salade Tunisienne.jpg",
    "assets/gallery/Mare MARR/Les hors d'oeuvre/Salade.jpg",
    "assets/gallery/Mare MARR/Les Pates/Paella (2).jpg",
    "assets/gallery/Mare MARR/Les Pates/Sp Fruits de Mer.jpg",
    "assets/gallery/Mare MARR/Les Pates/Riz Fruits de Mer.jpg",
    "assets/gallery/Mare MARR/Les Pates/Lasagne (2).jpg",
    "assets/gallery/Mare MARR/Les Pates/Sp Bolognaise (2).jpg",
    "assets/gallery/Mare MARR/Les Pates/Sp à l'émincé de Poulet.jpg",
    "assets/gallery/Mare MARR/Les Viandes/Steak grillé.jpg",
    "assets/gallery/Mare MARR/Les Viandes/Mixtes (2).jpg",
    "assets/gallery/Mare MARR/Les Viandes/Foie Du veau.jpg",
    "assets/gallery/Mare MARR/Les Viandes/Cotelettes D'agneau.jpg",
    "assets/gallery/Mare MARR/Les Viandes/Plat Merguez.jpg",
    "assets/gallery/Mare MARR/Les Viandes/Steak haché (2).jpg",
    "assets/gallery/Mare MARR/Les Viandes/Steak Panée (2).jpg",
    "assets/gallery/Mare MARR/Burger/Big Mac.jpg",
    "assets/gallery/Mare MARR/Burger/Big Cheese.jpg",
    "assets/gallery/Mare MARR/Burger/Mac.jpg",
    "assets/gallery/Mare MARR/Burger/Cheese.jpg",
    "assets/gallery/Mare MARR/Burger/Big Mac panée.jpg",
    "assets/gallery/Mare MARR/Burger/Big Cheese Panée 2.jpg",
    "assets/gallery/Mare MARR/Burger/Mac Panée.jpg",
    "assets/gallery/Mare MARR/Burger/Cheese Panée 3.jpg",
    "assets/gallery/Mare MARR/Les Sandwichs/Makloub.jpg",
    "assets/gallery/Mare MARR/Les Sandwichs/Malfouf.jpg",
    "assets/gallery/Mare MARR/Les Sandwichs/Sandwich.jpg",
    "assets/gallery/Mare MARR/Les Sandwichs/Sandwich (2).jpg",
    "assets/gallery/Mare MARR/Calzone/calzone au chwarma (1).jpg",
    "assets/gallery/Mare MARR/Calzone/calzone au chwarma (2).jpg"
  ]
};

function renderMenu() {
  const grid = document.getElementById("menu-grid");
  if (!CONFIG.menuCategories || !CONFIG.menuCategories.length) return;

  grid.innerHTML = "";
  const lang = document.documentElement.lang || "fr";
  const categories = CONFIG.menuCategories;

  categories.forEach((category, idx) => {
    const catEl = document.createElement("div");
    catEl.className = "menu-category";
    catEl.id = `cat-${idx}`;

    const header = document.createElement("div");
    header.className = "menu-cat-header";
    const title = document.createElement("span");
    title.className = "menu-cat-title";
    title.textContent = category.title[lang] || category.title.fr;
    header.appendChild(title);
    catEl.appendChild(header);

    category.items.forEach(item => {
      const el = document.createElement("div");
      el.className = "menu-item";
      const priceHtml = item.price ? `<span class="menu-item-price">${item.price} TND</span>` : "";
      const descHtml = item.desc ? `<p class="menu-item-desc">${item.desc[lang] || item.desc.fr}</p>` : "";
      el.innerHTML = `
        <div class="menu-item-left">
          <div class="menu-item-name">${item.name[lang] || item.name.fr}</div>
          ${descHtml}
        </div>
        ${priceHtml}
      `;
      catEl.appendChild(el);
    });

    grid.appendChild(catEl);
  });

  // Rebuild category tab bar
  const tabsBar = document.getElementById("menu-tabs-bar");
  if (tabsBar) {
    tabsBar.innerHTML = categories.map((cat, i) =>
      `<button class="menu-tab" data-cat="${i}">${cat.title[lang] || cat.title.fr}</button>`
    ).join('');
    tabsBar.querySelectorAll('.menu-tab').forEach((btn, i) => {
      if (i === 0) btn.classList.add('active');
      btn.addEventListener('click', () => {
        tabsBar.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
        const target = document.getElementById(`cat-${btn.dataset.cat}`);
        if (target) {
          const navH = 56;
          const tabsH = tabsBar.offsetHeight || 48;
          const top = target.getBoundingClientRect().top + window.scrollY - navH - tabsH;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });

    if (menuTabObserver) menuTabObserver.disconnect();
    menuTabObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = e.target.id.replace('cat-', '');
          tabsBar.querySelectorAll('.menu-tab').forEach((t, i) => {
            t.classList.toggle('active', String(i) === idx);
          });
          const activeTab = tabsBar.querySelector('.menu-tab.active');
          if (activeTab) activeTab.scrollIntoView({ inline: 'nearest', block: 'nearest' });
        }
      });
    }, { rootMargin: `-${56 + 48}px 0px -65% 0px`, threshold: 0 });
    document.querySelectorAll('.menu-category').forEach(cat => menuTabObserver.observe(cat));
  }
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!CONFIG.galleryImages.length) return;

  grid.innerHTML = "";
  CONFIG.galleryImages.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src.split("/").map(encodeURIComponent).join("/");
    img.alt = `Mare Mar Ouahchi — photo ${i + 1}`;
    img.loading = "lazy";
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.appendChild(img);
    grid.appendChild(item);
  });
}

function wireLinks() {
  const callBtn = document.getElementById("hero-call");
  if (callBtn) callBtn.href = CONFIG.phoneLink;

  const contactCall = document.getElementById("contact-call");
  if (contactCall) contactCall.href = CONFIG.phoneLink;

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

  const stickyCall = document.getElementById("sticky-call");
  if (stickyCall) stickyCall.href = CONFIG.phoneLink;

  const fbBtn = document.getElementById("contact-facebook");
  if (fbBtn) fbBtn.href = CONFIG.facebookUrl;

  const igBtn = document.getElementById("contact-instagram");
  if (igBtn) igBtn.href = CONFIG.instagramUrl;

  const heroFb = document.getElementById("hero-facebook");
  if (heroFb) heroFb.href = CONFIG.facebookUrl;

  const heroIg = document.getElementById("hero-instagram");
  if (heroIg) heroIg.href = CONFIG.instagramUrl;

  const footerFb = document.getElementById("footer-facebook");
  if (footerFb) footerFb.href = CONFIG.facebookUrl;

  const footerIg = document.getElementById("footer-instagram");
  if (footerIg) footerIg.href = CONFIG.instagramUrl;

  const mapEmbed = document.getElementById("map-embed");
  if (mapEmbed) {
    const embedSrc = CONFIG.googleMapsEmbedUrl ||
      "https://maps.google.com/maps?q=" +
      encodeURIComponent("Mare Mar Ouahchi, Rue les Palmiers, Khzema Est, Sousse, Tunisie") +
      "&output=embed&z=16&hl=fr";
    mapEmbed.innerHTML = `<iframe src="${embedSrc}" width="100%" height="100%" style="border:0;min-height:280px;" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  wireLinks();
  renderMenu();
  renderGallery();

  const nav = document.getElementById("site-nav");
  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 60);
    });
  }

  // Active nav link as user scrolls between sections
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(a => a.classList.remove('active'));
          const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
          if (a) a.classList.add('active');
        }
      });
    }, { rootMargin: '-56px 0px -55% 0px', threshold: 0 });
    sections.forEach(s => sectionObserver.observe(s));
  }

  // Re-render menu when language changes
  document.querySelectorAll(".lang-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      setTimeout(() => { renderMenu(); }, 0);
    });
  });
});
