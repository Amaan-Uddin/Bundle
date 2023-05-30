// DOM manipulation


// Styling elements

const header = document.getElementById("header")
// change the color of heading

header.style.color = "red" // inline styling
// CSS properties are to be written in camelCase and not kebab-case

// since the .style is an inline styling property we cannot use it
// to style a nodeList, we would have to loop through it and apply
// the stlying to each individual element

const listItems = document.querySelectorAll(".list-item")

listItems.forEach((element,i) => {
    console.log(element)
    console.log(i)

    element.style.fontSize = "2rem"
    element.style.fontWeight = "bold"
})



// Creating elements

// adding a new list element inside our ul

const ul = document.querySelector("ul")
const li = document.createElement("li")

// add the list element into our ul
ul.append(li) // now if you were to open dev tools you can inspect this element in our ul

// adding text

// 3 ways, innnerText,textContent,innerHtml
// innerHtml is quite unsafe as the user can gain unvolunterary access to the DOM
// it displays the entire HTML content inside a specific tag

li.innerText = "Buffalo Wings"

// style the new list element using 'Attribute'

li.setAttribute("id","header")
// the setAttribute function takes 2 parameters , the attribute name and it's coresponding value

li.removeAttribute("id") // removes the atribute 

// getAttrubute returns the name of the Attribute 
console.log(header.getAttribute("id")) // returns header

// now using classList

li.classList.add("list-item")
li.classList.remove("list-item")
// to check if a element has a specific class use contain
console.log(li.classList.contains("list-item")) // false as we removed it

// To Remove a element fromt the DOM completely 
li.remove()


