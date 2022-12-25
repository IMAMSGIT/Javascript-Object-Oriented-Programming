"use strict";
const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};
const c = new Circle();
// Method call of an object
c.draw();

const draw = c.draw;
// Function call like any standalone function
draw();

// In class structure we don't need to use
// strict mode , it already does
class Square {
  draw() {
    console.log(this);
  }
}
const sq = new Square();
const draw1 = sq.draw;
draw();
