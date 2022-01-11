// combine two pre-sorted arrays into one sorted array
// return the newly combined array
// bonus challenge: combine in place into leftArr instead of a new array

const combine = (leftArr, rightArr) => {
    newArr = [];
    var i = 0;
    var j = 0;

    while (leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            newArr.push(leftArr[i]);
            i++;
        } else {
            newArr.push(rightArr[j]);
            j++;
        }
    }
    return newArr;
}


// should return [0,1,2,3,4,6,7,9,11]
// console.log(combine([1, 2, 7, 9], [0, 3, 4, 6, 11]));
// should return [0,1]
// console.log(combine([1], [0]));

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const left = arr.slice(0, arr.length / 2);
    const right = arr.slice(arr.length / 2, arr.length);
    return combine(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([5, 4, 2, 6, 8, 14, 1, 3, 11]));