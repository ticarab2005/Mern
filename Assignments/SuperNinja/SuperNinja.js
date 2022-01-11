class Ninja {
    constructor(name, health = 10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }
    showStats() {
        console.log(`Stats - Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed} Health: ${this.health}`);
        return this;
    }
    drinkSake() {
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }
    speakWisdom() {
        console.log(`${this.name} Hit's Ninja with wisdom: What one programmer can do in one month, two programmers can do in two months`);
        super.drinkSake();
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa");
const superSensei = new Sensei("Master Splinter");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();