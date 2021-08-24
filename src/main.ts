import * as timer from './utils/timer'
import { Game } from './game'

const game = new Game()

love.load = () => {
  love.graphics.setBackgroundColor(229 / 255, 229 / 255, 229 / 255)
}

love.keypressed = function onKeypressed(key, scancode, isRepeat) {
  game.onKeypressed(key, scancode, isRepeat)
}

love.keyreleased = function onKeyreleased(key, scancode) {
  game.onKeyreleased(key, scancode)
}

love.mousepressed = function onMousepressed(x, y, button, isTouch) {
  game.onMousepressed(x, y, button, isTouch)
}

love.mousereleased = function onMousereleased(x, y, button, isTouch) {
  game.onMousereleased(x, y, button, isTouch)
}

love.mousemoved = function onMouseMoved(x, y, dx, dy, isTouch) {
  game.onMouseMoved(x, y, dx, dy, isTouch)
}

love.wheelmoved = function onWheelMoved(x, y) {
  game.onWheelMoved(x, y)
}

love.touchmoved = function onTouchMoved(id, tx, ty, dx, dy) {
  game.onTouchMoved(id, tx, ty, dx, dy)
}

love.touchpressed = function onTouchPressed(id, tx, ty, dx, dy) {
  game.onTouchPressed(id, tx, ty, dx, dy)
}

love.resize = function onResize(w, h) {
  game.onResize(w, h)
}

love.update = function onUpdate(dt) {
  timer.update(dt)

  game.update(dt)
}

love.draw = function onDraw() {
  love.graphics.setColor(0, 0, 0, 1)

  game.draw()
}
