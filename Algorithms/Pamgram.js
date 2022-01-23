// isPamgram is every single letter in the alphabet is used at least one time(The quick brown fox jumps over a lazy dog)
// if a string is less than 26 characters there is no chance that it's a pamgram. It has to have all the letters of the alphabet

const isPamgram = (str) => {
    let newSet = new Set();
    // The new set initiates an empty set. It'd be the same as brackets when you're initiating an empty array
    str = str.toUpperCase();

    let regex = /[A-Z]/
    for(let i = 0; i< str.length; i++){
        if(regex.test(str[i])){
            newSet.add(str[i])
        }
    }
    if(newSet.size === 26){
        return true
    } else {
        return false
    }
}

console.log(isPamgram("The quick brown fo jumps over a lazy dog"))
console.log(isPamgram("Sphinx of the black quartz, judge my vow"))
console.log(isPamgram("Pack my box with five dozen liquor jugs"))
console.log(isPamgram("Hello world"))
