input.onButtonPressed(Button.A, function () {
    hummingbird.setPositionServo(FourPort.One, 180)
    basic.pause(100)
    hummingbird.setPositionServo(FourPort.One, 90)
    basic.pause(100)
    hiyaNoise()
})
input.onButtonPressed(Button.B, function () {
    hummingbird.setPositionServo(FourPort.Two, 180)
    basic.pause(100)
    hummingbird.setPositionServo(FourPort.Two, 90)
    basic.pause(100)
    punchNoise()
})
function hiyaNoise () {
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 1183, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Sine, 189, 5000, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
}
function punchNoise () {
    music.play(music.createSoundExpression(WaveShape.Triangle, 1154, 540, 255, 164, 300, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Triangle, 1154, 540, 255, 164, 300, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
}
hummingbird.startHummingbird()
