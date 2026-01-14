class Shape {
  constructor() {
    if (this.constructor == Shape) throw "Shape is Abstract";
    Shape.#objCount++;
  }
  static #objCount = 0;

  static getCount() {
    return Shape.#objCount;
  }

  getArea() {}

  getPerimeter() {}

  toString() {
    console.log(
      "Area of this shape is " +
        this.getArea() +
        "\n Perimeter of this shape is " +
        this.getPerimeter()
    );
  }
}

class Rectangle extends Shape {
  #length;
  #width;

  static #rectCount = 0;

  constructor(len, wid) {
    if (Rectangle.#rectCount != 0)
      throw "Rectangle class has one instance already created";

    super();
    this.#length = len;
    this.#width = wid;
    Rectangle.#rectCount++;
  }

  getWidth() {
    return this.#width;
  }
  getLength() {
    return this.#length;
  }

  set setLength(len) {
    this.#length = len;
  }
  set setWidth(wid) {
    this.#width = wid;
  }

  getArea() {
    return this.#length * this.#width;
  }
  getPerimeter() {
    return 2 * (this.#length + this.#width);
  }
}

class Square extends Shape {
  #length;
  static #squareCount = 0;

  constructor(len) {
    if (Square.#squareCount != 0) throw "Square class has one instance already created";

    super();
    this.#length = len;
    Square.#squareCount++;
  }

  getLength() {
    return this.#length;
  }

  set setLength(len) {
    this.#length = len;
  }

  getArea() {
    return this.#length * this.#length;
  }
  getPerimeter() {
    return 4 * this.#length;
  }
}

class Circle extends Shape {
  #radius;

  constructor(rad) {
    super();
    this.#radius = rad;
  }

  getRadius() {
    return this.#radius;
  }

  set setRadius(rad) {
    this.#radius = rad;
  }

  getArea() {
    return 3.14 * this.#radius * this.#radius;
  }
  getPerimeter() {
    return 2 * 3.14 * this.#radius;
  }
}

let Circle1 = new Circle(5);
let Rectangle1 = new Rectangle(10 , 10);
let Square1 = new Square(3);

console.log(Circle1.getArea());
console.log(Circle1.getPerimeter());

try {
  let Rectangle2 = new Rectangle(20, 10);

} catch (error) {
  console.log("Error: " + error);
}
try {
  let Square2 = new Square(20, 10);

} catch (error) {
  console.log("Error: " + error);
}


console.log(Rectangle1.getArea());
console.log(Rectangle1.getPerimeter());
Rectangle1.setWidth =6;
console.log(Rectangle1.getArea());
console.log(Rectangle1.getPerimeter());
console.log(Rectangle1.getArea());
console.log(Rectangle1.getPerimeter());

console.log(Square1.getArea());
console.log(Square1.getPerimeter());


let circle2 = new Circle(66)
console.log(Shape.getCount());