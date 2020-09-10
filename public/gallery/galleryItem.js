class GalleryItem extends HTMLElement {

    galleryItemDetails = {};

    connectedCallback() {
        this.setAttribute('class', 'col-sm-4')
        this.innerHTML = `
            <div class="margin-30px-bottom mobile-margin-20px-bottom">
                <div class="team-block position-relative">
                    <div class="team-img position-relative overflow-hidden">
                        <img src="${this.galleryItemDetails.photoUrl}" alt="" />
                        <div class="box-overlay"></div>
                        <ul class="social-icons no-margin-bottom">
                            <li><a href="javascript:void(0)"><i class="ti-facebook"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="ti-twitter-alt"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="ti-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div class="detail bg-light-gray padding-30px-all md-padding-25px-all xs-padding-15px-all text-center">
                        <h5 class="margin-5px-bottom xs-no-margin-bottom font-size20 xs-font-size18">
                            <a href="javascript:void(0)" class="text-black">${this.galleryItemDetails.displayName}</a>
                        </h5>
                        <p class="no-margin-bottom">${this.galleryItemDetails.title}</p>
                        
                        <p class="no-margin-bottom">${this.galleryItemDetails.title2}</p>
                        <p class="no-margin-bottom">
                            <i class="ti-mobile margin-10px-right md-margin-two-right text-theme-color"></i>
                            ${this.galleryItemDetails.phoneNumber}
                        </p>
                        <p class="no-margin-bottom">
                            <a href="javascript:void(0)" class="font-size14">
                                <i class="ti-email margin-10px-right md-margin-two-right text-theme-color"></i>
                                ${this.galleryItemDetails.email}
                            </a>
                        </p>
                    </div>
                </div>
            </div>`;
    }

    setIt(galleryItemDetails) {
        this.galleryItemDetails = galleryItemDetails;
    }
}

// Define the new element
customElements.define('gallery-item', GalleryItem);
