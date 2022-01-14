'use strict';

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }
    else{
        navbar.classList.remove('navbar--dark');
    }
})


//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click' ,(event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
})

//navbar toggle button for small screen
const navToggle = document.querySelector('.navbar__toggle-btn');
navToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})


//Handle click on "contact me" button on home
const btnContact = document.querySelector('.home__contact');
btnContact.addEventListener('click', () => {
    scrollIntoView('#contact');
})

//Make home slowly fade to transparent as the window scrolls down
const home =document.querySelector('.home__cotainer');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY/homeHeight;
})

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () =>{
    if(window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    }
    else{
        arrowUp.classList.remove('visible');
    }
})
// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
})

//Projects
const workBtnContainer = document.querySelector('.work__categories');
const arrProjects = document.querySelectorAll('.project');
const projectContainer = document.querySelector('.work__projects');
workBtnContainer.addEventListener('click', (event) => {
    const category = event.target.dataset.category || event.target.parentNode.dataset.category;
    
    if(category == null){
        return;
    }

    //Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const newSelectedBtn
      = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    newSelectedBtn.classList.add('selected');


    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        arrProjects.forEach(project => {
            if(category === '*' || category === project.dataset.type){
                project.classList.remove('invisible');
            }
            else {
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('anim-out');
    }, 300)
    
})



function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth", block: "center"});
}

