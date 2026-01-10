var numbers = [];

for (var i = 5; i > 0; i--) {
    var input = prompt("Enter number " + (5-(i)+1));
    var number = parseFloat(input);

    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        alert("Please enter a valid number");
        i++;
    }
}

var arr2 = Array.from(numbers);
numbers.sort(function(a, b) {
    return a - b;
});

document.write("<p>you have entered:"+ arr2.join(", ")+ "</p>");
document.write("<p>your values after being sorted descending:"+ numbers.join(", ")+ "</p>");
document.write("<p>your values after being sorted ascending:"+ numbers.reverse().join(", ")+ "</p>");
