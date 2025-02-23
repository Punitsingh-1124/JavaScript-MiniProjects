var btc =document.getElementById("bitcoin");
var eth =document.getElementById("ethereum");
var doge =document.getElementById("dogecoin");


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd"),
    "method": "GET",
    "headers": {}
};

$.ajax(settings).done(function(response) {
   let data = JSON.parse(response.contents);
   btc.innerHTML = data.bitcoin.usd;
   eth.innerHTML = data.ethereum.usd;
   doge.innerHTML = data.dogecoin.usd;
});
