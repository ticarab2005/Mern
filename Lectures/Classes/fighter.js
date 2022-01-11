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
        this.isShielding = false;
        // console.log('hello from parent constructor');
    }

    attack(opponent) {
        if (opponent instanceof Fighter) {
            if (opponent.isShielding) {
                opponent.isShielding = false;
                console.log(`${this.name} attacked ${opponent.name}, but they shielded!`);
            } else {
                const damage = 5;
                opponent.percentage += damage;
                console.log(`${this.name} attacked ${opponent.name} for ${damage} damage!`);
            }
        }
    }

    special(otherPlayer) {
        if (otherPlayer instanceof Fighter) {
            if (otherPlayer.isShielding) {
                console.log(`${this.name} performed a special on ${otherPlayer.name} but they shielded!`);
                otherPlayer.isShielding = false;
            } else {
                const damage = 25;
                console.log(`${this.name} performed a special on ${otherPlayer.name} and dealt ${damage}% damage!`);
                otherPlayer.percentage += damage;
                otherPlayer.isKilled();
            }
        } else console.log("damn you trying to break the code!!");
    }

    shield() {
        this.isShielding = true;
    }

    isKilled() {
        if (this.percentage > 100) {
            console.log(`${this.name} just died at ${this.percentage}% oh no!!!`);
            this.percentage = 0;
            this.isShielding = false;
            return true;
        }
        return false;
    }
}

// const ness = new Fighter("Ness",5,6,3,"ok",1);
// console.log(ness);
// const dk = new Fighter("Donkey Kong", 2,10,10,"RIDUNNO?!?!", 2);
// ness.attack(dk);
// dk.special(ness);
// console.log(dk);
// console.log(ness);

// export default Fighter;
module.exports = Fighter;