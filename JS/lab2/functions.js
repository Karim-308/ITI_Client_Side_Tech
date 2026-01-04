function _2params( param1 , param2){
    if (arguments.length !== 2) {
        throw "Error: Function should be passed exactly 2 parameters";
    }
    console.log("Perfect");
    return true;
}

try {
    console.log(_2params(1,2));
    console.log(_2params(1,2,3));
} catch (error) {
    console.log(error);
}

console.log("--------------------------------");


function reverseParams(){
    var arr=[];

    for (var i =0 ; i< arguments.length ; i++)
        arr.push(arguments[i])

    return arr.reverse();
}


console.log(reverseParams(1,2,3,4,5));
console.log(reverseParams("30" , "Saad" , "Ibrahim" , "Karim"));
console.log("--------------------------------");


function passAllNumbers(...params){
    
    var sum=0;
    for (var i =0 ; i< arguments.length ; i++)
    {
        
    
        if ( !isFinite(params[i])) 
            throw "Error: Function passAllNumbers should be passed all Numbers";
        else
        sum+= parseFloat(params[i]);
        
    }
    return sum;
}

try {
    console.log(passAllNumbers(1,1,1,1,32,5,5));
    console.log(passAllNumbers("30" , "Saad" , "Ibrahim" , "Karim"));
} catch (error) {
    console.log(error);
}


console.log("--------------------------------");

function getDate(value){
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dateFormatRegex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/((19|20)\d\d)$/
    if (!value  || !dateFormatRegex.test(value))
        throw "Error: Function getDate should be passed a valid date with format mm/dd/yyyy";
    
   
        var date = new Date(value);
        return days[date.getDay()];
    
}

try {
    console.log(getDate("01/04/2026"));
} catch (error) {
    console.log(error);
}





