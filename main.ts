radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1337) {
        if (vaiiable_a1 == 0 && vaiiable_b1 == 2) {
            basic.showString("W")
            radio.sendString("\"L\"")
        } else if (vaiiable_a1 == 1 && vaiiable_b1 == 0) {
            basic.showString("W")
            radio.sendString("\"L\"")
        } else if (vaiiable_a1 == 2 && vaiiable_b1 == 1) {
            basic.showString("W")
            radio.sendString("\"L\"")
        } else if (vaiiable_a1 == vaiiable_b1) {
            basic.showString("D")
            radio.sendString("D")
        } else {
            basic.showString("L")
            radio.sendString("W")
        }
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
    vaiiable_b1 = -1
    vaiiable_a1 = -1
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("s")
    vaiiable_a1 = 0
    basic.showString("S")
    pauseUntil(() => vaiiable_b1 > -1)
    radio.sendNumber(1337)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("r")
    vaiiable_a1 = 1
    basic.showString("R")
    pauseUntil(() => vaiiable_b1 > -1)
    radio.sendNumber(1337)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "p") {
        vaiiable_b1 = 2
    } else if (receivedString == "r") {
        vaiiable_b1 = 1
    } else if (receivedString == "s") {
        vaiiable_b1 = 0
    } else if (receivedString == "L") {
        basic.showString("L")
    } else if (receivedString == "D") {
        basic.showString("D")
    } else if (receivedString == "W") {
        basic.showString("W")
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("p")
    vaiiable_a1 = 2
    basic.showString("P")
    pauseUntil(() => vaiiable_b1 > -1)
    radio.sendNumber(1337)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    vaiiable_a1 = -1
    vaiiable_b1 = -1
})
let vaiiable_a1 = 0
let vaiiable_b1 = 0
basic.clearScreen()
vaiiable_b1 = -1
vaiiable_a1 = -1
radio.setGroup(56)
