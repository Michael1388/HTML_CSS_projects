// These functions open and close th econtact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display ="none";
}

//This function displays the first imagein the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

//This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//This function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("slide"); // THis takes all elements with the class name "slide" and stores them in the variable array "slide"
    dots = document.getElementsByClassName("dot"); //Takes all elements with the class name "dots" and stores them in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; // If n (the number passed in to the funciton) is greater than the length of the array "slide", the slideshow is set to 1
    if (n < 1) {slideIndex = slides.length}; //If n (the number passed in to the funciton) is less than 1, the slideInde is set to the array "slide"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //This FOR loop takes each iten in the array and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // This FOR loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; //This displays the image in the slideshow
    dots[slideIndex - 1].className += " active";//This adds the active styling to the dot associated with the image
}

//This code will close the contact form when the user clicks off of it
//The first step is to ass an element listener for any clicks on the website
document.addEventListener("click", function(event){
    //Here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element 
    //with the contact class, then the call closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false)