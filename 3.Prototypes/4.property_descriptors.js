let person = {
  name: "Imam",
};
console.log(person);
for (kei in person) console.log(kei);

// same things be done by
console.log(Object.keys(person));

// but we don't get the other properties like toString ()
// because in JS, we have attributes attach to properties
// sometimes these attributes prevent properties to enumerate

let objectBase = Object.getPrototypeOf(person);

// now we het the details of toString method
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");

console.log(descriptor);

// we can also work with tostring method
// can make it writable, enumerable etc just like get, set

Object.defineProperty(person, "name", {
  writable: false,
  // enumerable: false,
  // configurable: false,
});

person.name = "John";
console.log(person);

// name unchanged

console.log(Object.keys(person));

// person object in not enumerable as it is set false

// delete person.name;
// won't delete the object , as it is not configurable
