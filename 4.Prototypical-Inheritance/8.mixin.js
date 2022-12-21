const canEat = {
  eat: function () {
    this.hunger--;
    console.log("Eating");
  },
};
const canWalk = {
  walk: function () {
    console.log("Walking");
  },
};

// Adding more objects for diiferent functionality
const canSwim = {
  swim: function () {
    console.log("Swimming");
  },
};

// Combine 2 objects property and put them to one
// const person = Object.assign({}, canEat, canWalk);

// Also works from constructor function
function Person() {}

// Creating a mixin function to reduce code
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

function Goldfish() {}
// Object.assign(Goldfish.prototype, canEat, canSwim);
mixin(Person.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);
