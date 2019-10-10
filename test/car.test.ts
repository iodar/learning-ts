import { Car, Make, Model } from "../src/car";

test("should be able to create a car", () => {
    const actualCar = new Car(8, 4999, Make.Audi, Model.Kombi);
    expect(actualCar).toMatchObject({
        carMake: Make.Audi,
        carModel: Model.Kombi,
        displacement: 4999,
        numberOfCylinders: 8
    });
});

test("should implement a method that calcs the displacement per cylinder", () => {
    const actualCar = new Car(4, 2000, Make.Audi, Model.Limousine);
    expect(actualCar.getDisplacementPerCylinder()).toBe(500);
});