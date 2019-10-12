import { Car, Make, Model } from "../src/car";
import { Dealer } from "../src/dealer";

test('should be able to add multiple cars', () => {
    const car: Car = new Car(8, 4000, Make.Audi, Model.Hatchback);
    const cars: Car[] = [car, car, car];
    const carDealer: Dealer = new Dealer(cars);
    expect(carDealer.cars).toEqual([car, car, car]);
});
