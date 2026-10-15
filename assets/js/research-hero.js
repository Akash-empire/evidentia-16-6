/**
 * research-hero.js — Projects Slider Controller
 * Smooth auto-scroll with pause on hover & touch-swipe support.
 * Handles interactive clicks on hero project cards to scroll & reveal project details.
 */
(function () {
    "use strict";

    function initResearchHeroSlider() {
        var swiperContainer = document.querySelector(".researchHeroSwiper");
        if (!swiperContainer || typeof Swiper === "undefined") return;

        var heroSwiper = new Swiper(".researchHeroSwiper", {
            slidesPerView: 1.15,
            spaceBetween: 18,
            loop: true,
            loopedSlides: 11,
            speed: 800,
            autoplay: {
                delay: 2400,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            grabCursor: true,
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 24
                },
                1280: {
                    slidesPerView: 3.8,
                    spaceBetween: 26
                }
            }
        });

        // Ensure autoplay starts automatically
        if (heroSwiper.autoplay && typeof heroSwiper.autoplay.start === "function") {
            heroSwiper.autoplay.start();
        }

        // Delegate click handler for hero project cards linking to #project-X
        swiperContainer.addEventListener("click", function (e) {
            var cardLink = e.target.closest(".research-hero-card");
            if (!cardLink) return;

            var targetHref = cardLink.getAttribute("href");
            if (!targetHref || !targetHref.startsWith("#project-")) return;

            var targetCard = document.querySelector(targetHref);
            if (!targetCard) return;

            e.preventDefault();

            // 1. If currently filtered and the card is hidden, reset to 'all'
            var activeFilterBtn = document.querySelector(".proj-filter-btn.active");
            if (activeFilterBtn && activeFilterBtn.getAttribute("data-filter") !== "all") {
                var allBtn = document.querySelector('.proj-filter-btn[data-filter="all"]');
                if (allBtn) {
                    allBtn.click();
                }
            }

            // 2. Smoothly scroll to target card with fixed header offset
            var headerOffset = 95;
            var cardTop = targetCard.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: cardTop,
                behavior: "smooth"
            });

            // 3. Open progressive disclosure drawer if not already expanded
            var detailsDrawer = targetCard.querySelector(".project-card-expanded-body");
            var detailsToggleBtn = targetCard.querySelector(".btn-project-details-toggle");
            if (detailsDrawer && !detailsDrawer.classList.contains("show")) {
                if (detailsToggleBtn) {
                    detailsToggleBtn.click();
                } else if (typeof bootstrap !== "undefined" && bootstrap.Collapse) {
                    new bootstrap.Collapse(detailsDrawer, { toggle: true });
                }
            }

            // 4. Highlight flash on the target card
            targetCard.classList.add("project-card-highlighted");
            setTimeout(function () {
                targetCard.classList.remove("project-card-highlighted");
            }, 2200);

            // 5. Update browser hash history
            if (history.pushState) {
                history.pushState(null, null, targetHref);
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initResearchHeroSlider);
    } else {
        initResearchHeroSlider();
    }
})();

