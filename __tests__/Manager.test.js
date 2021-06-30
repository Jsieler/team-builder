const Manager = require("../lib/Manager")


test("getOfficeNumber() should get office number",() => {
    const test = "officenumber"
    const manager = new Manager("Josh", 1, "sielerjosh@gmail.com", "officenumber")
    expect(manager.getOfficeNumber()).toBe(test)
})

test("getRole() should return an managers role",() => {
    const test = "manager"
    const manager = new Manager("Josh", 1, "sielerjosh@gmail.com", "officenumber")
    expect(manager.getRole()).toBe(test)
})