function Menu() {
	var element = document.createElement("div");
	Container.call(this, element);
	this.appendChild = function(child) {
	    element.appendChild(child);
	    element.querySelector("a:first-child").style.borderLeftStyle = "solid";
	    element.querySelector("a:first-child").style.borderTopLeftRadius = "5px";
	    element.querySelector("a:first-child").style.borderBottomLeftRadius = "5px";
	    var actions = element.querySelectorAll("a");
	    for (var i=0; i < actions.length; i++) {
	        actions[i].style.borderTopRightRadius = "0px";
	        actions[i].style.borderBottomRightRadius = "0px";
	    }
	    child.style.borderTopRightRadius = "5px";
	    child.style.borderBottomRightRadius = "5px";
	}
};