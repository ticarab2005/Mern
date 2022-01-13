function bubblesort(arr) {
    for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < arr.length - j; i++) {
            // console.log("current index is ->", arr[i]);
            // console.log("next index is ->", arr[i + 1]);
            if (arr[i] > arr[i + 1]) { //if the value at the current index is greater than the value at the next index, that means it is out of place and needs to be swap
                // [6, 4, 5, 2, 9, 3, 8]
                temp = arr[i]; //temp = 6
                arr[i] = arr[i + 1]; //[4, 4, 5, 2, 9, 3, 8]
                arr[i + 1] = temp; //[4, 6, 5, 2, 9, 3, 8]
            }

            // console.log("after the swap", arr);
        }
    }
    console.log(arr);
}

bubblesort([6, 4, 5, 2, 9, 3, 8]); //output: [2,3,4,5,6,8,9]
bubblesort([7, 4, 5, 2, 9, 3, 1]); //output: [2,3,4,5,6,8,9]

function selectionsort(arr) {
    // loop through array, fine the largest value, and the index its in, then put it in the correct place
    // hint: might need a nested for loop
    for (let i = 0; i < arr.length; i++) {
        let runner = 0;
        let min = arr[0];
        // Run the j in front of the i
        for (let j = 1; j < arr.length - i; j++) {

            // checking if j is < than i
            // put the greater value to the right and put the less value to the left
            if (arr[j] > min) {
                min = arr[j];
                runner = j;
            }
        }
        let temp = arr[runner]; //swap the value
        arr[runner] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr);
}

(selectionsort([10, 12, 24, 2, 3, 9, 21]));


