radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(1000)
    if (dice_throw > receivedNumber) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola!")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(dice_throw)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    dice_throw = randint(1, 6)
    basic.showNumber(dice_throw)
    basic.pause(1000)
})
let dice_throw = 0
radio.setGroup(1)
