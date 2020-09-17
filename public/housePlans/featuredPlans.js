import { getHousePlans, getPhotoUrl } from "../js/databaseUtilities.js";

class FeaturedPlans extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = `
            <section>
                <div class="container">
                    <div class="margin-50px-bottom xs-margin-30px-bottom text-center">
                        <h4 class="font-size38 xs-font-size28 line-height-45 font-weight-500 no-margin-bottom">Featured Plans</h4>
                    </div>
                    <div id="featured_plans_container" class="row"></div>
                </div>
            </section>
        `;

        let featuredHousePlans = await getHousePlans();
        let featuredPlanContainer = document.getElementById('featured_plans_container');
        // let featuredPlan = featuredHousePlans[0];

        for (let featuredPlan of featuredHousePlans) {
        // for (let i = 0; i < 3; i++) {
            let photoUrl = await getPhotoUrl(featuredPlan.mainPhoto);
            featuredPlan.photoUrl = photoUrl;
            let queryString = new URLSearchParams(featuredPlan).toString();

            let featuredPlanDiv = document.createElement('div');
            featuredPlanDiv.setAttribute('class', 'col-lg-4 col-md-6 margin-30px-bottom xs-margin-20px-bottom items');

            featuredPlanDiv.innerHTML = `
                <div class="blog-block">
                    <div class="position-relative">
                        <img src=${photoUrl} alt="" />
                    </div>
                    <div class="blog-text padding-30px-all md-padding-25px-all xs-padding-20px-all">
                        <h5 class="font-size20 md-font-size18 font-weight-500 margin-10px-bottom xs-margin-5px-bottom">
                            <a href="plan-details.html" class="text-black">${featuredPlan.title}</a>
                        </h5>
                        <ul class="blog-list">
                            <li><i class="fas fa-bed text-theme-color font-size13"></i>${featuredPlan.bedrooms}</li>
                            <li><i class="fas fa-bath text-theme-color font-size13"></i>${featuredPlan.bathrooms}</li>
                            <li><i class="fas fa-ruler text-theme-color font-size13"></i>${featuredPlan.totalSqft} sqft</li>
                        </ul>
                        <p class="margin-10px-bottom">${featuredPlan.description}</p>
                        <a
                            href="plan-details.html?${queryString}"
                            class="text-black font-weight-500 font-size14">
                            Read More
                            <span class="ti-arrow-right vertical-align-middle font-size12 margin-10px-left"></span>
                        </a>
                    </div>
                </div>
            `;
            featuredPlanContainer.appendChild(featuredPlanDiv);
        }
    }
}
customElements.define('featured-plans', FeaturedPlans);
