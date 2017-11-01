var input = window.prompt("Please enter one, two, three or four")
var input2 = window.prompt("Please enter one, two, three or four again.")

if(document.getElementById(input) && document.getElementById(input2)){
var second = document.getElementById(input2).innerText
var first = document.getElementById(input).innerText
    document.getElementById(input).innerText = second
    document.getElementById(input2).innerText = first
} else {
    window.alert("invalid input")
}