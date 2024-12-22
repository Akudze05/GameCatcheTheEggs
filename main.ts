input.onButtonPressed(Button.A, function () {
    name.move(-1)
})
input.onButtonPressed(Button.B, function () {
    name.move(1)
})
let pos_eggs = 0
let name: game.LedSprite = null
name = game.createSprite(2, 4)
let eggs = game.createSprite(0, 0)
let pos = 4
let pauses = 500
basic.forever(function () {
    pos_eggs = eggs.get(LedSpriteProperty.Y)
    basic.pause(pauses)
    eggs.change(LedSpriteProperty.Y, 1)
    if (eggs.isTouching(name)) {
        game.addScore(1)
        eggs.set(LedSpriteProperty.Y, 0)
        eggs.set(LedSpriteProperty.X, randint(0, 4))
    }
    if (pos_eggs == 4) {
        game.gameOver()
    }
    pauses = pauses - 10
})
