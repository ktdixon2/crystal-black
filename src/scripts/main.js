console.log("Hello from Crystal Black")

// Retrieve location on the DOM//

const container = document.querySelector("#mainDisplay")
    console.log("main display", mainDisplay);

//Fetch all currency data//
fetch(" https://api.coinlore.com/api/tickers/?start=0&limit=10")
    .then(currencies => currencies.json())
    .then(parsedCurrencies => {
        //console.log(parsedCurrencies);
        parsedCurrencies.data.forEach(currency => {
            console.log("currency", currency);
            const coinHTML = `
                    <article class="visited">
                    <h3>${currency.name}</h3>
                    <p>USDT \$${currency.price_usd}</p>
                    <p>BTC ${currency.price_btc}`;
                    container.innerHTML += coinHTML
        });
            
        });




// console.log("Hello from Crystal Black")

// // Retrieve location on the DOM//

// const mainDisplay = document.querySelector("#mainDisplay")
//     console.log("main display", mainDisplay)

// //Fetch all currency data//
// fetch("https://api.coinlore.com/api/tickers/?start=0&limit=10")
//     .then(currencies => currencies.json())
//     .then(parsedCurrencies => {
//         const allCurrencies = parsedCurrencies.data
//         allCurrencies.forEach(currency => {
//             console.log("allcurrencies", allCurrencies);
//             fetch(`https://api.coinlore.com/api/ticker/?id=${allCurrencies.id}`)
                    
            
//         });
            
//         });         
