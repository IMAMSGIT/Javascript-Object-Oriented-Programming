function Circle(radius) {
  // Public member
  this.radius = radius;

  // Private member
  let defaultLocation = { x: 0, y: 0 };
  Object.defineProperty(this, "My Default Location", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      defaultLocation = value;
    },
  });
}

// To define a getter/setter, use Object.defineProperty():

const circle = new Circle(1);
circle.defaultLocation = 10;
