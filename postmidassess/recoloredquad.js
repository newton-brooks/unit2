// var identifier = window.prompt("please enter an identifier")
// var color1 = window.prompt("please enter a color")

// var newIdentifier = "#" + identifier
// document.querySelector(newIdentifier).style.backgroundColor = color1


// function colorQuads() {
//     let quadrant = '#' + prompt(`Select quadrant`)
//     let color = prompt("Now Choose any color you'll like")
//     let element = document.querySelector(quadrant)
    
//     if (!element){
//         window.alert("no element found")
//     } else {
//         element.style.backgroundColor = color        
//     }

//     setTimeout(function(){
//         let option = prompt("Would you like to add another color?")
//         if (option.toLowerCase() === "yes") {
//             colorQuads()
//         } 
//     }, 1000)
// }

// colorQuads()



let choice = window.prompt("Please choose a quadrant: #topleft, #topright, #bottomleft, or #bottomright :")

let color = window.prompt("Please type a color :") 


function colorQuads() {
    let quadrant = '#' + choice
    let chosenColor = color 
    let element = document.querySelector(quadrant)

        element.style.backgroundColor = chosenColor

}

colorQuads()