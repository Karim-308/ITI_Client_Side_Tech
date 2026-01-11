let size = Number(prompt("How many numbers?"));

let arr = []

for(let i = 0 ; i< size;i++ )
{
    arr.push(Number(prompt("Enter value "+ (i+1))))
}

function MaxMin(...array){
    return [Math.max(...array) ,Math.min(...array)];
}

[max , min ] = MaxMin(...arr);

alert(`The Maximum value is ${max} \n The Minimum value is ${min}`)