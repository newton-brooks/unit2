// var btn = document.querySelector("button")
// btn.style.display = "block"
// btn.addEventListener("click", function(){
//     img = document.createElement("img")
//     img.style.width = "50px"
//     img.src = "http://www.pngmart.com/files/3/Bubbles-PNG-HD.png"
//     document.body.appendChild(img)
// });

document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector("button");

    button.addEventListener("click", function() {
        let bubble = document.createElement("img");
        bubble.src = "https://slack-imgs.com/?c=1&url=http%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Fbubbles-png-22.png";
        bubble.style.height = "50px";
        bubble.style.height = Math.round(Math.random() * 50 + 10 ).toString() + "px";
        bubble.style.top = Math.round(Math.random() * 95 ).toString() + "%";
        bubble.style.left = Math.round(Math.random() * 99 ).toString() + "%";
        bubble.style.position = "fixed";

        document.body.appendChild(bubble);
    })
})