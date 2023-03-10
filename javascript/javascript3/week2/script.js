function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then(res => res.json())
      .then(data => {
        const exchangeRate = data.rates[toCurrency];
        const result = (amount * exchangeRate).toFixed(2);
        document.getElementById("result").innerHTML = result;
      })
      .catch(err => console.log(err));
  }
  