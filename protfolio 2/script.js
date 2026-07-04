// Typing Animation

const words = [
    "Web Developer",
    "Python Developer",
    "AI Enthusiast",
    "CSE Student"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, letterIndex++);
    } else {
        typing.textContent = currentWord.substring(0, letterIndex--);
    }

    let speed = isDeleting ? 80 : 150;

    if (!isDeleting && letterIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// Contact Form Validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank You! Your message has been sent successfully.");

    form.reset();

});


// Navbar Active Link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 100;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){
            link.classList.add("active");
        }

    });

});


// Scroll Animation

const cards = document.querySelectorAll(".card,.project");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight-100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".8s";

});


// Mobile Menu

const menu = document.getElementById("menu");

const nav = document.querySelector("nav ul");

menu.onclick = ()=>{

if(nav.style.display=="flex"){

nav.style.display="none";

}else{

nav.style.display="flex";

nav.style.flexDirection="column";

}

};***