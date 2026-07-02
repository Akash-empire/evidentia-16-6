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
        <a href="about.html">About Us</a>
    </li>

    <!-- Research -->
    <li class="has-dropdown">
        <a href="#">
            Research
            <i class="fas fa-angle-down"></i>
        </a>

        <ul class="submenu">
            <li><a href="research-consulting.html">Research Consulting</a></li>
            <li><a href="data-analysis.html">Data Analysis</a></li>
            <li><a href="project-management.html">Project Management</a></li>
            <li><a href="publication-support.html">Publication Support</a></li>
            <li><a href="documentation.html">Documentation</a></li>
        </ul>
    </li>

    <!-- Distinct Capacities -->
    <li class="has-dropdown">
        <a href="#">
            Distinct Capacities
            <i class="fas fa-angle-down"></i>
        </a>

        <ul class="submenu">
            <li><a href="capacity-building.html">Capacity Building</a></li>
            <li><a href="community-development.html">Community Development</a></li>
            <li><a href="research-collaboration.html">Research Collaboration</a></li>
        </ul>
    </li>

    <!-- Training -->
    <li class="has-dropdown">
        <a href="#">
            Training
            <i class="fas fa-angle-down"></i>
        </a>

        <ul class="submenu">
            <li><a href="training-programs.html">Training Programs</a></li>
            <li><a href="workshops.html">Workshops</a></li>
            <li><a href="webinars.html">Webinars</a></li>
        </ul>
    </li>

    <!-- Resource Centre -->
    <li class="has-dropdown">
        <a href="#">
            Resource Centre
            <i class="fas fa-angle-down"></i>
        </a>

        <ul class="submenu">
            <li><a href="publications.html">Publications</a></li>
            <li><a href="case-studies.html">Case Studies</a></li>
            <li><a href="downloads.html">Downloads</a></li>
        </ul>
    </li>

    <!-- Opportunities -->
    <li class="has-dropdown">
        <a href="#">
            Opportunities
            <i class="fas fa-angle-down"></i>
        </a>

        <ul class="submenu">
            <li><a href="careers.html">Careers</a></li>
            <li><a href="internships.html">Internships</a></li>
            <li><a href="collaborate.html">Collaborate With Us</a></li>
        </ul>
    </li>

    <!-- News -->
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

        <a href="mailto:research@evidentia.co.in" class="white fw-semibold">
            research@evidentia.co.in
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



});