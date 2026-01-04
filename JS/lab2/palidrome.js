var str = prompt("Enter a string to check if palindrome");

if (!str) {
    alert("You must enter a valid string");
} else {
    var caseSensitive = confirm("check if case sensitive or not. OK = Yes, Cancel = No");
    
    var original;
    if (caseSensitive) {
        original = str;
    } else {
        original = str.toLowerCase();
    }
    
    var reversed = original.split("").reverse().join("");
    
    if (original === reversed) {
        alert(str + " is a palindrome");
    } else {
        alert(str + " is not  a palindrome");
    }
}