const _radius = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  // reading radius to display
  get radius() {
    return _radius.get(this);
  }

  // Setting radius into different value
  set radius(value) {
    if (value <= 10) throw new Error("Invalid radius");
    _radius.set(this, value);
  }
}
const c = new Circle(12);
