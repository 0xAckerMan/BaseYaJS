"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const another_1 = require("./another");
console.log("hello world");
const person = new another_1.Person();
person.cry();
function man(name, age) {
    let output = `my name is ${name} and ${age}`;
    return output;
}
let car = {
    name: "Audi",
    model: "SUV",
};
let car2 = {
    name: "Ferari",
    model: "Sedan"
};
console.log(car);
console.log(man);
//# sourceMappingURL=test.js.map