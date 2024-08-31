// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

let Mathematics = 80;
let Biology = 78;
let Chemistry = 69;
let Physics = 60;
let Bangla = 90;

let allSubject = Mathematics+Biology+Chemistry+Physics+Bangla;

console.log((allSubject/5).toFixed(2))