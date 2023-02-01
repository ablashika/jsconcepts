function twoSums(array,sum) {
    let pair = []
    let hashTable =[]
    
    for ( let i = 0; i < array.length; i++){
     let currNumber = array[i];
     let counterpart = sum - currNumber; 
              
   //indexOf - JS method to get index of array element. 
   // Returns -1 if not found
      if (hashTable.indexOf(counterpart) !== -1) 
        {
            pair = [...pair, [counterpart,currNumber]]
        }
      hashTable.push(currNumber)
    }
   
    return pair;   
}

console.log(twoSums([1,2,3,4,5,6,15,80],7))
