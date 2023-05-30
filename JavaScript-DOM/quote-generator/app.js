let url = "https://type.fit/api/quotes" // returns a list of quote objects

let randomNumber = null;

const quote = document.querySelector(".quote")
const author = document.querySelector(".author")
const button = document.querySelector(".button")


// creating an asynnc function
async function getApi(url){
    const response = await fetch(url)
    let data = await response.json()

    let randomNumber = Math.floor(Math.random() * 1643)
    showApi(data[randomNumber])
}

function showApi(data){

    quote.innerText = '" '+data.text+' "'
    if(!data.author){
        author.innerText = "-unknown"
    }else{
        author.innerText = "-" + data.author
    }

}

button.addEventListener("click",() => {
    getApi(url)
})

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data[1])
//     })