"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name = 'Ram';
    age = 15;
}
const stud1 = new Student();
console.log(stud1);
class Car {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const car1 = new Car("BMW", 10000);
console.log(car1);
console.log(car1.name);
//# sourceMappingURL=app.js.map