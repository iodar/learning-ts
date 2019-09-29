export class Person {
    private lastName: string;
    private firstName: string;

    constructor(lastName: string, firstName: string) {
        this.lastName = lastName;
        this.firstName = firstName;
    }

    public getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}