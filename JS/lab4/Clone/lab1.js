function cloneMe(element) {
   if (element.id !== "original") {
        return; 
    }
    var clone = element.cloneNode(true);
    clone.removeAttribute("id");
    //clone.onclick= null;
        var red = Math.floor(Math.random() * 256); 
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + red + "," + green + "," + blue + ")";
        clone.style.backgroundColor = bgColor;
        clone.children[0].innerText = "cloned" + bgColor;
    element.parentNode.appendChild(clone);
}