Fizzbuzz = function() {

    this.isDivisibleByThree = function(num) {

        return this._isDivisibleBy(num, 3)

    };

    this.isDivisibleByFive = function(num) {

        return this._isDivisibleBy(num, 5)

    };

    this._isDivisibleBy = function(num, arg) {

        if (num % arg === 0) return true
        else return false
        

    };
    
    this.play = function(num) {
        if (this.isDivisibleByThree(num)) return 'Fizz'
        if (this.isDivisibleByFive(num)) return 'Buzz'
        else return num
        
    };

};