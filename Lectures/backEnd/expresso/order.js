const faker = require('@faker-js/faker')

class Order{
    constructor(){
        // milk, name, expresso shots, size, topping, coffee shop name, type of base
        const bases = ["dark roast","light roast","columbian","peruvian","expresso","hot water","chai tea","cold brew"]
        const additives = ["milk","soy milk","coconut milk","oat milk","goat milk","almond milk","water","condense milk"]
        const sweetener = ["honey","sugar","splenda","pumpkin spice syrup","simple syrup","brown sugar syrup","stevia","vanilla syrup","bailey's","mayo","dumpster water"]
        const sizes = ["unintelligible starbucks size","medium","small","large","bigpin"]

        this.baristaName = faker.name.findName();
        this.coffeeShop = faker.company.companyName()+"Coffee Roasters";
        // to grab random variables out of our array is to use math.floor
        this.base = bases[Math.floor(Math.random() * bases.length)];
        this.additives = additives[Math.floor(Math.random() * additives.length)];
        this.sweetener = sweetener[Math.floor(Math.random() * sweetener.length)];
        this.expressoShots = Math.floor(Math.random() * 10);
        this.cost = "$" + faker.commerce.price();
        this.sizes = sizes[Math.floor(Math.random() * sizes.length)];
        this.baristaPic = faker.image.people();
        
    }
}

module.exports = Order;