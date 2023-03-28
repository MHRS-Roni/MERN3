//! install better commnent extention for better understandiing the comments

//! search Coding challenge #number for specific code challenge
//! used carly braces to make sure that varriables oƒ one sollution don't interfere with other sollutions varriable..As varriable declare with let has block scope....And to make every challenge solution a block so that you can collapse code block to navigate through the code easily

//! Solution which is complex have simple version but i have try both ONLY FOR PRATICE PURPOSE

{//TODO: Coding challenge #1. Print numbers from 1 to 10
  //? LOGIC : doing same thing multiple time can be done with loop.There are 3 types of loop for general purpose. "for Loop","while loop","do...while loop"
  //STEP 01: declare a variable num, initilaized with 1
  //STEP 02: create a loop and iterate it as long as num <= 10
  //STEP 03: in the loop log the current num then  increment the num


  // {//* Solution 01: with for loop
  //   console.log('challenge #1: with for loop');
  //   for (let num = 1; num <= 10; num++) {
  //     console.log(num);
  //   }
  // } //! end solution 01


  // {//* Solution 02: with while loop
  //   console.log('challenge #1: with while loop');
  //   let num = 1;
  //   while (num <= 10) {
  //     console.log(num++);
  //   }
  // } //! end solution 02


  // {//* Solution 03: with do...while loop
  //   console.log('challenge #1: with do while loop');
  //   let num = 1;
  //   do {
  //     console.log(num++);
  //   } while (num <= 10);
  // } //! end solution 03


  // {//* Solution 04: with recursive function
  //     console.log("challenge #1: with recursive function");
  //     let num = 1;
  //     const challenge01 = num => {
  //         console.log(num);
  //         num < 10 ? challenge01(num + 1) : {};
  //     }
  //     challenge01(num);
  // }//! end solution 04


} //! ----------- end of Coding challenge #1 --------------------

{//TODO: Coding challenge #2. Print the odd numbers less than 100
  //? LOGIC 01: you can get all odd number by adding 2 with 1 for multiple time

  //? LOGIC 02: if a number devided by 2 remind 1 then the number is odd. You can get reminder with modulas(%) operator. You can incriment the number and check if number is odd,if it is odd you can log the number in console

  {//! ---------------- Solution with LOGIC 01 -------------------
    //STEP 01: create a variable num initialized with 1
    //STEP 02: create a loop and iterate it as long as num < 100
    //STEP 03: add 2 to the num in every iteration


    // {//* Solution 01: with for loop
    //   console.log("Challenge #2 LOGIC 01 => Solution 01: With for loop")
    //   for(let num = 1; num < 100; num += 2){
    //     console.log(num)
    //   }
    // }//! end Solution 01


    // {//* Solution 02: with while loop
    //     console.log("Challenge #2 LOGIC 01 => Solution 02: With while loop")
    //     let num = 1
    //     while(num < 100){
    //         console.log(num);
    //         num += 2;
    //     }
    // }//! end Solution 02


    // {//* Solution 03: with do...while loop
    //     console.log("Challenge #2 LOGIC 01 => Solution 03: With do...while loop");
    //     let num = 1;
    //     do{
    //         console.log(num);
    //         num += 2;
    //     }while(num < 100)
    // }//! end Solution 03


    // {//* Solution 04: with LOGIC 01 recursive function
    //     console.log("Challenge #2 LOGIC 01 => Solution 04: with recursive function")
    //     let num = 1;
    //     const challenge02L1 = num => {
    //         console.log(num);
    //         (num  < 100 - 2) ? challenge02L1(num + 2) : {};
    //     }
    //     challenge02L1(num);
    // }//! end Solution 04


  } //! -------------- end Solution with LOGIC 01----------------

  {//! ---------------- Solution with LOGIC 02 -------------------
    //STEP 01: create a variable num and incriment it untill 99
    //STEP 02: check num between every incriment for odd
    //STEP 03: if odd log the num in console


    // {//* Solution 01: with for loop
    //   console.log('Challenge #2 LOGIC 02 => Solution 01: With for loop');
    //   for (let num = 1; num < 100; num++) {
    //     num % 2 ? console.log(num) : {}; // if num % 2 evaluated to  1 then it is consider as true and if num % 2 evaluated to 0, it is consider as false
    //   }
    // } //! end Solution 01


    // {//* Solution 02: with while loop
    //     console.log("Challenge #2 LOGIC 02 => Solution 02: with while loop");
    //     let num = 1;
    //     while(num < 100){
    //         (num % 2) ? console.log(num) : {};
    //         num++;
    //     }
    // }//! end Solution 02


    // {//* Solution 03: with do...while loop
    //     console.log("Challenge #2 LOGIC 02 => Solution 03: with do...while loop")
    //     let num = 1;
    //     do{
    //         (num < 100) ? console.log(num) : {};
    //         num++            
    //     }while(num < 100);
    // }//! end Solution 03


    // {//* Solution 04: with recursive function
    //     console.log("Challenge #3 LOGIC 02 => Solution 04: with recursive function")
    //     let num = 1;
    //     const challenge02L2 = num => {
    //         (num % 2) ? console.log(num) : {};
    //         (num < 100) ? challenge02L2(num + 1) : {};
    //     }
    //     challenge02L2(num);
    // }//! end Solution 04


  } //! -------------- end Solution with LOGIC 02 -------------------

} //! ---------------end Coding Challenge #2 -------------------

{//TODO: Coding challenge #3. Print the multiplication table with 7
//? LOGIC : doing same thing multiple time with loop
//STEP 01: create a loop and iterate it as long as i <= 10
//STEP 02: in every iteration log `7 * ${i} = ${7 * i}`
//STEP 03: incriment i

// {//* Solution 01: with for loop
//     console.log("Challenge #3: with for loop");
//     for(let i = 1; i <= 10; i++){
//         console.log("7 * "+ i +" = "+ 7*i );
//     }
// }//! end Solution 01


// {//* Solution 02: with for loop and template literal
//     console.log("Challenge #3: with for loop and template literal ")
//     for(let i = 1; i <= 10; i++){
//         console.log(`7 * ${i} = ${7 * i}`);
//     }
// }//! end Solution 02


// {//* Solution 03: with while loop
//     console.log("Challenge #3: with while loop")
//     let i = 1;
//     while(i <= 10){
//         console.log(`7 * ${i} = ${7 * i++}`);
//     }
// }//! end Solution 03


// {//* Solutuion 04: with do...while
//     console.log("Challenge #3: with do...while loop")
//     let i = 1;
//     do{
//        console.log(`7 * ${i} = ${7 * i++}`);
//     }
//     while(i <= 10)
// }//! end Solution 04


// {//* Solution 05: with recursive function
//     console.log("Challenge #3: with recursive function");
//     let i = 1;
//     const challenge03 = () =>{
//         console.log(`7 * ${i} = ${7 * i}`);
//         i < 10 ? challenge03(i+1) : {};
//     }
//     challenge03();
// }//! end Solution 05
    

}//! ---------------end Coding Challenge #3 -------------------

{//TODO: Coding challenge #4. Print all the multiplication tables with numbers from 1 to 10
//? LOGIC 01 : Nested loop.One loop for creating multiplication table and another for generating multiplication table for 1 to 10
//STEP 01: create a loop and iterate it as long as i <= 10 .
//STEP 02: in this loop create another loop and iterate it as long as j <= 10;
//STEP 03: in nested loop log (i +" * "+ j +" = "+ i*j) in console

//? LOGIC 02: Make a loop that increment it's counter after 10 iteration 
//* check Solution 17 - 19


// {//* Solution 01: with for and nested for loop
//     console.log("Challenge 04: with for and nested for loop");
//     for(let i = 1; i <= 10; i++){
//         console.log("Multiplication Table \" "+ i +" \"")
//          for(let j =1; j <= 10; j++){
//             console.log(i +" * "+ j +" = "+ i*j);
//          }
//         console.log("");
//     }
// }//! end Solution 01


// {//* Solution 02: with for and nested while loop
//     console.log("Challenge 04: with for and nested while loop");
//     for(let i = 1; i <= 10; i++){
//         let j = 1;
//         console.log("Multiplication Table "+ i )
//         while(j <= 10){
//             console.log(i +" * "+ j +" = "+ i*j++);
//         }
//         console.log('');
//     }
// }//! end Solution 02


// {//* Solution 03: with for and nested do...while loop
//     console.log("Challenge 04: with for and nested do...while loop");
//     for(let i = 1; i <= 10; i++){
//         console.log("Multiplication Table "+ i)
//         j = 1;
//         do{
//             console.log(i +" * "+ j +" = "+ i*j++)
//         }while(j <= 10);
//         console.log("");
//     }
// }//! end Solution 03


// {//* Solution 04: with for loop and recursive function
//     console.log("Challenge 04: with for loop and recursive function")
//     for(let i = 1; i <= 10; i++){
//         console.log("Multiplication Table "+ i)
//         let j = 1;
//         const challenge04FR = (i, j) => {
//             console.log(i +" * "+ j +" = "+ i*j);
//             j < 10 ? challenge04FR(i, j+1) : {};
//         }
//         challenge04FR(i, j);

//         console.log("");
//     }
// }//! end Solution 04


// {//* Solution 05: with while and nested for loop
//     console.log("Challenge 04: with while and nested for loop")
//     let i = 1;
//     while(i <= 10){
//         console.log("Multiplication Table "+ i)
//         for(let j = 1; j <= 10; j++){
//             console.log(i +" * "+ j + " = "+ i*j)
//         }
//         console.log("");
//         i++;
//     }
// }//! end Solution 05


// {//* Solution 06: with while and nested while loop
//     console.log("Challenge 04: with while and nested while")
//     let i = 1 ;
//     while(i <= 10){
//         let j = 1;
//     console.log("Multiplication Table "+ i);
//     while(j <= 10){
//             console.log(i +" * "+ j +" = "+ i*j++);
//         }
//         i++;
//         console.log("");
//     }
// }//! end Solution 06


// {//* Solution 07: with while and nested do...while loop
//     console.log("Challenge 04: with while and nested do...while loop")
//     let i = 1;
//     while(i <= 10){
//         let j = 1;
//         console.log("Multipllication Table "+ i);
//         do{
//             console.log(i +' * '+ j +" = "+ i*j++);
//         }while(j <= 10);
//         console.log("")
//         i++;
//     }
// }//! end Solution 07


// {//* Solution 08: with while and recursive function
//   console.log("Challenge 04: with while and recursive function")
//   let i = 1;
//   while(i <= 10){
//     console.log("Multiplication Table "+ i);
//     let j = 1;
//     const challenge04WR = j =>{
//       console.log(i +" * "+ j +" = "+ i*j)
//       j < 10 ? challenge04WR(j+1) : {};
//     }
//     challenge04WR(j);
//     console.log("");
//     i++;
//   }
// }//! end Solution 08


// {//* Solution 09: with do...while and nested for loop
//   console.log("Challenge 04: with do...while and nested for loop")
//   let i = 1;
//   do{
//     console.log("Multiplication table "+ i);
//     for(let j = 1; j <= 10; j++){
//       console.log(i +" * "+ j + " = "+ i*j);
//     }
//     console.log("");
//     i++;
//   }while(i <= 10)

// }//! end Solution 09


// {//* Solution 10: with do...while and nested while loop
//   console.log("Challenge 04: with do...while and nested while loop");
//   let i = 1;
//   do{
//     console.log("Multiplication Table "+ i);
//     let j = 1;
//     while(j <= 10){
//       console.log(i +" * "+ j +" = "+ i*j++);
//     }
//     console.log("");
//     i++;
//   }while(i <= 10)
// }//! end Solution 11


// {//* Solution 11: with do...while and nested do...while loop
//   console.log("Challenge 04: with do...while and nested do...while loop")
//   let i = 1;
//   do{
//     console.log("Multiplication Table "+ i);
//     let j = 1;
//     do{
//       console.log(i +" * "+ j +" = "+ i*j++)
//     }while(j <= 10);
//     console.log();
//     i++;
//   }while(i <= 10)
// }//! end Solution 11


// {//* Solution 12: with do...while and recursive function
//   console.log("Challenge 04: with do...while and recursive function")
//   let i = 1;
//   do{
//     console.log("Multiplication Table "+ i);
//     let j = 1;
//     const challenge04DR = () =>{
//       console.log(i +" * "+ j +" = "+ i*j++)
//       j <= 10 ? challenge04DR() : {};
//     }
//     challenge04DR()
//     console.log()
//     i++;
//   }while(i <= 10)
// }//! end Solution 12


// {//* Solution 13: with recursive function and for loop
//   console.log("Challenge 04: with recursive function and for loop")
//   let start = 1;
//   const challenge04RF = start =>{
//     console.log("Multiplication Table "+ start);
//     for(let n = 1; n <=10; n++){
//       console.log(start +" * "+ n +" = "+ start*n)
//     }
//     console.log();
//     start < 10 ? challenge04RF(start + 1) : {};
//   }
//   challenge04RF(start);
// }//! end Solution 13


// {//* Solution 14: with recursive function and while loop 
//   console.log("Challenge 04: with recursive function and while loop")
//   let tableNumber = 1;
//   const challenge04RW = tableNumber =>{
//     console.log("Multiplication Table "+ tableNumber)
//     let rowNumber = 1;
//     while(rowNumber <= 10){
//       console.log(tableNumber +" * "+ rowNumber +" = "+ tableNumber *rowNumber++);
//     }
//     console.log();
//     tableNumber < 10 ? challenge04RW(tableNumber + 1) : {};
//   }
//   challenge04RW(tableNumber);
// }//! end Solution 14


// {//* Solution 15: with recursive function and do...while loop
//   console.log("Challenge 04: with recursive Table and do...while")
//   let i = 1;
//   const challenge04RD = i =>{
//     let j = 1;
//     console.log("Multiplication Table "+ i);
//     do{
//       console.log(i +" * "+ j +" = "+ i*j++);
//     }while(j <= 10)
//     console.log("");
//     i < 10 ? challenge04RD(i + 1) : {};
//   }
//   challenge04RD(i);
// }//! end Solution 15


// {//* Solution 16: with recursive function and nested recursive function
//   console.log("Challenge 04: with recursive function and nested recursive function");
//   let i = 1;
//   const challenge04RR1 = i =>{
//     let j = 1;
//     console.log("Multiplication Table "+ i)
//     const challenge04RR2 = j =>{
//       console.log(i +" * "+ j +" = "+ i*j)
//       j < 10 ? challenge04RR2(j + 1) : {}
//     }
//     challenge04RR2(j);
//     console.log("");
//     i < 10 ? challenge04RR1(i + 1) : {}
//   }
//   challenge04RR1(1);
// }//! end Solution 16


// {//* Solution 17: with only one for loop
//   console.log("Challenge 04: with only one for loop")
//   let tableStart = 1;
//   let tableEnd = 10;
//   let row = 1;
//   for(tableStart; tableStart <= tableEnd; /*empty*/ ){
//   row == 1 ? console.log("Multiplication Table "+ tableStart) : {} ;
//   row > 10 ? (row = 1,tableStart++,console.log(/*empty*/)): console.log(tableStart +" * "+ row +" = "+ tableStart*row++);
//   }
// }//! end Solution 17


// {//* Solution 18: with only one while loop
//   console.log("Challenge 04: with only one while loop")
//   let table = 1, row = 1;
//   while(table <= 10){
//     row == 1 ? console.log("Multiplication Table "+ table) : {};
//     row > 10 ? (row = 1, table++, console.log()) : console.log(table +" * "+ row +" = "+ table*row++);
//   }
// }


// {//* Solution 19: with only do...while loop
//   console.log("Challenge 04: with only do...while loop")
//   let table = 1 ,row =1;
//   do{
//     row == 1 ? console.log("Multiplication Table "+ table) : {};
//     row > 10 ? (row = 1, table++, console.log()) : console.log(table +" * "+ row +" = "+ table*row++);
//   }while(table <= 10)
// }//! end Solution 19


// {//* Solution 20: with only one recursive function
//   console.log("Challenge 04: with only one recursive function")
//   let table = 1, row = 1;
//   const challenge04OR = (table, row) =>{
//     row == 1 ? console.log("Multiplication Table "+ table) : {};
//     console.log(table +" * "+ row +" = "+ table*row)
//     table <= 10 && row < 10 ?
//         (challenge04OR(table,row + 1)) :
//         (table < 10) ? (console.log(),challenge04OR(table + 1,row = 1)) : {}
//   }
//   challenge04OR(table,row);
// }//! end Solution 20


}//! ---------------end Coding Challenge #4 -------------------

{//TODO: Coding challenge #5. Calculate the sum of numbers from 1 to 10
//? LOGIC : adding one variable's value in another variable for multiple time. need to use += operator or "a = a + b" like syntex in a loop
//STEP 01: create a variable to store sum
//Step 02: create a loop to iterate 1 to 10
//Step 03: add iterator counter in the sum
//Step 04: after the loop log sum in console


// {//* Solution 01: with for loop
//   console.log("Challenge 05: with for loop")
//   let sum = 0;
//   for(let i = 1; i <= 10; i++){
//     sum += i;
//   }
//   console.log("sum : "+ sum);
// }//! end Solution 01


// {//* Solution 02: with while loop
//   console.log("Challenge 05: with while loop")
//   let i = 1, sum = 0;
//   while(i <= 10){
//     sum = sum + i++;
//   }
//   console.log("sum : "+ sum);
// }//!  end Solution 02


// {//* Solution 03: with do...while loop
//   console.log("Challenge 05: with do...while loop");
//   let i = 1, sum = 0;
//   do{
//     sum += i++;
//   }while(i <= 10);
//   console.log("sum : "+ sum);
// }//! end Solution 04


// {//* Solution 04: with recursive function
//   console.log("Challenge 05: with recursive function")
//   let i = 1, sum = 0;
//   const challenge05 = i =>{
//     sum+=i;
//     i < 10 ? challenge05(i + 1) : {};
//   }
//   challenge05(i);
//   console.log("sum : "+ sum);
// }


}//! ---------------end Coding Challenge #5 -------------------

{//TODO: Coding challenge #6. Calculate 10!
//? LOGIC : multiply 1 to till the number and store in a single variable. Use "a *= b" or "a = a * b" in a loop
//STEP 01: create a variable to store prod
//STEP 02: create a loop to iterate 1 to prod number(10)
//Step 03: multiply itarator with prod and assign in prod
//Step 04: after the loop log prod in console


// {//* Solution 01: with for loop
//   console.log("Challenge 06: with for loop")
//   let prod = 1;
//   for(let i = 1; i <= 10; i++){
//     prod *= i;
//   }
//   console.log("10! = "+ prod)
// }//! end Solution 01


// {//* Solution 02: with while loop
//   console.log("Challenge 06: with while loop")
//   let prod = 1;
//   let i = 1
//   while(i <=10){
//     prod *= i;
//     i++;
//   }
//   console.log("10! = "+ prod)
// }//! end Solution 02


// {//* Solution 03: with do...while loop
//   console.log("Challenge 06: with do...while loop")
//   let prod = 1;
//   let i = 1
//   do{
//     prod *= i;
//     i++;
//   } while(i <=10);
//   console.log("10! = "+ prod)

// }//! end Solution 03


// {//* Solution 04: with  recursive function
//   console.log("Challenge 06: with recursive function")
//   let prod = 1;
//   let i = 1;
//   const challenge06 = () =>{
//     prod *= i++;
//     i <= 10 ? challenge06() : {}
//   }
//   challenge06();
//   console.log("10! : "+ prod);
// }//! end Solution 04


}//! --------------end Coding Challenge #6 --------------------

{//TODO: Coding challenge #7. Calculate the sum of odd numbers greater than 10 and less than 30
//? LOGIC 01 : Iterate 10 to 30 and add the number to sum if it's odd
//STEP 01: create a variable sum to store the sum
//STEP 02: iterate 10 to 30
//STEP 03: check for odd number
//STEP 04: if it is odd add in the sum
//STEP 05: after the loop log sum in console

// {//* Solution 01: with LOGIC 01
//   console.log("Challenge 07: with LOGIC 01")
//   let sum = 0;
//   for(let i = 10; i <= 30; i++){
//     i % 2 ? sum += i : {} 
//   }
//   console.log(sum)
// }//! end Solution 01

//! ----------------end LOGIC 01 -----------------
//? LOGIC 02 : iterate from 11 to 30 where every iteration add 2 to the iterator counter. Add iterator value in the sum
//STEP 01: create a variable sum to store sum
//STEP 02: create a loop as described in LOGIC 02
//STEP 03: add iterator in sum
//STEP 04: after loop log sum in console

// {//* Solution 02: with LOGIC 02
//   console.log("Challenge 07: with LOGIC 02")
//   let sum = 0;
//   for(let i = 11; i <= 30; i+=2){
//     sum += i;
//   }
//   console.log(sum);
// }//! end Solution 02

//! ------------end LOGIC 02 --------------


}//! -------------end Coding Challenge #7 ---------------------

{//TODO: Coding challenge #8. Create a function that will convert from Celsius to Fahrenheit
//? LOGIC  01: Function
//STEP 01: create a function that take a parameter celsius
//STEP 02: in function convert celsius to parenheit using expession
//STEP 03: return the value of expression
//STEP 04: call the function in console.log with celsius arguments


// {//* Solution 01: with function by function declaretion
//   console.log("Challenge 08: with function by function declaretion")
//   function challenge08Fun (celcius){
//     return celcius * 1.8 + 32;
//   }
//   console.log(challenge08Fun(20))
// }//! end Solution 01


// {//* Solution 02: with anonymous function assigned in a variable 
//   console.log("Challenge 08: with anonymous function assigned in a variable");
//   const challenge08Ano = function (celcius){
//     return celcius * 1.8 + 32;
//   }
//   console.log(challenge08Ano(20));
// }//! end Solution 02


// {//* Solution 03: with arrow function
//   console.log("Challenge 08: with arrow function")
//   const challenge08Arr = celcius =>celcius * 1.8 + 32;
//   console.log(challenge08Arr(20));
// }//! end Solution 03


// {//* Solution 04: with function constructor
//   console.log("Challenge 08: with function constructor")
//   const challenge08Con = new Function ("celcius"," return celcius * 1.8 +32");
//   console.log(challenge08Con(20));
// }//! end Solution 04


// {//* Solution 05: with method
//   console.log("Challenge 08: with method")
//  const calculator = {
//   celcius : function (celcius){
//     return celcius * 1.8 + 32;
//   }
//  };
//  console.log(calculator.celcius(20));
// }//! end Solution 05


// {//* Solution 06: with Imemediately Invoked Function Expression know as IIFE
//   console.log("Challenge 08: with IIFE")
//   console.log((function(x){
//     return x * 1.8 + 32;
//   })(20))
// }//! end Solution 06


 }//! -----------end Coding Challenge #8 ----------------------


 {//TODO: Coding challenge #9. Create a function that will convert from Fahrenheit to Celcius
//? LOGIC : Creating Function to return the resut and invoking it
//STEP 01 : create a function that take a parameter Fahrenheit
//STEP 02 : make a expression that convert Farenheit to Celcius
//STEP 03 : return the expression result
//STEP 04 : call the function with Farenheit as arguments in console.log


// {//* Solution 01 : with Function declaretion
//   console.log("Challenge 09 : with function declaretion")
//   function challenge09Fun ( f ){
//     return (f - 32) / 1.8;
//   }
//   console.log(challenge09Fun(68))
// }//! end Solution 01



// {//* Solution 02 : with annonymous functon assigned in variable
//   console.log("Challenge 09: with annonymous function assigned in variable")
//   const farhenheit = function (celcius){
//     return (celcius - 32) / 1.8;
//   }
//   console.log(farhenheit(68));
// }//! end Solution 02


// {//* Solution 03 : with arrow function
//   console.log("Challenge 09: with arrow function")
//   const farhenheit = celcius => (celcius - 32) / 1.8
//   console.log(farhenheit(68))
// }//! end Solution 03


// {//* Solution 04: with method
//   console.log("Challenge 09: with method")
//   const calculator = {
//     farhenheit : celcius => (celcius - 32) / 1.8
//   }
//   console.log(calculator.farhenheit(68))
// }//! end Solution 04


// {//* Solution 05: with Function Constructor
//   console.log("Challenge 09: with Function Constructor")
//   const farhenheit = new Function("celcius","return (celcius -32) / 1.8")
//   console.log(farhenheit(68))
// }//! end Solution 05


// {//* Solution 06: with Immediately Invoked Function Expression(IIFE)
//   console.log("Challenge 09: with IIFE")
//   console.log((function (c){
//     return (c -32) / 1.8
//   })(68))
// }//! end Solution 06


}//! ------------ end Coding challenge #9 ---------------------


{//TODO : Coding challenge #10. Calculate the sum oƒ numbers in an array of numbers
//? LOGIC : accessing elelment of array
//? 1. with a general purpose loop (for,while,do...while)
//? 2. with a for...of loop
//? 3. with a for...in loop
//? 4. with a forEach() method
//? 5. with a reduce() method
//STEP 01 : create a function that take a parameter of array
//STEP 02 : access all the element of array using one of described way
//STEP 04 : write a expression that evaluate and assign sum in a variable
//STEP 05 : return the sum
//STEP 06 : create a array and call the function with the array in a console.log method to show the sum


{//* Solution 01 : with general purpose loop
      
      // {//* with for loop
      //   console.log("Challenge 10: with for loop")
      //   const challenge10GF = arr =>{
      //     let sum = 0;
      //     for(let i = 0; i < arr.length; i++){
      //       sum += arr[i];
      //     }
      //     return sum;
      //   }
      //   let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];
      //   console.log("Sum = "+challenge10GF(arr))
      // }//! end

      // {//* with while loop
      //   console.log("Challenge 10: with while loop")
      //   const challenge10GW = arr =>{
      //     let sum = null;
      //     let i = 0;
      //     while(i < arr.length){
      //       sum += arr[i++];
      //     }
      //     return sum
      //   }
      //   let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];
      //   console.log("sum = "+ challenge10GW(arr));
      // }//! end

      // {//* with do...while loop
      //   console.log("Challenge 10: with do...while loop")
      //   const challenge10GD = arr =>{
      //     let sum = null;
      //     let i = 0;
      //     do{
      //       sum += arr[i++];
      //     }while(i < arr.length)
      //     return sum;
      //   }
      //   let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];
      //   console.log("sum = "+ challenge10GD(arr));
      // }//! end

      // {//* with recursive function
      //   console.log("Challenge 10: with recursive function")
      //   let sum = 0, i = 0;
      //   const challenge10GR = (arr , i) => i < arr.length ? ((sum += arr[i]), challenge10GR(arr, i + 1)) : sum;
      //   let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95]
      //   console.log("sum = "+ challenge10GR(arr))
      // }//! end

}//! enď Solution 01


// {//* Solution 02: with for...of loop
//   console.log("Challenge 10: with for...of loop")
//   const challenge10FO = arr =>{
//     let sum = null;
//     for(let el of arr){
//       sum += el;
//     }
//     return sum;
//   }
//   let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95]
//   console.log("Sum = "+ challenge10FO(arr));
// }//! end Solution 02


// {//* Soluution 03: with for...in 
//   console.log("Challenge 10: with for...in loop")
//   let sum = 0;
//   const challenge10FI = arr =>{
//     for(let el in arr){
//       sum += arr[el]
//     }
//     return sum
//   }
//   let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95]
//   console.log("Sum = "+ challenge10FI(arr))
// }//! end Solution 03


// {//* Solution 04: with forEach() method
//   console.log("Challenge 10: with forEach\(\) method")
//   let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95]
//   let sum = 0;
//   arr.forEach(el => sum += el)
//   console.log("Sum = "+ sum)
// }//! end Solution 04


// {//* Solution 05: with reduce() method
//   console.log("Challenge 10: with reduce\(\) method")
//   let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95] 
//   let sum = arr.reduce(((pre, curr)=> pre + curr));
//   console.log("Sum = "+ sum);
// }//! end Solution 05

}