
let hamburger=document.querySelector(".hamburger");

let mobileNav=document.querySelector(".navbar-mobile");

let closeIcon=document.querySelector(".close-icon");

function fornav(){
  
hamburger.addEventListener("click",function(){
    
  mobileNav.style.display="block";
gsap.from(mobileNav,{
  top:"70vh",
  delay:1,
  duration:0.5,
  
})   
})

closeIcon.addEventListener("click",function(){
  mobileNav.style.display="none";

})
 }

fornav();
