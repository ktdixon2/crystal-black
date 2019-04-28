console.log("Hello from Crystal Black")

// Retrieve location on the DOM//

const container = document.querySelector("#container")
    console.log("main display", container)

//Fetch all currency data//
fetch("https://api.coinlore.com/api/tickers", {
        mode: 'no-cors'
})
    .then(currencies => currencies.json())
        console.log("currencies", currencies)
    .then(parsedCurrencies => {
        const allCurrencies = data.name
        allCurrencies.forEach(currency => {

            
        })
    })            
