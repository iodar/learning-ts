export enum Make {
    Audi, Marcedes, VW
}

export enum Model {
    Kombi, Limousine, SUV, Hatchback
}

interface ICarProperties {
    numberOfCylinders: number;
    displacement: number;
    carMake: Make;
    carModel: Model;
    getDisplacementPerCylinder(): number;
}

export class Car implements ICarProperties {
    public displacement: number;
    public numberOfCylinders: number;
    public carMake: Make;
    public carModel: Model;
    constructor(noCylinders: number, displacement: number, carMake: Make, carModel: Model) {
        this.carMake = carMake;
        this.carModel = carModel;
        this.displacement = displacement;
        this.numberOfCylinders = noCylinders;
    }
    public getDisplacementPerCylinder(): number {
        return (this.displacement / this.numberOfCylinders);
    }
}