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

  constructor(len, wid) {
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
