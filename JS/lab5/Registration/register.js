var timer = setTimeout(()=>{
     alert("Timeout!");
      window.close();
},5000)
/*
setTimeout(function() {
 alert("Timeout!");                         │
    this.close();       
}, 5000); */

var form = document.querySelector("form");
form.addEventListener("input",()=> clearTimeout(timer))

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    let name = document.getElementById("name").value;
    let title = document.getElementById("title").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    location.href=`welcome.html?name=${name}&title=${title}&email=${email}&mobile=${mobile}&address=${address}&gender=${gender}`
})