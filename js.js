let a = new Date();
console.log(a)

console.log(a.getFullYear())
console.log(a.getMonth())
console.log(a.getDate())
console.log(a.getDay())
console.log(a.getHours())
console.log(a.getMinutes())
console.log(a.getSeconds())


console.log(a.toDateString())
console.log(a.toTimeString())
console.log(a.toLocaleTimeString())
console.log(a.toLocaleDateString())


console.log(Math.round(5.7))
console.log(Math.round(5.1))

console.log(Math.ceil(6.1))
console.log(Math.ceil(-7.1))

console.log(Math.floor(4.9))
console.log(Math.floor(-3.8))

console.log(Math.trunc(5.1))
console.log(Math.trunc(-4.3))

console.log(Math.pow(5,2))

console.log(Math.sqrt(729))

console.log(Math.abs(-5))

console.log(Math.min(1,3,-1,0,5))
console.log(Math.max(-1,0,2,5,8))

console.log(Math.random() * 10); 

const multiplyArrow = (a, b) => a * b;
console.log(multiplyArrow(6,8));

const add = (a, b) => a + b;
console.log(add(5, 5)); 

const name = "Madam";
const greeting = `Hi, ${name}!`;
console.log(greeting);

const colors = ["red", "green", "blue"];
const [second,first] = colors;
console.log(second);
console.log(first); 

const student = { Name: "Chinni", age: 18 };
const { Name, age } = student;
console.log(Name); 
console.log(age); 




