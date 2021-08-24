import { HintingMode } from 'love.font'
import { Transform } from 'love.math'
import {
  Align,
  Direction,
  Justify,
  Overflow,
  toYGAlign,
  toYGFlexDirection,
  toYGJustify,
  toYGOverflow,
  toYGWrap,
  Wrap,
} from '../typeflex/enum'
import * as typeflex from '../typeflex/typeflex'
import {
  Config,
  EDGE_ALL,
  EDGE_BOTTOM,
  EDGE_LEFT,
  EDGE_RIGHT,
  EDGE_TOP,
  Node,
  OVERFLOW_VISIBLE,
} from '../typeflex/typeflex'

type RGBA = [number, number, number, number]

export interface UIBoxStyle {
  alignContent: Align
  alignItems: Align
  backgroundColor: RGBA
  basis: number | string
  border: number
  borderBottom: number
  borderColor: RGBA
  borderLeft: number
  borderRadius: number
  borderRight: number
  borderTop: number
  color: RGBA
  direction: Direction
  fontHinting: HintingMode
  fontSize: number
  grow: number
  height: number | string
  justifyContent: Justify
  margin: number
  marginBottom: number
  marginLeft: number
  marginRight: number
  marginTop: number
  maxHeight: number
  maxWidth: number
  minHeight: number
  minWidth: number
  overflow: Overflow
  padding: number
  paddingBottom: number
  paddingLeft: number
  paddingRight: number
  paddingTop: number
  shrink: number
  width: number | string
  wrap: Wrap
}

function noop() {}

const nocolor: RGBA = [0, 0, 0, 0]

const defaults: Partial<UIBoxStyle> = {
  alignContent: 'flex-start',
  alignItems: 'flex-start',
  backgroundColor: nocolor,
  basis: undefined,
  border: 0,
  borderColor: nocolor,
  color: nocolor,
  direction: 'row',
  fontHinting: 'normal',
  fontSize: 0,
  grow: 1,
  height: 'auto',
  justifyContent: 'flex-start',
  margin: 0,
  overflow: 'visible',
  padding: 0,
  shrink: 1,
  width: 'auto',
  wrap: 'no-wrap',
}

export interface UIBoxProps {
  id?: string
  config?: Config
  style?: Partial<UIBoxStyle>

  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onMouseDown?: () => void
  onMouseUp?: () => void
}

export class UIBox extends Node {
  id: string

  // all styles
  style: Partial<UIBoxStyle>

  // event handlers
  onMouseEnter: () => void = () => {}
  onMouseLeave: () => void = () => {}
  onMouseDown: () => void = () => {}
  onMouseUp: () => void = () => {}

  // scroll components
  scrollTrackX: UIBox | null = null
  scrollThumbX: UIBox | null = null
  scrollTrackY: UIBox | null = null
  scrollThumbY: UIBox | null = null

  // state
  isMouseOver: boolean = false
  isMouseDown: boolean = false
  scaleX: number = 0
  scaleY: number = 0
  scrollX: number = 0
  scrollY: number = 0
  translateX: number = 0
  translateY: number = 0
  transform: Transform | null = null

  constructor(
    {
      id = '',
      config,
      style = {},
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseUp,
    }: UIBoxProps = {},
    children: UIBox[] = []
  ) {
    super(config)

    this.id = id

    this.style = style

    // dimensions
    this.setWidth(this.style.width || 'auto')

    this.setHeight(this.style.height || 'auto')

    if (this.style.minWidth) {
      this.setMinWidth(this.style.minWidth)
    }

    if (this.style.minHeight) {
      this.setMinHeight(this.style.minHeight)
    }

    if (this.style.maxWidth !== undefined) {
      this.setMaxWidth(this.style.maxWidth)
    }

    if (this.style.maxHeight !== undefined) {
      this.setMaxHeight(this.style.maxHeight)
    }

    // border
    const border = this.style.border || 0

    this.setBorder(EDGE_ALL, border)

    if (this.style.borderTop) {
      this.setBorder(EDGE_TOP, this.style.borderTop)
    }

    if (this.style.borderRight) {
      this.setBorder(EDGE_RIGHT, this.style.borderRight)
    }

    if (this.style.borderBottom) {
      this.setBorder(EDGE_BOTTOM, this.style.borderBottom)
    }

    if (this.style.borderLeft) {
      this.setBorder(EDGE_LEFT, this.style.borderLeft)
    }

    // margin
    const margin = this.style.margin || 0

    this.setMargin(EDGE_ALL, margin)

    if (this.style.marginTop) {
      this.setMargin(EDGE_TOP, this.style.marginTop)
    }

    if (this.style.marginRight) {
      this.setMargin(EDGE_RIGHT, this.style.marginRight)
    }

    if (this.style.marginBottom) {
      this.setMargin(EDGE_BOTTOM, this.style.marginBottom)
    }

    if (this.style.marginLeft) {
      this.setMargin(EDGE_LEFT, this.style.marginLeft)
    }

    // padding
    const padding = this.style.padding || 0

    this.setPadding(EDGE_ALL, padding)

    if (this.style.paddingTop) {
      this.setPadding(EDGE_TOP, this.style.paddingTop)
    }

    if (this.style.paddingRight) {
      this.setPadding(EDGE_RIGHT, this.style.paddingRight)
    }

    if (this.style.paddingBottom) {
      this.setPadding(EDGE_BOTTOM, this.style.paddingBottom)
    }

    if (this.style.paddingLeft) {
      this.setPadding(EDGE_LEFT, this.style.paddingLeft)
    }

    // flexbox
    this.setOverflow(toYGOverflow(this.style.overflow || 'visible'))
    this.setFlexDirection(toYGFlexDirection(this.style.direction || 'row'))
    this.setFlexWrap(toYGWrap(this.style.wrap || 'no-wrap'))
    this.setJustifyContent(
      toYGJustify(this.style.justifyContent || 'flex-start')
    )
    this.setAlignContent(toYGAlign(this.style.alignContent || 'flex-start'))
    this.setAlignItems(toYGAlign(this.style.alignItems || 'flex-start'))
    this.setFlexGrow(this.style.grow !== undefined ? this.style.grow : 0)
    this.setFlexShrink(this.style.shrink !== undefined ? this.style.shrink : 0)
    if (this.style.basis) {
      this.setFlexBasis(this.style.basis)
    }

    // callbacks
    this.onMouseEnter = onMouseEnter || noop
    this.onMouseLeave = onMouseLeave || noop
    this.onMouseDown = onMouseDown || noop
    this.onMouseUp = onMouseUp || noop

    if (this.style.overflow === 'scroll') {
      this.scrollTrackY = Box({
        style: {
          width: 20,
          direction: 'column',
          alignItems: 'stretch',
          backgroundColor: [1, 0, 0, 0.5],
          border: 2,
          borderColor: [1.0, 1.0, 1.0, 0.5],
        },
      })

      this.scrollThumbY = Box({
        style: {
          backgroundColor: [1, 1, 1, 1],
          border: 2,
          borderColor: [0, 0, 0, 1],
        },
      })

      this.scrollTrackY.insertChild(this.scrollThumbY, 0)

      this.scrollTrackX = Box({
        style: {
          height: 20,
          direction: 'row',
          alignItems: 'stretch',
          backgroundColor: [1, 0, 0, 0.5],
          border: 2,
          borderColor: [1.0, 1.0, 1.0, 0.5],
        },
      })

      this.scrollThumbX = Box({
        style: {
          backgroundColor: [1, 1, 1, 1],
          border: 2,
          borderColor: [0, 0, 0, 1],
        },
      })

      this.scrollTrackX.insertChild(this.scrollThumbX, 0)
    }

    // add all the children
    children.forEach(child => {
      this.insertChild(child, this.getChildCount())
    })
  }

  getTransform(): Transform {
    const p = this.getParent()

    const transform = p ? p.getTransform().clone() : love.math.newTransform()

    return transform
  }

  getParentScrollTransform(): Transform {
    let parent = this.getParent()

    if (parent !== undefined) {
      // find the closest scrolling parent
      while (parent && parent.style?.overflow !== 'scroll') {
        parent = parent.getParent()
      }
    }

    return love.math.newTransform(
      parent ? parent.scrollX : 0,
      parent ? parent.scrollY : 0
    )
  }

  getComputedX(): number {
    return this.getParentComputedX() + this.getComputedLeft()
  }

  getComputedY(): number {
    return this.getParentComputedY() + this.getComputedTop()
  }

  getComputedLayout() {
    return {
      x: this.getComputedX(),
      y: this.getComputedY(),
      width: this.getComputedWidth(),
      height: this.getComputedHeight(),
    }
  }

  getChild(index: number): UIBox | null {
    return super.getChild(index) as UIBox
  }

  getParent(): UIBox | undefined {
    return super.getParent() as UIBox
  }

  getParentComputedX(): number {
    const p = this.getParent()

    return p ? p.getComputedX() : 0
  }

  getParentComputedY(): number {
    const p = this.getParent()

    return p ? p.getComputedY() : 0
  }

  getComputedViewportX() {
    return (
      this.getComputedX() +
      this.getComputedBorder(EDGE_LEFT) +
      this.getComputedPadding(EDGE_LEFT)
    )
  }

  getComputedViewportY() {
    return (
      this.getParentScrollTransform().transformPoint(
        0,
        this.getComputedY()
      )[1] +
      this.getComputedBorder(EDGE_TOP) +
      this.getComputedPadding(EDGE_TOP)
    )
  }

  getComputedViewportHeight() {
    return (
      this.getComputedHeight() -
      this.getComputedBorder(EDGE_TOP) -
      this.getComputedPadding(EDGE_TOP) -
      this.getComputedPadding(EDGE_BOTTOM) -
      this.getComputedBorder(EDGE_BOTTOM)
    )
  }

  getComputedViewportWidth() {
    return (
      this.getComputedWidth() -
      this.getComputedBorder(EDGE_LEFT) -
      this.getComputedPadding(EDGE_LEFT) -
      this.getComputedPadding(EDGE_RIGHT) -
      this.getComputedBorder(EDGE_RIGHT)
    )
  }

  getComputedViewportLayout() {
    return {
      x: this.getComputedViewportX(),
      y: this.getComputedViewportY(),
      width: this.getComputedViewportWidth(),
      height: this.getComputedViewportHeight(),
    }
  }

  getComputedChildrenWidth() {
    if (this.getFlexDirection() === typeflex.FLEX_DIRECTION_COLUMN) {
      let widestChild = 0

      this.forEachChild(child => {
        if (child) {
          widestChild = Math.max(widestChild, child.getComputedWidth())
        }
      })

      return widestChild
    }

    let width = 0

    this.forEachChild(child => {
      if (child) {
        width +=
          child.getComputedWidth() +
          child.getComputedMargin(EDGE_LEFT) +
          child.getComputedMargin(EDGE_RIGHT)
      }
    })

    return width
  }

  forEachChild(fn: (child: UIBox | null) => void) {
    for (let i = 0; i < this.getChildCount(); i++) {
      fn(this.getChild(i))
    }
  }

  getComputedChildrenHeight() {
    if (this.getFlexDirection() === typeflex.FLEX_DIRECTION_ROW) {
      let tallestChild = 0

      this.forEachChild(child => {
        if (child) {
          tallestChild = Math.max(tallestChild, child.getComputedHeight())
        }
      })

      return tallestChild
    }

    let height = 0

    this.forEachChild(child => {
      if (child) {
        height +=
          child.getComputedHeight() +
          child.getComputedMargin(EDGE_TOP) +
          child.getComputedMargin(EDGE_BOTTOM)
      }
    })

    return height
  }

  getMaxScrollX() {
    return this.getComputedViewportWidth() - this.getComputedChildrenWidth()
  }

  getMaxScrollY() {
    return this.getComputedViewportHeight() - this.getComputedChildrenHeight()
  }

  getIsScrollableX() {
    return (
      this.style.overflow === 'scroll' &&
      this.isMouseOver &&
      this.getMaxScrollX() < 0
    )
  }

  getIsScrollableY() {
    return (
      this.style.overflow === 'scroll' &&
      this.isMouseOver &&
      this.getMaxScrollY() < 0
    )
  }

  isScrolledToLeft() {
    return this.scrollX === 0
  }

  isScrolledToRight() {
    return this.scrollX === this.getMaxScrollX()
  }

  isScrolledToTop() {
    return this.scrollY === 0
  }

  isScrolledToBottom() {
    return this.scrollY === this.getMaxScrollY()
  }

  // TODO account for parent stencil area so that you cant interact with an overflown box
  contains([x, y]: [number, number]) {
    let [tx, ty] = this.getParentScrollTransform()
      .apply(this.getTransform())
      .inverseTransformPoint(x, y)

    const rect = this.getComputedLayout()

    return (
      tx >= rect.x &&
      tx <= rect.x + rect.width &&
      ty > rect.y &&
      ty <= rect.y + rect.height
    )
  }

  update(dt: number) {
    if (this.id === 'test') {
      return
    }

    const isMouseOver = this.contains(love.mouse.getPosition())

    const isMouseDown = this.isMouseOver && love.mouse.isDown(1)

    if (isMouseOver !== this.isMouseOver) {
      if (!this.isMouseOver && isMouseOver) {
        this.onMouseEnter()
      } else if (this.isMouseOver && !isMouseOver) {
        this.onMouseLeave()
      }
    }

    if (isMouseDown !== this.isMouseDown) {
      if (!this.isMouseDown && isMouseDown) {
        this.onMouseDown()
      } else if (isMouseOver && this.isMouseDown && !isMouseDown) {
        this.onMouseUp()
      }
    }

    this.isMouseOver = isMouseOver

    this.isMouseDown = isMouseDown

    this.forEachChild(child => {
      if (child) {
        child.update(dt)
      }
    })
  }

  draw() {
    let backgroundColor = this.style.backgroundColor || nocolor
    const border = this.style.border || 0

    love.graphics.setColor(
      this.isMouseOver
        ? (backgroundColor.map(c => c + 0.1) as RGBA)
        : backgroundColor
    )

    love.graphics.rectangle(
      'fill',
      this.getComputedX(),
      this.getComputedY(),
      this.getComputedWidth(),
      this.getComputedHeight(),
      this.style.borderRadius || 0,
      this.style.borderRadius || 0
    )

    if (border > 0) {
      const borderColor = this.style.borderColor || nocolor

      love.graphics.setLineWidth(border)
      love.graphics.setColor(borderColor)
      love.graphics.rectangle(
        'line',
        this.getComputedX() + border / 2,
        this.getComputedY() + border / 2,
        this.getComputedWidth() - border,
        this.getComputedHeight() - border,
        this.style.borderRadius || 0,
        this.style.borderRadius || 0
      )
    }

    const scissor = love.graphics.getScissor()

    if (this.getOverflow() !== OVERFLOW_VISIBLE) {
      const layout = this.getComputedViewportLayout()

      love.graphics.intersectScissor(
        layout.x,
        layout.y,
        layout.width,
        layout.height
      )
    }

    love.graphics.push('all')

    love.graphics.translate(this.scrollX, this.scrollY)

    this.forEachChild(child => {
      if (child) {
        child.draw()
      }
    })

    love.graphics.pop()

    if (this.style.overflow !== 'visible') {
      love.graphics.setScissor(scissor[0], scissor[1], scissor[2], scissor[3])
    }

    // TODO clean this all up
    if (this.getIsScrollableY()) {
      if (!this.scrollTrackY || !this.scrollThumbY) {
        return
      }

      const width = 20

      const height = this.getComputedHeight()

      const childrenHeight = this.getComputedChildrenHeight()

      const thumbHeight = Math.max(20, (height / childrenHeight) * height)

      this.scrollTrackY.setWidth(20)

      this.scrollTrackY.setHeight(height)

      this.scrollThumbY.setHeight(thumbHeight)

      this.scrollTrackY.calculateLayout()

      const viewportHeight = this.getComputedViewportHeight()

      const scrolltrackViewportHeight = this.scrollTrackY?.getComputedViewportHeight()

      love.graphics.push('transform')

      love.graphics.translate(
        this.getComputedX() + this.getComputedWidth() - width,
        this.getComputedY()
      )

      this.scrollTrackY.scrollY =
        (-this.scrollY / (childrenHeight - viewportHeight)) *
        (scrolltrackViewportHeight - thumbHeight)

      this.scrollTrackY?.draw()

      love.graphics.pop()
    }

    if (this.getIsScrollableX()) {
      if (!this.scrollTrackX || !this.scrollThumbX) {
        return
      }

      const width = this.getComputedWidth()

      const height = 20

      const childrenWidth = this.getComputedChildrenWidth()

      const thumbWidth = Math.max(20, (width / childrenWidth) * width)

      this.scrollTrackX.setWidth(20)

      this.scrollTrackX.setWidth(width)

      this.scrollThumbX.setWidth(thumbWidth)

      this.scrollTrackX.calculateLayout()

      love.graphics.push('transform')

      love.graphics.translate(
        this.getComputedX(),
        this.getComputedY() + this.getComputedHeight() - height
      )

      const viewportWidth = this.getComputedViewportWidth()

      const scrolltrackViewportWidth = this.scrollTrackX?.getComputedViewportWidth()

      this.scrollTrackX.scrollX =
        (-this.scrollX / (childrenWidth - viewportWidth)) *
        (scrolltrackViewportWidth - thumbWidth)

      this.scrollTrackX?.draw()

      love.graphics.pop()
    }
  }
}

export function Box(props: UIBoxProps, children: UIBox[] = []) {
  return new UIBox(props, children)
}
