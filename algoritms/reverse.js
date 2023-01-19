// function reverseArray (str) {
//     let wordArry = str.split(" ");
//     let newWordn = []

//     console.log(wordArry)

   

//     wordArry.forEach(word => {
//         let newWord = ' ';
//           for (let i = word.length - 1; i >=0;i--){
//             newWord += word[i];
//     }
//           newWordn = [...newWordn, newWord]
    
        
//     });
//     console.log(newWordn)

//   return newWordn.join('')

// }

// console.log( reverseArray("mandem hey"))



//using the in place nethod to reverse an rray
function reverseArrayInPlace (array) {
    //looping through halfo the array
    for (let i = 0; i < array.length/2;i++){
        let tempVar = array[i];
     
        //swapping the items
       array[i] = array[array.length - 1 - i ];
        array[array.length - 1 - i ] = tempVar;    
        
       console.log(array[array.length - 1 - i])
    }

return array
    
}

console.log(reverseArrayInPlace([1,3,9,6,8,7]))

//method 2

function reverseArray (arr) {
    let newArray = []
    for (let i = arr.length -1; i >= 0; i--) {
       newArray = [...newArray,arr[i]]
        
    }
    
    return newArray;
}
console.log(reverseArray([1,3,9,6,8,7]))