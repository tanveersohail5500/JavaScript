

let Numbers = prompt ( "Write Your Marks Here (0-100)" );
let Grade;
   if (Numbers  >= 80 && Numbers <= 100) {
     Grade= "A-1";
     document.write (" According To Your Marks, Your grade is, : A-1");
} else if (Numbers >= 70 && Numbers <=79 ) {
    Grade = "A";
    document.write (" According To Your Marks, Your grade is, : A");
} else if (Numbers >= 60 && Numbers <=69) {
    Grade = "B";
    document.write (" According To Your Marks, Your grade is, : B");
} else if (Numbers >= 50 && Numbers <=59) {
       Grade = "C";
        document.write ("According To Your Marks, Your grade is, : C");
    } else if (Numbers >= 40 && Numbers <= 49) {
        Grade = "D" 
        document.write (" According To Your Marks, Your grade is, : D");
    } 
    
console.log("According To Your Marks, Your grade is, : ",Grade); 
