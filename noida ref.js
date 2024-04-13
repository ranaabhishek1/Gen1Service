
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

var navBrand=document.querySelector(".nav-brand");
var linksContainer=document.querySelector(".links-container");

navBrand.addEventListener("mouseenter",function(){
  linksContainer.style.display="block";
})


navBrand.addEventListener("mouseleave",function(){
  linksContainer.style.display="none";
})


// 



var brandBtn=document.querySelector(".slider-btn");
var linksContainer2=document.querySelector(".select-brand-hover");

brandBtn.addEventListener("mouseenter",function(){
  linksContainer2.style.display="block";
})


brandBtn.addEventListener("mouseleave",function(){
  linksContainer2.style.display="none";
})