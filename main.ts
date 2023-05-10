let Time = 0
let timer = 0
input.onButtonPressed(Button.A, function () {
    Time += 1
    basic.showNumber(Time)
    timer = Time
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < timer; index++) {
        basic.pause(1000)
        Time += -1
        basic.showNumber(Time)
    }
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
    }
})
