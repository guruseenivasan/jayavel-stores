/**
 * Jayavel Stores - Unified Site Synchronization & Translation Engine
 * 1. Solves Missing Images & Logo Fallbacks (relative path normalization)
 * 2. Solves Admin Deletion Sync across all pages (instant DOM removal + API sync)
 * 3. Solves Translation persistence across all pages (ENG / தமிழ் with cookie + localStorage)
 * 4. Ensures studio-quality white background images across catalog
 */

(function () {
  'use strict';

  // -------------------------------------------------------------
  // 1. LANGUAGE & TRANSLATION ENGINE
  // -------------------------------------------------------------
  window.googleTranslateElementInit = function () {
    try {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,ta',
        autoDisplay: false
      }, 'google_translate_element');
    } catch (e) {
      console.warn('Google Translate init:', e);
    }
  };

  window.setAppLanguage = function (lang) {
    var code = (lang === 'ta') ? 'ta' : 'en';
    var cookieVal = '/en/' + code;

    // Set cookie on root path
    document.cookie = 'googtrans=' + cookieVal + '; path=/; SameSite=Lax';

    // Only set domain if valid domain with dot (not localhost or bare IP)
    if (window.location.hostname && window.location.hostname.indexOf('.') !== -1 && window.location.hostname !== 'localhost') {
      document.cookie = 'googtrans=' + cookieVal + '; path=/; domain=' + window.location.hostname + '; SameSite=Lax';
    }

    try {
      localStorage.setItem('preferred_language', code);
    } catch (e) {}

    var combo = document.querySelector('.goog-te-combo');
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event('change'));
    } else {
      location.reload();
    }
    updateLangButtons(code);
  };

  function updateLangButtons(code) {
    var btnEn = document.getElementById('btn-lang-en');
    var btnTa = document.getElementById('btn-lang-ta');
    if (!btnEn || !btnTa) return;

    if (code === 'ta') {
      btnTa.className = 'flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ffdea4] text-[#48061d] transition-all cursor-pointer font-bold shadow-sm';
      btnEn.className = 'flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[#ffdea4]/80 hover:text-white transition-all cursor-pointer font-medium';
    } else {
      btnEn.className = 'flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ffdea4] text-[#48061d] transition-all cursor-pointer font-bold shadow-sm';
      btnTa.className = 'flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[#ffdea4]/80 hover:text-white transition-all cursor-pointer font-medium';
    }
  }

  window.updateLangButtons = updateLangButtons;

  function initLanguage() {
    var saved = null;
    try {
      saved = localStorage.getItem('preferred_language');
    } catch (e) {}

    if (!saved && document.cookie.indexOf('googtrans=/en/ta') !== -1) {
      saved = 'ta';
    }

    var code = saved === 'ta' ? 'ta' : 'en';
    updateLangButtons(code);

    if (code === 'ta') {
      document.cookie = 'googtrans=/en/ta; path=/; SameSite=Lax';
    }
  }

  // -------------------------------------------------------------
  // 2. IMAGE NORMALIZATION & STUDIO WHITE QUALITY ASSURANCE
  // -------------------------------------------------------------
  // Clean leading slashes so images always resolve relative to site root in XAMPP
  function cleanImagePath(path) {
    if (!path) return 'logo.png';
    // If it's already an absolute HTTP URL, keep it
    if (/^https?:\/\//i.test(path)) return path;
    // Strip leading slashes
    var clean = path.replace(/^\/+/, '');
    return clean;
  }
  window.cleanImagePath = cleanImagePath;

  // -------------------------------------------------------------
  // 3. ADMIN DELETE SYNC & DYNAMIC PRODUCT RENDERER
  // -------------------------------------------------------------
  function getDeletedIds() {
    try {
      return JSON.parse(localStorage.getItem('jayavel_deleted_ids') || '[]');
    } catch (e) {
      return [];
    }
  }

  // Purge any cards currently matching deleted IDs or slugs
  function purgeDeletedElements() {
    var deleted = getDeletedIds();
    if (!deleted || !deleted.length) return;

    deleted.forEach(function (del) {
      if (!del) return;
      var selector = '[data-product-id="' + del + '"], [data-slug="' + del + '"]';
      document.querySelectorAll(selector).forEach(function (el) {
        el.remove();
      });
    });
  }

  // Unified Product Card Generator for dynamic items
  function createProductCard(p, mode) {
    var cleanImg = cleanImagePath(p.image);
    var priceFmt = Number(p.price || 0).toLocaleString('en-IN');
    var origFmt = p.originalPrice ? Number(p.originalPrice).toLocaleString('en-IN') : '';
    var waMsg = 'Vanakkam Jayavel Stores! I would like to enquire about: ' + p.title + (p.tamilTitle ? ' (' + p.tamilTitle + ')' : '') + ' - Price: ₹' + priceFmt + '.\n\nPlease confirm availability and delivery details.';
    var waUrl = 'https://wa.me/919894198916?text=' + encodeURIComponent(waMsg);

    var card = document.createElement('article');
    card.setAttribute('data-product-id', p.id || '');
    card.setAttribute('data-slug', p.slug || '');
    card.setAttribute('data-category', (p.categorySlug || p.category || '').toLowerCase());
    card.setAttribute('data-title', ((p.title || '') + ' ' + (p.tamilTitle || '')).toLowerCase());
    card.className = 'product-item bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden border border-[#e5e2e1]';

    var detailUrl = 'product-details?id=' + encodeURIComponent(p.id || p.slug || '');

    card.innerHTML =
      '<a href="' + detailUrl + '" class="relative bg-white aspect-[4/5] overflow-hidden flex items-center justify-center p-2 block cursor-pointer group/img">' +
        '<img class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" src="' + cleanImg + '" onerror="this.src=\'logo.png\'" alt="' + (p.title || '') + '"/>' +
        (p.tag ? '<span class="absolute top-3 left-3 bg-[#48061d] text-[#ffdea4] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">' + p.tag + '</span>' : '') +
        (p.weight ? '<span class="absolute top-3 right-3 bg-[#ffdea4] text-[#261900] text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">' + p.weight + '</span>' : '<span class="absolute bottom-3 right-3 bg-white/95 px-2 py-0.5 rounded text-[10px] font-bold text-[#7b5902] shadow-sm">★ 5.0 (New)</span>') +
      '</a>' +
      '<div class="p-4 flex-1 flex flex-col justify-between space-y-2">' +
        '<div>' +
          '<div class="flex items-center justify-between gap-2 min-w-0 text-[11px] font-bold text-[#7b5902] uppercase tracking-wider">' +
            '<span class="truncate min-w-0">' + (p.category || 'Traditional Craft') + '</span>' +
            '<span class="whitespace-nowrap shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ' + (p.inStock ? 'bg-[#e7f7ed] text-[#00402a]' : 'bg-rose-50 text-rose-700') + '">' +
              '<span class="w-1.5 h-1.5 rounded-full ' + (p.inStock ? 'bg-[#00402a]' : 'bg-rose-600') + ' inline-block shrink-0"></span> ' + (p.inStock ? 'In-Stock' : 'Sold Out') +
            '</span>' +
          '</div>' +
          '<h3 class="font-serif text-base font-bold text-[#48061d] group-hover:text-[#7b5902] transition-colors mt-1"><a href="' + detailUrl + '" class="hover:underline">' + (p.title || '') + '</a></h3>' +
          (p.tamilTitle ? '<p class="text-xs text-[#7c1d24] mt-0.5 font-medium">' + p.tamilTitle + '</p>' : '') +
          (p.description ? '<p class="text-xs text-[#534245] mt-1 line-clamp-2">' + p.description + '</p>' : '') +
        '</div>' +
        '<div class="pt-3 flex flex-col gap-2 border-t border-[#f0eded]">' +
          '<div class="flex items-baseline justify-between">' +
            '<div>' +
              '<span class="font-serif text-lg font-bold text-[#48061d]">₹' + priceFmt + '</span>' +
              (origFmt ? '<span class="text-xs text-[#867275] line-through ml-2">₹' + origFmt + '</span>' : '') +
            '</div>' +
            '<a href="' + detailUrl + '" class="text-[11px] text-[#7c1d24] font-bold hover:underline flex items-center gap-0.5">Details →</a>' +
          '</div>' +
          '<a href="' + waUrl + '" target="_blank" class="w-full py-2 bg-[#00402a] hover:bg-[#002819] text-[#b1f0ce] text-xs font-bold rounded flex items-center justify-center gap-1.5 transition-colors shadow-sm">' +
            '<span class="material-symbols-outlined text-[16px]">chat</span>' +
            '<span>WhatsApp Enquiry</span>' +
          '</a>' +
        '</div>' +
      '</div>';

    return card;
  }

  // Sync products into any grid
  function syncProductsIntoGrid(config) {
    var grid = document.getElementById(config.gridId);
    if (!grid) return;

    // 1. Purge deleted items first
    purgeDeletedElements();

    function processProductList(products) {
      if (!Array.isArray(products) || !products.length) return;

      var deleted = new Set(getDeletedIds());
      var activeIds = new Set();
      var activeSlugs = new Set();

      products.forEach(function (p) {
        if (!p || deleted.has(p.id) || deleted.has(p.slug)) return;
        activeIds.add(p.id);
        if (p.slug) activeSlugs.add(p.slug);
      });

      // Remove cards in DOM that were deleted by admin
      grid.querySelectorAll('[data-product-id], [data-slug]').forEach(function (card) {
        var pid = card.getAttribute('data-product-id');
        var slug = card.getAttribute('data-slug');
        if (deleted.has(pid) || deleted.has(slug)) {
          card.remove();
          return;
        }
        // If it has a known product-id but is no longer in activeIds, it was deleted!
        if (pid && !activeIds.has(pid) && (!slug || !activeSlugs.has(slug))) {
          card.remove();
        }
      });

      // Filter products for this page if filter function provided
      var pageProducts = products.filter(function (p) {
        if (!p || deleted.has(p.id) || deleted.has(p.slug)) return false;
        if (typeof config.filter === 'function') {
          return config.filter(p);
        }
        return true;
      });

      // Find existing rendered IDs
      var rendered = new Set();
      grid.querySelectorAll('[data-product-id]').forEach(function (el) {
        var id = el.getAttribute('data-product-id');
        if (id) rendered.add(id);
      });
      grid.querySelectorAll('[data-slug]').forEach(function (el) {
        var slug = el.getAttribute('data-slug');
        if (slug) rendered.add(slug);
      });

      // Render missing products
      pageProducts.forEach(function (p) {
        if (rendered.has(p.id) || (p.slug && rendered.has(p.slug))) {
          // If already rendered, make sure image is not broken
          var existingCard = grid.querySelector('[data-product-id="' + p.id + '"]') || (p.slug ? grid.querySelector('[data-slug="' + p.slug + '"]') : null);
          if (existingCard) {
            var img = existingCard.querySelector('img');
            if (img && (!img.src || img.src.indexOf('logo.png') !== -1 || img.src.indexOf('aida-public') !== -1)) {
              img.src = cleanImagePath(p.image);
            }
          }
          return;
        }

        var newCard = createProductCard(p, config.gridId);
        if (config.prepend) {
          grid.prepend(newCard);
        } else {
          grid.appendChild(newCard);
        }
        rendered.add(p.id);
        if (p.slug) rendered.add(p.slug);
      });

      // Update count badge if requested
      if (config.countId) {
        var countEl = document.getElementById(config.countId);
        if (countEl) {
          var totalVisible = grid.querySelectorAll('article, .product-item, [data-product-id]').length;
          countEl.innerText = totalVisible;
        }
      }
    }

    // Try loading: 1. localStorage cache first for instant render
    try {
      var local = localStorage.getItem('jayavel_admin_products');
      if (local) processProductList(JSON.parse(local));
    } catch (e) {}

    // 2. Fetch fresh products from API or static JSON
    var apiUrl = 'api/products/';
    fetch(apiUrl)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.success && Array.isArray(data.products)) {
          processProductList(data.products);
          try {
            localStorage.setItem('jayavel_admin_products', JSON.stringify(data.products));
          } catch (e) {}
        }
      })
      .catch(function () {
        fetch('src/data/products.json')
          .then(function (r) { return r.json(); })
          .then(function (data) {
            if (Array.isArray(data)) {
              processProductList(data);
            }
          })
          .catch(function () {});
      });
  }

  // -------------------------------------------------------------
  // 4. PRODUCT DETAILS NAVIGATION CONNECTOR
  // -------------------------------------------------------------
  var productMap = {
    'teakwood-king-cot-bed': 'JV-8105',
    'chettinad-teakwood-oonjal-swing': 'JV-8101',
    'teakwood-pooja-mandapam-shrine': 'JV-8102',
    'brass-studded-teakwood-diwan': 'JV-8103',
    'carved-teakwood-peedam-uruli-stand': 'JV-8104',
    'chettinad-carved-teakwood-sofa-set': 'JV-8106',
    'solid-teakwood-3-door-bero': 'JV-8107',
    'teakwood-steel-gas-stove-table-stand': 'JV-8108',
    'salem-heavy-steel-wedding-bero': 'JV-8109',
    'classic-annam-kuthu-vilakku': 'JV-1042',
    'antique-lord-murugan-vel': 'JV-2015',
    'traditional-eeya-chombu': 'JV-5034',
    'peacock-rim-brass-uruli': 'JV-9087',
    'traditional-vengala-paanai': 'JV-3081',
    'pure-copper-water-pot': 'JV-4092',
    'meenakshi-amman-brass-idol': 'JV-6019',
    'classic-brass-filter-coffee': 'JV-8012',
    'traditional-brass-masala-dabba': 'JV-9101',
    'silver-plated-thali-set': 'JV-9102',
    'pure-silver-pooja-diya-pair': 'JV-9103',
    'brass-davarah-tumbler-set': 'JV-9104',
    'consecrated-brass-ganapathi-idol': 'JV-2016',
    'brass-lakshmi-ganesha-saraswati-trio': 'JV-2017',
    'padmasana-gajalakshmi-brass-idol': 'JV-2018',
    'temple-brass-lord-murugan-vel-statue': 'JV-2019',
    'swami-ayyappan-thiruvachi-brass-idol': 'JV-2020',
    'ganesha-statue': 'JV-8235',
    'pooja-villaku': 'JV-1682',
    'murugan-silai': 'JV-1554'
  };

  function attachProductDetailLinks() {
    var cards = document.querySelectorAll('article.product-item, .product-item, #catalogue-product-grid article, #products-grid article');
    cards.forEach(function (card) {
      var pid = card.getAttribute('data-product-id');
      var slug = card.getAttribute('data-slug');
      if (!slug && card.getAttribute('data-category')) {
        slug = card.getAttribute('data-category');
      }

      var titleEl = card.querySelector('h3, h4');
      var titleText = titleEl ? titleEl.innerText.toLowerCase() : '';

      if (!pid) {
        if (slug && productMap[slug]) {
          pid = productMap[slug];
        } else if (titleText.indexOf('ganapathi') !== -1 || titleText.indexOf('ganesha') !== -1 || titleText.indexOf('vinayagar') !== -1) {
          pid = 'JV-8235';
        } else if (titleText.indexOf('kuthu vilakku') !== -1 || titleText.indexOf('annam') !== -1) {
          pid = 'JV-1042';
        } else if (titleText.indexOf('murugan') !== -1) {
          pid = 'JV-2015';
        } else if (titleText.indexOf('eeya chombu') !== -1) {
          pid = 'JV-5034';
        } else if (titleText.indexOf('uruli') !== -1) {
          pid = 'JV-9087';
        } else if (titleText.indexOf('vengala') !== -1 || titleText.indexOf('pongal') !== -1) {
          pid = 'JV-3081';
        } else if (titleText.indexOf('copper') !== -1) {
          pid = 'JV-4092';
        } else if (titleText.indexOf('meenakshi') !== -1) {
          pid = 'JV-6019';
        } else if (titleText.indexOf('filter coffee') !== -1) {
          pid = 'JV-8012';
        } else if (titleText.indexOf('masala') !== -1) {
          pid = 'JV-9101';
        } else if (titleText.indexOf('thali') !== -1) {
          pid = 'JV-9102';
        } else if (titleText.indexOf('diya') !== -1 || titleText.indexOf('silver') !== -1) {
          pid = 'JV-9103';
        } else if (titleText.indexOf('davarah') !== -1) {
          pid = 'JV-9104';
        } else if (titleText.indexOf('cot') !== -1 || titleText.indexOf('bed') !== -1) {
          pid = 'JV-8105';
        } else if (titleText.indexOf('oonjal') !== -1 || titleText.indexOf('swing') !== -1) {
          pid = 'JV-8101';
        } else if (titleText.indexOf('mandapam') !== -1) {
          pid = 'JV-8102';
        } else if (titleText.indexOf('diwan') !== -1) {
          pid = 'JV-8103';
        } else if (titleText.indexOf('sofa') !== -1) {
          pid = 'JV-8106';
        } else if (titleText.indexOf('bero') !== -1 || titleText.indexOf('wardrobe') !== -1) {
          pid = 'JV-8107';
        } else if (titleText.indexOf('gas stove') !== -1) {
          pid = 'JV-8108';
        } else if (titleText.indexOf('ayyappan') !== -1) {
          pid = 'JV-2020';
        } else if (titleText.indexOf('lakshmi') !== -1) {
          pid = 'JV-2018';
        }
      }

      if (!pid && !slug) return;
      var targetUrl = 'product-details?' + (pid ? 'id=' + encodeURIComponent(pid) : 'slug=' + encodeURIComponent(slug));

      // Make image clickable to product-details
      var img = card.querySelector('img');
      if (img) {
        img.style.cursor = 'pointer';
        var parentLink = img.closest('a');
        if (parentLink) {
          parentLink.href = targetUrl;
        } else {
          var imgContainer = img.parentElement;
          if (imgContainer) {
            imgContainer.style.cursor = 'pointer';
            imgContainer.onclick = function (e) {
              if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
              window.location.href = targetUrl;
            };
          }
        }
      }

      // Make title clickable to product-details
      if (titleEl) {
        var a = titleEl.querySelector('a');
        if (a) {
          a.href = targetUrl;
        } else {
          titleEl.style.cursor = 'pointer';
          titleEl.onclick = function () {
            window.location.href = targetUrl;
          };
        }
      }
    });
  }

  window.syncProductsIntoGrid = syncProductsIntoGrid;
  window.purgeDeletedElements = purgeDeletedElements;
  window.attachProductDetailLinks = attachProductDetailLinks;

  // Listen to storage event (cross-tab real-time admin sync)
  window.addEventListener('storage', function (e) {
    if (e.key === 'jayavel_deleted_ids' || e.key === 'jayavel_admin_products') {
      purgeDeletedElements();
      location.reload();
    }
  });

  // Global DOM initialization
  document.addEventListener('DOMContentLoaded', function () {
    initLanguage();
    purgeDeletedElements();
    attachProductDetailLinks();
    setTimeout(attachProductDetailLinks, 200);
  });

})();
