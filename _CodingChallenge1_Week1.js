function challenge1(num) {
    if (num > 0 && num <= 1000) {
        if (num % 3 === 0 && num % 5 === 0) {
            return "Fizz buzz";
        } else if (num % 5 === 0) {
            return "Buzz";
        } else if (num % 3 === 0) {
            return "Fizz";
        } 
    }else
        return "Input: A number as an integer";

}


let chall = 0;
