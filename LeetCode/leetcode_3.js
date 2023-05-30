function lenSubStr(string){
    let spreadArray = [...string]
    let count = 0
    console.log(spreadArray)
    let newArray = []
    for(let index = 0; index < spreadArray.length; index++){
        if(newArray.includes(spreadArray[index])){
            if(spreadArray[index] == newArray[0] && count < 1) {
                count++
                newArray.push(spreadArray[index])
            }
        }
        else{
            newArray.push(spreadArray[index])
        }
    }
    // if(string == ' ') newArray.length = 1
    console.log(newArray)
    console.log(count)
    // console.log(newArray.length)

    if(newArray.length > 1 && newArray[0] == spreadArray[0]) {
        newArray.splice(0,1) // startIndex , delete-tillIndex
        console.log(newArray)
        
        console.log(newArray.length)
    } else{
        console.log(newArray.length)
    }
}

const string = 'au'

lenSubStr(string)

// console.log([...strinf])
// console.log(Array.from(strinf))

/*
We Learned:

1) How to convert a string into an array of characters
    1)[...string]
    2)Array.form[string]

2) Check if an element exists in an array using the includes() method
    array.includes(<item-to-check>)

*/