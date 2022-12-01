function Circle(radius) {
  this.radius = radius;
}

const another = new Circle(12);

// when we use the new operator to call a function  3 thing happen
// 1 a empty object gets created
// 2 then this keyword points to that empty object
// 3 then it will return from the constructor function
// as  a result we don't type "return this"
// it is automatically happens
