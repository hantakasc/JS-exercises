// Week 2 - *Loops*

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let num = 1;
while (num <= 5) {
    console.log(num);
    num++;
}
// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);
// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let num = 1; num <= 5; num++) {
    console.log(num);
}
// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
//while loop
let num = 10;
while (num >= 1) {
    console.log(num);
    num--
}
//do while loop
let num = 10;
do {
    console.log(num);
    num--
} while (num >= 1);
//for loop
for (let num = 10; num >= 1; num--) {
    console.log(num);
}
// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
//while loop
let num = 7;
while (num <= 27) {
    console.log(num);
    num++;
}
//do while loop
let num = 7;
do {
    console.log(num);
    num++;
} while (num <= 27);
//for loop
for (let num = 7; num <= 27; num++) {
    console.log(num);
}
// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
//while loop
let num = 0;
while (num <= 100) {
    console.log(num);
    num += 10;
}
//do while loop
let num = 0;
do {
    console.log(num);
    num += 10;
} while (num <= 100);
//for loop 
for (let num = 0; num <= 100; num += 10) {
    console.log(num);
}
// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.
//centerFour never reaches a value and that's why it would keep running indefinitely.
let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
for (let num = 0; num <= 78; num++) {
    console.log(num);
}
// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
let favNum = 26;
for (let i = 0; i <= 100; i++) {
    if (i === favNum) {
        console.log(i + " my favorite number!");
    }
    else {
        console.log(i + " not my favorite number!");
    }
}
// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//I think a for loop depends on how many times an action needs to be repeated, a while can be based on a condition that can change and a do while loop can be when you have to run the code before checking the condition.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Email your file to us or commit your file to GitHub and email us a link.