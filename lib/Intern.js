const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name = '',id,email,school) {
        super(name);

        this.id = id;
        this.email = email;
        this.school = school;

    }
    getName() {}

    getId() {}
    
    getEmail() {}

    getSchool() {}

    getRole() {}
}
 module.exports = Intern;