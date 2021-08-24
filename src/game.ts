import { KeyConstant, Scancode } from 'love.keyboard'
import { gui } from './gui'

export class Game {
  font = love.graphics.newFont(12, 'normal')
  text = love.graphics.newText(this.font, '')
  hovered = false
  dragging = false
  scale = 1
  translateX = 0
  translateY = 0
  world = love.physics.newWorld(0, 9.8 * 30)

  constructor() {}

  update(dt: number) {
    this.world.update(dt, 6, 6)

    gui.update(dt)
  }

  draw() {
    gui.draw()
  }

  onKeypressed(key: KeyConstant, scancode: Scancode, isRepeat: boolean) {}

  onKeyreleased(key: KeyConstant, scancode: Scancode) {}

  onMousepressed(x: number, y: number, button: number, isTouch: boolean) {}

  onMousereleased(x: number, y: number, button: number, isTouch: boolean) {}

  onMouseMoved(
    x: number,
    y: number,
    dx: number,
    dy: number,
    isTouch: boolean
  ) {}

  onWheelMoved(dx: number, dy: number) {
    gui.onWheelMoved(dx, dy)
  }

  onTouchMoved(id: any, x: number, y: number, dx: number, dy: number) {}

  onTouchPressed(id: any, x: number, y: number, dx: number, dy: number) {}

  onResize(w: number, h: number) {
    gui.setWidth(w)
    gui.setHeight(h)
    gui.calculateLayout()
  }
}
