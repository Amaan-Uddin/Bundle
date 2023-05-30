var twoSum = function(nums,target) {
    let startIndex = 0
    let element = nums[startIndex]
    let indices = []
    const numLen = nums.length
    while(startIndex < numLen) {
        for(let item = startIndex + 1; item < numLen ; item++) {
            if(element + nums[item] == target){
                indices.push(startIndex,item)
                break
            }
        }
        if(indices.length == 2) break

        startIndex++
        element = nums[startIndex]
    }
    return indices
}
