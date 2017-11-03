// var allLi = document.querySelectorAll('li')
document.addEventListener('click', function(event){
    if(event.target.tagName.toUpperCase() === 'li'){
        console.log(event.target)
    }
     
})
