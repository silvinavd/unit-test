// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}


//EURO TO DOLLAR
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
console.log(fromEuroToDollar(1))

//DOLLAR TO YEN
const fromDollarToYen = function (valueInDollar){
    let valueInYen = (valueInDollar / 1.2)*127.9
    return valueInYen;
}
console.log(fromDollarToYen(5))

//YEN TO POUND
const fromYenToPound = function (valueInYen) {
    let valueInPound = (valueInYen / 127.9)*0.8
    return valueInPound;
}
console.log(fromYenToPound(1))





module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
