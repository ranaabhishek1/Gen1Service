
let hamburger=document.querySelector(".hamburger");

let mobileNav=document.querySelector(".navbar-mobile");

let closeIcon=document.querySelector(".close-icon");

function fornav(){
  
hamburger.addEventListener("click",function(){
    
  mobileNav.style.display="block";
gsap.from(mobileNav,{
  y:"-60vh",
  duration:0.4,
})   
})

closeIcon.addEventListener("click",function(){
  mobileNav.style.display="none";

})
 }

fornav();


// 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});

// 


// for brand hover 

var brand=document.querySelector(".nav-brand a");
var brandHover=document.querySelector(".brand-hover");


brand.addEventListener("mouseenter",function(){
  brandHover.style.opacity="1";


  brandHover.addEventListener("mouseenter",function(){
    brandHover.style.opacity="1";
  
  })
})






brand.addEventListener("mouseleave",function(){
  brandHover.style.opacity="0";
})




// end brand hover 