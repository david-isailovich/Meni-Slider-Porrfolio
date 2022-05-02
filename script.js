/*
** This is rensponsive menu
*/
const mobileMenu = () => {
    let menu = document.querySelector('.header ul')
    let btn = document.querySelector('.header button')

    if(btn.innerText === 'MENU') {
        menu.style.display = "block";
        btn.innerText = 'CLOSE';
    } else {
        menu.style.display = "none";
        btn.innerText = 'MENU';
    }
}

/*******************************************************/

/*
** This is slideshow gallery
*/
let left_btn = document.querySelector('#left-btn');
let right_btn = document.querySelector('#right-btn');
let pictures = document.querySelectorAll('.slider-images img')
let imgNum = 0;

// RIGHT BTN
right_btn.addEventListener("click", () => {
    displayNone(pictures);
    imgNum ++;

    if(imgNum === pictures.length) {
        imgNum = 0;
    }

    pictures[imgNum].style.display = "block"
})

// LEFT BTN
left_btn.addEventListener("click", () => {
    displayNone(pictures);
    imgNum --;

    if(imgNum === -1) {
        imgNum = pictures.length - 1;
    }

    pictures[imgNum].style.display = "block"
})

/*
** This function will hidden all pictures
*/
const displayNone = (elements) => {
    elements.forEach((img) => {
        img.style.display = "none";
    }) 
}

/*******************************************************/

/*
** This is portfolio slider
*/
const portfolioSort = (button) => {
    let category = button.getAttribute('data-category');
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');

    portfolioItems.forEach((item) => {
        item.style.display = "none";
    })

    if(category === 'sve') {
        portfolioItems.forEach((item) => {
            item.style.display = "block";
        })
    }

    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category)) {
            item.style.display = "block";
        }
    })
}

/*******************************************************/

/*
** Modal Button
*/

// OPEN MODAL
const openModal = () => {
    let overlay = document.querySelector('.overlay');
    let modalWindow = document.querySelector('.popup-modal');

    overlay.style.display = "block";
    modalWindow.style.display = "inline-block"
}

// CLOSE MODAL
const closeModal = () => {
    let overlay = document.querySelector('.overlay');
    let modalWindow = document.querySelector('.popup-modal');

    overlay.style.display = "none";
    modalWindow.style.display = "none"
}