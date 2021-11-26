/* ============= Header Section ================ */

const contain = document.querySelector('.heading');

const nav = document.querySelector('.nav');

const menuToogle = document.querySelector('.menu-open')
const close = document.querySelector('.close');



menuToogle.addEventListener('click', () => openMenu());
close.addEventListener('click', () => closeMenu())

const openMenu = () => {
    nav.classList.toggle('visible')
}
const closeMenu = () => {
    nav.classList.remove('visible')
}


/* ============= Home Section ================ */

const container = document.querySelector('.box');

const slide = document.querySelectorAll('.content');
console.log(slide)
const sildelenght = slide.length;

const removeContent = () =>{
    for( let i = 0; i < sildelenght; i++){
        slide[i].classList.remove('active')
    }  
}

const rigth = document.querySelector('.arow-2');
const left = document.querySelector('.arow-1');
let activeindex = 0;

rigth.addEventListener('click', () => changeSlide('up'));
left.addEventListener('click', () => changeSlide('down'));


 console.log(slide)

const changeSlide = (direction) => {
    removeContent()
    if(direction === 'up'){
        activeindex++;
        if(activeindex > sildelenght -1){
            activeindex = 0;
        }
    }
    else if (direction === 'down'){
        activeindex--;
        if(activeindex < 0){
            activeindex = sildelenght - 1;
        }
    }
    
    slide[activeindex].classList.add('active')
    
}
setInterval(() => {
    activeindex++;
    
        if(activeindex > sildelenght -1){
            activeindex = 0;
        }
    removeContent()
    slide[activeindex].classList.add('active')
}, 6000);