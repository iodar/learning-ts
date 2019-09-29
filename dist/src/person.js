"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(lastName, firstName, birthday) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthday = birthday;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    getAgeInYear() {
        const birthday = new Date(Date.parse(this.birthday));
        const now = new Date(Date.now());
        const age = now.getFullYear() - birthday.getFullYear();
        return age;
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map