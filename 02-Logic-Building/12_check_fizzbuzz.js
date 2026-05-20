const isFizzBuzz = (num) => {

    if (num % 3 === 0 && num % 5 === 0) {
        return `${num} FizzBuzz`;
    }

    else if (num % 3 === 0) {
        return `${num} Fizz`;
    }

    else if (num % 5 === 0) {
        return `${num} Buzz`;
    }

    else {
        return `${num} is not divisible by 3 or 5`;
    }
};

console.log(isFizzBuzz(15));
console.log(isFizzBuzz(25));
console.log(isFizzBuzz(12));
