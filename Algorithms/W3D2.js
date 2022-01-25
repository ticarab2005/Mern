//return a new unsorted union multiset of two arrays
//essentially same as yesterday but your input is unsorted
//don't just sort the arrays, then do a union!
//[2,7,2,1,2], [6,7,2,7,6,2] returns [7,2,7,2,2,1,6,6]
//(or a different combination of the same numbers, since it's unsorted)

const unionUnsorted = (leftArr, rightArr) => {
    let newArr = [];
    var i = 0;
    var j = 0;
    if (leftArr[i] < rightArr[j]) {
        newArr.push(leftArr[i]);
        i++
    } if(leftArr[i]>)


// console.log(union([2,7,2,1,2], [6,7,2,7,6,2]));
// console.log(union([2,1,10,7,9],[3,10,2,7,9,5,2]));
// console.log(union([2,2,7,1,2],[2,2,6,7,6]));