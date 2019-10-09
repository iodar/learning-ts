import { Person } from "../src/person";
import { Student } from "../src/student";

test("should create a person extending a person", () => {
    const actualStudent: Student = new Student("Müller", "Peter", "1987-01-09", "ABC10101");
    expect(actualStudent).toBeInstanceOf(Student);
});

// FIXME: how does casting exactly work in typescript
test.skip("person can get casted into student", () => {
    const actualPerson: Person = new Person("Müller", "Peter", "1967-01-01");
    const actualStudent: Student = actualPerson as Student;
    expect(actualStudent).toMatchObject({
        birthday: "1967-01-01",
        firstName: "Peter",
        lastName: "Müller"
    });
});