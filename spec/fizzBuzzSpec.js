describe('Fizzbuzz',function() {

    var fizzbuzz;

    describe('knows when a number is',function() {

       it('divisible by 3', function() {

           fizzbuzz = new Fizzbuzz();
           expect(fizzbuzz.isDivisibleByThree(6)).toBe(true); 

       });

       it('divisible by 5', function() {
    
            fizzbuzz = new Fizzbuzz();
            expect(fizzbzz.isDivisibleByFive(5)).toBe(true);        

       });

    });

});