function bubblesort(arr) {
    var swapped = true;
    while (swapped /*if a swap as happened**/ ) {
        for (var i = 0; i < arr.length - 1; i++) {
            console.log(`${arr[i]},${arr[i+1]}}`)
            if (arr[i] > arr[i + 1]) { //if the value at the current index is greater than the value at the next index, that means it is out of place and needs to be swap
                // [6, 4, 5, 2, 9, 3, 8]
                swapped = true;
                temp = arr[i]; //temp = 6
                arr[i] = arr[i + 1]; //[4, 4, 5, 2, 9, 3, 8]
                arr[i + 1] = temp;
            }
        }
    }
}

let arr = [5, 4, 2, 6, 8, 14, 1, 3];
console.log(arr);
console.log(bubblesort(arr));