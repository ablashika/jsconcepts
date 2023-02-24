function mergeSort(array) {
    if ( array.length< 2)   return array;

    //splitting array into two
let middleElem = Math.floor(array.length/2);
let firstArray = array.slice(0, middleElem);
let secondArray = array.slice(middleElem);
return merge(mergeSort(firstArray), mergeSort(secondArray))

}

function merge(arrayOne,arrayTwo){

   
    let result = [];
    //comparing the two array and sorting them
    while(arrayOne.length && arrayTwo.length){
        let minElem;
        if(arrayOne[0] < arrayTwo[0]) minElem = arrayOne.shift()

         else  minElem = arrayTwo.shift()
        
      result.push(minElem)  

    }

     //merging the arrays
    if(arrayOne.length) result = result.concat(arrayOne)
    else   result = result.concat(arrayTwo)
    
    return result
}

console.log(mergeSort([23,1,4,6,9,7,5,8,2,11,19,3]))