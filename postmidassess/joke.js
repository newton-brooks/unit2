// function reqListener () {
//     var joke = JSON.parse(this.responseText)
//    document.querySelector('#joke').innerText = joke.setup 
//    setTimeout(function() {
//     document.querySelector('#punchline').innerText = joke.punchline
//    }, 3000)
   
//   }
  


//   document.addEventListener('DOMContentLoaded', function (){
//     document.querySelector('#anotherone').addEventListener('click', function (){
//         var oReq = new XMLHttpRequest();
//         oReq.addEventListener("load", reqListener);
//         oReq.open("GET", "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke");
//         oReq.send();
//         document.querySelector('#punchline').innerText = '';
//       })
//   })
 


var joke;

function reqListener () {
    joke = JSON.parse(this.responseText)
   document.querySelector('#joke').innerText = joke.setup;
   document.querySelector('#punchline').innerText = '';
   document.querySelector('#anotherone').innerText = 'I dont know';
   setTimeout(function() {
    document.querySelector('#punchline').innerText = joke.punchline
    document.querySelector('#anotherone').innerText = 'make joke'
    joke = undefined
   }, 7000)
   lastTimer = setTime
   
  }
  


  document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('#anotherone').addEventListener('click', function (){
        if(joke){
            document.querySelector('#punchline').innerText = joke.punchline
            document.querySelector('#anotherone').innerText = 'make joke'
            joke = undefined
        } else {
            var oReq = new XMLHttpRequest();
            oReq.addEventListener("load", reqListener);
            oReq.open("GET", "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke");
            oReq.send();
        }
       
       
      })
  })


   