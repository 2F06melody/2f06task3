input.onButtonPressed(Button.A, function () {
    hi = 0
})
input.onButtonPressed(Button.B, function () {
    hi = 9
    while (hi >= 0) {
        basic.showNumber(hi)
        hi += -1
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
})
let hi = 0
basic.showString("2F06 chaumut")
basic.forever(function () {
	
})
