loadScript("https://cdnjs.cloudflare.com/ajax/libs/autosize.js/3.0.15/autosize.min.js");
function DocumentHeader() {
	Header.call(this);
	var title = document.createElement("h1");
	title.innerHTML = "Meeting record";
	this.appendChild(title);
	var tux = new DynImage(IMAGES["Tux.png"], {id: "tux", parent: this});
	var tux_element = document.getElementById("tux");
	tux_element.style.width = "50px";
	tux_element.style.position = "relative";
	tux_element.style.left = "100%";
	tux_element.style.marginLeft = "-50px";
	tux_element.style.marginTop = "-70px";
};
window.addEventListener("load", function() {
	var header = new DocumentHeader();
	var background = new Background(IMAGES["wallpaper.png"]);
	var menu = new Menu();
	var save = new Action("Save", saveForm, {parent: menu});
	var new_ = new Action("New", function() {}, {parent: menu});
	var about = new Action("About", function() {}, {parent: menu});
	var meeting_date = new TextField("Date");
	meeting_date.value = new Date();
	var place = new TextField("Place");
	var subject = new TextField("Subject");
});