
describe('array methods', () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('visiting each element of an array', () => {
        // just go through each one and let me have a look at it.
        numbers.forEach((v, i, a) => console.log({ v, i, a }));
    });

    describe('methods that produce a new array', () => {

        it('has filter', () => {
            const evens = numbers.filter(isEven);
            expect(evens).toEqual([2, 4, 6, 8]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

            function isEven(e: number): boolean {
                return e % 2 === 0;
            }
        });

    });


});