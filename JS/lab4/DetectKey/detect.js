document.addEventListener("keydown", function(event) {
    var message = "Key: " + event.key + "\n";
    message += "ASCII: " + event.keyCode + "\n";

    if (event.altKey) {
        message += "Alt key is pressed";
    }
    if (event.ctrlKey) {
        message += "Ctrl key is pressed";
    }
    if (event.shiftKey) {
        message += "Shift key is pressed";
    }
    
    alert(message);
});