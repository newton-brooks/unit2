// let list = document.querySelector("ul")
// var ListArr = []
// function newList(input) {
//     var listObj = {
//         completed: false,
//         description: input
//     }
//     var input =  document.querySelector("#todoitem")
//     if (input.value) {
//         //let list = document.querySelector("ul");
//         let newItem = document.createElement("li");
//         newItem.innerText = input.value
//         list.appendChild(newItem)
//         input.value = "";
//     }
// }


// var listItems = document.querySelector("ul");

// listItems.addEventListener("click", function (event) {
//     let target = event.target
//     if (target.tagName.toUpperCase() == 'LI') {
//         target.style.textDecoration = target.style.textDecoration !== 'line-through' ? 'line-through' : 'none'
//     }
// })


// let submit = document.querySelector("#addnew");
// submit.addEventListener("click", function (event) {
//     event.preventDefault();
//     newList();
//     // console.log(listItems.childNodes.length);
// })


// let button = document.querySelector("#removedone");
// button.addEventListener("click", function (event) {
//     var listItems = document.querySelectorAll('li')
//    // var list = document.querySelector('ul')
//     for (var i = 0; i < listItems.length; i++){
//         if(listItems[i].style.textDecoration === 'line-through'){
//             list.removeChild(listItems[i])
//         }
//     }

// })



// button.addEventListener("click", function (event) {
//     var listItems = document.querySelectorAll('li')
//     var list = document.querySelector('ul')
//     for (var i = 0; i < listItems.length; i++){
//         if(listItems[i].style.textDecoration === 'line-through'){
//             list.removeChild(listItems[i])
//         }
//     }
// })


// var wholeList = document.querySelectorAll('ul').innerText

// console.log(wholeList)





// let list = document.querySelector("ul");



















// Dave

// var list = []
// var displayList = document.querySelector("ul");

// function newItem(input) {
//     let obj = { 
//         description: input,
//         finished: false
//     }
//     list.push(obj);
//     var jsonList = JSON.stringify(list)
//     window.localStorage.setItem("todolist", jsonList);
//     var item = document.createElement("li");
//     item.innerText = input;
//     displayList.appendChild(item);
// }
// function loadList() {
//     list = JSON.parse(window.localStorage.getItem("todolist"));
//     for (var i = 0; i < list.length;i++) {
//     var newItem = document.createElement("li")    
//         newItem.innerText = list[i].description;
//         displayList.appendChild(newItem);
//     }

// }

// let submit = document.querySelector("#addnew");
// submit.addEventListener("click", function (event) {
//     event.preventDefault();
//     let text = document.querySelector("#todoitem").value
//     newItem(text);
//     text.value = ""
// })
// loadList()
















// var listArr = []
// let list = document.querySelector("ul");



// function newList() {
//     if (input.value) {
//         let newItem = document.createElement("li");
//         newItem.innerText = input.value
//         list.appendChild(newItem)
//         input.value = "";
//     }
//     var input =  document.querySelector("#todoitem")
//     var listObj = {
//         completed: false,
//         description: newItem.innerText
//     }
//     listArr.push(listObj)
//     window.localStorage('list', JSON.stringify(listArr))
// }

// var listItems = document.querySelector("ul");

// listItems.addEventListener("click", function (event) {
//     let target = event.target
//     if (target.tagName.toUpperCase() == 'LI') {
//         target.style.textDecoration = target.style.textDecoration !== 'line-through' ? 'line-through' : 'none'
//     }
// })

// let submit = document.querySelector("#addnew");
// submit.addEventListener("click", function (event) {
//     event.preventDefault();
//     newList();
//     // console.log(listItems.childNodes.length);
// })

// let button = document.querySelector("#removedone");
// button.addEventListener("click", function (event) {
//     var listItems = document.querySelectorAll('li')
//     for (var i = 0; i < listItems.length; i++){
//         if(listItems[i].style.textDecoration === 'line-through'){
//             list.removeChild(listItems[i])
//         }
//     }

// })
  

// var getting = JSON.parse(window.localStorage.getItem('list', listArr))
























// Elon
// var input = document.querySelector("#todoitem");
// var ul = document.querySelector("ul");
// var btn = document.querySelector("#addnew");

// document.addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//         e.preventDefault()
//         li = document.createElement("li");
//         li.innerText = input.value;
//         ul.appendChild(li);
//         input.value = "";
//     }
    
//     window.localStorage.setItem("ul", ul.innerHTML)
// });

// ul.addEventListener("click", function(e){
//     e.target.style.textDecoration !== "line-through" ? e.target.style.textDecoration = "line-through" : e.target.style.textDecoration = "none"
//     window.localStorage.setItem("ul", ul.innerHTML)
// })

// btn.addEventListener("click", function () {
//     document.querySelectorAll("li").forEach(function (i) {
//         if(i.style.textDecoration === "line-through"){
//             ul.removeChild(i);
//         }
//     });
//     window.localStorage.setItem("ul", ul.innerHTML)
// });

// ul.innerHTML = window.localStorage.getItem("ul")


