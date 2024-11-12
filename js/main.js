

// Header dots
const infoBtns = document.querySelectorAll('.info-dot');
const hintBtns = document.querySelectorAll('.info-hint__btn');

for (let btn of infoBtns) {
    btn.addEventListener('click', () => {
        infoBtns.forEach( element => {
            element.parentNode.querySelector('.info-hint').classList.add('hidden');
        });
        btn.parentNode.querySelector('.info-hint').classList.toggle('hidden');
    });
}

for (let btn of hintBtns) {
    btn.addEventListener('click', () => {
        hintBtns.forEach(element => {
            element.classList.remove('selected');
        });
        btn.classList.toggle('selected');
        console.log(btn);
    });
}

// Tabs
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsCard = document.querySelectorAll('[data-tab-value]');

for (let tab of tabsBtns) {
    tab.addEventListener('click', () => {
        for (let tab of tabsBtns) {
            tab.parentNode.classList.remove('products__tabs-item_active');
        }
        tab.parentNode.classList.add('products__tabs-item_active');

        for (let card of tabsCard) {
            if (card.getAttribute(['data-tab-value']) == tab.getAttribute(['data-tab'])) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }

        swiper.update();
       
    });
};

// Search-form

const searchInput = document.querySelector('.search-form__input');
const searchForm = document.querySelector('.search-form');

searchInput.addEventListener('focus', () => {
    searchForm.classList.add('search-form__focused');
})
searchInput.addEventListener('blur', () => {
  searchForm.classList.remove('search-form__focused');
});

// mobile-nav

const btnOpen = document.querySelector('.nav__mobile-open');
const btnClose = document.querySelector('.nav__mobile-close');
const mobileNav = document.querySelector('.mobile-nav');

btnOpen.addEventListener('click', () => {
    btnOpen.classList.add('hidden');
    mobileNav.classList.add('mobile-nav_open');
    btnClose.classList.add('visible');
});

btnClose.addEventListener('click', () => {
    btnClose.classList.remove('visible');
    mobileNav.classList.remove('mobile-nav_open');
    btnOpen.classList.remove('hidden');
});


