def on_button_pressed_a():
    name.move(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    name.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

name: game.LedSprite = None
name = game.create_sprite(2, 4)
eggs = game.create_sprite(0, 0)
pos = 4
pauses = 100
pos_eggs = 0

def on_forever():
    basic.pause(500)
    eggs.change(LedSpriteProperty.Y, 1)
    if eggs.is_touching(name):
        game.add_score(1)
        eggs.set(LedSpriteProperty.Y, 0)
        eggs.set(LedSpriteProperty.X, randint(0, 4))
    if True:
        pass
basic.forever(on_forever)
