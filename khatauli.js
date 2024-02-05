let selectCity=document.querySelector(".select-city");
let selectBox=document.querySelector(".select-box");


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


function city(){ 

  selectCity.addEventListener("mouseenter",function(){
    selectBox.style.opacity="1";
  });
  
  
  selectBox.addEventListener("mouseleave",function(){
    selectBox.style.opacity="0";
  })
}

city();
