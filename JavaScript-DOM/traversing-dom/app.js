// traversing the DOM

// parent node traversal

// find the parent of li element
const li = document.querySelector(".list-item")

console.log(li.parentNode) // returns parent
console.log(li.parentElement) // parent element

// const li = document.querySelectorAll(".list-item")
// console.log(li)

// li.forEach((element) => {
//     console.log(element.parentElement)
// })

// the parentNode / ..Element function does not work on a NodeList

// child node traversal

const ul = document.querySelector(".list")

ul.childNodes.forEach((elements) => {
    console.log(elements)
})

// the child node contains 6 text nodes and 5 list-items
// the reason behind it is that our functions treats each 
// indentation as empty text field and since this is a part of our 
// documnet the childNodes functions returns it as well


// using children function
console.log(ul.children) // returns a HTMLCollection of list-items
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)


// sibling node traversal

// there are 2 ways , either traverse to the previous or next element 
// of the node list or directly traverse to the next element

const div = document.querySelector("div")

console.log(div.childNodes)

console.log(ul.previousSibling) // #text because of indentation
console.log(ul.nextSibling)

console.log(ul.previousElementSibling) 
console.log(ul.nextElementSibling) // null because ul has no next sibling