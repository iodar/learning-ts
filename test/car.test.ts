import { Car, getFullCarData, Make, Model } from "../src/car";

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
    const actualCar: Car = new Car(4, 2000, Make.Audi, Model.Limousine);
    expect(actualCar.getDisplacementPerCylinder()).toBe(500);
});

describe("method that uses ICarProperties", () => {
    test("should handle annymous object if internal structure fits", () => {
        const carLikeObject = {
            carMake: Make.Audi,
            carModel: Model.SUV,
            displacement: 2978,
            numberOfCylinders: 6,
            getDisplacementPerCylinder(): number {
                return 2978 / 6;
            }
        };
        const fullCarData = getFullCarData(carLikeObject);
        expect(fullCarData).toBe("Audi SUV mit 2978 cm³ und 6 Zylindern");
    });
    test("should handle real car object aswell", () => {
        const actualCar = new Car(12, 6289, Make.Mercedes, Model.Limousine);
        const fullCarData = getFullCarData(actualCar);
        expect(fullCarData).toBe(`${actualCar.carMake} ${actualCar.carModel} mit ${actualCar.displacement} cm³ und ${actualCar.numberOfCylinders} Zylindern`);
    });
});