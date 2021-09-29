input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    speed += -500
    music.playTone(131, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(147, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(988, music.beat(BeatFraction.Quarter))
})
let emptyObstacleY = 0
let ticks = 0
let bird: game.LedSprite = null
music.setVolume(255)
music.setTempo(135)
music.playTone(494, music.beat(BeatFraction.Eighth))
music.rest(music.beat(BeatFraction.Quarter))
music.playTone(587, music.beat(BeatFraction.Eighth))
music.rest(music.beat(BeatFraction.Quarter))
music.playTone(988, music.beat(BeatFraction.Eighth))
music.rest(music.beat(BeatFraction.Quarter))
music.playTone(880, music.beat(BeatFraction.Eighth))
music.rest(music.beat(BeatFraction.Half))
music.playTone(740, music.beat(BeatFraction.Quarter))
let index = 0
let obstacles: game.LedSprite[] = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
let speed = 1000
game.setScore(0)
game.setLife(1)
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle2 of obstacles) {
        obstacle2.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstacleY = randint(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != emptyObstacleY) {
                obstacles.push(game.createSprite(4, index2))
            }
        }
    }
    for (let obstacle3 of obstacles) {
        if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            music.setVolume(255)
            music.setTempo(160)
            music.playTone(523, music.beat(BeatFraction.Quarter))
            music.playTone(311, music.beat(BeatFraction.Quarter))
            music.playTone(523, music.beat(BeatFraction.Quarter))
            music.playTone(311, music.beat(BeatFraction.Eighth))
            game.removeLife(1)
            game.addScore(-1)
        }
    }
    ticks += 1
    basic.pause(speed)
})
loops.everyInterval(29999, function () {
    music.rest(music.beat(BeatFraction.Breve))
    game.addScore(10)
    game.addLife(1)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Eighth))
})
loops.everyInterval(5000, function () {
    speed += -50
    music.rest(music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Quarter))
})
