// Set the year dynamically
let copyright = document.getElementById("copyright");
let year = (new Date()).getFullYear();
let copyrightElement = document.createElement("span");
let copyrightString = `${year} | All Rights Reserved`;
copyrightElement.textContent = copyrightString;
copyright.appendChild(copyrightElement);