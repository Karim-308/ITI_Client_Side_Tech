var fruits = ["apple" , "strawberry" , "banana" , "orange" , "mango"]


let res = fruits.every((e)=> typeof (e) === "string" ) ? "All element are string" : "Some elements are not string";


console.log(res)

res = fruits.some((e)=> e.startsWith('a')) ?"Some elements start with \'a\' " : "There is no string in the array start with \'a\' ";

console.log(res)

var newArray = fruits.filter((e) => e.startsWith('s') || e.startsWith('b'));

console.log(newArray)


var favFruits =  fruits.map((e) => "I like " + e);
console.log(favFruits);