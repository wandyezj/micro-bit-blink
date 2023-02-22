function sleep (milliseconds: number) {
    stamp = control.millis()
    // current time - previous time = time passed
    while (control.millis() - stamp < milliseconds) {
        control.waitMicros(1000)
    }
}
let stamp = 0
basic.showNumber(3)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    sleep(500)
    pins.digitalWritePin(DigitalPin.P0, 0)
    sleep(500)
})
