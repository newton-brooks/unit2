var input = window.prompt("​Write​ ​an​ ​entire​ ​HTML element​ ​(opening​ ​tag,​ ​text,​ ​and​ ​closing​ ​tag)")

var element = document.getElementById("container")

element.innerHTML = input
// element.innerText = input