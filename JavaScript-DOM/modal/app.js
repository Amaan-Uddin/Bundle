
const button = document.querySelector(".button")
const closeButton = document.querySelector(".close")

const overlay = document.getElementById("target")
const modal = document.querySelector(".modal")


const container = [overlay,modal]


button.addEventListener("click",() => {
    container.forEach(element => {
        element.style.opacity = "1"
        element.style.transform = "translateY(0%)"
    })
})

closeButton.addEventListener("click", () => {
    container.forEach(element => {
        element.style.opacity = "0"
        if(element == modal){
            element.style.transform = "translateY(-500%)"
        }else{
            element.style.transform = "translateY(-100%)"
        }
    })
})

window.addEventListener("click", (e) => {
    if(e.target == overlay){
        container.forEach(element => {
            element.style.opacity = "0"
            if(element == modal){
                element.style.transform = "translateY(-500%)"
            }else{
                element.style.transform = "translateY(-100%)"
            }
        })  
    }
})