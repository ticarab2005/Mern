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
        console.log(`Ninja's Stats - Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed} Health: ${this.health}`);
        return this;
    }
    drinkSake() {
        console.log(`${this.name} drinks Sake!`);
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();