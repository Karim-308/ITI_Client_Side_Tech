class Book{
title=""
type=""
numofChapters=0
author = ""
numofPages = 0
publisher =""
numofCopies = 0

constructor(title,type,author,numofChapters,numofPages,publisher,numofCopies){
this.title=title;
this.type=type;
this.numofChapters=numofChapters
this.author= author
this.numofPages = numofPages
this.publisher = publisher
this.numofCopies= numofCopies

}

toString() {
  return `${this.title} , author:  ${this.author}, type: ${this.type} chapters count: ${this.numofChapters} pages: ${this.numofPages} publisher: ${this.publisher} number of copies: ${this.numofCopies}`;
}
}

class Box {
  height = 0
  width = 0
  length = 0
  numOfBooks = 0
  volume = 0
  material = ""
  content = []

  constructor(height, width, length, material) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.material = material;
    this.volume = height * width * length;
    this.content = [];
    this.numOfBooks = 0;
  }

  countBooks() {
    return this.numOfBooks;
  }

  deleteBook(nameOrType) {
    this.content = this.content.filter(
      book => book.title !== nameOrType && book.type !== nameOrType
    );
    this.numOfBooks = this.content.length;
  }

  addBook(book) {
    if (book instanceof Book) {
      this.content.push(book);
      this.numOfBooks++;
    }
    else
      throw ("Can't add a non Book Object to the Box")
  }

  toString() {
    let result = `Box:  length: ${this.length}\n width: ${this.width}\n height: ${this.height}\n volume: ${this.volume}\n`;
    result += ` material: ${this.material}\n Number of Books: ${this.numOfBooks}\n`;
    result += ` Books stored:\n`;

    if (this.valueOf()=== 0) {
      result += " the box is empty ";
    } else {
      this.content.forEach((book, index) => {
      
        result += `  Book${index + 1}: ${book.toString()}\n`;
      });
    }

    return result;
  }

  valueOf() {
    return this.numOfBooks;
  }
}


let book1 = new Book("JavaScript", "Programming", "John Doe", 15, 450, "TechBooks", 100);
let book2 = new Book("CSS", "Programming", "Jane Smith", 10, 300, "WebPress", 50);
let book3 = new Book("Harry potter", "Fiction", "J.K Rowling", 7, 340, "Classics", 1000000);
let book4 = new Book("Potter Harry", "Fiction", "J.K Rowling2", 7, 340, "Classics2", 2000000);


console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);

let box1 = new Box(30, 20, 40, "Cardboard");
console.log(box1.toString());

console.log (box1.countBooks());
console.log(box1.valueOf());


box1.addBook(book1);
box1.addBook(book2);
box1.addBook(book3);

try{
box1.addBook("not a book");

}
catch(e){console.log(e)}

console.log(box1);
console.log("count " + box1.countBooks());

let book5 = new Book("CSS2", "Programming", " Karim", 10, 300, "publosher1", 50);
console.log(box1);
console.log("count" + box1.countBooks());



box1.deleteBook("CSS");
console.log("deleted CSS books");
console.log(box1);


console.log("deleted books of type Fiction");
box1.deleteBook("Fiction")
console.log(box1);