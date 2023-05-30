// demonstraiting the callback method

// here we are going to call the getPost function after the createPost() has 
// finished it's work , no matter the delay in time

const posts = [
    {title:"post 1",body: "this is post 1"},
    {title:"post 2",body: "this is post 2"}
]

function getPost(){
    setTimeout(() => {
        let output = ""
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output
    },1000)
}


function createPost(post,callback){
    setTimeout(() => {
        posts.push(post)
        callback()
    },2000)
}

// function createPost(post,callback){
//     if(post.title == "post 4"){
//         setTimeout(() => {
//             posts.push(post)
//             callback()
//         },5000)
//     }else{
//         setTimeout(() => {
//             posts.push(post)
//             callback()
//         },2000)
//     }
// }

createPost({title:"post 3",body:"this is post 3"},getPost)

// so what the above code is doing is it's creating a new post
// adding it to our post[] and calling the getPost()
// this allows for synchronous execution of our program
// and we can finally display all the objects of our posts[]
// and also any future objects as well


function createRange(start,end){
    if(start == end) return [start]
    else{
        return [start,...createRange(start+1,end)]
    } 
}

let range = createRange(4,10)

range.forEach((element) => {
    createPost({title:`post ${element}`,body:`this is post ${element}`},getPost)
})