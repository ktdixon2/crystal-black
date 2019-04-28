// Retrieve location on the DOM//

const container = document.querySelector("#mainDisplay")

//Fetch all currency data//
fetch(" https://api.coinlore.com/api/tickers/?start=0&limit=10")
    .then(currencies => currencies.json())
    .then(parsedCurrencies => {
        parsedCurrencies.data.forEach(currency => {
            const coinHTML = `
                    <article class="visited">
                    <h3>${currency.name}</h3>
                    <p>USDT \$${currency.price_usd}</p>
                    <p>BTC ${currency.price_btc}</p>
                    <p>24hr Change ${currency.percent_change_24h}</p>`;
                    container.innerHTML += coinHTML
        });
            
        });