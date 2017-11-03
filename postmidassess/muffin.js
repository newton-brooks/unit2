

var eat = document.querySelector('#eat')
var bake = document.querySelector('#bake')
// var header = header.innerText
var header = document.querySelector('h1')


eat.addEventListener('click', function(){
    if(muffinCount <= 0){
        header.innerText = "No more Muffins"
    } else {
        muffinCount -= 1;
        header.innerText = 'Muffin Count:' + muffinCount
    }
    window.localStorage.setItem('header', muffinCount)
})

bake.addEventListener('click', function(){
        muffinCount += 5
        header.innerText = 'Muffin Count:' + muffinCount
        window.localStorage.setItem('header', muffinCount)
})

var muffinsFromStorage = window.localStorage.getItem('header')

var muffinCount = 10;
if(muffinsFromStorage !== null) {
    muffinCount = Number(muffinsFromStorage)
}

header.innerText = 'Muffin Count:' + muffinCount




// json.prasre
// json.stringify