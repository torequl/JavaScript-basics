/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let ibm = 229;

if (ibm < 18.5) {
    console.log("You Are Underweight");
} else if (ibm >= 18.5 && ibm <= 24.9) {
    console.log("You Are Normal");
} else if (ibm >= 25 && ibm <= 29.9){
    console.log("You Are Over Weight");
}
else {
    console.log("You Are Obese")

}

