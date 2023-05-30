const button = document.querySelectorAll(".button")
const query = document.querySelectorAll(".query")

query.forEach((qry,index) => {
    qry.addEventListener("click",() => {
        qry.classList.toggle("open")
        button[index].classList.toggle("close")

        if(button[index].classList.contains("close")){
            button[index].innerText = "-"
        }else{
            button[index].innerText = "+"
        }  
    })
})