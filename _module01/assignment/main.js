// TODO: Write a program that generates a multiplication table for a given number using a for loop.

//* workFlow
// STEP 1 : Create a JavaScript function called "multiplicationTable" that takes a single argument "num" (an integer) as input.
// STEP 2 : Inside the function, create a for loop that iterates from 1 to 10.
// STEP 3 : Inside the loop, multiply the current iteration number by the input "num" to generate the product.
// STEP 4 : Log the product to the console in the format "num x iteration = product".

//? Answer

function multiplicationTable( num ){                 // STEP 1 : Done
    for(let i = 1 ; i <= 10 ; i++){                  // Step 2 : Done
        let product = num * i ;                      // Step 3 : Done
        console.log(`${num} x ${i} = ${product}`);   // Step 4 : Done
    }
}
multiplicationTable(2);
