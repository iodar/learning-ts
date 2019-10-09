import { Person } from "./person";

export class Student extends Person {
    public studentNumber: string;
    constructor(firstName: string, lastName: string, birthday: string, studentNumber: string) {
        super(lastName, firstName, birthday);
        this.studentNumber = studentNumber;
    }
}