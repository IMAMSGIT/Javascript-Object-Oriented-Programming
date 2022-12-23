// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function () {
//     console.log("Draw");
//   };
// }

// Same can be achieved via class

class Circle {
  constructor(radius) {
    this.radius = radius;

    // move method won't be in prototype
    this.move = function () {
      console.log("Move");
    };
  }
  // This draw method will be in prototype
  draw() {
    console.log("Draw");
  }
}

const c = new Circle(2);
