function harmlessRansomeNote (noteText, magazineText) {

   let noteArray = noteText.split(' ')
   let magazineArray = magazineText.split(' ')
   let magazineObj = { }
   let foundAllNoteText = true;


  //finding if notetext is in magaziObg
  
   magazineArray.forEach(word => {
    if (!magazineObj[word]) {
        magazineObj[word] = 0;
        magazineObj[word]++;
    };
});
    
    //finding if notetext is in magaziObg
     
       noteArray.forEach(word => {
           if (magazineObj[word]) {
               magazineObj[word]--;
                 if (magazineObj[word] < 0)
                  {
                    foundAllNoteText = false;
                  }
           } 
           else 
           {
            foundAllNoteText = false;
           }

          })

   console.log(foundAllNoteText)
   

return foundAllNoteText  
}


console.log(harmlessRansomeNote("make a call", "make a call here and text there for jj"))