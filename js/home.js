//stops animation while resizing screen
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

const navSlide = () =>{ /*creating anonymous function*/
  
  let burger = document.querySelector('.burger'); /*get a reference to the burger menu*/
  let nav = document.querySelector('.nav-links'); /*get a reference to the entire ul*/
  let navLinks = document.querySelectorAll('.nav-links li'); /*get a reference ALL to the individual links inside the ul*/

  let sectionIntro = document.getElementById('intro');
  let sectionSkills = document.getElementById('skills');
  let sectionProjectsText = document.getElementById('projects-text');
  let sectionProjectsPreview = document.getElementById('projects-preview');

  //boolean and variable to help with hidding and making other homepage sections reappear in correlation with nav sliding in and out
  let timeDelay;
  let navOpen = false;

  //for text animations on the rest of the home page
  let skillsObject1 = document.querySelector('.skills-object:nth-child(1)');
  let skillsObject2 = document.querySelector('.skills-object:nth-child(2)');
  let skillsObject3 = document.querySelector('.skills-object:nth-child(3)');
  
  burger.addEventListener('click', ()=>{ //when burger menu is clicked, run this function
    //toggle nav
    nav.classList.toggle('nav-active'); //add or remove the class nav-active to the nav. this will translate the nav to 0%, making it come into the viewport
    
    //animate links
    navLinks.forEach((link, index) => { //for each link in navLinks. index is important for the delay aspect of animation
        link.style.animation = link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index/4 + 0.25}s`;
    });

    //burger animation
    burger.classList.toggle('toggle'); //animates the burger menu lines

    //hide the rest of the homepage when nav is active. gives time for the footer to move down
    if(navOpen){
      timeDelay = 0;
    } else{
      timeDelay = 500;
    }
    setTimeout(() => {
      //I should just make this hide main? One command vs a bunch.
      sectionIntro.classList.toggle('hide');
      sectionSkills.classList.toggle('hide');
      sectionProjectsText.classList.toggle('hide');
      sectionProjectsPreview.classList.toggle('hide');
    }, `${timeDelay}`)
    
    //reset navOpen values so navLinks animation runs smoothly
    if(navOpen == false){
      navOpen = true;
    }else{
      navOpen = false;
    }
  })

  //when nav is not active, add the animation classes to the desired elements. without doing this, the animated element would "stick" to the mobile nav
  // if(!navOpen){
  //   skillsObject1.setAttribute("data-aos", "fade-up");
  //   skillsObject1.setAttribute("data-aos-duration", "1000");

  //   skillsObject2.setAttribute("data-aos", "fade-up");
  //   skillsObject2.setAttribute("data-aos-duration", "1000");
  //   skillsObject2.setAttribute("data-aos-delay", "100");

  //   skillsObject3.setAttribute("data-aos", "fade-up");
  //   skillsObject3.setAttribute("data-aos-duration", "1000");
  //   skillsObject3.setAttribute("data-aos-delay", "200");
  // }
}
navSlide();









