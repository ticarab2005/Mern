const Fighter = require('./fighter');

class Kirby extends Fighter {
    constructor(player) {
        super("Kirby", 4, 5, "hiiiiiiiiiiiii", playerNum);
        this.hasAbility = false;
        this.ability = "";
    }
    special(opponent) {
        if (opponent instanceof Fighter) {
            if (this.hasAbility) {
                opponent.percentage += this.strength * 3;
                console.log(`${this.name} used ${this.ability}'s special on ${opponent.name} for ${this.strength *2}%!!!!!`);
            } else {
                this.hasAbility = true;
                this.ability = opponent.name;
                console.log(`Kirby stole ${opponent.name}'s ability`);
            }
        }
    }
}

class Bayonetta extends Fighter {
    constructor(playerNum){
        super("Bayonetta", 6, 4, 7, "look at these glasses", playerNum);
    }
}

special(opponent){
    if (opponent instanceof Fighter) {
        console.log(`Bayonetta is going to fire her pistol heels at ${opponent.name}!!!!`);
        for(let )
        opponent.percentage += this.strength * 2;
        console.log(`${this.name} performed a special on ${opponent.name} for ${this.strength *2}%!!!!!`);
    }
}

const ness = new Fighter("Ness", 5, 6, 3, "ok", 1);
const kirb = new Kirby(2);
const dk = new Fighter("Donkey Kong", 2, 10, 10, "RIDUNNO?!?!", 2);
const bayo = new Bayonetta(4);