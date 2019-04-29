// Retrieve location on the DOM//

const container = document.querySelector("#mainDisplay")

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