//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
const dedupe = (str) => {
    var newStr = "";
    var dupe= false
    for (var i = str.length - 1; i >= 0; i--) {
        var dupe = false;
        for (var j = 0; j < newStr.length; j++) {
            if (newStr[j] == str[i]) {
                dupe = true;
            }
        }
        if (dupe == false) {
            newStr += str[i]
        }
        dupe = false;
    } 
    return newStr;
}

console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));