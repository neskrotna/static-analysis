// 1. Unused variable
const unusedVar = 10;

// 2. Missing semicolon
function add(a, b) {
    return a + b
}

// 3. Incorrect variable name case
const MY_CONSTANT = 100;

function multiplyByConstant(num) {
    return num * my_constant; // Should be MY_CONSTANT
}

// 4. Function not defined
console.log(square(5));

function subtract(a, b) {
    return a - b;
}

// 5. Missing 'use strict'
function divide(a, b) {
    return a / b;
}

// 6. Variable used before declaration
console.log(result);
var result = subtract(10, 5);

// 7. Redefinition of function parameter
function greet(name, name) {
    console.log(`Hello, ${name}`);
}

// 8. Debugger statement
function debugFunction() {
    debugger;
    return 'Debugging';
}

// 9. Missing default case in switch
function getDayName(day) {
    switch(day) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
    }
}

// 10. Inconsistent return statement
function isPositive(num) {
    if (num > 0) {
        return true;
    } else if (num < 0) {
        return false;
    }
    // Missing return statement for num === 0
}