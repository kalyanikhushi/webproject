let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }

    index++;
    if (index > slides.length) {
        index = 1;
    }    
    slides[index - 1].style.display = 'block';  

    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();
