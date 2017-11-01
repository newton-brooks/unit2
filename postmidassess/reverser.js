// input = window.prompt("Please type something")


document.querySelector("form").addEventListener('submit', function(event){
    event.preventDefault()
    
  //  alert()
    var userInput = document.querySelector("#userinput").value

    var reverse = userInput.split('').reverse().join('')

    document.querySelector('#userinput').value = reverse
    // document.querySelector('p').innerText = reverse
    
    // window.alert(reverse)
})

