function allDescendants(node) {
    for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];
        allDescendants(child);
        if(child.style) {
            child.style.backgroundColor = "#362222";
            console.log(child.className);
            if(child.className != "RecentSubmissions_question__KrnzB")
                child.style.color = "white";
        }
    }
}
  
var children = document.querySelector("body");


setInterval(() => {
    document.querySelectorAll('.RecentSubmissions_question__KrnzB').forEach(child => {
        child.style.color = "white";
    })
    allDescendants(children);
}, 10)