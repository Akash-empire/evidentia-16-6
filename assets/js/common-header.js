document.addEventListener("DOMContentLoaded", () => {
    const HEADER_HTML = `
    <!-- Offcanvas Area Start -->
    <div class="fix-area">
        <div class="offcanvas__info">
            <div class="offcanvas__wrapper">
                <div class="offcanvas__content">
                    <div class="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                        <div class="offcanvas__logo">
                            <a href="index.html">
                                <img src="assets/webimages/log.png" width="200px" alt="logo-img">
                            </a>
                        </div>
                        <div class="offcanvas__close">
                            <button>
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>

                    <div class="mobile-menu fix mb-3"></div>
                    <div class="offcanvas__contact">
                        <h4 class="n900-clr">Contact Info</h4>
                        <ul class="d-grid gap-2 mb-5">
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon">
                                    <i class="fal fa-map-marker-alt"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a target="_blank" href="#">3517 W. Gray St. Utica, Pennsylvania</a>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon mr-15">
                                    <i class="fal fa-envelope"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a href="mailto:info@example.com"><span
                                            class="mailto:info@example.com">alma.lawson@example.com</span></a>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon mr-15">
                                    <i class="fal fa-clock"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a target="_blank" href="#">Sun-friday, 02am -09pm</a>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon mr-15">
                                    <i class="far fa-phone"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a href="tel:+11002345909">(219) 555-0114</a>
                                </div>
                            </li>
                        </ul>
                        <div class="header-button mt-4">
                            <a href="contact.html" class="theme-btn p2-bg text-center">
                                <span>
                                    Get A Quote
                                    <span class="ani-arrow">
                                        <i class="fa-solid fa-arrow-right-long"></i>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="social-icon d-flex align-items-center">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="offcanvas__overlay"></div>

    <header id="header-sticky" class="header-1 w-100">
        <div class="container">
            <div class="mega-menu-wrapper">
                <div class="header-main">
                    <div class="header-left" style="padding-top: 10px;">
                        <div class="logo">
                            <a href="index.html" class="header-logo">
                                <img src="assets/webimages/log.png" width="200px" alt="logo-img">
                            </a>
                        </div>
                    </div>
                    <div class="header-right d-flex justify-content-end align-items-center">
                        <div class="mean__menu-wrapper">
                            <div class="main-menu">
                                <nav id="mobile-menu">
                                    <ul>



    <li>
        <a href="index.html">Home</a>
    </li>
    <li>
        <a href="about.html">About Us</a>
    </li>
    <li>
        <a href="services.html">Services</a>
    </li>
    <li>
        <a href="projects.html">Projects</a>
    </li>
    <li>
        <a href="news-events.html">
            News & Events
        </a>
    </li>


</ul>
                                </nav>
                            </div>
                        </div>
                        <div class="header__hamburger d-xl-none d-block my-auto">
                            <div class="sidebar__toggle">
                                <img src="assets/img/icon/menu.png" alt="icon">
                            </div>
                        </div>

                    </div>
                    <div class="header-hamburger-inner d-xl-flex gap-xxl-4 gap-xl-3 align-items-center d-none">
                        <a href="contact.html"
                            class="common-btn box-style cmn-style1 d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden rounded-5 p3-bg">
                            Contact Us
                        </a>
                        <div class="header__hamburger my-auto d-xl-none d-block">
                            <div class="sidebar__toggle">
                                <img src="assets/img/icon/menu.png" alt="icon">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="services-mega-backdrop"></div>

    `;

    const FOOTER_HTML = `
    <footer class="footer-section style blackbg fix pt-5 gradient-footer">
        <div class="container">

            <!-- Top Footer -->
            <div class="row gy-5 pb-5 border-bottom border-secondary">

                <!-- Company Info -->
                <div class="col-xl-3 col-lg-3 col-md-12">
                    <div class="footer-widget pe-lg-5">

                        <a href="index.html" class="footer-logo d-inline-block mb-4">
                            <img src="assets/webimages/log.png" width="270px" alt="logo" class="white-logoo">
                        </a>

                        <p class="white65 mb-4">
                            Empowering researchers, institutions and industries through innovative research consulting, scientific excellence and evidence-based solutions that drive knowledge.
                        </p>


                        <!-- Social -->
                        <div class="social-custom d-flex align-items-center gap-3 mt-4">
                            <a href="#" class="black">
                                <i class="fab fa-instagram white65"></i>
                            </a>

                           

                            <a href="#" class="black">
                                <i class="fab fa-linkedin-in white65"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <!-- Programs -->
                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div class="footer-widget">

                        <div class="widget-head mb-4">
                            <h5 class="white">Research</h5>
                        </div>

                        <ul class="list-area d-grid gap-1">

    <li><a href="research-consulting.html">Research Consulting</a></li>

    <li><a href="data-analysis.html">Data Analysis</a></li>

    <li><a href="project-management.html">Project Management</a></li>

    <li><a href="publication-support.html">Publication Support</a></li>

    <li><a href="documentation.html">Documentation</a></li>

    <li><a href="research-collaboration.html">Research Collaboration</a></li>

    <li><a href="scientific-advisory.html">Scientific Advisory</a></li>

</ul>

                    </div>
                </div>

                <!-- Frameworks -->
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                    <div class="footer-widget">

                        <div class="widget-head mb-4">
                            <h5 class="white">
    Training
</h5>
                        </div>

                        <ul class="list-area d-grid gap-1">

    <li><a href="research-methodology.html">Research Methodology</a></li>

    <li><a href="scientific-writing.html">Scientific Writing</a></li>

    <li><a href="publication-workshops.html">Publication Workshops</a></li>

    <li><a href="faculty-development.html">Faculty Development</a></li>

    <li><a href="capacity-building.html">Capacity Building</a></li>

    <li><a href="professional-training.html">Professional Training</a></li>

</ul>

                    </div>
                </div>

                <!-- Resources -->
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                    <div class="footer-widget">

                        <div class="widget-head mb-4">
                           <h5 class="white">
    Resource Centre
</h5>
                        </div>

                        <ul class="list-area d-grid gap-1">

    <li><a href="publications.html">Publications</a></li>

    <li><a href="case-studies.html">Case Studies</a></li>

    <li><a href="research-guides.html">Research Guides</a></li>

    <li><a href="downloads.html">Downloads</a></li>

    <li><a href="news-events.html">News & Events</a></li>

    <li><a href="opportunities.html">Opportunities</a></li>

</ul>

                    </div>
                </div>

                <!-- Contact Details -->
                <div class="col-xl-2 col-lg-3 col-md-6">
                    <div class="footer-widget">

                        <div class="widget-head mb-4">
                            <h5 class="white">Contact</h5>
                        </div>

                        <div class="d-flex flex-column gap-4">

    <!-- Phone -->
    <div>
        <span class="fs-eight white65 d-block mb-1">
            Support
        </span>

        <a href="tel:+919790615824" class="white fw-semibold">
            +91 97906 15824
        </a>
    </div>

    <!-- Email -->
    <div>
        <span class="fs-eight white65 d-block mb-1">
            Email Address
        </span>

        <a href="mailto:admin@evidentia.co.in" class="white fw-semibold">
            admin@evidentia.co.in
        </a>
    </div>

    <!-- Address -->
    <div>
        <span class="fs-eight white65 d-block mb-1">
            Office Address
        </span>

        <p class="white mb-0">
            Aminjikarai, <br>
            Chennai – 600029.
        </p>
    </div>

</div>

                    </div>
                </div>

            </div>

            <!-- Bottom Footer -->
            <div class="footer-bottom py-4">

                <div class="row align-items-center gy-3">

                    <div class="col-lg-6 text-center text-lg-start">
                        <p class="white65 mb-0">
                            © 2026
                            <a href="index.html" class="white fw-semibold">
                                Evidentia
                            </a>.
                            All Rights Reserved.
                        </p>
                    </div>

                    <div class="col-lg-6 text-end">
                        <p class="white65">Designed by <a href="https://impinfo.in" class="white fw-semibold">Imperial Info Systems</a></p>
                    </div>

                </div>

            </div>

        </div>
    </footer>
    `;

    // 1. Inject Header Content
    const headerContainer = document.getElementById("header");
    if (headerContainer) {
        headerContainer.innerHTML = HEADER_HTML;

        const psychometricBtn = document.getElementById('psychometricBtn');
        if (psychometricBtn) {
            psychometricBtn.addEventListener('click', () => {
                window.location.href = 'about.html';
            });
        }

        // Active Menu Highlighting Logic
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll(".main-menu ul li a");
        navLinks.forEach(link => {
            const linkHref = link.getAttribute("href");
            if (linkHref === currentPage) {
                document.querySelectorAll(".main-menu li").forEach(item => item.classList.remove("active"));
                const closestLi = link.closest("li");
                if (closestLi) closestLi.classList.add("active");
            }
        });

        // Dynamic Submenu Click Handler for Services Tab Switching
        const megaMenu = document.querySelector('.services-mega');
        if (megaMenu) {
            const tabs = megaMenu.querySelectorAll('[data-services-tab]');
            const panels = megaMenu.querySelectorAll('[data-services-panel]');
            tabs.forEach(tab => {
                tab.addEventListener('click', event => {
                    event.preventDefault();
                    const target = tab.getAttribute('data-services-tab');
                    tabs.forEach(item => item.classList.toggle('active', item === tab));
                    panels.forEach(panel => {
                        panel.classList.toggle('active', panel.getAttribute('data-services-panel') === target);
                    });
                });
            });
        }

        // Sidebar Offcanvas Navigation Toggle Trigger Bound Safely
        const toggleBtn = document.querySelector('.sidebar__toggle');
        const closeBtn = document.querySelector('.offcanvas__close button');
        const overlay = document.querySelector('.offcanvas__overlay');
        const infoArea = document.querySelector('.offcanvas__info');

        if (toggleBtn && infoArea && overlay) {
            toggleBtn.addEventListener('click', () => {
                infoArea.classList.add('info-open');
                overlay.classList.add('overlay-open');
            });
        }
        if (closeBtn && infoArea && overlay) {
            closeBtn.addEventListener('click', () => {
                infoArea.classList.remove('info-open');
                overlay.classList.remove('overlay-open');
            });
        }
        if (overlay && infoArea) {
            overlay.addEventListener('click', () => {
                infoArea.classList.remove('info-open');
                overlay.classList.remove('overlay-open');
            });
        }

        // Dispatch load notifications
        document.dispatchEvent(new CustomEvent("headerLoaded"));
    }

    // 2. Inject Footer Content
    const footerContainer = document.getElementById("footer");
    if (footerContainer) {
        footerContainer.innerHTML = FOOTER_HTML;
        document.dispatchEvent(new CustomEvent("footerLoaded"));
    }

    // 3. Inject Floating WhatsApp Chat Widget globally across all pages
    if (!document.getElementById("whatsapp-floating-widget")) {
        const whatsappWidget = document.createElement("a");
        whatsappWidget.id = "whatsapp-floating-widget";
        whatsappWidget.className = "whatsapp-chat-widget";
        whatsappWidget.href = "https://api.whatsapp.com/send?phone=919876543210&text=Hello%20Evidentia%20Research%20Solutions!%20I%20would%20like%20to%20inquire%20about%20your%20research%20and%20consulting%20solutions.";
        whatsappWidget.target = "_blank";
        whatsappWidget.rel = "noopener noreferrer";
        whatsappWidget.setAttribute("aria-label", "Chat on WhatsApp");
        whatsappWidget.innerHTML = `
            <div class="whatsapp-chat-bubble">
                <span class="online-dot"></span>
                <span>We're here to help</span>
            </div>
            <div class="whatsapp-chat-button" title="Chat with Evidentia on WhatsApp">
                <svg class="whatsapp-badge-icon" viewBox="0 0 448 512" width="34" height="34" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
            </div>
        `;
        document.body.appendChild(whatsappWidget);
    }

});