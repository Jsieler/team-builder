const Engineer = require("../lib/Engineer")

test("getRole()should return \"engineer\" ",() => {
    const test = "engineer"
    const engineer = new Engineer("Josh", 1, "sielerjosh@gmail.com", "github")
    expect(engineer.getRole()).toBe(test)
})

test("here can get github via getGithub()",() => {
    const test = "github"
    const engineer = new Engineer("Josh", 1, "sielerjosh@gmail.com", "github")
    expect(engineer.getGithub()).toBe(test)
})