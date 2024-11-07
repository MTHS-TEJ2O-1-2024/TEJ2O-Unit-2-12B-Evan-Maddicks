/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan M
 * Created on: Oct 2024
 * This program will detect objects within 10cm
*/

//variables
let neopixelStrip: neopixel.Strip = null
let distanceFromObject = PingUnit.Centimeters

//cleanup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

//neopixels
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

//setup
input.onButtonPressed(Button.A,function() {
    basic.clearScreen()
    neopixelStrip.clear()
    distanceFromObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
if (distanceFromObject > 10) {
    neopixelStrip.show()
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
    } else {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    }
})