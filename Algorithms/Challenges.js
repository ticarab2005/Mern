var x = [1, 3, 5];
x[0] = 15;
x[3] = 77;
console.log(x);

var x = [1, 3, 5, 8, 2, -5, -8];
x[0] = x[x.length - 1];
x[x.length - 1] = x[0];
console.log(x);

var x = 10,
    y = 20;

function abc(x, y) {
    x = x + 10;
    y = y + 10;
    return x * 10;
}

z = abc(x, y) + abc(y, x);
console.log(z);

var x = [1, 3, 5, 7];

function abc() {
    var x = [0, 1, 2, 3];
    for (var i = 0; i < x.length; i++) {
        x[i] = x[i] + 2;
    }
    return x;
}

x = abc();
console.log(x);

function abc(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'dojo';
        }
    }
    return arr;
}

output = abc([-3, 0, 3, -5]);
console.log(output);

function abc(number) {
    var arr = [];
    for (var i = 0; i < number; i++) {
        arr.push(0);
    }
    return arr;
}

output = abc(5);
console.log(output);

function abc(number) {
    var sum = 0;
    for (var i = 0; i <= number; i++) {
        sum = sum + i;
    }
    console.log(sum);
    return sum + 10;
}

output = abc(2) + abc(3);
console.log(output);

function looping(x, y) {
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            console.log(i * j);
        }
    }
    return x * y;
}

z = looping(2, 3);
console.log(z);

function get_array() {
    var arr = [];
    for (var i = 1; i <= 255; i++) {
        arr.push(i);
    }
    return arr;
}

output = get_array();
console.log(output);

function get_even_number() {
    var sum = 0;
    for (var i = 0; i < 1001; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
output = get_even_number();
console.log(output);

function sum_odd_5000() {
    var sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 == 1) {
            sum = sum + i;
        }
    }
    return sum;
}

output = sum_odd_5000();
console.log(output);

function iterArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

iterArr([1, 2, 5]);
console.log();

function findMax(arr) {
    var max = arr[0];

    for (var i = 0; i < arr.length; i++) {

    }
}

for (var i = 1; i <= 1000; i = i + 2) {
    console.log(i);
}


var sum = 0;
for (var i = 1; i <= 5000; i = i + 2) {
    sum = sum + i;
}

console.log(sum);