// In Function Declaration, we can call it before its declaration
// Because it gets hoisted
// But in Function Expression, we can't do this
// Just like we can't use a variable before it's declared

// Function Declaration
function sayHello() {}
// Function Expression
const sayGoodbye = function () {};

// Class Decaration, use it
class Circle {}

// Class Expression
const Square = class {};
