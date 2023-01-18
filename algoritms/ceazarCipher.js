function ceasarCipher (str, num) {

    //when num is more than 25
    num = num % 26
    
    let lowerCaseStr = str.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let newString = "";

    for (let i = 0; i < lowerCaseStr.length; i++){
        let currentletter = lowerCaseStr[i];

        //if currentLetter has a space char ignore the space
        if (currentletter === " "){
            newString += currentletter;
            continue;
        }

        //locating currentletter in alphabet array
          let currentIndex = alphabet.indexOf(currentletter);
        console.log(currentletter)
        console.log(currentIndex)
        
        //shifting the letter to take the position of the newIndex
        let newIndex = currentIndex + num
        console.log(newIndex)

        //if newIndex is more than 25
        if (newIndex > 25) {
            //this will take back the beginning
           newIndex = newIndex - 26
        }
        //if the index are negative num
        if (newIndex < 0) {
            newIndex = newIndex + 26
        }

        //caring for uppercase string 
        if (str[i]=== str[i].toUpperCase()){
            newString += alphabet[newIndex].toUpperCase()
        }

        else newString += alphabet[newIndex]

        console.log(newString)
    }

}

ceasarCipher("ABCD", 2)