const Intern = require("../lib/Intern")


test("getSchool() should get interns school",() => {
    const test = "school"
    const intern = new Intern("Josh", 1, "sielerjosh@gmail.com", "school")
    expect(intern.getSchool()).toBe(test)
})

test("getRole() should return an Interns role",() => {
    const test = "intern"
    const intern = new Intern("Josh", 1, "sielerjosh@gmail.com", "school")
    expect(intern.getRole()).toBe(test)
})