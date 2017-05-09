describe('Fizzbuzz',function() {

    var fizzbuzz;

    describe('knows when a number is',function() {

       it('divisible by 3', function() {

           fizzbuzz = new Fizzbuzz();
           expect(fizzbuzz.isDivisibleByThree(6)).toBe(true); 

       });

       it('divisible by 5', function() {
    
            fizzbuzz = new Fizzbuzz();
            expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);        

       });

       it('NOT divisible by 3',function(){

           fizzbuzz = new Fizzbuzz();
           expect(fizzbuzz.isDivisibleByThree(10)).toBe(false);
       
       });

       it('NOT divisible by 5',function(){

           fizzbuzz = new Fizzbuzz();
           expect(fizzbuzz.isDivisibleByFive(17)).toBe(false);

       });

    });

});