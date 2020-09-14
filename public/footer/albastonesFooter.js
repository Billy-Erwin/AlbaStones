class AlbastonesFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <footer>
            <div class="container">
                <div class="footer-5 footer-style3">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 sm-margin-25px-bottom mobile-margin-20px-bottom">
                            <div class="sm-padding-50px-right xs-no-padding-right">
                                <span class="footer-logo margin-25px-bottom xs-margin-15px-bottom display-inline-block">
                                    <img src="img/logos/logo_small_house_white_130x52.png" alt="logo">
                                </span>
                                <span class="footer-logo margin-25px-left display-inline-block">
                                    <h4 class="mobile-margin-10px-bottom">AlbaStones</h4>
                                </span>
                                <p class="no-margin-bottom">Our mission is to create homes that that of high value and unique style. AlbaStones homes are valued for their quality craftsmanship and attention to detail. It is our goal to build a home that reflects a unique architectural style and offer to our client professional guidance and personalized customer service.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6 mobile-margin-20px-bottom">
                            <div class="padding-40px-left sm-no-padding-left">
                                <h4 class="mobile-margin-10px-bottom">Quick Links</h4>
                                <ul class="footer-list no-margin-bottom">
                                    <li><a href="about-us.html" class="font-size14">About us</a></li>
                                    <li><a href="contact-us.html" class="font-size14">Contact us</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <h4 class="mobile-margin-10px-bottom">Quick Contact</h4>
                            <ul class="">
                                <li><i class="ti-location-pin margin-10px-right md-margin-two-right text-theme-color"></i>2506 Middleton Grove Drive<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Brandon, FL 33511</li>
                                <li><i class="ti-location-pin margin-10px-right md-margin-two-right text-theme-color"></i>3335 Fox Chase Hunt Drive<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Palm Harbor, FL 34683</li>
                                <li><a href="javascript:void(0)" class="font-size14"><i class="ti-email margin-10px-right md-margin-two-right text-theme-color"></i>albastonesllc@gmail.com</a></li>
                                <li><i class="ti-mobile margin-10px-right md-margin-two-right text-theme-color"></i>(615) 886-8790</li>
                            </ul>
<!--                            If you want to add social media in the future-->
<!--                            <div class="footer-icon">-->
<!--                                <ul class="no-margin-bottom">-->
<!--                                    <li>-->
<!--                                        <a href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a>-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <a href="javascript:void(0)"><i class="fab fa-twitter"></i></a>-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <a href="javascript:void(0)"><i class="fab fa-youtube "></i></a>-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <a href="javascript:void(0)"><i class="fab fa-linkedin-in"></i></a>-->
<!--                                    </li>-->
<!--                                </ul>-->
<!--                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-style3-bottom">
                <div class="container">
                    <p class="font-size14">&copy; 2020 AlbaStones, LLC. Web Design and Hosting by <a href="http://www.scriptfrogs.com">ScriptFrogs</a></p>
                </div>
            </div>
        </footer>
        `;
    }
}
customElements.define('albastones-footer', AlbastonesFooter);
