var radius = prompt("Enter the radius value of the circle");

if (!radius || isNaN(radius) || radius <= 0) {
    alert("The radius should be a postive number");
} else {
    var area = Math.PI * Math.pow(radius, 2);
    alert("Total area of the circle is " + area);
}

var num = prompt("Enter a value to get its square root");

if (!num || isNaN(num) || num < 0) {
    alert("Please enter a valid non-negative number");
} else {
    var result = Math.sqrt(num);
    alert("squar root of " + num + " is " + result);
}