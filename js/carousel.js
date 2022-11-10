const track = document.querySelector('.carousel-track'); //the ul
const slides = Array.from(track.children); //getting the li slides and putting them in an array
const leftButton = document.querySelector('#slider-left');
const rightButton = document.querySelector('#slider-right');
const carouselNav = document.querySelector('.carousel-nav');
const carouselIndicators = Array.from(document.querySelectorAll('.carousel-indicator'));
const firstSlide = document.querySelector('a.carousel-indicator:first-child');
let currentIndicator;

//create a function that resets the image in the viewport on page refresh
function resetViewport(){
  firstSlide.click();
}
resetViewport();

//create a function that resets the indicator on page refresh
function resetIndicator(){
  for(let i = 0; i < carouselIndicators.length; i++){
    carouselIndicators[i].classList.remove('current-indicator');
  }
  carouselIndicators[0].classList.add('current-indicator');
}
resetIndicator();

//create a function that updates the style of the nav indictors
function updateIndicator(e){
  currentIndicator = e.path[0];
  //take e.path[0], which is which dot the user clicked on, and add the class to that and remove the class from others
  for(let i = 0; i < carouselIndicators.length; i++){
    carouselIndicators[i].classList.remove('current-indicator');
  }
  currentIndicator.classList.add('current-indicator');
}

//update the indicator style AND update the image in the viewport
carouselNav.addEventListener('click', (e)=>{
  //if event target has a class of carousel-indicator, update the indicator
  if(e.target.classList.contains('carousel-indicator')){
    updateIndicator(e);
  }
})




