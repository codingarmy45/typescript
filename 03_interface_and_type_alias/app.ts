interface car{
    readonly id: number,
    brand:string,
    model:string,
    year:number
    passing?:string
}

interface bmw extends car{
    cc:number
}

const myCar : bmw ={
    id:1,
    brand:'Wagnor',
    model:'Maruti',
    year:2021,
    cc:2000
    
}

console.log(myCar)


interface User{
    readonly id :number,
    name:string,
    phone?:number
}

interface Employee extends User{
    salary:number;
}

const user: Employee ={
    id:100,
    name:'Yash',
    salary: 10000
    
}
console.log(user);

type name = string;
type age = number;

const nav: name = 'Shan';
let nam: string | number = 'Yash';
nam = 15;
console.log(nav);
console.log(nam);

type coordinate = [number,number];

const point: coordinate = [10,20];
console.log(point)

type Onclick = (value:string) => void;

const handleClick : Onclick = (msg) =>{
    console.log(msg);
}

handleClick('HIII');

