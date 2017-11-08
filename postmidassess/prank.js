var input = document.querySelector('#textbox')
var submit = document.querySelector("#submit")

submit.addEventListener('click', function(ev){
    ev.preventDefault()
    document.querySelector('#para').innerText = 'You typed: I hate marshmallows'
    setTimeout(function(){
      document.querySelector('#para').innerText = 'Just kidding you typed: ' + input.value
      input.value = ''
    }, 1000)
})