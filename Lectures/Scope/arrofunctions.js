// function doAThing() {
//     console.log("i'm doing it!!! i'm really doing it!!!");
// }

// doAThing();

let doOtherThing = (words) => {
    console.log(words);
}

// doOtherThing("hey there!!!");

// doOtherThing = 48;
// console.log(48);

const runTenTimes = (operation) => {
    for (let i = 0; i < 10; i++) {
        operation();
    }
}

runTenTimes(() => { console.log("whoaaahhhhh this is trippy, mannnnnn") });
runTenTimes(() => { console.log(Math.PI) });

let temperature = 18;

let clothing = temperature < 30 ? "coat" : "temperature" < 50 ? "light jacket" : "you're fine!!!";
// let clothing;
// if(temperature < 30){
//     clothing ="coat";
// } else {
//     clothing = "jacket";
// }

console.log(clothing);