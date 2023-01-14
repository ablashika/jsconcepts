function reverseWords(string) {

    let wordsArray = string.split(" ")
    let reverseWordsArr = [ ]
    console.log(wordsArray)


    //looping through each words we will use forEach()
    wordsArray.forEach(word => {
        // reverse each words looping through backwards
         let wordsRevesed = ' '
        for (let i = word.length - 1; i >= 0; i--){
            wordsRevesed += word[i]
        }
        
         reverseWordsArr = [  ...reverseWordsArr,wordsRevesed]
    });

    return reverseWordsArr.join("")  
}


console.log(reverseWords("Amaa has a car"))


//you can use this js methods to do that as well

const reverseW = (str) => {
    //.split("") split the string inti an array so we use the map() to loop through
    let reverseWordsArray = str.split(" ").reverse(" ").join(" ")

    return  reverseWordsArray}

console.log(reverseW("May Bless You"))

//Harmless Ransome Code