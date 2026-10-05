/**
 * research-hero.js  —  Isolated animation controller
 * Triggers .rh-visible on .research-hero-image and .research-hero-content
 * when they enter the viewport. Vanilla JS only. No jQuery.
 */
(function () {
    "use strict";

    function initResearchHero() {
        var section = document.querySelector(".research-hero-section");
        if (!section) return;

        var images  = section.querySelectorAll(".research-hero-image");
        var content = section.querySelector(".research-hero-content");

        var targets = Array.prototype.slice.call(images);
        if (content) targets.unshift(content);   // content animates first

        /* Fallback: no IntersectionObserver support */
        if (!("IntersectionObserver" in window)) {
            targets.forEach(function (el) { el.classList.add("rh-visible"); });
            return;
        }

        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("rh-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.10 }
        );

        targets.forEach(function (el) { observer.observe(el); });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initResearchHero);
    } else {
        initResearchHero();
    }
})();
