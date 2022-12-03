// Primitive types
// -String
// -Number
// -Boolean
// -Symbol
// -undefined
// -null
// ### uninitialized variables will be undefined by default
// ### we can explcitly assign null to a variable

// Reference types are ----
// Object,Function,Array

let x = 2;
let y = x;
x = 3;

// in prmitive type , only the valuse gets copied , not memory location
// output is x=3, y=2

let p = {
  value: 10,
};
let q = p;
p.value = 20;
// changing the value property of p

let num = 2;
function a(number) {
  return number++;
}
a(num);
console.log(num);
// here num and number are different
//  we hae passed num as the int type variable
// but valuse not changed , because it is in local scope

let obj = {
  valueTop: 10,
};

function increase(objectShouldPass) {
  obj.valueTop++;
}

increase(obj);
console.log(obj);
//here the obj object has been passed to increase function
// it's one property increased inside the function
// also affects the actual object
// because both points to the same area
