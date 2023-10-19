const slideAnimation = document.querySelectorAll('.comic');
window.addEventListener('scroll',checkSlide);
checkSlide();

function checkSlide(){
    const triggerBottom = window.innerHeight / 5*4;
    
    slideAnimation.forEach(slide => {
        const slideTop = slide.getBoundingClientRect().top;
        console.log("slideTop: "+slideTop);
        console.log("trigger: "+triggerBottom);
        if(slideTop <= triggerBottom){
            slide.classList.add('show');
        }else{
            slide.classList.remove('show');
        }
    });
}


