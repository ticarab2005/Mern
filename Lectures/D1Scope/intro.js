// console.log(x);

// function changeString() {
//     // function scope
//     var other = "try to print the secret message!!!!";
//     x = "changed";
//     // console.log(other);
// }

// function unchangedString() {
//     x = "hey it's me!";
// }

// var x = "hey it's me!";

// console.log(x);
// changeString();
// console.log(x);
// unchangedString();
// console.log(x);
// console.log(other);

// let, const

// console.log(x);
// let x = "hey it's me!";

// for (var i = 0; i < 100; i++) {}
// if(50<100){
//     let i = "hey again!";
// }
// console.log(i);

const numOfStudents = 27;
console.log(numOfStudents);
// numOfStudents++;

// const variaables cannot be REASSIGNED

const faveNums = [4, 8, 15, 16, 23, 42];
let [first, second, banana, , other] = faveNums;
first = 14;
faveNums[5] = 68;
const newList = [1, ...faveNums, 99];
console.log(newList);

// const sundae = {
//         sauce: "hot fudge",
//         flavor: "vanilla",
//         topping: "pecans"
//     }
//     // destructuring an object, the NAME matters
// const { flavor, ...chocolateSoup } = sundae;
// sundae.topping = "peanuts";
// console.log(chocolateSoup);

// let jumboSundae = {
//     ...sundae,
//     whippedCream: true,
//     cherry: true,
//     sprinkles: true,
//     fruit: "pineapple"
// }

// console.log(jumboSundae);