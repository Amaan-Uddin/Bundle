// event listners

// causing an alert function upon clicking on pizza

const li_1 = document.querySelector(".li1")
console.log(li_1)

function alertOne(){
    alert("do you love pizza")
}

li_1.addEventListener("click",alertOne)

// we can even define => functions inside of our eventListner
// feature of ES6

const li_2 = document.querySelector(".li2")
console.log(li_2)

li_2.addEventListener("click",() => {
    console.log(li_1.style.backgroundColor)
    if(li_1.style.backgroundColor == "blue"){
        li_1.style.backgroundColor = "aliceblue"
    }else{
        li_1.style.backgroundColor = "blue"
    }
})

// displaying text upon an event

const li_3 = document.querySelector(".li3")
const box = document.querySelector(".box")


li_3.addEventListener("click",() => {
    if(box.style.display == "block"){
        box.style.display = "none"
    }else{
        box.style.display = "block"
    }
})




//  event delegation

