import {
  YGAlign,
  YGConfig,
  YGConfigFree,
  YGConfigIsExperimentalFeatureEnabled,
  YGConfigNew,
  YGConfigSetExperimentalFeatureEnabled,
  YGConfigSetPointScaleFactor,
  YGDimension,
  YGDirection,
  YGDisplay,
  YGEdge,
  YGExperimentalFeature,
  YGFlexDirection,
  YGFloatSanitize,
  YGJustify,
  YGLogLevel,
  YGMeasureMode,
  YGNode,
  YGNodeCalculateLayout,
  YGNodeCopyStyle,
  YGNodeFree,
  YGNodeFreeRecursive,
  YGNodeGetChild,
  YGNodeGetChildCount,
  YGNodeGetContext,
  YGNodeGetInstanceCount,
  YGNodeGetParent,
  YGNodeInsertChild,
  YGNodeIsDirty,
  YGNodeLayoutGetBorder,
  YGNodeLayoutGetBottom,
  YGNodeLayoutGetHeight,
  YGNodeLayoutGetLeft,
  YGNodeLayoutGetMargin,
  YGNodeLayoutGetPadding,
  YGNodeLayoutGetRight,
  YGNodeLayoutGetTop,
  YGNodeLayoutGetWidth,
  YGNodeMarkDirty,
  YGNodeNew,
  YGNodeNewWithConfig,
  YGNodeRemoveChild,
  YGNodeReset,
  YGNodeSetContext,
  YGNodeSetMeasureFunc,
  YGNodeStyleGetAlignContent,
  YGNodeStyleGetAlignItems,
  YGNodeStyleGetAlignSelf,
  YGNodeStyleGetAspectRatio,
  YGNodeStyleGetBorder,
  YGNodeStyleGetDisplay,
  YGNodeStyleGetFlexBasis,
  YGNodeStyleGetFlexDirection,
  YGNodeStyleGetFlexGrow,
  YGNodeStyleGetFlexShrink,
  YGNodeStyleGetFlexWrap,
  YGNodeStyleGetHeight,
  YGNodeStyleGetJustifyContent,
  YGNodeStyleGetMargin,
  YGNodeStyleGetMaxHeight,
  YGNodeStyleGetMaxWidth,
  YGNodeStyleGetMinHeight,
  YGNodeStyleGetMinWidth,
  YGNodeStyleGetOverflow,
  YGNodeStyleGetPadding,
  YGNodeStyleGetPosition,
  YGNodeStyleGetPositionType,
  YGNodeStyleGetWidth,
  YGNodeStyleSetAlignContent,
  YGNodeStyleSetAlignItems,
  YGNodeStyleSetAlignSelf,
  YGNodeStyleSetAspectRatio,
  YGNodeStyleSetBorder,
  YGNodeStyleSetDisplay,
  YGNodeStyleSetFlex,
  YGNodeStyleSetFlexBasis,
  YGNodeStyleSetFlexBasisPercent,
  YGNodeStyleSetFlexDirection,
  YGNodeStyleSetFlexGrow,
  YGNodeStyleSetFlexShrink,
  YGNodeStyleSetFlexWrap,
  YGNodeStyleSetHeight,
  YGNodeStyleSetHeightAuto,
  YGNodeStyleSetHeightPercent,
  YGNodeStyleSetJustifyContent,
  YGNodeStyleSetMargin,
  YGNodeStyleSetMarginAuto,
  YGNodeStyleSetMarginPercent,
  YGNodeStyleSetMaxHeight,
  YGNodeStyleSetMaxHeightPercent,
  YGNodeStyleSetMaxWidth,
  YGNodeStyleSetMaxWidthPercent,
  YGNodeStyleSetMinHeight,
  YGNodeStyleSetMinHeightPercent,
  YGNodeStyleSetMinWidth,
  YGNodeStyleSetMinWidthPercent,
  YGNodeStyleSetOverflow,
  YGNodeStyleSetPadding,
  YGNodeStyleSetPaddingPercent,
  YGNodeStyleSetPosition,
  YGNodeStyleSetPositionPercent,
  YGNodeStyleSetPositionType,
  YGNodeStyleSetWidth,
  YGNodeStyleSetWidthAuto,
  YGNodeStyleSetWidthPercent,
  YGNodeType,
  YGOverflow,
  YGPositionType,
  YGUnit,
  YGValue,
  YGWrap,
  YGNodeGetChildren,
} from './yoga'

export {
  YGAlign,
  YGDimension,
  YGDisplay,
  YGEdge,
  YGFlexDirection,
  YGJustify,
  YGOverflow,
  YGWrap,
} from './yoga'

export const ALIGN_FLEX_START = YGAlign.FlexStart
export const ALIGN_CENTER = YGAlign.Center
export const ALIGN_FLEX_END = YGAlign.FlexEnd
export const ALIGN_STRETCH = YGAlign.Stretch
export const ALIGN_BASELINE = YGAlign.Baseline
export const ALIGN_SPACE_BETWEEN = YGAlign.SpaceBetween
export const ALIGN_SPACE_AROUND = YGAlign.SpaceAround
export const DIMENSION_WIDTH = YGDimension.Width
export const DIMENSION_HEIGHT = YGDimension.Height
export const DIRECTION_INHERIT = YGDirection.Inherit
export const DIRECTION_LTR = YGDirection.LTR
export const DIRECTION_RTL = YGDirection.RTL
export const DISPLAY_FLEX = YGDisplay.Flex
export const DISPLAY_NONE = YGDisplay.None
export const EDGE_LEFT = YGEdge.Left
export const EDGE_TOP = YGEdge.Top
export const EDGE_RIGHT = YGEdge.Right
export const EDGE_BOTTOM = YGEdge.Bottom
export const EDGE_START = YGEdge.Start
export const EDGE_END = YGEdge.End
export const EDGE_HORIZONTAL = YGEdge.Horizontal
export const EDGE_VERTICAL = YGEdge.Vertical
export const EDGE_ALL = YGEdge.All
export const EXPERIMENTALFEATURE_WEBFLEXBASIS =
  YGExperimentalFeature.WebFlexBasis
export const FLEX_DIRECTION_COLUMN = YGFlexDirection.Column
export const FLEX_DIRECTION_COLUMN_REVERSE = YGFlexDirection.ColumnReverse
export const FLEX_DIRECTION_ROW = YGFlexDirection.Row
export const FLEX_DIRECTION_ROW_REVERSE = YGFlexDirection.RowReverse
export const JUSTIFY_FLEX_START = YGJustify.FlexStart
export const JUSTIFY_CENTER = YGJustify.Center
export const JUSTIFY_FLEX_END = YGJustify.FlexEnd
export const JUSTIFY_SPACE_BETWEEN = YGJustify.SpaceBetween
export const JUSTIFY_SPACE_AROUND = YGJustify.SpaceAround
export const JUSTIFY_SPACE_EVENLY = YGJustify.SpaceEvenly
export const LOGLEVEL_ERROR = YGLogLevel.Error
export const LOGLEVEL_WARN = YGLogLevel.Warn
export const LOGLEVEL_INFO = YGLogLevel.Info
export const LOGLEVEL_DEBUG = YGLogLevel.Debug
export const LOGLEVEL_VERBOSE = YGLogLevel.Verbose
export const LOGLEVEL_FATAL = YGLogLevel.Fatal
export const MEASURE_MODE_UNDEFINED = YGMeasureMode.Undefined
export const MEASURE_MODE_EXACTLY = YGMeasureMode.Exactly
export const MEASURE_MODE_AT_MOST = YGMeasureMode.AtMost
export const NODE_TYPE_DEFAULT = YGNodeType.Default
export const NODE_TYPE_TEXT = YGNodeType.Text
export const OVERFLOW_VISIBLE = YGOverflow.Visible
export const OVERFLOW_HIDDEN = YGOverflow.Hidden
export const OVERFLOW_SCROLL = YGOverflow.Scroll
export const POSITION_TYPE_RELATIVE = YGPositionType.Relative
export const POSITION_TYPE_ABSOLUTE = YGPositionType.Absolute
export const UNIT_UNDEFINED = YGUnit.Undefined
export const UNIT_POINT = YGUnit.Point
export const UNIT_PERCENT = YGUnit.Percent
export const UNIT_AUTO = YGUnit.Auto
export const WRAP_NO_WRAP = YGWrap.NoWrap
export const WRAP_WRAP = YGWrap.Wrap
export const WRAP_WRAP_REVERSE = YGWrap.WrapReverse
export const UNDEFINED: number | undefined = undefined

export class Layout {
  public left?: number
  public right?: number
  public bottom?: number
  public top?: number
  public width?: number
  public height?: number
}

export class Size {
  public width: number
  public height: number

  constructor(width: number = 0, height: number = 0) {
    this.width = width
    this.height = height
  }

  static fromJS(obj: { width: number; height: number }) {
    return new Size(obj.width, obj.height)
  }
}

export class Value {
  public unit: number
  public value: number

  constructor(unit: number = YGUnit.Undefined, value: number = 0) {
    this.unit = unit
    this.value = value
  }
}

export class Config {
  public config: YGConfig

  static create(): Config {
    return new Config()
  }

  constructor() {
    this.config = YGConfigNew()
  }

  free() {
    YGConfigFree(this.config)
  }

  setExperimentalFeatureEnabled(feature: number, enabled: boolean): void {
    YGConfigSetExperimentalFeatureEnabled(this.config, feature, enabled)
  }

  setPointScaleFactor(pixelsInPoint: number) {
    YGConfigSetPointScaleFactor(this.config, pixelsInPoint)
  }

  isExperimentalFeatureEnabled(feature: number) {
    YGConfigIsExperimentalFeatureEnabled(this.config, feature)
  }
}

function fromYGNode(node: YGNode): Node {
  return YGNodeGetContext(node) as Node
}

function fromYGValue(val: YGValue): Value {
  return new Value(val.unit, val.value)
}

export class Node {
  public node: YGNode

  static create(config?: Config) {
    if (config) {
      return new Node(config)
    } else {
      return new Node()
    }
  }

  static createDefault() {
    return new Node(undefined)
  }

  static createWithConfig(config: Config) {
    return new Node(config)
  }

  constructor(config?: Config) {
    if (!config) {
      this.node = YGNodeNew()
    } else {
      this.node = YGNodeNewWithConfig(config.config)
    }

    YGNodeSetContext(this.node, this)
  }

  calculateLayout(
    width: number = 0,
    height: number = 0,
    direction: YGDirection = YGDirection.Inherit
  ): void {
    YGNodeCalculateLayout(this.node, width, height, direction)
  }

  copyStyle(node: YGNode): void {
    YGNodeCopyStyle(this.node, node)
  }

  free(): void {
    YGNodeFree(this.node)
  }

  freeRecursive(): void {
    YGNodeFreeRecursive(this.node)
  }

  getAlignContent(): YGAlign {
    return YGNodeStyleGetAlignContent(this.node)
  }

  getAlignItems(): YGAlign {
    return YGNodeStyleGetAlignItems(this.node)
  }

  getAlignSelf(): YGAlign {
    return YGNodeStyleGetAlignSelf(this.node)
  }

  getAspectRatio(): number {
    return YGNodeStyleGetAspectRatio(this.node)
  }

  getBorder(edge: YGEdge): number {
    return YGNodeStyleGetBorder(this.node, edge)
  }

  getChild(index: number): Node | null {
    const node = YGNodeGetChild(this.node, index)

    return node ? fromYGNode(node) : null
  }

  getChildren(): Node[] {
    return (YGNodeGetChildren(this.node) as unknown) as Node[]
  }

  getChildCount(): number {
    return YGNodeGetChildCount(this.node)
  }

  getComputedBorder(edge: YGEdge): number {
    return YGNodeLayoutGetBorder(this.node, edge)
  }

  getComputedBottom(): number {
    return YGNodeLayoutGetBottom(this.node)
  }

  getComputedHeight(): number {
    return YGFloatSanitize(YGNodeLayoutGetHeight(this.node))
  }

  getComputedLayout(): Layout {
    const layout: Layout = new Layout()
    layout.left = YGNodeLayoutGetLeft(this.node)
    layout.right = YGNodeLayoutGetRight(this.node)
    layout.top = YGNodeLayoutGetTop(this.node)
    layout.bottom = YGNodeLayoutGetBottom(this.node)
    layout.width = YGNodeLayoutGetWidth(this.node)
    layout.height = YGNodeLayoutGetHeight(this.node)
    return layout
  }

  getComputedLeft(): number {
    return YGFloatSanitize(YGNodeLayoutGetLeft(this.node))
  }

  getComputedMargin(edge: YGEdge): number {
    return YGFloatSanitize(YGNodeLayoutGetMargin(this.node, edge))
  }

  getComputedPadding(edge: YGEdge): number {
    return YGFloatSanitize(YGNodeLayoutGetPadding(this.node, edge))
  }

  getComputedRight(): number {
    return YGFloatSanitize(YGNodeLayoutGetRight(this.node))
  }

  getComputedTop(): number {
    return YGFloatSanitize(YGNodeLayoutGetTop(this.node))
  }

  getComputedWidth(): number {
    return YGFloatSanitize(YGNodeLayoutGetWidth(this.node))
  }

  getDisplay(): YGDisplay {
    return YGNodeStyleGetDisplay(this.node)
  }

  getFlexBasis(): Value {
    return fromYGValue(YGNodeStyleGetFlexBasis(this.node))
  }

  getFlexDirection(): YGFlexDirection {
    return YGNodeStyleGetFlexDirection(this.node)
  }

  getFlexGrow(): number {
    return YGNodeStyleGetFlexGrow(this.node)
  }

  getFlexShrink(): number {
    return YGNodeStyleGetFlexShrink(this.node)
  }

  getFlexWrap(): YGWrap {
    return YGNodeStyleGetFlexWrap(this.node)
  }

  getHeight(): Value {
    return fromYGValue(YGNodeStyleGetHeight(this.node))
  }

  getJustifyContent(): YGJustify {
    return YGNodeStyleGetJustifyContent(this.node)
  }

  getMargin(edge: YGEdge): Value {
    return fromYGValue(YGNodeStyleGetMargin(this.node, edge))
  }

  getMaxHeight(): Value {
    return fromYGValue(YGNodeStyleGetMaxHeight(this.node))
  }

  getMaxWidth(): Value {
    return fromYGValue(YGNodeStyleGetMaxWidth(this.node))
  }

  getMinHeight(): Value {
    return fromYGValue(YGNodeStyleGetMinHeight(this.node))
  }

  getMinWidth(): Value {
    return fromYGValue(YGNodeStyleGetMinWidth(this.node))
  }

  getOverflow(): YGOverflow {
    return YGNodeStyleGetOverflow(this.node)
  }

  getPadding(edge: YGEdge): Value {
    return fromYGValue(YGNodeStyleGetPadding(this.node, edge))
  }

  getParent(): Node | undefined {
    const parent: YGNode | null = YGNodeGetParent(this.node)

    if (!parent) {
      return undefined
    }

    return fromYGNode(parent)
  }

  getPosition(edge: YGEdge): Value {
    return fromYGValue(YGNodeStyleGetPosition(this.node, edge))
  }

  getPositionType(): YGPositionType {
    return YGNodeStyleGetPositionType(this.node)
  }

  getWidth(): Value {
    return fromYGValue(YGNodeStyleGetWidth(this.node))
  }

  insertChild(child: Node, index: number): void {
    YGNodeInsertChild(this.node, child.node, index)
  }

  isDirty(): boolean {
    return YGNodeIsDirty(this.node)
  }

  markDirty(): void {
    YGNodeMarkDirty(this.node)
  }

  removeChild(child: Node): void {
    YGNodeRemoveChild(this.node, child.node)
  }

  reset(): void {
    // m_measureFunc.reset(nullptr);
    YGNodeReset(this.node)
  }

  setAlignContent(alignContent: YGAlign): void {
    YGNodeStyleSetAlignContent(this.node, alignContent)
  }

  setAlignItems(alignItems: YGAlign): void {
    YGNodeStyleSetAlignItems(this.node, alignItems)
  }

  setAlignSelf(alignSelf: YGAlign): void {
    YGNodeStyleSetAlignSelf(this.node, alignSelf)
  }

  setAspectRatio(aspectRatio: number): void {
    YGNodeStyleSetAspectRatio(this.node, aspectRatio)
  }

  setBorder(edge: YGEdge, borderWidth: number): void {
    YGNodeStyleSetBorder(this.node, edge, borderWidth)
  }

  setDisplay(display: YGDisplay): void {
    YGNodeStyleSetDisplay(this.node, display)
  }

  setFlex(flex: number): void {
    YGNodeStyleSetFlex(this.node, flex)
  }

  setFlexBasis(flexBasis: number | string): void {
    if (typeof flexBasis === 'string') {
      if (flexBasis[flexBasis.length - 1] === '%') {
        this.setFlexBasisPercent(
          Number(flexBasis.slice(0, flexBasis.length - 1)) || 0
        )
      } else {
        throw new Error('Invalid input type')
      }
    } else {
      YGNodeStyleSetFlexBasis(this.node, flexBasis as number)
    }
  }

  setFlexBasisPercent(flexBasis: number): void {
    YGNodeStyleSetFlexBasisPercent(this.node, flexBasis)
  }

  setFlexDirection(flexDirection: YGFlexDirection): void {
    YGNodeStyleSetFlexDirection(this.node, flexDirection)
  }

  setFlexGrow(flexGrow: number): void {
    YGNodeStyleSetFlexGrow(this.node, flexGrow)
  }

  setFlexShrink(flexShrink: number): void {
    YGNodeStyleSetFlexShrink(this.node, flexShrink)
  }

  setFlexWrap(flexWrap: YGWrap): void {
    YGNodeStyleSetFlexWrap(this.node, flexWrap)
  }

  setHeight(height: number | string): void {
    if (typeof height === 'string') {
      if (height === 'auto') {
        this.setHeightAuto()
      } else if (height[height.length - 1] === '%') {
        this.setHeightPercent(Number(height.slice(0, height.length - 1)) || 0)
      } else {
        throw new Error('Invalid input type.')
      }
    } else {
      YGNodeStyleSetHeight(this.node, height as number)
    }
  }

  setHeightAuto(): void {
    YGNodeStyleSetHeightAuto(this.node)
  }

  setHeightPercent(height: number): void {
    YGNodeStyleSetHeightPercent(this.node, height)
  }

  setJustifyContent(justifyContent: YGJustify): void {
    YGNodeStyleSetJustifyContent(this.node, justifyContent)
  }

  setMargin(edge: YGEdge, margin: number | string): void {
    if (typeof margin === 'string') {
      if (margin === 'auto') {
        this.setMarginAuto(edge)
      } else if (margin[margin.length - 1] === '%') {
        this.setMarginPercent(
          edge,
          Number(margin.slice(0, margin.length - 1)) || 0
        )
      } else {
        throw new Error('Invalid input type.')
      }
    } else {
      YGNodeStyleSetMargin(this.node, edge, margin)
    }
  }

  setMarginAuto(edge: YGEdge): void {
    YGNodeStyleSetMarginAuto(this.node, edge)
  }

  setMarginPercent(edge: YGEdge, margin: number): void {
    YGNodeStyleSetMarginPercent(this.node, edge, margin)
  }

  setMaxHeight(maxHeight: number | string): void {
    if (typeof maxHeight === 'string') {
      if (maxHeight[maxHeight.length - 1] === '%') {
        this.setMaxHeightPercent(
          Number(maxHeight.slice(0, maxHeight.length - 1)) || 0
        )
      } else {
        throw new Error('Invalid input type.')
      }
    } else {
      YGNodeStyleSetMaxHeight(this.node, maxHeight as number)
    }
  }

  setMaxHeightPercent(maxHeight: number): void {
    YGNodeStyleSetMaxHeightPercent(this.node, maxHeight)
  }

  setMaxWidth(maxWidth: number | string): void {
    if (typeof maxWidth === 'string') {
      if (maxWidth[maxWidth.length - 1] === '%') {
        this.setMaxWidthPercent(
          Number(maxWidth.slice(0, maxWidth.length - 1)) || 0
        )
      } else {
        throw new Error('Invalid input type.')
      }
    } else {
      YGNodeStyleSetMaxWidth(this.node, maxWidth as number)
    }
  }

  setMaxWidthPercent(maxWidth: number): void {
    YGNodeStyleSetMaxWidthPercent(this.node, maxWidth)
  }

  setMeasureFunc(measureFunc: any): void {
    if (measureFunc == null) {
      this.unsetMeasureFunc()
    } else {
      YGNodeSetMeasureFunc(this.node, measureFunc)
    }
  }

  unsetMeasureFunc() {
    YGNodeSetMeasureFunc(this.node)
  }

  setMinHeight(minHeight: number | string): void {
    if (typeof minHeight === 'string') {
      if (minHeight[minHeight.length - 1] === '%') {
        this.setMinHeightPercent(
          Number(minHeight.slice(0, minHeight.length - 1)) || 0
        )
      } else {
        throw new Error('Invalid input type.')
      }
    } else {
      YGNodeStyleSetMinHeight(this.node, minHeight as number)
    }
  }

  setMinHeightPercent(minHeight: number): void {
    YGNodeStyleSetMinHeightPercent(this.node, minHeight)
  }

  setMinWidth(minWidth: number | string): void {
    if (typeof minWidth === 'string') {
      if (minWidth[minWidth.length - 1] === '%') {
        this.setMinWidthPercent(
          Number(minWidth.slice(0, minWidth.length - 1)) || 0
        )
      } else {
        throw new Error('Invalid input type.')
      }
    } else {
      YGNodeStyleSetMinWidth(this.node, minWidth as number)
    }
  }

  setMinWidthPercent(minWidth: number): void {
    YGNodeStyleSetMinWidthPercent(this.node, minWidth)
  }

  setOverflow(overflow: YGOverflow): void {
    YGNodeStyleSetOverflow(this.node, overflow)
  }

  setPadding(edge: YGEdge, padding: number | string): void {
    if (typeof padding === 'string') {
      if (padding[padding.length - 1] === '%') {
        this.setPaddingPercent(
          edge,
          Number(padding.slice(0, padding.length - 1)) || 0
        )
      } else {
        throw new Error('Invalid input type.')
      }
    } else {
      YGNodeStyleSetPadding(this.node, edge, padding as number)
    }
  }

  setPaddingPercent(edge: YGEdge, padding: number): void {
    YGNodeStyleSetPaddingPercent(this.node, edge, padding)
  }

  setPosition(edge: YGEdge, position: number | string): void {
    if (typeof position === 'string') {
      if (position[position.length - 1] === '%') {
        this.setPositionPercent(
          edge,
          Number(position.slice(0, position.length - 1)) || 0
        )
      } else {
        throw new Error('Invalid input type.')
      }
    } else {
      YGNodeStyleSetPosition(this.node, edge, position as number)
    }
  }

  setPositionPercent(edge: YGEdge, position: number): void {
    YGNodeStyleSetPositionPercent(this.node, edge, position)
  }

  setPositionType(positionType: YGPositionType): void {
    YGNodeStyleSetPositionType(this.node, positionType)
  }

  setWidth(width: number | string): void {
    if (typeof width === 'string') {
      if (width[width.length - 1] === '%') {
        this.setWidthPercent(Number(width.slice(0, width.length - 1)) || 0)
      } else if (width === 'auto') {
        this.setWidthAuto()
      } else {
        throw new Error('Invalid input type.')
      }
    } else {
      YGNodeStyleSetWidth(this.node, width as number)
    }
  }

  setWidthAuto(): void {
    YGNodeStyleSetWidthAuto(this.node)
  }

  setWidthPercent(width: number): void {
    YGNodeStyleSetWidthPercent(this.node, width)
  }

  unsetMeasureFun(): void {
    YGNodeSetMeasureFunc(this.node)
  }
}

export function getInstanceCount(): number {
  return YGNodeGetInstanceCount()
}
