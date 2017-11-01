
//   var body = document.querySelector('body')
//   document.addEventListener('click', function(event) {
//     if(event.clientX < window.innerWidth / 2){
//         body.style.backgroundColor = "mediumaquamarine"
//     } else {
//         body.style.backgroundColor = "peachpuff"
//     }
//   });

var body = document.querySelector('body')
document.addEventListener('click', function(event) {
    // console.log(event.clientX)
    // console.log(event.screenX)
  var leftside = event.x < window.innerWidth / 2;
body.style.backgroundColor = leftside ? "mediumaquamarine" : "peachpuff"

});


//   document.addEventListener('click',function(event){
//     var check = window.innerWidth
//     console.log("check" + check)
//     console.log("event: " + event.screenX)
//     if (event.screenX < (check/2)){
//         document.body.style.backgroundColor = "mediumaquamarine"
//     } else {
//         document.body.style.backgroundColor = "peachpuff"
//     }
// })