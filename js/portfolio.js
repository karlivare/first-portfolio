//Code credit: Raul Terhes :)
window.addEventListener('DOMContentLoaded', ()=>{
  const filterContainer = document.querySelector('#filter-container');
  const galleryContainer = document.querySelector('#gallery-container');

  const filterImages = (e) =>{
    //go through the filter categories
    document.querySelectorAll('.filter-element').forEach(element=>{
      //remove the filter from all of them first to reset
      element.classList.remove('filter-active');
    })

    //e.target is the <span> filter element
    //add the filter-active class to the <span> that was actually clicked on
    e.target.classList.add('filter-active');

    
    document.querySelectorAll('.gallery-item').forEach(element=>{
      if(e.target.id !== element.dataset.category & e.target.id !== "all"){
        element.classList.add('hide-image');
      } else{
        element.classList.remove('hide-image');
      }
    })
  }

  //categories are the filters. from data.js
  //for each element in categories, create a new <span> element
  categories.forEach(element=>{
    //If a constant is an object or array its properties or items can be updated or removed.
    const domElement = document.createElement('span');

    //inside the span element, add the name of the filter
    domElement.innerText = element.name;

    //add a new class to the element so we can style it
    domElement.classList.add('filter-element');

    //as a default, the "all" filter will be selected
    //and filter-active will be added to the selected filter
    if(element.filter ==='all'){
      domElement.classList.add('filter-active');
    }

    //assign an id to the domElement
    //the id will be the name of the filter
    domElement.id = element.filter;

    //when one of the filters is clicked, call the filterImages function
    domElement.addEventListener('click', filterImages);
     
    //append the <span> element to the filterContainer in the HTML
    filterContainer.appendChild(domElement);
  })

  //for each element in images
  images.forEach(element =>{
    const domElement = document.createElement('img')

    let galleryItemHTML =
    `<div class='gallery-item' data-category='${element.category}'><a href='${element.href}' target='_blank'><div class='img-container'><img alt='${element.title}' src='img/${element.url}' class='gallery-image'></div><div class='overlay'><h3>${element.title}</h3></div></a></div>`;

    galleryContainer.innerHTML+=galleryItemHTML;
  })
})



//creating dropdown menu click animation
dropdownButton = document.querySelector('#dropdown-button');
dropdownMenu = document.querySelector('#filter-container');

 //if clicked on dropdownButton, toggle the class. if click anywhere else, remove the class and close the menu
  //to determine whether the dropdownButton was clicked or not
document.addEventListener("click", (e)=>{
  let isClickInsideElement =  dropdownButton.contains(e.target);
  if(isClickInsideElement){
    dropdownMenu.classList.toggle("dropdown-menu-active");
  }else{
    dropdownMenu.classList.remove("dropdown-menu-active");
  }
})





















