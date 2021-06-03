import { isEven, IsOdd } from "../utils/math";

describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('visiting each element of the array', () => {
        numbers.forEach((v, i, a) => console.log({ v, i, a }));
    });

    describe('methods that produce a new array', () => {
        it('has filter', () => {
            const evens = numbers.filter(isEven);
            expect(evens).toEqual([2, 4, 6, 8]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        it('has map', () => {
            const doubled = numbers.map(n => n + 2);
            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18])

            const newThing = numbers.filter(n => n < 4).filter(isEven).map(n => n.toString());
            expect(newThing).toEqual(['4', '6']);
        });

    });

    describe('methods that return a single (scalar) value', () => {
        it('testing membership of an array', () => {
            const allEven = numbers.every(isEven);
            expect(allEven).toBe(false);
            const someEven = numbers.some(isEven);
            expect(someEven).toBe(true);
        });

        it('finding the first value that matches a predicate', () => {
            const fizz = numbers.find(n => n % 3 === 0);
            expect(fizz).toBe(3);

            const fizz2 = numbers.filter(n => n % 3 === 0)[0];
            expect(fizz2).toBe(3);
        });

        it('has reduce', () => {
            const total = numbers.reduce((s, n) => s + n);
            expect(total).toBe(45);
        });

        describe('an example', () => {
            it('doing something more real with this', () => {

                interface Vehicle {
                    vin: string;
                    make: string;
                    model: string,
                    mileage: number;
                };
                const vehicles = [
                    { vin: '398398938', make: 'Ford', model: 'Taurus', mileage: 123_100 },
                    { vin: '678967877', make: 'Honda', model: 'Pilot', mileage: 87_000 },
                    { vin: '337873787', make: 'Chevy', model: 'Bolt', mileage: 93_123 },
                    { vin: '377329922', make: 'Dodge', model: 'Ram', mileage: 189_888 }
                ];
                const highMileageVehicles: string[] = vehicles
                    .filter(v => v.mileage >= 100_000)
                    .map(v => '${v.make} ${v.model}');

                expect(highMileageVehicles).toEqual(['Ford Taurus', 'Dodge Ram']);

                const totalHighMileage: number = vehicles
                    .filter(v => v.mileage >= 100_000)
                    .reduce((s: number, n: Vehicle) => s + n.mileage, 0);
                expect(totalHighMileage).toBe(123_100 + 189_888);
            });

        });
    });
});