function TableField(name, columns, kwargs) {
	if (!kwargs) {
		var kwargs = new Object();
	};
	if (!kwargs.add_line_text) {
		kwargs.add_line_text = "Add line";
	};
	var element = document.createElement("div");
	Field.call(this, name, element, {parent: kwargs.parent});
	var table = document.createElement("table");
	var thead = document.createElement("thead");
	var td = document.createElement("td");
	var tbody = document.createElement("tbody");
	var add_line = document.createElement("button");
	thead.appendChild(td);
	for (column in columns) {
		var td = document.createElement("td");
		if (column == "!editable") {
			var input = document.createElement("input");
			input.type = "text";
			input.style.width = "100%";
			input.style.fontWeight = "bold";
			input.style.textAlign = "center";
			td.appendChild(input);
		} else {
			td.innerHTML = column;
		};
		td.style.fontWeight = "bold";
		thead.appendChild(td);
	};
	add_line.innerHTML = kwargs.add_line_text;
	add_line.addEventListener("click", function() {
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		var remove = document.createElement("button");
		remove.addEventListener("click", function() {
			tr.parentElement.removeChild(tr);
			updateAutoTexts();
		});
		remove.innerHTML = "X";
		td.appendChild(remove);
		tr.appendChild(td);
		for (column in columns) {
			var td = document.createElement("td");
			if (columns[column] == "!editable") {
				var input = document.createElement("input");
				input.type = "text";
				input.style.width = "100%";
				input.style.textAlign = "center";
				td.appendChild(input);
			};
			tr.appendChild(td);
		};
		tbody.appendChild(tr);
		updateAutoTexts();
	});
	table.style.borderStyle = "solid";
	table.style.borderWidth = "1px";
	table.style.borderColor = "black";
	table.style.width = "100%";
	table.style.textAlign = "center";
	table.appendChild(thead);
	table.appendChild(tbody);
	element.appendChild(table);
	element.appendChild(add_line);
	Object.defineProperty(this, "lines", {
		get: function() {
			return tbody.children.length;
		},
	});
	Object.defineProperty(this, "columns", {
		get: function() {
			return thead.children.length - 1;
		},
	});
	this.get = function(line, column) {
		return tbody.children[line].children[column + 1].querySelector("input").value;
	};
};
