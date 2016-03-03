loadScript("https://cdnjs.cloudflare.com/ajax/libs/autosize.js/3.0.15/autosize.min.js");
function DocumentHeader() {
	Header.call(this);
	var title = document.createElement("h1");
	title.innerHTML = "Meeting record";
	this.appendChild(title);
	var tux = new DynImage("https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", {id: "tux", parent: this});
	var tux_element = document.getElementById("tux");
	tux_element.style.width = "50px";
	tux_element.style.position = "relative";
	tux_element.style.left = "100%";
	tux_element.style.marginLeft = "-50px";
	tux_element.style.marginTop = "-70px";
};
window.addEventListener("load", function() {
	var header = new DocumentHeader();
	var background = new Background("http://www.wallpaperesia.com/wp-content/uploads/2016/01/Linux-Wallpaper-Perfect-MM15.png");
	var save = new Action("Save", saveForm);
	var meeting_date = new TextField("Date");
	meeting_date.value = new Date();
	var place = new TextField("Place");
	var subject = new TextField("Subject");
});