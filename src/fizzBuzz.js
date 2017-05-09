Fizzbuzz = function(){
    this.isDivisibleByThree = function(num) {
        if (num % 3 === 0) return true
        else return false
    };

    this.isDivisibleByFive = function(num) {
        return true
    };
};