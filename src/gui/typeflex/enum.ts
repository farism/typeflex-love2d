import * as typeflex from './typeflex'

export type Edge = 'all' | 'top' | 'right' | 'bottom' | 'left'

export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type Overflow = 'hidden' | 'scroll' | 'visible'

export type Wrap = 'no-wrap' | 'wrap' | 'wrap-reverse'

export type Justify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type Align =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'stretch'

export type AlignX =
  | 'left'
  | 'center'
  | 'right'
  | 'space-between'
  | 'space-around'

export type AlignY =
  | 'top'
  | 'center'
  | 'bottom'
  | 'space-between'
  | 'space-around'

export type RowJustify = AlignX | 'space-evenly'

export type RowAlign = AlignY | 'stretch'

export type ColJustify = AlignY | 'space-evenly'

export type ColAlign = AlignX | 'stretch'

export function toYGEdge(edge: Edge = 'all') {
  switch (edge) {
    case 'all':
      return typeflex.EDGE_ALL
    case 'bottom':
      return typeflex.EDGE_BOTTOM
    case 'left':
      return typeflex.EDGE_LEFT
    case 'right':
      return typeflex.EDGE_RIGHT
    case 'top':
      return typeflex.EDGE_TOP
  }
}

export function toYGFlexDirection(direction: Direction = 'row') {
  switch (direction) {
    case 'column':
      return typeflex.FLEX_DIRECTION_COLUMN
    case 'column-reverse':
      return typeflex.FLEX_DIRECTION_COLUMN_REVERSE
    case 'row':
      return typeflex.FLEX_DIRECTION_ROW
    case 'row-reverse':
      return typeflex.FLEX_DIRECTION_ROW_REVERSE
  }
}

export function toYGWrap(wrap: Wrap = 'no-wrap') {
  switch (wrap) {
    case 'no-wrap':
      return typeflex.WRAP_NO_WRAP
    case 'wrap':
      return typeflex.WRAP_WRAP
    case 'wrap-reverse':
      return typeflex.WRAP_WRAP_REVERSE
  }
}

export function toYGJustify(justify: Justify = 'flex-start') {
  switch (justify) {
    case 'center':
      return typeflex.JUSTIFY_CENTER
    case 'flex-end':
      return typeflex.JUSTIFY_FLEX_END
    case 'flex-start':
      return typeflex.JUSTIFY_FLEX_START
    case 'space-around':
      return typeflex.JUSTIFY_SPACE_AROUND
    case 'space-between':
      return typeflex.JUSTIFY_SPACE_BETWEEN
    case 'space-evenly':
      return typeflex.JUSTIFY_SPACE_EVENLY
  }
}

export function toYGAlign(align: Align = 'flex-start') {
  switch (align) {
    case 'center':
      return typeflex.ALIGN_CENTER
    case 'flex-end':
      return typeflex.ALIGN_FLEX_END
    case 'flex-start':
      return typeflex.ALIGN_FLEX_START
    case 'space-around':
      return typeflex.ALIGN_SPACE_AROUND
    case 'space-between':
      return typeflex.ALIGN_SPACE_BETWEEN
    case 'stretch':
      return typeflex.ALIGN_STRETCH
  }
}

export function toYGOverflow(overflow: Overflow = 'visible') {
  switch (overflow) {
    case 'hidden':
      return typeflex.OVERFLOW_HIDDEN
    case 'scroll':
      return typeflex.OVERFLOW_SCROLL
    case 'visible':
      return typeflex.OVERFLOW_VISIBLE
  }
}

export function toRowYGJustify(justify: RowJustify = 'left'): Justify {
  switch (justify) {
    case 'left':
      return 'flex-start'
    case 'right':
      return 'flex-end'
    default:
      return justify
  }
}

export function toRowYGAlign(align: RowAlign = 'top'): Align {
  switch (align) {
    case 'top':
      return 'flex-start'
    case 'bottom':
      return 'flex-end'
    default:
      return align
  }
}

export function toColYGJustify(justify: ColJustify = 'top'): Justify {
  switch (justify) {
    case 'top':
      return 'flex-start'
    case 'bottom':
      return 'flex-end'
    default:
      return justify
  }
}

export function toColYGAlign(align: ColAlign = 'left'): Align {
  switch (align) {
    case 'left':
      return 'flex-start'
    case 'right':
      return 'flex-end'
    default:
      return align
  }
}
