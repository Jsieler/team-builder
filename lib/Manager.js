const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name = '',id,email,officeNumber) {
        super(name)

        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getName() {}

    getId() {}
    
    getEmail() {}

    getRole() {}

}
module.exports = Manager;