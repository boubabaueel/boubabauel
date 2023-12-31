function toggleMenu() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}

// JavaScript for the slideshow
let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", function () {
    showSlides();
});
