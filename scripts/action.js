function Action(name, action, kwargs) {
	if (!kwargs) {
		var kwargs = new Object();
	};
    var element = document.createElement("a");
    BaseObject.call(this, element, kwargs);
    element.innerHTML = name;
    if (kwargs.parent.constructor == Menu) {
        element.style.borderTopStyle = "solid";
        element.style.borderBottomStyle = "solid";
        element.style.borderRightStyle = "solid";
    } else {
        element.style.borderStyle = "solid";
        element.style.borderRadius = "5px";
    }
    element.style.borderColor = "black";
    element.style.borderWidth = "1px";
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