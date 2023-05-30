
// we will be creating an hypothetical server from where we will aquire some data using setTimeout

const posts = [
    {title:"post one",body: "this is post one"},
    {title:"post two",body: "this is post two"}
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


function createPost(){
    setTimeout(() => {
        // creating an object
        let newPost = {title:"post three",body:"this is post three"}
        posts.push(newPost)
    },2000)
}

getPost()
createPost()

// as it is quite obvious the time taken for the new post to be created it longer than 
// compared to getting the post , and because of this long delay the output is only
// able to print the 2 objects which were present in the posts[]

// to counter these exceptions/delays we use ES6 features , callbacks,promises and async await

// a callback refers to a function calling another function after it's execution