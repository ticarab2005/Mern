const faker = require('@faker-js/faker');

class Company{
    constructor(){
        this._id = faker.datatype.number();
        this.brewery = faker.company.companyName();
        this.address = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

module.exports = Company