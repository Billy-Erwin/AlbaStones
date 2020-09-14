import { getPhotoGallery, getPhotoUrlFromReference } from "../js/databaseUtilities.js";

class HousePlans extends HTMLElement {

    set data(val) {
        if(val) {
            this.setAttribute('data', val);
        } else {
            this.removeAttribute('data');
        }
    }

    get data() {
        return this.getAttribute('data');
    }

    async connectedCallback() {
        let theTemplate = `
            <div class="col-lg-4 col-md-6 margin-30px-bottom xs-margin-20px-bottom items">
                <div class="blog-block">
                    <div class="position-relative">
                        <img src="img/blog/01.jpg" alt="" />
                    </div>
                    <div class="blog-text padding-30px-all md-padding-25px-all xs-padding-20px-all">
                        <h5 class="font-size20 md-font-size18 font-weight-500 margin-10px-bottom xs-margin-5px-bottom">
                            <a href="plan-details.html" class="text-black">House Plan A</a>
                        </h5>
                        <ul class="blog-list">
                            <li><i class="fas fa-bed text-theme-color font-size13"></i>3</li>
                            <li><i class="fas fa-bath text-theme-color font-size13"></i>2.5</li>
                            <li><i class="fas fa-ruler text-theme-color font-size13"></i>2500 sqft</li>
                        </ul>
                        <p class="margin-10px-bottom">Summary text about Plan A.</p>
                        <a href="plan-details.html" class="text-black font-weight-500 font-size14">
                            Read More
                            <span class="ti-arrow-right vertical-align-middle font-size12 margin-10px-left"></span>
                        </a>
                    </div>
                </div>
            </div>
        `;
        this.innerHTML = `
            <section>
                <div class="container" style="height:600px; overflow: scroll;">
                    <div id="gallery-image-container" class="gallery row"></div>
                </div>
            </section>`;

        let photoGallery = await getPhotoGallery(this.data);

        let galleryImageContainer = document.getElementById('gallery-image-container');

        for (let image of photoGallery) {

            let photoUrl = await getPhotoUrlFromReference(image);

            let galleryImage = document.createElement('div');
            galleryImage.setAttribute('class', 'col-lg-4 col-md-6 margin-30px-bottom xs-margin-20px-bottom items');

            galleryImage.innerHTML = `
                <div class="portfolio-block position-relative overflow-hidden item">
                    <div class="item-img" style="width: 340px; height: 274px;">
                        <img src="${photoUrl}" alt="..." />
                    </div>
                    <div class="item-content">
                        <div class="item-icon margin-10px-bottom">
                            <a class="popimg" href="${photoUrl}">
                                <i class="ti-plus text-white font-size18"></i>
                            </a>
                        </div>
                    </div>
                </div>`;

            galleryImageContainer.appendChild(galleryImage);
        }
    }

}

customElements.define('house-plans', HousePlans);
