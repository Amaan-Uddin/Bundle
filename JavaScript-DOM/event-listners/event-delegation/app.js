// event delegation

// appending a event listner to all the children of a parent 
// and further decendent

const array = ["ice-cream","shawerma","khebsa","mandi","franki"]
const button = document.querySelector(".button")

const ul = document.querySelector(".list")

ul.addEventListener("click",(e) => { // e is the event object
    console.log(e.target.innerText + "is clicked")

    const target = e.target

    if(target.style.backgroundColor == "lightblue"){
        target.style.backgroundColor = "aliceblue"
    }else{
        target.style.backgroundColor = "lightblue"
    }
})

button.addEventListener("click",() => {
    let rand_food = array[Math.floor(Math.random() * 5)]
    const li = document.createElement("li")

    li.setAttribute("class","list-item")
    li.innerText = rand_food

    ul.append(li)
})
