import { getPhotoGallery, getPhotoUrlFromReference } from "../js/databaseUtilities.js";

class AlbastonesGallery extends HTMLElement {

    async connectedCallback() {

        this.innerHTML = `
            <section>
                <div class="container" style="height:600px; overflow: scroll;">
                    <div id="gallery-image-container" class="gallery row"></div>
                </div>
            </section>`;

        let photoGallery = await getPhotoGallery();

        let galleryImageContainer = document.getElementById('gallery-image-container');

        for (let image of photoGallery) {

            let photoUrl = await getPhotoUrlFromReference(image);

            let galleryImage = document.createElement('div');
            galleryImage.setAttribute('class', 'col-lg-4 col-md-6 margin-30px-bottom xs-margin-20px-bottom items');

            galleryImage.innerHTML = `
                <div class="portfolio-block position-relative overflow-hidden item">
                    <div class="item-img">
                        <img src="${photoUrl}" alt="..." />
                    </div>
                    <div class="item-content">
                        <div class="item-icon margin-10px-bottom">
                            <a class="popimg" href="${photoUrl}">
                                <i class="ti-plus text-white font-size18"></i>
                            </a>
                        </div>
                        <h5 class="no-margin-bottom xs-margin-5px-bottom font-weight-500 font-size24 md-font-size22 xs-font-size20">
                            <p class="text-white">temp</p>
                        </h5>
                    </div>
                </div>`;

            galleryImageContainer.appendChild(galleryImage);
        }
    }

}

customElements.define('albastones-gallery', AlbastonesGallery);
