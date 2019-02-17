// Set the year dynamically
let copyright = document.getElementById("copyright");
let year = (new Date()).getFullYear();
let copyrightElement = document.createElement("span");
let copyrightString = `${year} | All Rights Reserved`;
copyrightElement.textContent = copyrightString;
copyright.appendChild(copyrightElement);

let input = document.getElementById("newtodo");
// When a character is entered into the input field
input.addEventListener("keydown", function(e) {
	// If the enter key is pressed and the input's value is not either empty or only whitespace
	if (e.keyCode === 13 && this.value.trim() !== "") {
		let list = document.getElementById("list");
		let item = document.createElement("li");
		let cross = document.createElement("span");

		// Create a cross symbol
		cross.className = "cross";
		cross.textContent = "X";
		cross.addEventListener("click", function() {
			this.parentNode.remove();
		});

		// Create a todo
		item.className = "item";
		item.textContent = `${this.value.trim()} `;

		// Add cross symbol to the todo
		item.appendChild(cross);
		// Add item to the list
		list.appendChild(item);

		// Clear the input field
		this.value = "";
	}
});