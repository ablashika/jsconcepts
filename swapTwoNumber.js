function swapTwoNumbers(a,b){
     let arr = [b, a]
     let  [swappedA, swappedB] = arr
     console.log(swappedA, swappedB)
     return arr
}


console.log(swapTwoNumbers(3,7))


//checking if a number is prime

function isPrime(n){

    if (n === 2 || n === 3){
       return 'PRIME'
    }
    if (n <= 1 || n % 2 === 0 || n % 3 === 0) {
        return 'NOT PRIME';
    }

    //for optimization skipping all odd numbers
    let sq = Math.sqrt(n)
    for (let i = 3; i <= sq; i += 2){
        if (n  % i === 0){
            return 'NOT PRIME'
        }
    }
    
        return "PRIME"
    

}
console.log(isPrime(6))






















    //    let arr = []
    //     arr.push(a,b)
    //    let result =[]
    //    let first = arr[0];
    //    console.log(first)
    //   let last = arr[arr.length-1]
    //   console.log(last)


    // let arr = [a, b];
    // let first = arr[0];
    // let last = arr[arr.length - 1];
    // arr[0] = last;
    // arr[arr.length - 1] = first;
    // return arr;  