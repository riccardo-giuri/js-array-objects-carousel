const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carousel = {
    slideListElement: document.querySelector("#slide-list"),
    titleElement: document.querySelector("#text-title"),
    descriptionElement: document.querySelector("#text-description"),
    nextBtn: document.querySelector(".carousel_btn_right"),
    previousBtn: document.querySelector(".carousel_btn_left"),
    slideItemsElements: [],
    slideCounter: 0,

    initialize() {
        this.activateElement(this.slideItemsElements[this.slideCounter]);
        this.nextBtn.addEventListener("click", this.btnNextClick);
        this.previousBtn.addEventListener("click", this.btnPreviousClick);
    },

    btnNextClick() {
        if(carousel.slideCounter >= (carousel.slideItemsElements.length - 1)) {
            carousel.deactivateElement(carousel.slideItemsElements[carousel.slideCounter]);
            carousel.slideCounter = 0;
            carousel.activateElement(carousel.slideItemsElements[carousel.slideCounter]);
            carousel.modifySlideText(images[carousel.slideCounter]);
        }
        else {
            carousel.deactivateElement(carousel.slideItemsElements[carousel.slideCounter]);
            carousel.slideCounter++;
            carousel.activateElement(carousel.slideItemsElements[carousel.slideCounter]);
            carousel.modifySlideText(images[carousel.slideCounter]);
        }
    },

    btnPreviousClick() {
        if(carousel.slideCounter <= 0) {
            carousel.deactivateElement(carousel.slideItemsElements[carousel.slideCounter]);
            carousel.slideCounter = carousel.slideItemsElements.length - 1;
            carousel.activateElement(carousel.slideItemsElements[carousel.slideCounter]);
            carousel.modifySlideText(images[carousel.slideCounter]);
        }
        else {
            carousel.deactivateElement(carousel.slideItemsElements[carousel.slideCounter]);
            carousel.slideCounter--;
            carousel.activateElement(carousel.slideItemsElements[carousel.slideCounter]);
            carousel.modifySlideText(images[carousel.slideCounter]);
        }
    },

    createSlideElements(objectToPrint) {
        let listItem = document.createElement("li");
        listItem.classList.add("slideItem", "opacity-0");
        const itemImage = document.createElement("img");
        itemImage.src = objectToPrint.image;
        listItem.append(itemImage);
        this.slideItemsElements.push(listItem);

        return listItem;
    },

    modifySlideText(objectToPrint) {
        this.titleElement.textContent = objectToPrint.title;
        this.descriptionElement.textContent = objectToPrint.text;
    },

    printElements(arrayToPrint) {
        arrayToPrint.forEach((element, i) => {
            const slideELement = this.createSlideElements(element);

            this.slideListElement.append(slideELement);
        });
    },

    activateElement(element) {
        element.classList.remove("opacity-0");
    },

    deactivateElement(element) {
        element.classList.add("opacity-0");
    }
}



carousel.printElements(images);
carousel.initialize();