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

{//TODO: Print all the multiplication tables with numbers from 1 to 10
//? LOGIC : Nested loop.One loop for creating multiplication table and another for generating multiplication table for 1 to 10
//STEP 01: create a loop and iterate it as long as i <= 10 .
//STEP 02: in this loop create another loop and iterate it as long as j <= 10;
//STEP 03: in nested loop log (i +" * "+ j +" = "+ i*j) in console


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


{//* Solution 07: with while and nested do...while loop
    console.log("Challenge 04: with while and nested do...while loop")
    let i = 1;
    while(i <= 10){
        let j = 1;
        console.log("Multipllication Table "+ i);
        do{
            console.log(i +' * '+ j +" = "+ i*j++);
        }while(j <= 10);
        console.log("")
        i++;
    }
}//! end Solution 07


{//}






}//! ---------------------end
