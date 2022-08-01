class Navigation {
    init = () => {
        this.initDOMElements();
        this.openNavigationMenu();
        this.renderImages();
        this.hoverEfectsOnLink();
        this.goInAnimation();
    }

    initDOMElements = () => {
        this.navContainer = document.querySelector('.navigation');
        this.hamburgerButton = document.querySelector('.navigation-content__nav-buttons--menu-button');
        this.hamburgerButtonOpenText = document.querySelector('#open-text');
        this.hamburgerButtonCloseText = document.querySelector('#close-text');
        this.navList = document.querySelector('.navigation-link-list');
        this.navLinks = document.querySelectorAll('.navigation-link-list__nav-list ul li a');
        this.navImgs = document.querySelectorAll('.navigation-link-list__images-container--item');
        this.indexPage = document.querySelector('[data-page="index"]');
    }

    openNavigationMenu = () => {
        this.hamburgerButton.addEventListener('click', () => {
            this.hamburgerButton.classList.toggle('hamburger--active');
            this.hamburgerButtonOpenText.classList.toggle('is--hidden');
            this.hamburgerButtonCloseText.classList.toggle('is--hidden');
            this.navList.classList.toggle('nav--active');
        })
    }

    hoverEfectsOnLink = () => {
        for (let index = 0; index < this.navLinks.length; index++) {
            this.navLinks[index].addEventListener('mouseover', () => {
                this.removeHoverEfect();
                this.navImgs[index].classList.toggle('img--active');
            });
        }
    }

    removeHoverEfect = () => {
        this.navImgs.forEach(element => {
            element.classList.remove('img--active');
        });
    }

    renderImages = () => {
        for (let index = 0; index < this.navImgs.length; index++) {
            const element = this.navImgs[index];
            element.style.backgroundImage = 'url("../../assets/imgs/items-dashboards/item-' + (index + 1) + '.jpg")';
        }
    }

    goInAnimation = () => {
        if(this.indexPage) {
            gsap.from(this.navContainer, {
                y: '-105%',
                delay: .5,
            });
        }
    }
    
}

let objNavigation = new Navigation();
objNavigation.init();