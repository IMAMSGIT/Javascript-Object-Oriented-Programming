function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const circle = new Circle(1);
circle.location = { x: 1 };
// Or using using bracket notataion
// circle["location"] = { x: 1 };

// To delete properties
// delete circle.location;
// or
// delete circle["location"];
