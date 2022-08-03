const input = require('sync-input');

function info() {
    console.log(`Welcome to Currency Converter!`);
    console.log(`1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);
}

let currencyList = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

function isCurrency(currency) {
    if (!(currency in currencyList)) {
        console.log("Unknown currency");
        return false;
    }
    return true;
}

function askFromCurrency() {
    console.log("From: ");
    let fromCurrency = input();
    fromCurrency = fromCurrency.toUpperCase();
    if (!isCurrency(fromCurrency)) convertCurrency()
    return fromCurrency;
}

function askToCurrency() {
    console.log("To: ");
    let toCurrency = input();
    toCurrency = toCurrency.toUpperCase();
    if (!isCurrency(toCurrency)) convertCurrency()
    return toCurrency;
}

function askAmount() {
    console.log("Amount: ");
    let amount = input();
    if (!Number(amount)) {
        console.log("The amount has to be a number");
        convertCurrency()
    }
    if (amount < 1) {
        console.log("The amount cannot be less than 1");
        convertCurrency()
    }
    return amount;
}

function convertCurrency() {
    console.log("What do you want to convert?");

    let fromCurrency = askFromCurrency();

    let toCurrency = askToCurrency();

    let amount = askAmount();

    let result = (((1 / currencyList[fromCurrency]) * amount) * currencyList[toCurrency]).toFixed(4);
    console.log(`Result: ${amount} ${fromCurrency} equals ${result} ${toCurrency}`);
}

function askAction() {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");

    let action = input();
    if (action == 1 || action == 2) return Number(action);
}

info();

while (true) {
    let action = askAction();
    let breakLoop = false;
    switch (action) {
        case 1:
            convertCurrency();
            break;
        case 2:
            breakLoop = true;
            break;
        default:
            console.log("Unknown input");
            break;
    }
    if (breakLoop) {
        console.log("Have a nice day!");
        break;
    }
}





