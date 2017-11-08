


function reqListener() {
    var coin = JSON.parse(this.responseText)
    document.querySelector('#price').innerText = coin.bpi.USD.rate_float
}




function converttoUSD(event) {
    var inputBox = document.querySelector('#Convert2US')
    var coin = JSON.parse(this.responseText)
    var OneBitCoin = coin.bpi.USD.rate_float
    var result = Number(inputBox.value) * OneBitCoin
    // document.querySelector('#price').innerText = result
    inputBox.value = result
}


function converttoBitcoin() {
    var inputBox = document.querySelector('#Convert2Bit')
    var coin = JSON.parse(this.responseText)
    var OneBitCoin = coin.bpi.USD.rate_float
    var result = Number(inputBox.value) / OneBitCoin
    // document.querySelector('#price').innerText = result
    inputBox.value = result
}




document.querySelector('#USDButton').addEventListener('click', function () {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", converttoUSD);
    oReq.open("GET", "https://api.coindesk.com/v1/bpi/currentprice/USD.json");
    oReq.send();
})



document.querySelector('#BitcoinButton').addEventListener('click', function () {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", converttoBitcoin);
    oReq.open("GET", "https://api.coindesk.com/v1/bpi/currentprice/USD.json");
    oReq.send();

})



document.querySelector('#fetchButton').addEventListener('click', function () {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    oReq.send();

})


