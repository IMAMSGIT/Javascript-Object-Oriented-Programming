function Circle(radius) {
  // Instance members
  this.radius = radius;
  this.move = function () {
    console.log("Move");
  };
}

// Prototype members
// we can add and call the draw method
// even after we create it
Circle.prototype.draw = function () {
  console.log("Draw");
};

const s1 = new Circle(12);

// Circle.prototype.draw = function () {
//   console.log("Draw");
// };

// s1.draw();

// iterate only insance members
console.log(Object.keys(s1));

// return all members (instance or own+prototype)
for (key in s1) console.log(key);
