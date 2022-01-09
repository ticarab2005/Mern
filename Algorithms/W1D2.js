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

function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        // initialize the largest value
        let bigidx = 0;
        // index that contains the largest value
        // let bignum = arr[0];
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j] > arr[bigidx]) {
                bignum = arr[j];
                bigidx = j;
            }
        }
        // by the time we get here, the inner forloop has finished and we have located the largest number
        // let temp = arr[bigidx];
        // This will give us the last index minus the i
        // arr[bigidx] = arr[arr.length - 1 - i];
        // arr[arr.length - 1 - i] = temp;
        // destructure swap
        [arr[bigidx], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[bigidx]];
    }
    console.log(arr);
}

sort([25, 2, 5, 13, 11, 21, 7]);