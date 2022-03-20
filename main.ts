huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.PINK)
        basic.showString("Javier")
    } else if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showString("Lucia")
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
        basic.showIcon(IconNames.No)
    }
})
