//given a string of words(with spaces),
//return an array of words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]

const stringToWordArray = (str) => {
    const wordArr = []
    let stringHolder = ""
    for(let i = 0; i < str.length; i++){
        if(str === ""){
            return "Empty String";
        } 
        if (str[i] != " "){
            if(str[i+1] && str == " "){
                stringHolder += str[i]
                wordArr.push(stringHolder);
                stringHolder = "";
            }
            else {
                stringHolder += str[i]
                console.log(stringHolder);
            }
        }
    }
    return wordArr;
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