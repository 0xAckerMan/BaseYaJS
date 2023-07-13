import { Person } from "./another";
console.log("hello world")

const person = new Person();
person.cry()


function man (name: string, age: number): string {
    let output = `my name is ${name} and ${age}`
    return output
}


let car = {
    name: "Audi",
    model : "SUV",
    
}

let car2 = {
    name: "Ferari",
    model: "Sedan"
}

console.log(car)
console.log(man)
