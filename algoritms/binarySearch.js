//recursive function

function recursiveFactorial(num){
    if (num === 1){
        return num
    } 
    else 
    {
        
     return num * recursiveFactorial(num - 1 )
        
    }
}

console.log(recursiveFactorial(3))


//binary search using recursive function

function binarySearch (array, num){
   // sorting array
     array = array.sort((a,b) => a - b)
      console.log(array)
    //split the array in half
    let middleNum = Math.floor(array.length/2);
    let middleElem = array[middleNum];

    //when the middle element is the same as the number you're looking for which is our base case
     if (middleElem === num) return true;

     // if the number we're looking for is lesser than the number and the array has more than one element
       else if(middleElem <  num && array.length > 1) {
        //returning the second half of the array from middle to end
        return binarySearch(array.splice(middleNum, array.length),num)

       }
       // if the number is greater
       else if (middleElem > num && array.length >1){
         //returning the first half
        return binarySearch(array.splice(0,middleElem),num )

       }

       else return false

     //



    

}

console.log(binarySearch([23,56,78,40,59,67,53,45,44], 67))