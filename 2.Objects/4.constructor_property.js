// every object has a property , called constructor
// that refers to the function to create the object
function createCircle(radius) {
    return {
      radius,
      draw: function () {
        console.log("Draw");
      },
    };
  }
  const circle = createCircle(23);

  function Circle(radius) {
    this.radius =radius
  }

  const another = new Circle(12);