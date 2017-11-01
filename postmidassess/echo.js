
var header = document.querySelector('h1')
document.addEventListener('keypress', function(event) {
//    if(event.key.toUpperCase() === event.key){
    if(!event.ctrlKey){
        header.innerHTML += event.key;
    } 
    if(event.key >= 'A' && event.key <= "Z" && event.key.length === 1){
            header.style.textDecoration = "underline";
     } else if (".?!".includes(event.key)){
            header.style.textDecoration = "none"
        }

    });


    // if()

    //     (/^[A-Z]$/.test(event.key))

   
   
