function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}
const circle = new Circle(1);

// using for in loop to get property name and value
for (const key in circle) {
  console.log(key, circle[key]);
}

// to get only the property (exclude method)
for (const key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

//Another method to acheive the same result
// But this approach we can't separate methods and properties
const keys = Object.keys(circle);
console.log(keys);

// to check if an object has specific property
if ("radius" in circle) console.log("Circle has a radius");
if ("draw" in circle) console.log("Circle has a Draw method");
