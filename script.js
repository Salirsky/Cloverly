'use strict'

let x = 8;

const factorization = function (num) {
  let rem;
  for (j = num; j > 0; j--) { // Внешний цикл, идём по убыванию
  for (i = 1; i < (j + 1); i++) { // Внутренний цикл, идём по нарастанию
  rem = j % i;
 
    if (rem !== 0) {
        //console.log ("j = " + j + " i = " + i + " rem = " + rem);
      if ( i != j ) {
          if ( i != 1 ) {
            console.log ("j = " + j + " i = " + i + " rem = " + rem);
          }
    }
//       else {
//          console.log ("j = " + j + " i = " + i + " rem = " + rem);
//      } 
       
    }
//     else {
//          console.log ("j = " + j + " i = " + i + " rem = " + rem);
//    } 
 
    }   
}  
}



 factorization(x);  
