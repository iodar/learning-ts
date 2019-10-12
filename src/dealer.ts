import { Car } from "./car";

interface IDealer {
    cars: Car[];
}

export class Dealer implements IDealer {
    public cars: Car[];
    constructor(cars: Car[]) {
        this.cars = cars;
    }
}