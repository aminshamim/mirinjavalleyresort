const enContent = {
    bannerTitle: "Mirinja Valley Resort & Restaurant",
    bannerDesc: "Experience tranquility and luxury in the heart of nature.",
    cottages: "Cottages",
    cottage: "Cottage",
    cottageDesc: "Cozy and comfortable cottages for your perfect stay.",
    jhumghor: "Jhumghor",
    jhumghorDesc: "Traditional Jhumghor for a unique experience.",
    team: "Our Team",
    testimonials: "Testimonials",
    testimonial1: '"A wonderful place to relax and enjoy nature!"',
    testimonial2: '"The cottages are beautiful and the food is amazing."',
    location: "Location"
};
const bnContent = {
    bannerTitle: "মিরিঞ্জা ভ্যালি রিসোর্ট ও রেস্টুরেন্ট",
    bannerDesc: "প্রকৃতির মাঝে প্রশান্তি ও বিলাসিতার অভিজ্ঞতা নিন।",
    cottages: "কটেজসমূহ",
    cottage: "কটেজ",
    cottageDesc: "আপনার নিখুঁত থাকার জন্য আরামদায়ক কটেজ।",
    jhumghor: "ঝুমঘর",
    jhumghorDesc: "একটি অনন্য অভিজ্ঞতার জন্য ঐতিহ্যবাহী ঝুমঘর।",
    team: "আমাদের টিম",
    testimonials: "প্রশংসাপত্র",
    testimonial1: '"প্রকৃতির মাঝে বিশ্রাম ও উপভোগের জন্য দারুণ জায়গা!"',
    testimonial2: '"কটেজগুলো সুন্দর এবং খাবার অসাধারণ।"',
    location: "অবস্থান"
};
function setLanguage(content) {
    var el;
    el = document.querySelector('#banner h1');
    if (el) el.textContent = content.bannerTitle;
    el = document.querySelector('#banner p');
    if (el) el.textContent = content.bannerDesc;
    el = document.querySelector('#cottages h2');
    if (el) el.textContent = content.cottages;
    var cottageH3s = document.querySelectorAll('.cottage h3');
    var cottagePs = document.querySelectorAll('.cottage p');
    if (cottageH3s[0]) cottageH3s[0].textContent = content.cottage;
    if (cottagePs[0]) cottagePs[0].textContent = content.cottageDesc;
    if (cottageH3s[1]) cottageH3s[1].textContent = content.jhumghor;
    if (cottagePs[1]) cottagePs[1].textContent = content.jhumghorDesc;
    el = document.querySelector('#team h2');
    if (el) el.textContent = content.team;
    el = document.querySelector('#testimonials h2');
    if (el) el.textContent = content.testimonials;
    var testimonialPs = document.querySelectorAll('.testimonial-list blockquote p');
    if (testimonialPs[0]) testimonialPs[0].textContent = content.testimonial1;
    if (testimonialPs[1]) testimonialPs[1].textContent = content.testimonial2;
    el = document.querySelector('#location h2');
    if (el) el.textContent = content.location;
}

// Default to English
setLanguage && setLanguage(enContent);

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.getElementById('hamburger-btn');
    var navMenu = document.getElementById('nav-menu');
    var menuBar = document.getElementById('menu-bar');

    function showMenu() {
        if (navMenu) navMenu.classList.remove('hidden');
    }
    function hideMenu() {
        if (navMenu) navMenu.classList.add('hidden');
    }
    function toggleMenu() {
        if (navMenu) navMenu.classList.toggle('hidden');
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMenu();
        });
    }

    if (menuBar && navMenu) {
        menuBar.addEventListener('click', function (e) {
            if (e.target.tagName === 'A' && window.innerWidth < 768) {
                hideMenu();
            }
        });
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            showMenu();
        } else {
            hideMenu();
        }
    });

    // On load, set correct menu state
    if (window.innerWidth >= 768) {
        showMenu();
    } else {
        hideMenu();
    }
}); 