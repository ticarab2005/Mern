// helper function Partition--> goal is to pick a number at the end of the array, and arrange the array so that there is one element that has everything lese than it to the left(doesn't have to be ordered) and everything greater that it to the right (doesn't have to be ordered)

// const partition = (arr) => {
//     let runner = 0;
//     for(var i= runner; i < arr.length-1; i++){
//         if((arr[i] < arr[arr.length-1]) || (i==arr.length-1)){
//             temp = arr[runner];
//             arr[runner] = arr[i];
//             arr[i] = temp;
//         }
//         runner--;
//         return runner;
//     }
//     // console.log(arr)
// }
const partition = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[end];
    let i = start;
    let runner = start;
    while (i >= start && i < end) {
        if (arr[i] <= pivot) {
            // temp = arr[runner];
            // arr[runner] = arr[i];
            // arr[i] = temp;
            [arr[i], arr[runner]] = [arr[runner], arr[i]]
            runner++;
        }
        i++
    }
    [arr[runner], arr[end]] = [arr[end], arr[runner]]
    console.log(arr);
    console.log(runner);
    return runner;
}


partition([7,3,4,9,0,2,5]);
// select an element at the end (this element is called out pivot number) --(5)
// go from left to right and count how many elements are less than the pivot, and whenever an element that is less than the pivot is found, swap the current value with the index of numless
// [3,7,4,9,0,2,5]
// [3,4,7,9,0,2,5]
// [3,4,0,9,7,2,5]
// [3,4,0,2,7,9,5]
// [3,4,0,2,5,9,7]
// return back the index number that the pivot number ended up in -> 4

// numless = 0->1->2->3->4

// in quicksort, we do the partitioning recursively and divided up the array into the left of the pivot and right of the pivot
// [3,4,0,2,5,9,7]
// [3,4,0,2]  [9,7]

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