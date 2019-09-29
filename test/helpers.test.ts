import * as helpers from "../src/helpers";

test("should get greeting", () => {
    const greeting = helpers.getGreeting("Hello, World!");
    expect(greeting).toBe("Hello, World!");
});

test("should get list of static users", () => {
    const users = helpers.getStaticUsers();
    const staticUsers = {
        users: [
            {
                age: 28,
                firstName: "Peter",
                lastName: "Müller"
            },
            {
                age: 57,
                firstName: "Ute",
                lastName: "Beierburg"
            }
        ]
    };
    expect(users).toStrictEqual(staticUsers);
});