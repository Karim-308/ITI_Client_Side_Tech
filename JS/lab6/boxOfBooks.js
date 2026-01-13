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
      return true;
    }
    return false;
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