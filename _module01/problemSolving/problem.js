//! used carly braces to make sure that varriables oƒ one sollution don't interfere with other sollutions varriable..As varriable declare with let has block scope....


//TODO: Coding challenge #1. Print numbers from 1 to 10

//? LOGIC : doing same thing multiple time can be done with loop.There are 3 types of loop for general purpose. "for Loop","while loop","do...while loop"
//STEP 01: declare a variable num, initilaized with 1
//STEP 02: create a loop and iterate it as long as num <= 10
//STEP 03: in the loop log the current num then  increment the num


{//* Solution 01: with for loop
    console.log("challenge #1: with for loop")

    for(let num = 1; num <= 10; num++){
        console.log(num);
    }
    
}//! end solution 01
    
{//* Solution 02: with while loop
console.log("challenge #1: with while loop")
    
let num = 1;
while(num <= 10){
    console.log(num++);
}
    
}//! end solution 02
    
    
{//* Solution 03: with do while loop
console.log("challenge #1: with do while loop")
    
let num = 1;
do{
    console.log(num++)
}while(num <= 10)
    
}//! end solution 03
    
//! -----------end of Coding challenge #1--------------------
    
//TODO Coding challenge #2. Print the odd numbers less than 100
//? LOGIC 01: you can get all odd number by adding 2 with 1 for multiple time
    
//? LOGIC 02: if a number devided by 2 remind 1 then the number is odd. You can get reminder with modulas(%) operator. You can incriment the number and check if number is odd,if it is odd you can log the number in console
    
//! ----------------Solution with logic 01-------------------
//STEP 01: create a variable num initialized with 1
//STEP 02: create a loop and iterate it as long as num < 100
//STEP 03: add 2 to the num in every iteration
    
{//* Solution 01: with for loop
    
        
}