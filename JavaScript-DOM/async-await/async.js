const posts = []

let output = ""

function getPost(){
    setTimeout(() => {
        output += `<li>${posts[posts.length - 1].title}</li>`
        document.body.innerHTML = output
    },1)
}

function createPost(post,time) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post)

            let error = false

            if(!error) resolve();
            else reject("ERROR: something went wrong")

        },time * 1000)
    })
}

function createRange(start,end){
    if(start == end) return [start]
    else{
        return [start,...createRange(start+1,end)]
    } 
}

let range = createRange(1,10)

// to create an async await function we need to create a function with async keyword

range.forEach(async (element) => {
    await createPost({ title: `post ${element}`, body: `this is post ${element}`},element)
    getPost()
    console.log(`${element} has been pushed`)
})

// so whats happening here is we are passing each number of 
// the range list to our async function from where we are
// awaiting till the current element's object is pushed to our posts[]
// after that process is complete we then call getPost()

// and the same process repeats for all the numbers/elements of our range[]

// the async function is used to better handle promises and awaits for a promise to
// be returned
