// destructuring
const person2 = {
    name: 'bob',
    email: 'bob@bob.com'
}

let pname = person2.name
    // let { name, email } = person2

// console.log(name)
// console.log(email)

const animals = ['horse', 'dog', 'fish', 'cat', 'bird', 'velociraptor'];
const [favoriteAnimal, secondAnimal, ...otheranimals] = animals;

console.log(favoriteAnimal)

let personcopy = {...person2 }
console.log(personcopy)
console.log(personcopy === person2)

// arrow functions
// function somename() {

// }

// var somefun = function() {

// }

// var arrow = (param) => { console.log(param) }
// arrow('hit the target')

// ternary operator: is a ? follow with a colon. Ternary operator are in 3 parts 
// 1 part is an condition: some thing that resolves to true or false
// 2nd part is if it's true
// 3rd part if it's false
// Ternary operator is a cleaner ifelse statement

// function iftrue() {
//     number = 10;
//     console.log('number is now 10')
// }
// var number = 100
// 10 < number ? iftrue() : console.log('number is still', number)
// console.log(number)