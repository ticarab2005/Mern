class Fighter {
    constructor(name, speed, strength, weight, catchPhrase, playerNum) {
        //name, percentage, speed(1-10), strength(1-10), weight(1-10), catch phrase, player number
        this.name = name;
        this.speed = speed;
        this.strength = strength;
        this.weight = weight;
        this.catchPhrase = catchPhrase;
        this.playerNum = playerNum;
        this.percentage = 0;
        console.log('hello from parent constructor');
    }
    attack(opponent) {
        if (opponent instanceof Fighter) {
            opponent.percentage += this.strength;
            console.log(`${this.name} attacked ${opponent.name} for ${this.strength}%!!!!!`);
        }
    }
    special(opponent) {
        if (opponent instanceof Fighter) {
            opponent.percentage += this.strength * 2;
            console.log(`${this.name} performed a special on ${opponent.name} for ${this.strength *2}%!!!!!`);
        }
    }
}

const ness = new Fighter("Ness", 5, 6, 3, "ok", 1);
console.log(ness);
const dk = new Fighter("Donkey Kong", 2, 10, 10, "RIDUNNO?!?!", 2);
ness.attack(dk);
dk.special(ness);
console.log(dk);

module.exports = Fighter;