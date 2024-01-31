
let hamburger=document.querySelector(".hamburger");

let mobileNav=document.querySelector(".navbar-mobile");

let closeIcon=document.querySelector(".close-icon");

function fornav(){
  
hamburger.addEventListener("click",function(){
    
  mobileNav.style.display="block";
gsap.from(mobileNav,{
  y:"-60%",
  duration:0.4,
})   
})

closeIcon.addEventListener("click",function(){
  mobileNav.style.display="none";

})
 }

fornav();

function slider(){

    let slideIndex = 0;

    function showSlides() {
      const slides = document.querySelectorAll('.slide');
    
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
    
      slideIndex++;
    
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
    
      slides[slideIndex - 1].style.display = 'block';
      setTimeout(showSlides, 2000); // Change slide every 2 seconds (adjust as needed)
    }
    
    function changeSlide(n) {
      slideIndex += n;
      showSlides();
    }
    
    document.addEventListener('DOMContentLoaded', showSlides);
    
}

slider();