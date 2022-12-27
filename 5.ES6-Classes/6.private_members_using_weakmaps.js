// Defining privcate member
const _radius = new WeakMap();
// Defining private method
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, () => {
      // before arrow function, we get undefined
      console.log("Move", this);
    });
  }
  draw() {
    // reading the private radius from a public method
    console.log(_radius.get(this));
    _move.get(this)();
    console.log("Draw");
  }
}
const c = new Circle(111);
