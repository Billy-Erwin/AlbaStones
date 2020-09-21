class AlbastonesHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
             <header>
                <div id="top-bar" class="top-bar">
                    <div class="container lg-container">
                        <div class="row">
                            <div class="col-md-3 xs-display-none">
                                <ul class="top-social-icon">
<!--                                    <li><a href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a></li>-->
<!--                                    <li><a href="javascript:void(0)"><i class="fab fa-twitter"></i></a></li>-->
<!--                                    <li><a href="javascript:void(0)"><i class="fab fa-pinterest-p"></i></a></li>-->
<!--                                    <li><a href="javascript:void(0)"><i class="fab fa-linkedin-in"></i></a></li>-->
<!--                                    <li><a href="javascript:void(0)"><i class="fab fa-dribbble"></i></a></li>-->
                                </ul>
                            </div>
                            <div class="col-xs-12 col-md-9">
                                <div class="top-bar-info">
                                    <ul>
                                        <li><i class="fas fa-phone"></i>(727) 510-9883</li>
                                        <li><i class="fas fa-envelope"></i>albastonesllc@gmail.com</li>
                                        <li class="sm-display-none"><i class="far fa-clock"></i>Mon-Fri: 8:00am - 5:00pm</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navbar-default border-bottom border-color-light-white">
                    <div class="container lg-container">
                        <div class="row align-items-center">
                            <div class="col-12 col-lg-12">
                                <div class="menu_area alt-font">
                                    <nav class="navbar navbar-expand-lg navbar-light no-padding">
                                        <div class="navbar-header navbar-header-custom">
                                            <a href="index.html" class="navbar-brand"><img id="logo" src="img/logos/logo_small_house.png" alt="logo"></a>
                                        </div>
                                        <div class="navbar-toggler"></div>
                                        <ul class="navbar-nav ml-auto" id="nav" style="display: none;">
                                            <li><a href="index.html">Home</a></li>
                                            <li>
                                                <a href="#">About Us</a>
                                                <ul>
                                                    <li><a href="about-us.html">About Us</a></li>
                                                    <li><a href="team.html">Our Team</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="services.html">Services</a>
                                                <ul>
                                                    <li><a href="construction-service-details.html">Construction</a></li>
                                                    <li><a href="remodeling-service-details.html">Remodeling</a></li>
                                                    <li><a href="maintenance-service-details.html">Maintenance</a></li>
                                                    <li><a href="design-service-details.html">Interior Design</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="plans.html?id=1">Residential</a></li>
                                            <li><a href="gallery.html">Gallery</a></li>
                                            <li><a href="contact-us.html">Contact Us</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define('albastones-header', AlbastonesHeader);
