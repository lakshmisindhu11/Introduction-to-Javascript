// Hoisting is a JavaScript mechanism where variables and function declarations are moved to 
// the top of their containing scope during the compilation phase.

// For var: Variables declared with var are hoisted and initialized to undefined. They can be
// used before their declaration (but will be undefined until assigned).

console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// For let and const: These variables are also hoisted, but they are not initialized. 
// Accessing them before their declaration results in a ReferenceError.

console.log(y); // Throws ReferenceError
let y = 10;