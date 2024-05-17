let selectCity=document.querySelector(".select-city");
let selectBox=document.querySelector(".select-box");


let hamburger=document.querySelector(".hamburger");

let mobileNav=document.querySelector(".navbar-mobile");

let closeIcon=document.querySelector(".close-icon");

function fornav(){
  
hamburger.addEventListener("click",function(){
    
  mobileNav.style.display="block";
gsap.from(mobileNav,{
  y:"-30%",
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

function city(){ 

  selectCity.addEventListener("mouseenter",function(){
    selectBox.style.opacity="1";
  });
  
  
  selectBox.addEventListener("mouseleave",function(){
    selectBox.style.opacity="0";
  })
}

city();



function populateAreas() {
  var citySelect = document.getElementById("city");
  var selectedCity = citySelect.value;
  var areaContainer = document.getElementById("areaContainer");
  var areaSelect = document.getElementById("area");
  var villageContainer = document.getElementById("villageContainer");
  var villageSelect = document.getElementById("village");
  
  // Clear previous options
  while (areaSelect.firstChild) {
    areaSelect.removeChild(areaSelect.firstChild);
  }
  
  // Hide village container
  villageContainer.style.display = "none";
  
  if (selectedCity === "none") {
    areaContainer.style.display = "none";
  } else {
    areaContainer.style.display = "block";
    // Add area options based on the selected city
    if (selectedCity === "mzn") {
      addOption(areaSelect, "sector 91", "sector 91");
      addOption(areaSelect, "secotor 91", "sector 92");
      addOption(areaSelect, "sector 91", "sector 91");
      addOption(areaSelect, "secotor 91", "sector 92");
      addOption(areaSelect, "sector 91", "sector 91");
      addOption(areaSelect, "secotor 91", "sector 92");
      
      // Add more area options for New York as needed
    } else if (selectedCity === "meerut") {
      addOption(areaSelect, "a", "b");
      addOption(areaSelect, "c", "d");
      addOption(areaSelect, "e", "f");
      addOption(areaSelect, "g", "h");
      addOption(areaSelect, "i", "j");
      addOption(areaSelect, "k", "l");
      
    }

    else if (selectedCity === "delhi") {
      addOption(areaSelect, "9", " 3");
      addOption(areaSelect, "1", "2");
      addOption(areaSelect, "5", "11");
      addOption(areaSelect, "33", "12");
      addOption(areaSelect, "15", "41");
      addOption(areaSelect, "19", "32");
      
    }


    else if (selectedCity === "ghaziabad") {
      addOption(areaSelect, "apple", "orange");
      addOption(areaSelect, "banana", "mango");
      addOption(areaSelect, "car", "truck");
      addOption(areaSelect, "cricket", "football");
      addOption(areaSelect, "sector 15", "hockey");
      addOption(areaSelect, "tennis", "swimming");
      
    }


    
    else if (selectedCity === "gurgaon") {
      addOption(areaSelect, "virat ", "ms dhoni");
      addOption(areaSelect, "secotor 1", "sector 2");
      addOption(areaSelect, "sector 5", "sector 11");
      addOption(areaSelect, "secotor 33", "sector 12");
      addOption(areaSelect, "sector 15", "sector 41");
      addOption(areaSelect, "secotor 19", "sector 32");
      
    }


    else if (selectedCity === "greater noida") {
      addOption(areaSelect, "bhuvi", "bumrah");
      addOption(areaSelect, "secotor 1", "sector 2");
      addOption(areaSelect, "sector 5", "sector 11");
      addOption(areaSelect, "secotor 33", "sector 12");
      addOption(areaSelect, "sector 15", "sector 41");
      addOption(areaSelect, "secotor 19", "sector 32");
      
    }



    else if (selectedCity === "noida") {
      addOption(areaSelect, "samsung", "one plus ");
      addOption(areaSelect, "secotor 1", "sector 2");
      addOption(areaSelect, "sector 5", "sector 11");
      addOption(areaSelect, "secotor 33", "sector 12");
      addOption(areaSelect, "sector 15", "sector 41");
      addOption(areaSelect, "secotor 19", "sector 32");
      
    }


    
    else if (selectedCity === "faridabad") {
      addOption(areaSelect, "sector 9", "sector 3");
      addOption(areaSelect, "secotor 1", "sector 2");
      addOption(areaSelect, "sector 5", "sector 11");
      addOption(areaSelect, "secotor 33", "sector 12");
      addOption(areaSelect, "sector 15", "sector 41");
      addOption(areaSelect, "secotor 19", "sector 32");
      
    }

  }
}

function populateVillages() {
  var areaSelect = document.getElementById("area");
  var selectedArea = areaSelect.value;
  var villageContainer = document.getElementById("villageContainer");
  var villageSelect = document.getElementById("village");
  
  // Clear previous options
  
}

function addOption(selectElement, value, text) {
  var option = document.createElement("option");
  option.value = value;
  option.text = text;
  selectElement.appendChild(option);
}
