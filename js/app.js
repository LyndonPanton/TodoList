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

	}
});