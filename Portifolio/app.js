const header = document.querySelector("header")


// before we add any values to our skill elements , we need to makes sure that the user has scrolled to 
// our skill section so as to animate it
const firstSkill = document.querySelector(".skill:first-child");
const skCounter = document.querySelectorAll(".counter span");
const progressBars = document.querySelectorAll(".skill svg circle");

const mlSection = document.querySelector(".milestone");
const ml_Counter = document.querySelectorAll(".number span");

const prtSection = document.querySelector(".portfolio");
const zoomIcon = document.querySelectorAll(".zoom-icon");
const modalOverlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const navLink = document.querySelectorAll(".nav-link");

const toggle_btn = document.querySelector(".toggle-btn");
const iconColor = document.querySelectorAll(".about-card img.icon");

const iconWhite = [
    "icons/W-icon1.png",
    "icons/W-icon2.png",
    "icons/W-icon3.png",
    "icons/W-icon4.png"
]

// console.log(iconColor);


const hamburger = document.querySelector(".hamburger");


window.addEventListener("scroll", () => {
    activeLink();
    if(!skillsPlayed) skillsCounter();
    if(!mlPlayed) mlCounter();
});

/* ----------------sticky nav-bar---------------------- */
function stickyNavbar(){

    header.classList.toggle("scrolled",window.pageYOffset > 0)
}
// the .classList it returns the CSS classnames of an element,
// we can use it to add a class or remove a class or even toggle a class

// here as the user scrolls down the pageYOffset will increase and will only be true if it is greater than 0
// now this method allows us to add the "blur" header background property when ever the user scrolls
// again the window.pageYOffset will return the --y axis-- of our page.

window.addEventListener("scroll",stickyNavbar);


/* -------------------------Reveal animation----------------------*/
let sr = ScrollReveal({
    duration: 2500,
    distance: "60px"
});

sr.reveal(".showcase-info",{delay: 200});
sr.reveal(".showcase-image",{origin: "top",delay: 200});

// sr.reveal(".about-grid",{delay: 200,origin:"left"});
// sr.reveal(".about-info",{delay: 200,origin:"right"});

/* -------------------------skill progress bar animation -------------- */ 

function hasReached(element){
    let topPosition = element.getBoundingClientRect().top;
    // console.log(topPosition);

    // our getBoundingClientRect().top will return the top position of our skill div relative to the viewport
    // if it returns 0 it indicates that our .skill div is directly touching the top most section of our viewport
    // -ve values indicate that our .skill div is above 

    // console.log(topPosition + element.offsetHeight)
    // console.log(` hello ${window.innerHeight}`);

    if(window.innerHeight >= topPosition + element.offsetHeight){
        return true;
    } else {
        return false;
    }
    // inner height returns the height of the veiwport
    // element.offsetHeight will return the height of our first skill div
}

function updateCount(num,maxNum){
    let currentNum = +num.innerText;
    // our currentNum will hold the h2>span innerText of each skill div

    if (currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num,maxNum);
        } , 12);
    }
}

let skillsPlayed = false;

function skillsCounter(){
    if (!hasReached(firstSkill)) return; // if true return nothing ,else ...

    skillsPlayed = true;

    // here we will be iterating through skill div using forEach and getting the value of each data-target
    skCounter.forEach((counter,i) => {
        let targetNum = +counter.dataset.target; // the insertion of '+' operator before an operation of aquiring data would make sure to change the datatype of it to Number
        let strokeValue = 427 - 427 * (targetNum/100);
        // console.log(counter);
        // console.log(i);
        // by the above line of code we can generate the exact value for our stroke-dashoffset value

        // now all  we need to do is to assign these values to a CSS variable named --target
        progressBars[i].style.setProperty("--target",strokeValue);
    
        setTimeout(() => {
            updateCount(counter,targetNum);
        },400);
        // here targetNum will hold the data-target attribute's value from each skill div
    })


    progressBars.forEach((p) => (p.style.animation = "progress 2s ease-in-out forwards"));
    //  appllying CSS-animation to each of our svg circle element from javascript


    // our firstSkill is a clouser object as it's a gloabl variable assigned within a block/function directly
}


// --------------------service section JavaScript---------------------

let mlPlayed = false;

function mlCounter(){
    if(!hasReached(mlSection)) return;

    mlPlayed = true;

    // console.log("You've have reached the ml section");
    ml_Counter.forEach(ctr => {
        let newTargerNum = +ctr.dataset.target;
        
        setTimeout(() => {
            updateCount(ctr,newTargerNum);  // same function used from the skill progress section
        },400);
    })
}

// ---------------------------------Portfolio filter animation------------------------

var mixer = mixitup(".portfolio-gallery",{
    selectors: {
        target: '.prt-card'
    },
    animation: {
        duration: 500
    }
});
// the additional animation duration is not required but is quite usefull to smoothen out the UX

let currentIndex = 0;

zoomIcon.forEach((icn,i) => icn.addEventListener("click",() => {
    prtSection.classList.add("open")
    document.body.classList.add("stop-scrolling")
    currentIndex = i;
    changeImage(currentIndex);
}));

prevBtn.addEventListener("click",() => {
    if(currentIndex === 0){
        currentIndex = 5;
    } else {
        currentIndex--;
    }
    changeImage(currentIndex);
})

nextBtn.addEventListener("click",() => {
    if(currentIndex === 5){
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    changeImage(currentIndex);
})

modalOverlay.addEventListener("click",() => {
    prtSection.classList.remove("open")
    document.body.classList.remove("stop-scrolling")
});

function changeImage(index) {
    images.forEach((img) => img.classList.remove("showImage"))
    images[index].classList.add("showImage")
}


// -----------------------------------------testimonial section swiper--------------------------

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: true,
    speed: 500,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },  
});

// ------------------------------------------nav-bar activation animation-------------------------------

function activeLink(){
    let sections = document.querySelectorAll("section[id]"); // the following command will only grab 
    // the section elements with an ID attribute
    let passedSection = Array.from(sections).map((sct,i) => {
        return {
            y : sct.getBoundingClientRect().top - header.offsetHeight,
            id : i,
        };
    })
    .filter(sct => sct.y <= 0);
    // the Array.from(sections); will convert our sections "NodeList" to an "Array" object
    // the .map() function will return a new array with each of it's element being the result of a callback function
    // the .filter() function will return a new array with elements that have passed a specific condition, 
    // in this case the coordinates of y axis of each section/ID should be negative.

    // console.log(passedSection)


    let currentSectionId = passedSection.at(-1).id;
    // console.log(currentSectionId)

    // the last object of our new array being created is the current section in which we are in

    navLink.forEach(l => l.classList.remove("active"))
    navLink[currentSectionId].classList.add("active")

}

activeLink();
stickyNavbar();


// ------------------------------------------dark mode btn----------------------------------

let firstTheme = localStorage.getItem("dark");

console.log(firstTheme)
// the default value of an Item in localStorage is 0

changeTheme(+firstTheme)
// the + symbol is added to convert the given string into  an integer as the only character within the sting is an integer

function changeTheme(isDark) {
    if(isDark) {
        document.body.classList.add("dark");
        toggle_btn.classList.replace("uil-moon","uil-sun");
        iconColor.forEach((url,i) => {
            url.src = iconWhite[i];
        });
        // in javascript we can't use "\" as it is used as an escapse sequence, so we use forward-slash or "/"
        localStorage.setItem("dark",1);
    } else {
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("uil-sun","uil-moon");
        iconColor.forEach((url,i) => {
            url.src = "icons/" + iconWhite[i].slice(8,17);
        });
        localStorage.setItem("dark",0);
    }
}

toggle_btn.addEventListener("click", () => {
    changeTheme(!document.body.classList.contains("dark"));
    // the above code will send out True as an argument to our function and (!false = true)
    // and since the fist condition checks the value of the parameter, we can say the the first condition will be executed as it is "true"
});


/* 
so the explination to what is happening here is that in the localStorage , our Item "dark" will have a 
default value of 0, so we then call the function and pass 0 as the argument, meaning it is "false".

Since the "if" statement checks the value passed through our parameter , it will recive a condition like
"if(0)" , this statement right here will automatically shifts the cotrol to our "else" part as the "if-statement"
is "false" , i.e. condition is false at "if".

So now our localStorage will have set the value of our "dark" Item as 0 and would have remove the ".dark" class.

All of this is done in an instance as we reloade the page.

Now when the user clicks the "moon" button to toggle dark-mode , we use the help of our "addEventListner()" function
with this we are calling a function and checking if our "body" element has the ".dark" class,
if it doesn't contain any ".dark" class then we send "true" as our argumnet to our function, else "false"

NOTE: our localStorage will have set the value of our "dark" Item at all times , even after reloading the page

*/


// ----------------------------------------hamburger animation ------------------------------------

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling")
})

navLink.forEach(link => link.addEventListener("click" , () => {
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling")
}))