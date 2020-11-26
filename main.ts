let currentBinaryNumber = "";

input.onButtonPressed(Button.A, function () {
    currentBinaryNumber += "0";
    basic.showString(`2:${currentBinaryNumber}`)
})

input.onButtonPressed(Button.B, function () {
    currentBinaryNumber += "1";
    basic.showString(`2:${currentBinaryNumber}`)
})

input.onPinPressed(TouchPin.P0, function () {
    basic.showString(`2:${currentBinaryNumber}`);
})

input.onPinPressed(TouchPin.P1, function () {
    currentBinaryNumber = "";
    basic.showString(`Reset`);
})

input.onButtonPressed(Button.AB, function () {
    const arrOfBinary = currentBinaryNumber.split("");
    arrOfBinary.reverse();
    let decimalValue = arrOfBinary.reduce(function (previousValue, currentValue, index) {
        return previousValue + (parseInt(currentValue) * Math.pow(2, index));
    }, 0)
    basic.showString(`10:${decimalValue}`)
})


