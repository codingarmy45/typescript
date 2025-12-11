
class Student{
    name='Ram';
    age=15;
}

const stud1 = new Student();
console.log(stud1);

class Car{
    name:string;
    price:number;

    constructor(name: string, price:number) {
    this.name = name;
    this.price = price;
  }
}

const car1 = new Car("BMW", 10000);
console.log(car1);
console.log(car1.name)