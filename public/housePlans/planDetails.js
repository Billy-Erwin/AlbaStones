class PlanDetails extends HTMLElement {
    connectedCallback() {
        const planDetails = new URLSearchParams(window.location.search);

        this.innerHTML = `
            <section style="padding-bottom: 0px;">
                <div class="container">
                    <div class="project-detail-block">
                        <div class="row margin-40px-bottom md-margin-25px-bottom">
                            <div class="col-lg-8 sm-margin-25px-bottom">
                                <div class="">
                                    <img src=${planDetails.get('photoUrl')} alt="" />
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="padding-20px-left md-no-padding-left">
                                    <h5>${planDetails.get('title')}</h5>
                                    <p class="md-display-none sm-display-block">${planDetails.get('description')}</p>
                                    <ul class="project-list no-margin-bottom">
                                        <li>
                                            <i class="fas fa-bed text-theme-color"></i>
                                            <h6 class="no-margin-bottom font-size16 xs-font-size15 line-height-22 font-weight-500">Bedrooms</h6>
                                            <p class="no-margin-bottom">${planDetails.get('bedrooms')}</p>
                                        </li>
                                        <li>
                                            <i class="fas fa-bath text-theme-color"></i>
                                            <h6 class="no-margin-bottom font-size16 xs-font-size15 line-height-22 font-weight-500">Bathrooms</h6>
                                            <p class="no-margin-bottom">${planDetails.get('bathrooms')}</p>
                                        </li>
                                        <li>
                                            <i class="fas fa-ruler text-theme-color"></i>
                                            <h6 class="no-margin-bottom font-size16 xs-font-size15 line-height-22 font-weight-500">Square Footage</h6>
                                            <p class="no-margin-bottom">${planDetails.get('totalSqft')}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h4>Additional Details</h4>
                        <p>${planDetails.get('additionalInfo')}</p>
                    </div>
                </div>
            </section>
            <albastones-gallery data=${planDetails.get('photoGallery')}></albastones-gallery>
        `;
    }
}
customElements.define('plan-details', PlanDetails);
