var blurbKey = 'allTheBlurb'

var appendblurb = document.querySelector('#appendBlurb');
appendblurb.addEventListener('click', function(event) {
   var input = document.querySelector('#blurb');
    var allTheBlurb = document.querySelector('#alltheblurb');
    allTheBlurb.innerText += ' ' + input.value;
    window.localStorage.setItem(blurbKey, allTheBlurb.innerHTML);
    input.value = '';
   
})





var allTheBlurb = document.querySelector('#alltheblurb')
allTheBlurb.innerText = window.localStorage.getItem(blurbKey);



var clearblurb = document.querySelector('#clearblurb');
clearblurb.addEventListener('click', function(event) {
    var input = document.querySelector('#blurb');
    var allTheBlurb = document.querySelector('#alltheblurb');
        input.value = ''
        // window.localStorage.setItem(blurbKey, '')
        // window.localStorage.clear()
        window.localStorage.removeItem(blurbKey)
        allTheBlurb.innerText = ''
})


// REVIEW GET ITEM AND SET ITEM