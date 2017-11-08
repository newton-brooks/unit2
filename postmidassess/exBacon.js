
function reqListener () {
    var para = this.responseText
    var p = document.createElement('p')
    document.body.appendChild(p).innerText = para
}



document.querySelector('button').addEventListener('click', function(){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1&format=text");
    oReq.send();            
})






