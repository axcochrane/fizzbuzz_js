describe('Fizzbuzz',function() {

    var fizzbuzz;

    describe('knows when a number is',function() {
    
       beforeEach(function(){

           fizzbuzz = new Fizzbuzz();

       });

       it('divisible by 3', function() {

           expect(fizzbuzz.isDivisibleByThree(6)).toBe(true); 

       });

       it('divisible by 5', function() {
    
            expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);        

       });

       it('NOT divisible by 3',function(){

           expect(fizzbuzz.isDivisibleByThree(10)).toBe(false);
       
       });

       it('NOT divisible by 5',function(){

           expect(fizzbuzz.isDivisibleByFive(17)).toBe(false);

       });

    });

    describe('plays fizzbuzz',function() {
    
       beforeEach(function(){

           fizzbuzz = new Fizzbuzz();

       });

       it('fizz on multiples of 3', function() {

           expect(fizzbuzz.play(9)).toBe('Fizz'); 

       });

       it('buzz on multiples of 5', function(){

            expect(fizzbuzz.play(20)).toBe('Buzz');
           
       });

    });

});