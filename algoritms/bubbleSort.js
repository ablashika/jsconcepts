function bubbleSort(array){

    for (let i = array.length; i > 0; i--){

        for( let  j = 0; j < i; j ++){
            if (array[j] > array[j + 1]){
                //swappp
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }

    return array



}


console.log(bubbleSort([5,3,8,2,1,4]))



function bubbleSort2(array){
    for (let i = 0; i < array.length; i++){
        
      for (let j =0; j < array.length; j++){
        
    // comparing first index to second index

    

    if (array[j] > array[j+1]){
// swap the the postions if the second index greater
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp
       
    }
           
    console.log(array)

       }
 }

}



console.log(bubbleSort2([1,2,5,6,9,12,8,6,73,3]))