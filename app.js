// ============================================
// SHOPEE CLONE - MAIN APPLICATION JS
// ============================================

// === DATA ===
const categories = [
    { name: 'Elektronik', icon: 'fas fa-laptop' },
    { name: 'Fashion Wanita', icon: 'fas fa-female' },
    { name: 'Fashion Pria', icon: 'fas fa-male' },
    { name: 'Handphone & Aksesoris', icon: 'fas fa-mobile-alt' },
    { name: 'Sepatu Pria', icon: 'fas fa-shoe-prints' },
    { name: 'Sepatu Wanita', icon: 'fas fa-shoe-prints' },
    { name: 'Tas Wanita', icon: 'fas fa-shopping-bag' },
    { name: 'Kecantikan', icon: 'fas fa-pump-soap' },
    { name: 'Jam Tangan', icon: 'fas fa-clock' },
    { name: 'Komputer & Aksesoris', icon: 'fas fa-desktop' },
    { name: 'Perawatan Tubuh', icon: 'fas fa-spa' },
    { name: 'Ibu & Bayi', icon: 'fas fa-baby' },
    { name: 'Rumah & Kehidupan', icon: 'fas fa-home' },
    { name: 'Makanan & Minuman', icon: 'fas fa-utensils' },
    { name: 'Olahraga & Outdoor', icon: 'fas fa-running' },
    { name: 'Otomotif', icon: 'fas fa-car' },
    { name: 'Buku & Alat Tulis', icon: 'fas fa-book' },
    { name: 'Mainan & Hobi', icon: 'fas fa-puzzle-piece' },
    { name: 'Perlengkapan Hewan', icon: 'fas fa-paw' },
    { name: 'Voucher & Layanan', icon: 'fas fa-ticket-alt' },
];

const flashSaleItems = [
    { name: 'Earphone Bluetooth TWS', price: 29000, originalPrice: 150000, discount: 81, sold: 4200, icon: 'fas fa-headphones' },
    { name: 'Kaos Polos Premium Cotton', price: 35000, originalPrice: 99000, discount: 65, sold: 8500, icon: 'fas fa-tshirt' },
    { name: 'Charger Fast Charging 20W', price: 19000, originalPrice: 89000, discount: 79, sold: 6200, icon: 'fas fa-bolt' },
    { name: 'Masker KN95 50pcs', price: 15000, originalPrice: 65000, discount: 77, sold: 12000, icon: 'fas fa-head-side-mask' },
    { name: 'Tumbler Stainless 500ml', price: 25000, originalPrice: 120000, discount: 79, sold: 3100, icon: 'fas fa-glass-water' },
    { name: 'Mouse Wireless Silent', price: 22000, originalPrice: 99000, discount: 78, sold: 5600, icon: 'fas fa-computer-mouse' },
    { name: 'Kabel Data Type-C 1M', price: 9900, originalPrice: 45000, discount: 78, sold: 15000, icon: 'fas fa-plug' },
    { name: 'Skincare Serum Vitamin C', price: 18000, originalPrice: 89000, discount: 80, sold: 7800, icon: 'fas fa-eye-dropper' },
];

const topSearches = [
    { label: 'iPhone 15 Pro Max', count: '285rb+ pencarian', tag: 'TOP', icon: 'fas fa-mobile-alt' },
    { label: 'Dress Wanita Korean', count: '150rb+ pencarian', tag: 'TOP', icon: 'fas fa-female' },
    { label: 'Sepatu Sneakers', count: '120rb+ pencarian', tag: null, icon: 'fas fa-shoe-prints' },
    { label: 'Skincare Set', count: '98rb+ pencarian', tag: null, icon: 'fas fa-pump-soap' },
    { label: 'Laptop Gaming', count: '85rb+ pencarian', tag: null, icon: 'fas fa-laptop' },
    { label: 'Tas Selempang Pria', count: '76rb+ pencarian', tag: null, icon: 'fas fa-briefcase' },
];

const productNames = [
    'Tas Selempang Pria Anti Air Waterproof Sling Bag Korea Style',
    'Kaos Polos Oversize Cotton Combed 30s Premium T-Shirt Unisex',
    'Celana Jogger Pria Wanita Korean Style Casual Sweatpants',
    'Sepatu Sneakers Pria Wanita Sport Running Shoes Kasual',
    'Hoodie Oversize Unisex Fleece Premium Korean Style',
    'Earphone Bluetooth TWS Wireless Earbuds Bass HD',
    'Skincare Set Paket Lengkap Pemula Glowing Skin',
    'Jam Tangan Digital Pria Sport Waterproof Anti Air',
    'Kacamata Hitam Polarized UV400 Fashion Sunglasses',
    'Dompet Pria Kulit PU Leather Bifold Wallet Premium',
    'Sandal Slide Pria Wanita Anti Slip EVA Comfortable',
    'Case iPhone 14 15 Pro Max Silikon Softcase Premium',
    'Kemeja Pria Lengan Panjang Slim Fit Formal Casual',
    'Dress Wanita Korean Style Casual Mini Dress Elegan',
    'Parfum Pria Wanita EDT Eau de Toilette 100ml Tahan Lama',
    'Headphone Wireless Bluetooth ANC Active Noise Cancelling',
    'Topi Baseball Cap Unisex Korean Style Adjustable',
    'Mouse Wireless Silent Click Rechargeable 2.4GHz',
    'Power Bank 10000mAh Fast Charging PD 20W Slim Portable',
    'Celana Pendek Cargo Pria Casual Short Pants Katun',
    'Masker Wajah Sheet Mask Moisturizing 10pcs Pack',
    'Lampu LED Strip RGB Remote Control 5 Meter 16 Warna',
    'Tumbler Stainless Steel 500ml Hot Cold Termos',
    'Charger iPhone Fast Charging 20W USB-C PD Adapter',
    'Baju Tidur Wanita Piyama Set Satin Silk Premium',
    'Backpack Laptop 15.6 inch Tas Ransel Anti Air',
    'Ring Light LED 26cm Selfie Lampu TikTok Youtube',
    'Gelang Pria Titanium Steel Anti Karat Bracelet',
    'Rak Sepatu 4 Tingkat Minimalis Lemari Portable',
    'Tripod HP Tongsis Bluetooth Remote Shutter 3in1',
];

const productIcons = [
    'fas fa-bag-shopping', 'fas fa-tshirt', 'fas fa-person-walking',
    'fas fa-shoe-prints', 'fas fa-vest', 'fas fa-headphones',
    'fas fa-pump-soap', 'fas fa-clock', 'fas fa-glasses',
    'fas fa-wallet', 'fas fa-sandal', 'fas fa-mobile-alt',
    'fas fa-shirt', 'fas fa-dress', 'fas fa-spray-can-sparkles',
    'fas fa-headphones-simple', 'fas fa-hat-cowboy', 'fas fa-computer-mouse',
    'fas fa-battery-full', 'fas fa-person', 'fas fa-face-smile',
    'fas fa-lightbulb', 'fas fa-glass-water', 'fas fa-plug',
    'fas fa-bed', 'fas fa-laptop', 'fas fa-circle-dot',
    'fas fa-ring', 'fas fa-layer-group', 'fas fa-camera',
];

const locations = [
    'Jakarta Selatan', 'Bandung', 'Surabaya', 'Jakarta Barat', 'Tangerang',
    'Bekasi', 'Jakarta Pusat', 'Yogyakarta', 'Semarang', 'Medan',
    'Depok', 'Jakarta Utara', 'Malang', 'Bogor', 'Solo',
];

// === UTILITIES ===
function formatPrice(price) {
    return price.toLocaleString('id-ID');
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatSold(num) {
    if (num >= 10000) return (num / 1000).toFixed(0) + 'rb';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'rb';
    return num.toString();
}

// === CATEGORY RENDERING ===
function renderCategories() {
    const grid = document.getElementById('category-grid');
    grid.innerHTML = categories.map(cat => `
        <a href="#" class="category-item">
            <div class="category-icon"><i class="${cat.icon}"></i></div>
            <span class="category-name">${cat.name}</span>
        </a>
    `).join('');
}

// === FLASH SALE ===
function renderFlashSale() {
    const container = document.getElementById('flash-sale-products');
    container.innerHTML = flashSaleItems.map(item => {
        const soldPercent = Math.min(randomInt(40, 95), 100);
        return `
        <div class="flash-item">
            <div class="flash-item-img">
                <div class="product-placeholder"><i class="${item.icon}"></i></div>
                <div class="flash-discount-tag">
                    <span class="percent">${item.discount}%</span>
                    <span class="off-text">OFF</span>
                </div>
            </div>
            <div class="flash-item-info">
                <div class="flash-price">
                    <span class="currency">₫</span>${formatPrice(item.price)}
                </div>
                <div class="flash-progress-bar">
                    <div class="flash-progress-fill" style="width: ${soldPercent}%"></div>
                    <span class="flash-progress-text">Terjual ${formatSold(item.sold)}</span>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// === TOP SEARCH ===
function renderTopSearch() {
    const grid = document.getElementById('top-search-grid');
    grid.innerHTML = topSearches.map(item => `
        <div class="top-search-item">
            ${item.tag ? `<span class="top-search-tag">${item.tag}</span>` : ''}
            <div class="top-search-img"><i class="${item.icon}"></i></div>
            <div class="top-search-info">
                <div class="top-search-label">${item.label}</div>
                <div class="top-search-count">${item.count}</div>
            </div>
        </div>
    `).join('');
}

// === PRODUCT GRID ===
let currentProductIndex = 0;
const PRODUCTS_PER_LOAD = 30;

function generateProduct(index) {
    const nameIdx = index % productNames.length;
    const iconIdx = index % productIcons.length;
    const price = randomInt(15, 500) * 1000;
    const discount = randomInt(10, 60);
    const originalPrice = Math.ceil(price / (1 - discount / 100));
    const sold = randomInt(10, 20000);
    const rating = (randomInt(35, 50) / 10).toFixed(1);
    const starCount = Math.round(parseFloat(rating));
    const location = locations[randomInt(0, locations.length - 1)];
    const isMall = Math.random() > 0.75;
    const hasFreeShipping = Math.random() > 0.3;
    const hasVoucher = Math.random() > 0.5;
    const isAd = Math.random() > 0.9;

    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += `<i class="fas fa-star star ${i < starCount ? '' : 'empty'}"></i>`;
    }

    return `
    <div class="product-card">
        <div class="product-card-img">
            <div class="product-placeholder"><i class="${productIcons[iconIdx]}"></i></div>
            <div class="product-overlay-tag">
                ${isMall ? '<span class="mall-tag">Mall</span>' : ''}
                ${isAd ? '<span class="ad-tag">Ad</span>' : ''}
            </div>
            <span class="discount-badge">${discount}% OFF</span>
            ${hasFreeShipping ? `
            <div class="freeshiping-badge">
                <span><i class="fas fa-truck"></i> Free</span>
                <span class="extra">Xtra</span>
            </div>` : ''}
        </div>
        <div class="product-card-info">
            <div class="product-card-name">${productNames[nameIdx]}</div>
            ${hasVoucher ? '<span class="product-voucher">Cashback</span>' : ''}
            <div class="product-card-price-row">
                <span class="product-card-price"><span class="currency">Rp</span>${formatPrice(price)}</span>
                <span class="product-card-sold">Terjual ${formatSold(sold)}</span>
            </div>
            <div class="product-rating">${stars}</div>
            <div class="product-card-location">${location}</div>
        </div>
        <button class="product-like" onclick="toggleLike(event, this)" aria-label="Like product"><i class="far fa-heart"></i></button>
    </div>
    `;
}

function renderProducts(count = PRODUCTS_PER_LOAD) {
    const grid = document.getElementById('product-grid');
    let html = '';
    for (let i = 0; i < count; i++) {
        html += generateProduct(currentProductIndex + i);
    }
    grid.insertAdjacentHTML('beforeend', html);
    currentProductIndex += count;
}

function toggleLike(e, btn) {
    e.stopPropagation();
    btn.classList.toggle('active');
    const icon = btn.querySelector('i');
    if (btn.classList.contains('active')) {
        icon.className = 'fas fa-heart';
    } else {
        icon.className = 'far fa-heart';
    }
}

// === BANNER SLIDER ===
function initSlider() {
    const wrapper = document.getElementById('slider-wrapper');
    const slides = wrapper.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('slider-dots');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    let current = 0;
    const total = slides.length;

    // Create dots
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    }

    function goTo(index) {
        current = ((index % total) + total) % total;
        wrapper.style.transform = `translateX(-${current * 100}%)`;
        dotsContainer.querySelectorAll('.slider-dot').forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    // Auto-slide
    let autoSlide = setInterval(() => goTo(current + 1), 4000);

    const slider = document.getElementById('banner-slider');
    slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
    slider.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => goTo(current + 1), 4000);
    });
}

// === COUNTDOWN TIMER ===
function initCountdown() {
    // Set end time = today + 5 hours (simulated)
    const now = new Date();
    const end = new Date(now.getTime() + 5 * 60 * 60 * 1000 + 23 * 60 * 1000 + 47 * 1000);

    function update() {
        const diff = end - new Date();
        if (diff <= 0) return;

        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);

        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

// === BACK TO TOP ===
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// === AUTH MODAL ===
function initAuthModal() {
    const modal = document.getElementById('auth-modal');
    const closeBtn = document.getElementById('modal-close');
    const loginLink = document.querySelector('.login-link');
    const signupLink = document.querySelector('.signup-link');
    const tabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const switchToRegister = document.querySelector('.switch-to-register');
    const switchToLogin = document.querySelector('.switch-to-login');

    function openModal(tab = 'login') {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        showTab(tab);
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showTab(tab) {
        tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
        loginForm.classList.toggle('hidden', tab !== 'login');
        registerForm.classList.toggle('hidden', tab !== 'register');
    }

    loginLink.addEventListener('click', (e) => { e.preventDefault(); openModal('login'); });
    signupLink.addEventListener('click', (e) => { e.preventDefault(); openModal('register'); });
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    tabs.forEach(t => t.addEventListener('click', () => showTab(t.dataset.tab)));
    if (switchToRegister) switchToRegister.addEventListener('click', (e) => { e.preventDefault(); showTab('register'); });
    if (switchToLogin) switchToLogin.addEventListener('click', (e) => { e.preventDefault(); showTab('login'); });
}

// === LOAD MORE ===
function initLoadMore() {
    const btn = document.getElementById('load-more-btn');
    btn.addEventListener('click', () => {
        renderProducts(PRODUCTS_PER_LOAD);
    });
}

// === SEARCH FUNCTIONALITY ===
function initSearch() {
    const input = document.getElementById('search-input');
    const btn = document.getElementById('search-btn');

    function performSearch() {
        const query = input.value.trim();
        if (query) {
            // Simulated search - just scroll to products
            document.getElementById('recommendation-header').scrollIntoView({ behavior: 'smooth' });
        }
    }

    btn.addEventListener('click', performSearch);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}

// === INFINITE SCROLL (optional, subtle) ===
function initInfiniteScroll() {
    let loading = false;
    window.addEventListener('scroll', () => {
        if (loading) return;
        const scrollBottom = window.innerHeight + window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        if (scrollBottom >= docHeight - 500 && currentProductIndex < 120) {
            loading = true;
            setTimeout(() => {
                renderProducts(12);
                loading = false;
            }, 300);
        }
    });
}

// === HEADER SCROLL EFFECT ===
function initHeaderScroll() {
    const header = document.querySelector('.main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 200) {
            header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.2)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
        }
        lastScroll = currentScroll;
    });
}

// === INITIALIZE ===
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderFlashSale();
    renderTopSearch();
    renderProducts(30);
    initSlider();
    initCountdown();
    initBackToTop();
    initAuthModal();
    initLoadMore();
    initSearch();
    initInfiniteScroll();
    initHeaderScroll();
});
