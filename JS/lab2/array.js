var arr = [];

for (var i = 0; i < 3; i++) {
    var value = prompt("Enter value " + (i + 1));
    
    while (!value || isNaN(value)) {
        value = prompt("Enter a valid number for value " + (i + 1));
    }
    
    arr.push(parseFloat(value));
}

var sum=0 ,multiplication=1,division = arr[0];
for(var i = 0 ; i<3 ; i++) sum+= arr[i];
for(var i = 0 ; i<3 ; i++) multiplication*= arr[i];
for(var i = 1 ; i<3 ; i++){
    if (arr[i]!=0) division/= arr[i];
} 



;
document.write("<p><strong><u>Summation:</u> </strong>" + sum + "</p>");
document.write("<p><strong><u>Multiplication:</u> </strong>" + multiplication + "</p>");
document.write("<p><strong><u>Division:</u> </strong>" + division + "</p>");