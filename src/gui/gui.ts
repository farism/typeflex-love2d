import { UIBox } from './layout/Box'

interface GUIProps {
  width?: number
  height?: number
}

function sign(val: number) {
  if (val < 0) {
    return -1
  } else if (val > 0) {
    return 1
  }

  return 0
}

export class GUI {
  root: UIBox
  activeScrollable: UIBox[] = []
  activeScrollableIndex: number = 0
  scrollDirectionX: number = 0
  scrollVelocityX: number = 0
  scrollDirectionY: number = 0
  scrollVelocityY: number = 0

  constructor({}: GUIProps, root: UIBox) {
    this.root = root
  }

  setWidth(width: number) {
    this.root.setWidth(width)

    this.calculateLayout()
  }

  setHeight(height: number) {
    this.root.setHeight(height)

    this.calculateLayout()
  }

  calculateLayout() {
    this.root.calculateLayout()
  }

  getActiveScrollable(): UIBox | undefined {
    return this.activeScrollable[this.activeScrollableIndex]
  }

  update(dt: number) {
    this.root.update(dt)

    const scrollTarget = this.getActiveScrollable()

    if (scrollTarget) {
      // get X bounds
      const minX = 0
      const maxX = scrollTarget.getMaxScrollX()
      const scrollX =
        scrollTarget.scrollX + this.scrollDirectionX * this.scrollVelocityX

      scrollTarget.scrollX = Math.min(minX, Math.max(maxX, scrollX))

      // get Y bounds
      const minY = 0
      const maxY = scrollTarget.getMaxScrollY()
      const scrollY =
        scrollTarget.scrollY + this.scrollDirectionY * this.scrollVelocityY

      scrollTarget.scrollY = Math.min(minY, Math.max(maxY, scrollY))
    }

    // apply damping
    this.scrollVelocityX = Math.max(0, this.scrollVelocityX - 0.5)

    this.scrollVelocityY = Math.max(0, this.scrollVelocityY - 0.5)
  }

  draw() {
    this.root.draw()
  }

  onWheelMoved(dx: number, dy: number) {
    const scrollable = this.filterScrollable(this.root)

    this.activeScrollableIndex = scrollable.length - 1

    this.activeScrollable = scrollable

    const scrollTarget = this.getActiveScrollable()

    if (!scrollTarget) {
      return
    }

    const prevDirectionX = this.scrollDirectionX

    this.scrollDirectionX = sign(dx)

    const prevDirectionY = this.scrollDirectionY

    this.scrollDirectionY = sign(dy)

    if (this.scrollDirectionX !== prevDirectionX) {
      // changing direction, set velocity
      this.scrollVelocityX = Math.min(25, Math.abs(dx))
    } else {
      // same direction/momentum scrolling, add velocity
      this.scrollVelocityX = Math.min(25, Math.abs(dx) + this.scrollVelocityX)
    }

    if (this.scrollDirectionY !== prevDirectionY) {
      // changing direction, set velocity
      this.scrollVelocityY = Math.min(25, Math.abs(dy))
    } else {
      // same direction/momentum scrolling, add velocity
      this.scrollVelocityY = Math.min(25, Math.abs(dy) + this.scrollVelocityY)
    }

    // check scroll edges to determine if we need to scroll the parent instead
    const canScrollX = scrollTarget.getIsScrollableX()

    const canScrollY = scrollTarget.getIsScrollableY()

    const atTop = scrollTarget.isScrolledToTop()

    const atBottom = scrollTarget.isScrolledToBottom()

    const atLeft = scrollTarget.isScrolledToLeft()

    const atRight = scrollTarget.isScrolledToRight()

    if (
      (!canScrollY && this.scrollDirectionX === 0) ||
      (canScrollY && ((atTop && dy > 0) || (atBottom && dy < 0))) ||
      (!canScrollX && this.scrollDirectionY === 0) ||
      (canScrollX && ((atLeft && dx > 0) || (atRight && dx < 0)))
    ) {
      this.activeScrollableIndex--
    }
  }

  filterScrollable(box: UIBox | null, acc: UIBox[] = []): UIBox[] {
    if (!box) {
      return []
    }

    if (box.getIsScrollableX() || box.getIsScrollableY()) {
      acc.push(box)
    }

    if (box.getChildCount() > 0) {
      for (let i = 0; i < box.getChildCount(); i++) {
        this.filterScrollable(box.getChild(i), acc)
      }
    }

    return acc
  }
}
