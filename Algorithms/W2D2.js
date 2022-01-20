//instructions: Given a string, create a function that returns to you a new array containing only the latest intstance of each letter from the sentence, without any duplicates. Make it case sensitive first so "S" and "s" are not considered duplicates 


const dedupeStr = (str) => {
    // establish an empty array to push non duplicate values from the string input
    let newArray = []
    // go through each index of the array and check for duplicate characters
    // when reching a duplicate, check the newArray array to see if it is contained in there, if it is, push original duplicate out and move new one in 
    for (let i = 0; i < str.length; i++) {
        // newArray.push(str[i])
        if (! newArray.includes(str[i])) {
            newArray.push(str[i])
        } else {
            // loop the array from beginning again and see where duplicate 
            for (let j = 0; j < newArray.length; j++) {
                // wee need to remove the duplicate value, then push new one in 
                // console.log("J is:",j,"value at j is: " str[j])
                if (newArray[j] == str[i]) {
                    // console.log("duplicate found", str[j])
                    newArray.splice(j, 1)
                    break
                }
            }
            newArray.push(str[i])
        } 
    }
    console.log(newArray)
}

console.log(dedupeStr("Snaps! crackles! pops!"))