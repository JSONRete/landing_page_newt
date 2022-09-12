// /* Manipulating the DOM exercise.
// * Exercise programmatically builds navigation,
// * scrolls to anchors from navigation,
// * and highlights section in viewport upon scrolling.
// * 
// * Dependencies: None
// * 
// * JS Version: ES2015/ES6*/
// //GLOBAL DEFINE Section and navbar__list globally defined
// //Grabs unordered list from the page
// const sections = document.querySelectorAll('section');
// //Grabs sections from the page
// const navBar = document.querySelector (".navbar__menu");
// const navListUL = document.getElementById('navbar__list');
// //
// let topOfSections = [];
// //Section position - coded example from Rockwell. window.pageYOffset and if statement provided in walkthrough video
// function getSectionPositions(){
//     const footerTopPosition = document.getElementsByClassName('page__footer');
//     for(let index = 0 ; index < sections.length; index++){
//     let topPos = sections[index].getBoundingClientRect().top <= 150 + window.pageYOffset;
//     topOfSections[index] = topPos;
//     if(index + 1 == sections.length){
//         topOfSections[index + 1] = footerTopPosition;
//     };
//     };
//    console.log(topOfSections);
// };
// //for loop creating active section removes active section style prior to passing thru
// function activeSection(){
//     for(let index = 0 ; index < sections.length; index++) {
//         const tagName = document.getElementsByTagName('a');
//         sections[index].classList.remove('your-active-class');
//         tagName[index].classList.remove('active');
//     };
//     //console.log(activeSection);
// };
// //For loop to dynamically building navbar using for loop. 
// function buildNav(){
    
//     for(let index = 0 ; index < sections.length; index++) {
//         const navMenu = document.getElementById('navbar__list');
//         const liNavItem = document.createElement('li');
//         const aNavItem = document.createElement('a');
    
//         const liLabel = sections[index].getAttribute('data-nav');
//         aNavItem.classList.add('anchorNav');
//         aNavItem.innerHTML = liLabel;
//         liNavItem.classList.add('listNav');
//         aNavItem.setAttribute('href', '#'+ sections[index].id);
//         aNavItem.setAttribute('data-id', sections[index].id);
//         //code below throws error in DOM
//         //liNavItem.innerHTML = `<a class='menu__link'>${sections.dataset}</a>`;
//         liNavItem.append(aNavItem);
//         navMenu.append(liNavItem);
//         //console.log(liNavItem)
//         //Click event listener add for activation of activeSection function of navbar
//         aNavItem.addEventListener('click',function(event) {
//             event.preventDefault();
//             const sectionId = event.target.getAttribute('data-id');
//             const sectionInViewport = document.getElementById(sectionId);
//             activeSection();
//             event.target.classList.add('active');
//             sectionInViewport.classList.add('your-active-class');
//             sectionInViewport.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     };
// };
// //scrolling function created to give indication of when one section is active and another is inactive.
// function trackScrolling() {
//     const tagName = document.getElementsByTagName('a');
//     const positionY = window.pageYOffset;
//     for(let index = 0; index < sections.length; index++){
//         const firstPosition = topOfSections[index];
//         const secondPosition = topOfSections[index+1];
//         if(firstPosition <= positionY && secondPosition > positionY){
//             activeSection();
//             sections[index].classList.add('your-active-class');
//             tagName[index].classList.add('active');
//         };
//     };
//   //  console.log(trackScrolling);
// };
// buildNav();
// getSectionPositions();
// window.addEventListener('scroll', trackScrolling());

/*() =>{
    for(let index = 0 ; index < sections.length; index++) {
        const inView = sections[index].getBoundingClientRect().bottom;
        const id = sections.getAttribute('id');
        const positionY = inView.top <=463 && inView.top > 6748;
        if(positionY) {
            sections.classList.add("your-active-class");
            navListUL.querySelector(`[data-id=${id}]`).classList.add('your-active-section');
        } else{
            sections.classList.remove("your-active-class");
            navListUL.querySelector(`[data-id=${id}]`).classList.remove('your-active-section');

        };
    };
};*/
//console.log(scrollY);

//End Main Functions

//   Global Variables
  const navbarList = document.getElementById('navbar__list');
  const sections = document.querySelectorAll('section');
    // Builds the nav
  sections.forEach( (section) => {
    // Builds menu items
    const li = document.createElement('li');
    // Creating li element
    li.setAttribute('data-id', section.getAttribute('id'));
    li.innerHTML = `<a class='menu__link'>${section.dataset.nav}</a>`;
    // Scroll to section on link click
    li.addEventListener('click', () => {
      section.scrollIntoView({behavior: "smooth"});
    });
    // Places built menu on navbar
    navbarList.appendChild(li);
  });
    // Detects scroll
  window.addEventListener('scroll', () => {
      sections.forEach( (section) => {
        // getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
        const inView = section.getBoundingClientRect();
        const id = section.getAttribute('id');
        const position =  inView.y <= 175 && inView.bottom >= 175
        // section active control
        if (position) {
          section.classList.add('your-active-class');
          navbarList.querySelector(`[data-id=${id}]`).classList.add('navbar-section-active');
  
        } else {
          section.classList.remove('your-active-class');
          navbarList.querySelector(`[data-id=${id}]`).classList.remove('navbar-section-active');
        }
      });
    })