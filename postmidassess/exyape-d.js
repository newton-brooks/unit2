// var allLi = document.querySelectorAll('li')

var list = document.querySelector('ol')

document.addEventListener('click', function(event){
 if(event.target.tagName.toUpperCase() === 'LI') {
    var n = document.createElement('LI');
    n.innerHTML = event.target.innerHTML;
    list.appendChild(n)
 }
 
})