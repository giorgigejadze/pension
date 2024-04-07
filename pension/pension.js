const prompt = require('prompt-sync')();

const gender = prompt("Enter your gender: ");
if(gender == "male" || gender == "MALE"){
    const birthday = Number(prompt("Enter your birth year: "));
    var myDate = new Date();
    years=myDate.getFullYear();
    const age = years - birthday
    console.log("Your current age is " + age);

    const retired = 65;
    console.log("The retirement age in Georgia is " + retired);
    
    const deduction = ( retired - age );
    console.log("you have " + deduction + " years left until you can retire.");
    const year = (birthday + age);
    const pensia = (year + deduction); 
    console.log("It is now " + year + " so you will retire in " + pensia);
}else if(gender == "female" || gender == "female"){
    const birthday = Number(prompt("Enter your birth year: "));
    var myDate = new Date();
    years=myDate.getFullYear();
    const age = years - birthday
    console.log("Your current age is " + age);

    const retired = 60;
    console.log("The retirement age in Georgia is " + retired);
    
    const deduction = ( retired - age );
    console.log("you have " + deduction + " years left until you can retire.");
    const year = (birthday + age);
    const pensia = (year + deduction); 
    console.log("It is now " + year + " so you will retire in " + pensia);
}else{console.log("Error, try again")}