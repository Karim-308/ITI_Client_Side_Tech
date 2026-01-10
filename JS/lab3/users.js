var noOfUsers = 0;
do {
    var input = prompt("Enter number of users:");
    noOfUsers = parseInt(input, 10);

    if (isNaN(noOfUsers) ) {
        alert("Please enter a valid number");
    }
} while (isNaN(noOfUsers) );

var users = [];

for (var i = 0; i < noOfUsers; i++) {
    var name;
    do {
        name = prompt("Enter name for user " + (i + 1));
        if (!name || !isNaN(name)) {
            alert("Please enter a valid name.");
        }
    } while (!name || !isNaN(name));

    var birthYear;
    do {
        birthYear = prompt("Enter birth year for user " + (i + 1));
        
        if (!birthYear || isNaN(birthYear)) {
            alert("Please enter a valid birth year.");
        }
    } while (!birthYear || isNaN(birthYear));

    var age = 2026 - birthYear;
    users.push({ name: name, age: age });
}


document.write("<table border='1'><tr><th>Name</th><th>Age</th></tr>");
for (var j = 0; j < users.length; j++) {
    document.write("<tr><td>" + users[j].name + "</td><td>" + users[j].age + "</td></tr>");
}
document.write("</table>");


var firstTh = document.querySelector("th:first-child");
var firstTd = document.querySelectorAll("td:first-child");

firstTh.style.width = "150px";
firstTd.forEach(td =>{
    td.style.width = "150px";
}); 