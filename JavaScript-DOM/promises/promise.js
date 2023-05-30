// we will be discussing about promises
const posts = [
    {title:"post 1",body: "this is post 1"},
    {title:"post 2",body: "this is post 2"}
]

function getPost(){
    setTimeout(() => {
        let output = ""
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    },1000)
}

function createPost(post){
    // we are going to return an promise here
    // a promise takes 2 parameters (resolve,reject)
    // and returns a callback

    // a promise is a returned object to which you attach a 
    // callback insted of passing the callback to a funcion
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post)

            let error = false // here we would be conducting some error handling

            if(!error){
                resolve("Successful"); // if the promise has been fullfilled
            }else{
                reject("Something went wrong")
            }
            // now once one of the above is executed we can then use the .then/.catch method
        },2000)
    } )
}

function createRange(start,end){
    if(start == end) return [start]
    else{
        return [start,...createRange(start+1,end)]
    } 
}

let range = createRange(3,10)

range.forEach((element) => {
    // insted of passing in a callback getApi function we will use .then
    createPost({title:`post ${element}`,body:`this is post ${element}`})
        .then(response => {
            getPost()
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        }); // if the promise has been rejected then catch the error
})
