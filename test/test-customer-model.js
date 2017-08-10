const expect = require('chai').expect;
const Customer = require('../customer');
let custData = ['me', 'me@me.com', '123 me street', 'm3m3m3'];



describe('Customers', () => {
    it('Should be able to save to the database', (done) => {
        
        let myCustomer = new Customer(...custData);
        myCustomer
            .save()
            .then((result) => {
                done();
        });
    });
    it('Should be able to get a customer from the database', (done) => {
        let myCustomer = new Customer(...custData);
        myCustomer
            .get(1)
            .then((result) => {
                console.log(myCustomer.name);
                console.log(myCustomer.email);
                console.log(myCustomer.address);
                console.log(myCustomer.password);
                done();
            })
    })
});