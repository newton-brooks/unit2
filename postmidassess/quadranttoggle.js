// document.addEventListener("DOMContentLoaded", function (event) {
//     document.addEventListener("click", function(event) {
//         let quad = document.querySelector(event.target.nodeName.toLowerCase());
//         console.log(quad)
//         if (quad.style.backgroundColor === "black") {
//             quad.style.backgroundColor = "white"
//         } else {
//             quad.style.backgroundColor = "black"
//         }
//     })
// })


document.addEventListener('click', function(event){
    var t = event.target.style
    t.backgroundColor = t.backgroundColor === "gold" ? "white" : "gold"
})