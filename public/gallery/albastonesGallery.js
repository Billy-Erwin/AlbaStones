import { getPhotoGallery, getPhotoUrlFromReference } from "../js/databaseUtilities.js";

class AlbastonesGallery extends HTMLElement {

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
                        <img src="${photoUrl}" alt="..." style="min-height: 100%;"/>
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

customElements.define('albastones-gallery', AlbastonesGallery);
