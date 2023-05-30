// get element by ID

const title = document.getElementById("header")

console.log(title)

// get element by class name

const list_items = document.getElementsByClassName("list-item")

console.log(list_items)

// get element by tag name

const list = document.getElementsByTagName("li")

console.log(list)

// query selector
// collects the first occurance of the given query in the DOM

const container = document.querySelector(".container")

console.log(container) // prints the entire HTML in the console

// query selector all
// selects all the items in the DOM which matches with the query
// and returns a node list of those items

const node_list = document.querySelectorAll(".container") // we can even pass a tag name as well

console.log(node_list)