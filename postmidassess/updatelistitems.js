var input = window.prompt("Please enter one, two, three or four")
var string = window.prompt("type in a string")

if(document.getElementById(input) === null) {
    document.getElementById("one").innerText = string
} else {
    document.getElementById(input).innerText = string
}


// if(!document.getElementById(input)) {
//     document.getElementById("one").innerText = string
// } else {
//     document.getElementById(input).innerText = string
// }
