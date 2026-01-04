var name;

do {
    name = prompt("Enter your name");
    if (!name ||  /\d/.test(name)) {
        alert("Please enter a valid name");
    }
} while (!name ||  /\d/.test(name));


var phoneNumber;
do {
    phoneNumber = prompt("Enter a phoneNumber");
    if (!phoneNumber || isNaN(phoneNumber) || phoneNumber.length !== 8) {
        alert("Please enter a valid phoneNumber");
    }
    
} while (!phoneNumber || isNaN(phoneNumber) || phoneNumber.length !== 8);
//phoneNumber = parseInt(phoneNumber, 10);

var mobileNumber;
do {
    mobileNumber = prompt("Enter a mobileNumber");
    if (!mobileNumber || isNaN(mobileNumber) || mobileNumber.length !== 11) {
        alert("Please enter a valid mobileNumber");
    }
   else if (!mobileNumber.startsWith("010") && !mobileNumber.startsWith("011") && !mobileNumber.startsWith("012") && !mobileNumber.startsWith("015")) {
        alert("You should be a member Vodafone, Etisalat, Orange or We");
    }
    
} while (!mobileNumber || isNaN(mobileNumber) || mobileNumber.length !== 11 || (!mobileNumber.startsWith("010") && !mobileNumber.startsWith("011") && !mobileNumber.startsWith("012") && !mobileNumber.startsWith("015")));
//mobileNumber = parseInt(mobileNumber, 10);

var email;
do {
    email = prompt("Enter an email");
    if (!email || !/^[a-zA-Z]+@[0-9]{2,3}\.[a-zA-Z]{2,3}$/.test(email)) {
        alert("Please enter a valid email");
    }
} while (!email || !/^[a-zA-Z]+@[0-9]{2,3}\.[a-zA-Z]{2,3}$/.test(email));


document.write("<h1>Welcome Back " + name + "</h1>");
document.write("<p><strong><u>Phone Number:</u> </strong>" + phoneNumber + "</p>");
document.write("<p><strong><u>Mobile Number:</u> </strong>" + mobileNumber + "</p>");
document.write("<p><strong><u>Email:</u> </strong>" + email + "</p>");