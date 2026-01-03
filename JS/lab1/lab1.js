var name;

do {
    name = prompt("Enter your name");
    if (!name || !isNaN(name)) {
        alert("Please enter a valid name");
    }
} while (!name || !isNaN(name));

var birthYear;
do {
    birthYear = prompt("Enter your birth year");
    
    if (!birthYear || isNaN(birthYear)) {
        alert("Please enter a valid birth year");
        continue;
    }
    
    birthYear = parseInt(birthYear, 10);
    
    if (birthYear >= 2010) {
        alert("Year must be less than 2010!");
    }
    
} while (!birthYear || isNaN(birthYear) || birthYear >= 2010);


var age = 2026 - birthYear;

document.write("<p><strong><u>Name:</u> </strong>" + name + "</p>");
document.write("<p><strong><u>Birth year:</u> </strong>" + birthYear + "</p>");
document.write("<p><strong><u>Age:</u> </strong>" + age + "</p>");





// var n = prompt("Enter the value of n");
// var sum = 0;

// if (isFinite(n) && n > 0) {
//     do {
//         var input = prompt("Enter a number");
        
//         if (isNaN(input) || input === null || input === "") {
//             alert("Please enter a valid number!");
//             break;
//         }
        
       
        
//         var value = parseInt(input);
        
//         if (value == 0) break;
        
//         sum += value;
//         n--;

//     } while (n > 0 && sum <= 100);
// }

// console.log("The total sum is: " + sum);




// const n = prompt("Enter the value of n");

// if(message) {
//     for (let i = 1; i <= 6; i++) {
//         var heading = document.createElement("h" + i);
//         heading.textContent = message;
//         document.body.appendChild(heading);
// }
    
// }


// const message = prompt("Enter a message");

// if(message) {
//     for(var i = 1 ; i<=6 ; i++)
//         document.write(`<h${i}>${message}</h${i}>`)
    
// }
