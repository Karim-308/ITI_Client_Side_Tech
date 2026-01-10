var input = document.getElementById("myInput");

input.addEventListener("keypress", function(event) {
      var key = event.key.charCodeAt(0);
    
    if (key <= "0".charCodeAt(0) || key >= "9".charCodeAt(0)) {
        event.preventDefault();
    }
});
