// var userText = document.querySelector('#textarea');
// userText.addEventListener('click', function(event) {
// var UserHold = ''
//    var input = document.querySelector('#textarea');
//     // var allTheBlurb = document.querySelector('#alltheblurb');
//     UserHold += ' ' + input.value;
//     window.localStorage.setItem(input, userHold.innerHTML);
//     input.value = '';
// })

var blurbKey = 'alltheblurb'

var blurb = document.querySelector('#blurb')
blurb.addEventListener('input', function (event) {
    window.localStorage.setItem(blurbKey, event.target.value)
})

blurb.value = window.localStorage.getItem(blurbKey)




