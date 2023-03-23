// TODO: Write a program that generates a multiplication table for a given number using a for loop.

//* workFlow
// STEP 1 : Create a JavaScript function called "multiplicationTable" that takes a single argument "num" (an integer) as input.
// STEP 2 : Inside the function, create a for loop that iterates from 1 to 10.
// STEP 3 : Inside the loop, multiply the current iteration number by the input "num" to generate the product.
// STEP 4 : Log the product to the console in the format "num x iteration = product".
// STEP 5 : Test the function with different input numbers to generate multiplication tables.

// * Some other modification were made to make the project more beautiful

//? Answer

function multiplicationTable( num ){                     // STEP 1 : Done
    console.log(`multificationTable\(${num}\)`);  //* loging title of the table in console 
    for(let i = 1 ; i <= 10 ; i++){                      // Step 2 : Done
        let product = num * i ;                          // Step 3 : Done
        console.log(`${num}  x  ${i}  = ${product}`);    // Step 4 : Done
    }
    console.log("");     //* loging an empty line to give line break between two multipication table in console
}
multiplicationTable(2);                                  // STEP 5 : Done
multiplicationTable(3);                                  // STEP 5 : Done
multiplicationTable(4);                                  // STEP 5 : Done
multiplicationTable(9);                                  // STEP 5 : Done

//! there are some limitation in this version of code..You must invoke the function with number as arguments.Otherwise, you may not get the expected result.....