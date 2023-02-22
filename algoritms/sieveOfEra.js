// Create an array primes of size n+1 and initialize all its elements to true.
// Set primes[0] and primes[1] to false, as they are not prime numbers.
// For every integer i from 2 to the square root of n, if primes[i] is true, mark all multiples of i (except i itself) as false in the primes array. This is done by looping over all integers j from 2 to n/i and setting primes[i*j] to false.
// Create a new array results to store the prime numbers found.
// Loop over all elements of the primes array and if the value of primes[i] is true, add i to the results array.
// Return the results array.



function sieveOfEra(n) {
  let primes = [];

  //setting all ement to be true
  for (let i = 0; i <= n; i++) {
      primes[i] = true
  }

  //setting 1 and 2 to be false
  primes[0] = false;
  primes[1] = false;



  //all the mutiple  elements as false

  for (let i = 2; i <= Math.sqrt(n); i++) {
      for (let j = 2; j * i <= n; j++) {
          primes[i * j] = false
      }
  }


  //returning the results
  let results = []
  for (let i = 0; i < primes.length; i++) {
      if (primes[i]) {
          results.push(i)
      }
  }
  return results
}

console.log(sieveOfEra(20)); 

