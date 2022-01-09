// //var, const, let --> 3 ways to declare variables

// var name = "Lebron James"
// const numChampionships = 4
// const teammates = ['AD', 'Rondo', 'Westbrook']
// var willLakersWin = false

// const numdayInWeek = 7

// teammates.pop()

// // numChampionships = numChampionships + 1
// console.log(teammates)

// var sayHi = function() {
//     console.log("hi")
//     return "Hi"
// }

// function customHello(name) {
//     console.log("hello ", name)
//     console.log("num championship is", numChampionships)
//     var secretword = "wazzaaaaap"
//     return secretword
// }

// // console.log(customHello("lebron"))

// // customHello("Lebron")

// var student1 = {
//     name: "Chris LaMee",
//     numBelts: 2,
//     homeTeam: "Bulls"
// }

// // console.log(student1.name)

// // sayHi()

// // scoping ---> something (variables and functions) can be global if it's not declared inside any function

// let player2 = "Steph Curry"


// function countToNum(num) { //functions make their own scope for variables declared with var
//     let sum = 0
//     for (let i = 0; i < num; i++) {
//         let thing = "this is a thing"
//         sum += i
//         console.log(i)
//     }
//     console.log(sum)
//         //     console.log(' i outside the for loop is:',
//         //         i)
// }


// // console.log(sum)
// countToNum(10)

// // 3 ways to declare variables are: var, let, const
// // all of those above ways to declare variables are globally scoped if they are not inside a function
// // functions create a new scope for "var" declarations --> vars are availiable outside forloops if they are declared inside a forloop, lets are not
// // for loop and conditionals create a new scope for 'let' and "const" declarations
// // const is a way to declare a variable that you don't want reassigned to a different value

// var beatles = ['Paul', 'George', 'John', 'Ringo'];

// function printNames(names) {
//     function actuallyPrintingNames() {
//         for (var index = 0; index < names.length; index++) {
//             var name = names[index];

//             console.log(name + ' was found at index ' + index);
//         }
//         console.log('name and index after loop is ' + name + ':' + index);
//     }
//     actuallyPrintingNames();
// }
// printNames(beatles);


console.log('Hello Class')
    // js
var name = 'bob'

function detail() {
    console.log(name)
    var other = 'charlie'
    var i = 100
    for (let i = 0; i < 5; i++) {
        let newvar = 'test'
    }
    console.log(i)
}

detail()

const person = ['carl']
person[0] = 'b'
    // Strings are immutable(unchangeable)
console.log(person)

console.log(other)
test()
    // initialize it(init)
var other = 8;
// define
other = 9

function test() {
    console.log('test')
}