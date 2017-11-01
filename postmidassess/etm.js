var arr = document.querySelectorAll('p')

arr.forEach(function(p, index){
    if(index % 2 === 0) {
        p.classList.add("bgYellow")
    } else {
        p.classList.add("bgGreen")
    }
})
