import { Circle } from "./circle.js";
const c = new Circle(111);
// if we didn't separate the file in module
// we could get access the private property
// console.log(_radius.get(c));
c.draw();
