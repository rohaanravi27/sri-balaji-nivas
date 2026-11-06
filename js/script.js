/*==========================================
      SRI BALAJI NIVAS
      JAVASCRIPT PART - 1
==========================================*/

// ===========================
// Sticky Navbar
// ===========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 80) {

        navbar.style.background = "#071A2D";
        navbar.style.padding = "12px 0";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.background = "rgba(0,0,0,.35)";
        navbar.style.padding = "18px 0";
        navbar.style.boxShadow = "none";

    }

});

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===========================
// Hero Button Animation
// ===========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

// ===========================
// Gallery Hover Effect
// ===========================

const gallery = document.querySelectorAll(".gallery-item");

gallery.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transition = "0.4s";
        item.style.transform = "scale(1.03)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "scale(1)";

    });

});

// ===========================
// Welcome Message
// ===========================

window.onload = function () {

    console.log("Sri Balaji Nivas Website Loaded Successfully");

};
/*==========================================
        JAVASCRIPT PART - 2
==========================================*/

/* ==========================
   Animated Statistics Counter
========================== */

const counters = document.querySelectorAll(".stat-box h2");

const startCounter = (counterElement) => {
    // Strips out any symbols like '+' so JavaScript can parse it as a pure number
    const targetText = counterElement.innerText.replace(/[^0-9]/g, '');
    const target = parseInt(targetText);
    
    if (isNaN(target)) return;

    let count = 0;
    const speed = target / 60; // Higher denominator makes the animation faster

    const update = () => {
        count += speed;
        if (count < target) {
            counterElement.innerText = Math.floor(count) + "+";
            requestAnimationFrame(update);
        } else {
            counterElement.innerText = target + "+";
        }
    };
    update();
};

// Use an Intersection Observer to watch each number individually
const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter(entry.target);
            observer.unobserve(entry.target); // Stops watching so it only runs once
        }
    });
}, { threshold: 0.3 }); // Starts when 30% of the box is visible on screen

// Initialize the observer on your numbers
counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* ==========================
   Fade In on Scroll
========================== */

const fadeElements = document.querySelectorAll(
    ".feature-card, .gallery-item, .plan-card, .contact-info"
);

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, { threshold: 0.2 });

fadeElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "all 0.8s ease";

    fadeObserver.observe(item);

});

/* ==========================
   Back To Top Button
========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "100px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#D4AF37";
topBtn.style.color = "#071A2D";
topBtn.style.fontSize = "24px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================
   Loading Complete
========================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
/*==========================================
        JAVASCRIPT PART - 3
==========================================*/

/* ==========================
   Hero Typing Effect
========================== */

const heroTitle = document.querySelector(".hero-content h1");

if(heroTitle){

const originalText = heroTitle.innerText;

heroTitle.innerText = "";

let index = 0;

function typeText(){

    if(index < originalText.length){

        heroTitle.innerText += originalText.charAt(index);

        index++;

        setTimeout(typeText,80);

    }

}

window.addEventListener("load",typeText);

}

/* ==========================
   Gallery Lightbox
========================== */

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.createElement("div");

lightbox.style.position="fixed";
lightbox.style.top="0";
lightbox.style.left="0";
lightbox.style.width="100%";
lightbox.style.height="100%";
lightbox.style.background="rgba(0,0,0,.92)";
lightbox.style.display="none";
lightbox.style.justifyContent="center";
lightbox.style.alignItems="center";
lightbox.style.zIndex="10000";

const lightImage=document.createElement("img");

lightImage.style.maxWidth="90%";
lightImage.style.maxHeight="90%";
lightImage.style.borderRadius="15px";
lightImage.style.boxShadow="0 20px 50px rgba(0,0,0,.5)";

lightbox.appendChild(lightImage);

document.body.appendChild(lightbox);

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightImage.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

/* ==========================
   Button Ripple Effect
========================== */

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=diameter+"px";
circle.style.height=diameter+"px";
circle.style.position="absolute";
circle.style.borderRadius="50%";
circle.style.background="rgba(255,255,255,.5)";
circle.style.left=e.offsetX-diameter/2+"px";
circle.style.top=e.offsetY-diameter/2+"px";
circle.style.transform="scale(0)";
circle.style.transition=".6s";

this.style.position="relative";
this.style.overflow="hidden";

this.appendChild(circle);

setTimeout(()=>{

circle.style.transform="scale(4)";
circle.style.opacity="0";

},10);

setTimeout(()=>{

circle.remove();

},600);

});

});

/* ==========================
   Page Fade In
========================== */

document.body.style.opacity="0";
document.body.style.transition="opacity 1s";

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

/* ==========================
   Reveal Sections
========================== */

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.15});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(70px)";
section.style.transition="all .8s ease";

observer.observe(section);

});

/* ==========================
   Console Branding
========================== */

console.log("%cSri Balaji Nivas Website","font-size:20px;color:#D4AF37;font-weight:bold;");
console.log("%cDeveloped by Raavi","font-size:14px;color:#071A2D;background:#D4AF37;padding:5px;");