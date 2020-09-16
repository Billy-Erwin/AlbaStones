import { getPhotoUrl, getHousePlans } from "../js/databaseUtilities.js";

class HousePlans extends HTMLElement {

    async connectedCallback() {
        this.innerHTML = `
            <section>
                <div class="container" style="height:1100px; overflow: scroll; padding: 50px;">
                    <div id="house_plans_container" class="gallery row"></div>
                </div>
            </section>`;

        let housePlans = await getHousePlans();
        let housePlanContainer = document.getElementById('house_plans_container');

        for (let housePlan of housePlans) {
            let photoUrl = await getPhotoUrl(housePlan.mainPhoto);
            housePlan.photoUrl = photoUrl;
            let queryString = new URLSearchParams(housePlan).toString();

            let housePlanDiv = document.createElement('div');
            housePlanDiv.setAttribute('class', 'col-lg-4 col-md-6 margin-30px-bottom xs-margin-20px-bottom items');

            housePlanDiv.innerHTML = `
                <div class="blog-block">
                    <div class="position-relative">
                        <img src=${photoUrl} alt="" />
                    </div>
                    <div class="blog-text padding-30px-all md-padding-25px-all xs-padding-20px-all">
                        <h5 class="font-size20 md-font-size18 font-weight-500 margin-10px-bottom xs-margin-5px-bottom">
                            <a href="plan-details.html" class="text-black">${housePlan.title}</a>
                        </h5>
                        <ul class="blog-list">
                            <li><i class="fas fa-bed text-theme-color font-size13"></i>${housePlan.bedrooms}</li>
                            <li><i class="fas fa-bath text-theme-color font-size13"></i>${housePlan.bathrooms}</li>
                            <li><i class="fas fa-ruler text-theme-color font-size13"></i>${housePlan.totalSqft} sqft</li>
                        </ul>
                        <p class="margin-10px-bottom">${housePlan.description}</p>
                        <a
                            href="plan-details.html?${queryString}"
                            class="text-black font-weight-500 font-size14">
                            Read More
                            <span class="ti-arrow-right vertical-align-middle font-size12 margin-10px-left"></span>
                        </a>
                    </div>
                </div>
            `;
            housePlanContainer.appendChild(housePlanDiv);
        }
    }

}

customElements.define('house-plans', HousePlans);
