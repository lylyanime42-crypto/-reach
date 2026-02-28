'use strict';

/**
 * utility function to toggle class on element
 */
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


/**
 * modal variables
 */
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[modal-close-overlay]');

/**
 * modal function
 */
const modalCloseFunc = function () { modal.classList.add('closed'); }

/**
 * modal eventListener
 */
if (modalCloseOverlay) modalCloseOverlay.addEventListener('click', modalCloseFunc);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', modalCloseFunc);


/**
 * notification toast variables
 */
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

/**
 * notification toast eventListener
 */
if (toastCloseBtn) {
    toastCloseBtn.addEventListener('click', function () {
        notificationToast.classList.add('closed');
    });
}


/**
 * mobile menu variables
 */
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}


/**
 * accordion variables
 */
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}


/**
 * countdown timer logic (if elements exist)
 */
const countdownDays = document.querySelector('[data-days]');
const countdownHours = document.querySelector('[data-hours]');
const countdownMinutes = document.querySelector('[data-minutes]');
const countdownSeconds = document.querySelector('[data-seconds]');

if (countdownDays && countdownHours && countdownMinutes && countdownSeconds) {
    // Set the date we're counting down to
    const countDownDate = new Date().getTime() + (2 * 24 * 60 * 60 * 1000); // 2 days from now

    // Update the count down every 1 second
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownDays.innerHTML = days;
        countdownHours.innerHTML = hours;
        countdownMinutes.innerHTML = minutes;
        countdownSeconds.innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);
}

/**
 * add to cart functionality (Visual only)
 */
const addCartBtns = document.querySelectorAll('.add-cart-btn, .btn-action');
const cartCount = document.querySelector('.header-user-actions .action-btn .count');

addCartBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        if (cartCount) {
            let count = parseInt(cartCount.innerText);
            cartCount.innerText = count + 1;
            
            // Notification toast show on add
            if (notificationToast) {
                notificationToast.classList.add('active');
                setTimeout(() => {
                    notificationToast.classList.remove('active');
                }, 3000);
            }
        }
    });
});
