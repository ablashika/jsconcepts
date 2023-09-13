function missingNumbers(arr, brr) {
    // Create objects to store frequency of numbers
    const arrObj = {};
    const brrObj = {};

    // Populate the arrObj with frequencies
    for (const num of arr) {
        arrObj[num] = (arrObj[num] || 0) + 1;
    }

    console.log(arrObj)
    // Populate the brrObj with frequencies
    for (const num of brr) {
        brrObj[num] = (brrObj[num] || 0) + 1;
    }

    // Find missing numbers in brr compared to arr
    const result = [];
    for (const num in brrObj) {
        if (!arrObj.hasOwnProperty(num) || arrObj[num] < brrObj[num]) {
            result.push(parseInt(num));
        }
    }

    // Sort the result in ascending order
    result.sort((a, b) => a - b);

    return result;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const brr = [1, 2, 3, 4, 5, 6, 7];
const missing = missingNumbers(arr, brr);
console.log(missing); // Output: [6, 7]
