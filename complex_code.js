/**
 * File: complex_code.js
 * Description: A complex and elaborate code in JavaScript showcasing various functionalities and programming techniques.
 * Author: [Your Name]
 * Date: [Current Date]
 */

// Global Variables
const PI = 3.14159; // A constant value for PI

// Function to calculate factorial of a number using recursion
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Class representing a Shape
class Shape {
  constructor() {
    this.color = "red";
  }
  
  getArea() {
    return 0;
  }
}

// Class representing a Circle
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  getArea() {
    return PI * Math.pow(this.radius, 2);
  }
}

// Class representing a Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  getArea() {
    return this.width * this.height;
  }
}

// Function to perform matrix addition
function matrixAddition(matrix1, matrix2) {
  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix1[i].length; j++) {
      result[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return result;
}

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Promises Example
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Hello, World!";
      resolve(data);
    }, 2000);
  });
}

// Async/Await Example
async function processAsync() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch(error) {
    console.error('Error:', error);
  }
}

// Main function
function main() {
  const number = 5;
  console.log(`The factorial of ${number} is: ${factorial(number)}`);
  
  if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is not a prime number.`);
  }
  
  const myCircle = new Circle(3);
  console.log(`Area of the circle with radius ${myCircle.radius}: ${myCircle.getArea()}`);
  
  const myRectangle = new Rectangle(4, 5);
  console.log(`Area of the rectangle with width ${myRectangle.width} and height ${myRectangle.height}: ${myRectangle.getArea()}`);
  
  const matrix1 = [[1, 2], [3, 4]];
  const matrix2 = [[5, 6], [7, 8]];
  const matrixResult = matrixAddition(matrix1, matrix2);
  console.log('Result of matrix addition:', matrixResult);
  
  const person = new Person('John Doe', 25);
  person.greet();
  
  processAsync();
}

// Execute main function
main();