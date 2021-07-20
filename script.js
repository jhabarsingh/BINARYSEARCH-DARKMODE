function allDescendants(node) {
    for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];
        allDescendants(child);
        if(child.style) {
            child.style.backgroundColor = "#362222";
            child.style.color = "white";
        }
    }
}

var children = document.querySelector("body");

setInterval(() => {
    allDescendants(children);
}, 10);
