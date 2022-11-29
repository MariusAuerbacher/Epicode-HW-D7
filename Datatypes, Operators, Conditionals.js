/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

There are 7 main datatypes in JS . I will mention the 5 most common primitive ones:

1. Number: You can assign a variable a number. e.g. let exampleOfNumber = 5; There is an upper and a lower limit of numbers but it is almost impossible to reach the limit. Numbers can be added, substracted, multiplicated etc. with each other. 

2. String: declaring any variable inside "", '' or even `` will make it a string, whether it is a number or words or both. e.g. let stringExample = "2"; 2 will now be considered a string and not a number, but watch out as JS is a loosely typed language.

3. Boolean: a boolean will give you either a false or a true statement. Only one of the two. So it sets a condition, either something fits the preset requirements and it becomes true. Or if it is not then the anwser will be false.

4. undefined: If you create a new variable and have not defined it yet it will be considered undefined. It is there but we/JS doesn't know yet what it is or what value it has.

5. null: different from undefined. You will get a null when you expect an object to have a value but no object is relevant. e.g. when you empty an assigned variable that had a value before.

(6. BigInt)
(7.Symbol)

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

Variables are like containers storing data. Like a bowl where you can put something inside. They can basically contain just about any kind of data.
A variable is something that can vary in what it is, it can change.

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let firstNumber = 12;
let secondNumber = 20;
console.log("the anwser is: ", firstNumber + secondNumber)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
 */

let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

console.log( x - 12);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
console.log( name1 === name2);
console.log(name2.toLowerCase());




/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/
I'll call it y because we already have an x
let y = 9;
if (y === 9) {
  console.log("nine")
}



/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */
