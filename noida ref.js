
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


// for brand hover 1

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


// end brand hover 1


// start Brand Hover 2

var brand2=document.querySelector(".brand-btn a");
var brandHover2=document.querySelector(".select-brand-hover");


brand2.addEventListener("mouseenter",function(){
  brandHover2.style.opacity="1";


  brandHover2.addEventListener("mouseenter",function(){
    brandHover2.style.opacity="1";
  
  })
})

brand2.addEventListener("mouseleave",function(){
  brandHover2.style.opacity="0";
})




// end brand hover 2


// start Brand Hover 3

var brand3=document.querySelector(".other-brand a");
var brandHover3=document.querySelector(".select-brand-hover");


brand3.addEventListener("mouseenter",function(){
  brandHover3.style.opacity="1";


  brandHover3.addEventListener("mouseenter",function(){
    brandHover3.style.opacity="1";
  
  })
})

brand3.addEventListener("mouseleave",function(){
  brandHover3.style.opacity="0";
})




// end brand hover 3
