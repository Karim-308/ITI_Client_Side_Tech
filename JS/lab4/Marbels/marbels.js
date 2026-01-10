var marbles = document.querySelectorAll("#marble");
var currentMarbleIndex = 0;

for (let i = 0; i < marbles.length; i++) {
    marbles[i].addEventListener("mouseenter", function() {
        stopMarbleAnimation();
    });
    marbles[i].addEventListener("mouseleave", function() {
        startMarbleAnimation();
    });
}


var animationInterval;

function startMarbleAnimation() {
    animationInterval = setInterval(() => {
     marbles[currentMarbleIndex].src = "marble1.jpg";
        currentMarbleIndex = (currentMarbleIndex + 1) % marbles.length;
        marbles[currentMarbleIndex].src = "marble2.jpg";
    }, 1000);
}

function stopMarbleAnimation() {
    clearInterval(animationInterval);
}

//isEnabled
