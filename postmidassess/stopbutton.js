var header = document.querySelector('#header')
var start = document.querySelector('#start')
var stop = document.querySelector('#stop')
var starter;



start.addEventListener('click', function(ev){
    // ev.preventDefault()
    starter = setInterval(function (){
        //var strNumber = header.innerText;
        header.innerText = Number(header.innerText) + 1
    }, 1000)     
})


stop.addEventListener('click', function(ev){
    clearInterval(starter)
})






// var header = document.querySelector('#header')
// var start = document.querySelector('#start')
// var stop = document.querySelector('#stop')
// var starter;
// var eventCount = false;


// start.addEventListener('click', function(event){
//     if (eventCount === false) {
//         eventCount = !eventCount;
//         starter = setInterval(function () {
//         header.innerText = Number(header.innerText) + 1
//         }, 250)   
//     }      
// })


// stop.addEventListener('click', function(ev){
//         eventCount = false;
//         clearInterval(starter)
// })



// var intervalTimer;
// var counting = false;
// var header = document.querySelector('h1');
// var button = document.querySelector('button');
// var counter = 0;

// function toggle() {
// 	counting = !counting;
// 	if (!counting) {
// 		clearInterval(intervalTimer);
// 		button.innerText = 'Continue Counting';
// 	} else {
// 		button.innerText = 'Stop Counting';
// 		intervalTimer = window.setInterval((el) => {
// 			counter += 1;
// 			header.innerText = counter;
// 		}, 250);
// 	}
// }

// button.addEventListener('click', (event) => {
// 	console.log(intervalTimer);
// 	toggle();
// });
