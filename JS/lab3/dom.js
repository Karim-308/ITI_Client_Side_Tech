document.getElementById("header").style.textAlign = "right";

var image = document.getElementById("header").cloneNode(true);
image.style.textAlign = "left";
document.body.appendChild(image);

document.getElementById("nav").style.textAlign = "center";
document.getElementById("nav").style.listStyleType = "circle";
document.getElementById("nav").style.listStylePosition = "inside";
document.getElementById("nav").style.display = "inline-block";
document.getElementById("nav").style.backgroundColor = "lightgrey";
document.getElementById("nav").style.paddingLeft = "0";