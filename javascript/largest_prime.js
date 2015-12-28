var prime_factors = function (number)  {
    // This function can handle prime numbers up to 9 digits in length
    var factor_list = []; // an array of number's factors
    var vectors = []; // a vector array of exponents of factor list
    var num_2 = number;
    var count = 0; // keeps track of total exponent power of single factor
    while (num_2 % 2 === 0) { // checks to see if number is divisible by 2
        count++; // adds 1 to vector count
        num_2 = num_2 / 2; // divides number/quotient by two
        // if number can no longer be divided by 2, add divisor to factor list
        if (!(num_2 % 2 === 0)) { 
            factor_list[0] = 2;
            vectors.push(count);// adds count to vector array
            count = 0; // resets vector counter
        }
    };
    //loop that runs through odd number integer set to see if any are factors for number
    for (var i = 3; i <= num_2; i+=2)   { 
        while (num_2 % i === 0) {
            count++;
            num_2 = num_2 / i;
            if (!(num_2 % i === 0)) {
                factor_list.push(i);
                vectors.push(count);
                count = 0; // resets vector counter
            }
        }
    };
    greatest_factor = factor_list[(factor_list.length - 1)]
    console.log(greatest_factor);
    
};

prime_factors(600851475143);