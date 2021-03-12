// create an object instance
/* function createNewPerson(name) {
  const obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + obj.name + '.');
  };
  return obj;
}

const salva = createNewPerson('Salva');
salva.name;
salva.greeting();

////////////////////////
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

let person1 = new Person('Bob');
let person2 = new Person('Sarah');
person1.name
person1.greeting()
person2.name
person2.greeting()

/////////////////////////////
function Person(first, last, age, gender, interests) {
  this.name = {
     first : first,
     last : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

person1['age']
person1.interests[1]
person1.bio()

////////////////////////////////
let person1 = new Object();

person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
};

let person1 = new Object({
  name: 'Chris',
  age: 38,
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
});

///////////////////////////////////
let person2 = Object.create(person1);
person2.name;
person2.greeting();
*/
/*
function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
  this.calcPerimeter = function () {
    return this.sides * this.sideLength
}
}

square = new Shape('square', 4, 5)
console.log(square.calcPerimeter())

triangle  = new Shape('triangle ', 3, 3)
console.log(triangle.calcPerimeter())
*/

/////////////////////////////
class Shape {
    constructor (name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
    calcPerimeter () {
      return this.sides * this.sideLength
  }
  }
  
  /*square = new Shape('square', 4, 5)
  console.log(square.calcPerimeter())
  
  triangle  = new Shape('triangle ', 3, 3)
  console.log(triangle.calcPerimeter())
  */
  
  class Square extends Shape {
    constructor(sideLength) {
      super("Square", 4, sideLength);
    }
    calcArea() {
      console.log('this.sideLength = ', this.sideLength)
      return this.sideLength*this.sideLength
    }
  }
  
  square = new Square(6)
  console.log(square)
  console.log(square.calcArea())
  