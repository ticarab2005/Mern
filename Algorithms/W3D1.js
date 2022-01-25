const intersect = (arrLeft, arrRight) => {
    let newArr = [];
    let i = 0;
    let j = 0;
    while(i < arrLeft.length && j < arrRight.length) {
        if(arrLeft[i] == arrRight[j]) {
            newArr.push(arrLeft[i]);
            i++;
            j++;
        } else if(arrLeft[i] > arrRight[j]) {
            j++;
        } else {
            i++;
        }
    }
    return newArr;
}

console.log(intersect([1], [4]));
console.log(intersect([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(intersect([1,1,4,5,8],[1,1,1,5,6,8]));
console.log(intersect([1,3,5,7,9],[2,4,6,8,10]));
console.log(intersect([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));