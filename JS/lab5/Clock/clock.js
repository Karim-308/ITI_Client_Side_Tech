var clock = document.getElementById("Clock");
var intervalId;

function startClock() {
    alert("Clock Started");

    intervalId = setInterval(updateClock, 1000);

    updateClock();
}

function updateClock() {
    var now = new Date();
    var time = now.toLocaleTimeString();
    clock.innerText = time;
}

document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'w') {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            alert("Clock stopped");
        }
    }
});