export class Person {
    public lastName: string;
    public firstName: string;
    public birthday: string;

    constructor(lastName: string, firstName: string, birthday: string) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthday = birthday;
    }

    public getFullName(): string {
        return this.firstName + " " + this.lastName;
    }

    public getAgeInYear(): number {
        const birthday: Date = new Date(Date.parse(this.birthday));
        const now: Date = new Date(Date.now());
        const age: number = now.getFullYear() - birthday.getFullYear();
        return age;
    }
}