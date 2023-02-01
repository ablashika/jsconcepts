function meanMeadianMode(array) {

    return {
        mean: getMean(array),
        median : getMedian(array),
        mode : getMode(array)  
           }    
}



function getMean(array){
    let sum = 0;
    array.forEach(index => {
        sum += index 
    });
    let mean = sum/array.length;
    return mean

}



function getMedian(array){
    //sort items and arranging
    array.sort((a,b)=> a-b);
    let median; 
    if (array.length % 2 !==0) median = array[length/2];

    else {
        let mid1 = array[(array.length/2) - 1]
        console.log("1",mid1)
        let mid2 = array[array.length/2]
        median =( mid1 + mid2 )/ 2
    }
    
    return median
}

console.log(meanMeadianMode([1,2,3,4,5,6,7,8,8,3,2]))

//what number appear most
function getMode(array){

    

 
  
    let modeObject = {};
     array.forEach(num =>{

        if(!modeObject[num]) modeObject[num] = 0;modeObject[num]++
        
       
     })
     console.log("cd", modeObject)
   

      let maxFreq = 0
     let mode = []
    
     for (let num in modeObject){
          
        if(modeObject[num] > maxFreq) {
         mode = [num]
         maxFreq = modeObject[num];
        }
        else if (modeObject[num] === maxFreq)
            mode.push(num)

        console.log(mode)  
     }

     if (mode.length === Object.keys(modeObject).length) {
        mode = []
     }

     return mode

    

}