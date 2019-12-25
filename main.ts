input.onButtonPressed(Button.B, function () {
    radio.sendString("LEDs Off")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("LEDs On")
})
let turn = 0
let forward = 0
let stopped = images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
let arrowForward = images.createImage(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
let arrowBackward = images.createImage(`
    . . # . .
    . . # . .
    # . # . #
    . # # # .
    . . # . .
    `)
let arrowLeft = images.createImage(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
let arrowRight = images.createImage(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
radio.setGroup(1)
let tiltTrigger = 400
stopped.showImage(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Y) < 0 - tiltTrigger) {
        forward = 1
        radio.sendString("Forward")
        arrowForward.showImage(0)
    } else if (input.acceleration(Dimension.Y) > tiltTrigger) {
        forward = -1
        radio.sendString("Backward")
        arrowBackward.showImage(0)
    } else {
        forward = 0
    }
    if (input.acceleration(Dimension.X) < 0 - tiltTrigger) {
        turn = 2
        radio.sendString("Left")
        arrowLeft.showImage(0)
    } else if (input.acceleration(Dimension.X) > tiltTrigger) {
        turn = -2
        radio.sendString("Right")
        arrowRight.showImage(0)
    } else {
        turn = 0
    }
    if (turn == 0 && forward == 0) {
        radio.sendString("Stop")
        stopped.showImage(0)
    }
})
