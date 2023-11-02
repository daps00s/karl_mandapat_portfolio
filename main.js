var Typed= new Typed(".typed__text", {
    strings:['Karl Mandapat and this is...','My Personal Website'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});



/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }

}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*SCROLL REVEAL ANIMATION */

/* === TOP ===*/
const sr1 = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});
sr1.reveal('.home__data, .skills__subtitle, .skills__text',{}); 
sr1.reveal('.home__img, .about__subtitle, .section-title, .section-subtitle, .skills__img',{delay: 400}); 
sr1.reveal('.home__social-icon',{ interval: 200}); 
sr1.reveal('.skills__data, .skills__data1, .personal__img',{interval: 200}); 



/* === RIGHT ===*/

const sr2 = ScrollReveal({
    origin: 'right',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});
sr2.reveal('.contact__text', {interval: 200})
sr2.reveal('.contact__input', {delay: 400})
sr2.reveal('.contact__button ,.contact__subtitle ,.about__text', {delay: 600})


/* === LEFT ===*/

const sr3 = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});
sr3.reveal('', {delay: 400})
sr3.reveal('.about__img',{})
