function selectionsort(arr) {
    // loop through array, fine the largest value, and the index its in, then put it in the correct place
    // hint: might need a nested for loop
    for(var minStart = 0; minStart < arr.length){

        for (var i = 0; i < arr.length; i++) {
            var min = 0;
            for(var i = 0; i <arr.length;i++)
                if(arr[min] > arr[i]){
                    min = i;
            }
        }
        // let min = arr[0];
        // Run the j in front of the i
        // for (let j = 1; j < arr.length - i; j++) {

        //     // checking if j is < than i
        //     // put the greater value to the right and put the less value to the left
        //     if (arr[j] > min) {
        //         min = arr[j];
        //         runner = j;
        //     }
        // }
        // let temp = arr[runner]; //swap the value
        // arr[runner] = arr[arr.length - 1 - i];
        // arr[arr.length - 1 - i] = temp;
        var temp = arr[min];
        arr[min] = arr [minStart];
        arr[0] = temp;
        
    }
    return arr;
}

console.log(arr);