const db = require('./db');

class Customer {
    constructor(name,email,address,password) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.password = password;
    }
    save() {
        return db.query(`
        insert into customers 
        (name, email, address, password)
        values
        ('${this.name}','${this.email}','${this.address}','${this.password}');
        `);
    }
    get(id) {
        return db.one(`
            select * from customers where customer_id=${id};
        `).then( (result)=> {
            this.name = result.name;
            this.email = result.email;
            this.address = result.address;
            return result;
        })
    }
};

module.exports = Customer;





// var db = require('db')
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// })
