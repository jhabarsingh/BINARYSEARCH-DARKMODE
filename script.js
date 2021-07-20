function allDescendants(node) {
    for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];
        allDescendants(child);
        if(child.style) {
            child.style.backgroundColor = "#2B2B2B";
            
            if(child.className != "view-lines")
                 child.style.color = "white";
        }
    }
}
  
var children = document.querySelector("body");


setInterval(() => {
    allDescendants(children);
}, 10)