export const WINDOW_WIDTH = 812
export const WINDOW_HEIGHT = 375

love.conf = function(conf) {
  conf.window.title = 'LÖVE Typescript'
  conf.window.width = WINDOW_WIDTH
  conf.window.height = WINDOW_HEIGHT
  conf.window.highdpi = true
  conf.window.resizable = true
  conf.window.x = 600
  conf.window.y = 400
  conf.console = true
  conf.modules.sound = true
  conf.identity = 'love2d-typescript'
  // conf.window.borderless = true
}
