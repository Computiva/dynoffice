function Action(name, action, kwargs) {
    var element = document.createElement("a");
    BaseObject.call(this, element, kwargs)
    element.innerHTML = name;
    element.style.borderStyle = "solid";
    element.style.borderColor = "black";
    element.style.borderWidth = "1px";
    element.style.borderRadius = "5px";
    element.style.padding = "7px";
    element.style.display = "inline-block";
    element.style.backgroundColor = "white";
    element.style.cursor = "pointer";
    element.addEventListener("mouseover", function() {
        this.style.backgroundColor = "aquamarine";
    });
    element.addEventListener("mouseout", function() {
        this.style.backgroundColor = "white";
    });
    element.addEventListener("click", action);
};