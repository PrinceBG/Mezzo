/* ============= Header Section ================ */

// ================= Navigation Focus a ==========

const links = document.querySelectorAll('.nav-list>a')
console.log(links)
let linkcomteur = 0;

const removeContent_a = () =>{
    for( let i = 0; i < links.length; i++){
        links[i].classList.remove('active-a')
    }  
}

links.forEach((item) => {
    item.addEventListener('click', () => ajoutBottom(item))
});

const ajoutBottom = (element) => {
    removeContent_a();
    element.classList.add('active-a');
   } ;




// =========== Body Mode nuit =============== 

const moon  = document.querySelector('.moon');
const Header = document.querySelector('.heading');

moon.onclick = () => {
    moon.classList.toggle('fa-moon');
   
    
   if(moon.classList.contains('fa-moon')){
        document.body.classList.add('activate');
        Header.style.background = '#020207';
    }
    else{
        document.body.classList.remove('activate'); 
    }
}


// =========== Navigation Menu ===============
   


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
}, 5000);

// Section Collaboration 

const colab = document.querySelector('.box-colb-img');
const suivant = document.querySelector('.arrow-right');
const precedent = document.querySelector('.arrow-left');

suivant.addEventListener('click', () => ImgSuivant('up'));
precedent.addEventListener('click', () => ImgSuivant('down'));

let compteur = 0;

console.log(colab);

// Affichage élements au scroll
const ratio = .1
const options = {
    root:null,
    rootMargin: '0px',
    threshold: ratio
  }
  
  const handelIntersect = (entries, observe) =>{
      entries.forEach((entry) =>{
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reavel-visible')
            console.log('visible')
            // observer.unobserve(entry.target)
        }
        else if(entry.intersectionRatio == -.4){
            entry.target.classList.remove('reavel-visible')   
        }
        else{
            entry.target.classList.remove('reavel-visible')
        } 
      })
  }
  var observer = new IntersectionObserver(handelIntersect, options);

 document.querySelectorAll('.reavel').forEach((reavel) =>{
    observer.observe(reavel);
 })