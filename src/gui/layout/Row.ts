import {
  RowAlign,
  RowJustify,
  toRowYGAlign,
  toRowYGJustify,
} from '../typeflex/enum'
import { Box, UIBox, UIBoxProps, UIBoxStyle } from './Box'

interface UIRowStyle
  extends Omit<
    UIBoxStyle,
    'direction' | 'justifyContent' | 'alignItems' | 'alignContent'
  > {
  hAlign?: RowJustify
  vAlign?: RowAlign
}

interface UIRowProps extends UIBoxProps {
  style: Partial<UIRowStyle>
}

export function Row(props: UIRowProps, children: UIBox[] = []) {
  const boxProps: UIBoxProps = props

  boxProps.style = boxProps.style || {}

  boxProps.style.direction = 'row'

  boxProps.style.justifyContent = toRowYGJustify(props.style.hAlign)

  boxProps.style.alignItems = toRowYGAlign(props.style.vAlign)

  return Box(boxProps, children)
}
