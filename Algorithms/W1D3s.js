//partition the array around the value at arr[0]
//without creating a new array
//values left of the original pivot should be less than the pivot
//values right of the pivot should be >= the pivot value
//note: each side of the partitioned value does not
//have to be sorted.
//return the newly partitioned array
//bonus: return the index where the value at 0 ends up
//[5,4,9,2,5,3] -> [4,2,3,5,9,5], return 3
const partition = (arr) => {
    const pivot = arr[0];
    let pivi = 0;

    for(let i = 1; i < arr.length; ++i){
        if(arr[i] < pivot){
            ++pivi;
            //put number at the beginning
            for(let j = i - 1; j >= 0; --j){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            // console.log(arr);
        }
    }

    console.log(arr);
    // return pivi;
}
//should return [4,2,3,5,9,5]
// console.log(partition([5, 4, 9, 2, 5, 3]));
// //should return [4,7]
// console.log(partition([7, 4]));
// //should return [2,1,3,4,5]
// console.log(partition([3, 5, 1, 2, 4]));

// console.log(partition([7, 2, 10, 15, 1]));

const quickSort = (arr,leftArr=0,rightArr=arr.length-1) => {
    if (leftArr < rightArr) {
        let pivotIdx = partition(arr, leftArr, rightArr)
        console.log('pivotIdx is --->', pivotIdx)
        // left side
        quickSort(arr, leftArr, pivotIdx - 1)
        // right side
        quickSort(arr, pivotIdx + 1, rightArr)
    }
    console.log("returning arr")
    return arr;
}

console.log(quickSort([7, 3, 4, 8, 1, 2, 6]));