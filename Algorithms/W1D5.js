// given a str that can be a sentence, put each word into an array



const stringToWordArray = (str) => {
    let regex = /[a-zA-Z0-9]/
    let arr = [""]
    for (i = 0; i < str.length; i++) {
        if (regex.test(str[i])) { //compares a str to regex expression if it matches it return true if it doesn't it returns false
            // each time I was comparing to if it was a lower case upper case or a number, if it was true then
            // concatenate a str to the last index of the array 
            arr[arr.length - 1] += str[i]

        }
        else {//evaluated from the first if
            if (arr[arr.length - 1] !== '') { //this if is a new else statement that's nested. Putting an else if will give us a numerouse empty strings in a row when it comes to the comma
                // and space. It's saying don't add an element of the array if the last of the array is empty
                arr.push('')
            }
        }
    }
    if (arr[arr.length - 1] == '') { //if it's empty, get rid of it
        arr.pop()
    }
    return arr;
}

console.log(stringToWordArray("Did I shine my shoes today?"));
console.log(stringToWordArray("Did I shine my shoes today?      "));
console.log(stringToWordArray("two             words"));

//write a function that, given a string of words(with spaces),
//returns a new string with words in reverse sequence.
//"This is a test" -> "test a is This"
// const reverseWordOrder = (str) => {
    
// }

// console.log(reverseWordOrder("This is a test"));
// console.log(reverseWordOrder("A man a plan a canal Panama"));