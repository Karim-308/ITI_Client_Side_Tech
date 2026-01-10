let slideIndex = 0;
let availableSlides = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
var slide = document.getElementById("slideshow");
let slideInterval;
function nextSlide(){
    if (slideIndex<availableSlides.length-1){
        slideIndex += 1;
    }
    updateSlide();
}

function previousSlide(){
    if (slideIndex>0){
        slideIndex -= 1;
    }
    updateSlide();
}

function updateSlide(){
    slide.src = availableSlides[slideIndex];
}

function startSlideShow(){
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % availableSlides.length;
    updateSlide();
    }, 2000);
}

function stopSlideShow(){
    clearInterval(slideInterval);
}   