import { Person } from "./../src/person";

function hasLengthOfTwo(value: string) {
    return value.length === 2;
}

function getCurrentDatePast(numberOfYearsInThePast: number) {
    const dateNow = new Date();
    let month: string = dateNow.getMonth().toString();
    let day: string = dateNow.getDate().toString();

    month = (hasLengthOfTwo(month) ? month : "0" + month);
    day = (hasLengthOfTwo(day) ? day : "0" + day);

    const yearMonthDay = {
        day: `${day}`,
        month: `${month}`,
        year: dateNow.getFullYear() - numberOfYearsInThePast
    };
    return yearMonthDay;
}

test("should be able to create a person", () => {
    const person = new Person("Müller", "Peter", "");
    expect(person.lastName).toBe("Müller");
    expect(person.firstName).toBe("Peter");
});

test("should return full name of person", () => {
    const person = new Person("Müller", "Peter", "");
    expect(person.getFullName()).toBe("Peter Müller");
});

test("should correctly calc the age of a person", () => {
    const customDate = getCurrentDatePast(23);
    const person = new Person("Müller", "Peter", `${customDate.year}-${customDate.month}-${customDate.day}`);
    expect(person.getAgeInYear()).toBe(23);
});