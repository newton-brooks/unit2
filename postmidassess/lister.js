var todos = ['dog', 'cat']
let submit = document.querySelector("#addnew");
let btnRemDone = document.querySelector("#removedone");
var todoList = document.querySelector("#todos");


/**
 * @function rederTodos
 * Shows all todos as an HTML list on the page
 */
function renderTodos(){
    todos.forEach(function (elem){
        addListItem(elem)
    })
}

renderTodos()

/**
 * @function addListItem
 * @param  {string} description
 * Inserts a new <li> element to the page
 */
function addListItem(description) {
    console.log('adding input: ', description)
    // if description is not an empty string
    if (description) {
        // getting the todos <ul> element from the page        
        let list = document.querySelector("#todos");
        // Creating a new <li> element
        let newItem = document.createElement("li");
        // Setting the text of the <li> to the todo description
        newItem.innerText = description
        // Appending the new <li> to the todos <ul> element
        list.appendChild(newItem)
    }
}

todoList.addEventListener("click", function (event) {
    let target = event.target;
    target.style.textDecoration = 
        target.style.textDecoration !== 'line-through' ? 
            'line-through' 
        : 'none'
})

submit.addEventListener("click", function (event) {
    // preventing the form from being submitted
    event.preventDefault();
    // getting the text input element
    var input = document.querySelector("#text")
    // getting the todo description from the input element
    var description = input.value;

    if (description) {
        // Adding item to todos array
        todos.push(description)
        // Saving the todos array to local storage
        window.localStorage.setItem('todos', todos) 
                
        // Saving the description to local storage
        window.localStorage.setItem('lastInput', description) 
        // Adding a list item with the description
        addListItem(description);

        // Emptying the text of the input element
        input.value = '';
    } 
})





btnRemDone.addEventListener("click", function (event) {
    var listItems = document.querySelectorAll('#todos li')
    console.log(listItems)
    var list = document.querySelector('#todos')

    for (var i = 0; i < listItems.length; i++) {
        if (listItems[i].style.textDecoration === 'line-through') {
            list.removeChild(listItems[i])
        }
    }
})


// function onPageLoad(){
//     // This code is executed When the page loads
//     var lastInput = window.localStorage.getItem('lastInput')
//     console.log('last Input: ', lastInput)
//     addListItem(lastInput)
// }

// onPageLoad()