const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '',id,email,github) {
      super(name);

      this.id = id;
      this.email = email;
      this.github = github;
    }
    getName() {}

    getId() {}
    
    getEmail() {}
    
    getGithub(){}

    getRole(){}
}

module.exports = Engineer;