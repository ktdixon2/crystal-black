// Retrieve location on the DOM//

const container = document.querySelector("#mainDisplay")
const bitmexDOM = document.querySelector("#bitmexDOM")
console.log("bitmex", bitmexDOM);

//Fetch all currency data//
fetch("https://api.coinlore.com/api/tickers/?start=0&limit=10")
    .then(currencies => currencies.json())
    .then(parsedCurrencies => {
        parsedCurrencies.data.forEach(currency => {
            const coinHTML = `
                    <article class="currencies">
                    <h2>${currency.name}</h2>
                    <h4>${currency.symbol}</h4>
                    <p>\$${currency.price_usd}</p>
                    <p>${currency.price_btc}</p>
                    <p>24hr ${currency.percent_change_24h}</p>`;
                    container.innerHTML += coinHTML
        });
            
    });

fetch("https://www.bitmex.com/api/v1/chat", {
    "mode": "no-cors"
})
    .then(response => response.json())
    .then(parsedChats => {
        parsedChats.forEach(chat => {
            console.log("chat", parsedChats)
            
        });
    });   

//Nonce using Epoch time. 

const ts = Math.round((new Date()).getTime() / 1000);