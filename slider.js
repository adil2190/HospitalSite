const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide')
const dotsNav = document.querySelector('.slider-nav');
const dots = Array.from(dotsNav.children);
const slideContent = document.querySelectorAll('.slide-inner-content');
const slideContentTrack = document.querySelector('.slide-content-track');
const content = document.querySelector('.content');
const time = 4000;

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}


const nextSlide = () => {

    const currentSlide = content.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const currentSlideContent = slideContentTrack.querySelector('.current-slide');
    
    currentSlideContent.classList.remove('current-slide');
    currentSlide.classList.remove('current-slide');
    if(currentSlide.nextElementSibling){
        currentSlide.nextElementSibling.classList.add('current-slide');
        currentSlideContent.nextElementSibling.classList.add('current-slide');
        updateDots(currentDot, nextDot);
    }else{
        slideContent[0].classList.add('current-slide');
        slides[0].classList.add('current-slide');
        currentDot.classList.remove('current-slide');
        dots[0].classList.add('current-slide');
    };

    setTimeout("nextSlide()", time);
}

window.onload = nextSlide;
const prevSlide = () => {
    const currentSlide = content.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const currentSlideContent = slideContentTrack.querySelector('.current-slide');

    currentSlideContent.classList.remove('current-slide');
    currentSlide.classList.remove('current-slide');
    if(currentSlide.previousElementSibling){
        currentSlide.previousElementSibling.classList.add('current-slide');
        currentSlideContent.previousElementSibling.classList.add('current-slide');
        updateDots(currentDot, prevDot);
    }else{
        slideContent[slideContent.length-1].classList.add('current-slide');
        slides[slides.length-1].classList.add('current-slide');
        currentDot.classList.remove('current-slide');
        dots[dots.length - 1].classList.add('current-slide');
    };
}

nextBtn.addEventListener('click', e=> {
    nextSlide();
});

prevBtn.addEventListener('click', e=> {
    prevSlide();
});

dotsNav.addEventListener('click', e => {
 
    const currentSlide = content.querySelector('.current-slide');
    const targetDot = e.target.closest('button');
    const currentSlideContent = slideContentTrack.querySelector('.current-slide');


    if(!targetDot) return;

    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot );
    
    currentSlide.classList.remove('current-slide');
    slides[targetIndex].classList.add('current-slide');
    currentSlideContent.classList.remove('current-slide');
    slideContent[targetIndex].classList.add('current-slide');
    updateDots(currentDot, targetDot);
});

