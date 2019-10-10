export enum Make {
    Audi = "Audi",
    Mercedes = "Mercedes",
    VW = "Volkswagen"
}

export enum Model {
    Kombi = "Kombi",
    Limousine = "Limousine",
    SUV = "SUV",
    Hatchback = "Hatchback"
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

export function getFullCarData(carProps: ICarProperties) {
    return `${carProps.carMake} ${carProps.carModel} mit ${carProps.displacement} cm³ und ${carProps.numberOfCylinders} Zylindern`;
}