import {
  ColAlign,
  ColJustify,
  toColYGAlign,
  toColYGJustify,
} from '../typeflex/enum'
import { Box, UIBox, UIBoxProps, UIBoxStyle } from './Box'

interface UIColStyle
  extends Omit<
    UIBoxStyle,
    'direction' | 'justifyContent' | 'alignItems' | 'alignContent'
  > {
  hAlign?: ColAlign
  vAlign?: ColJustify
}

interface UIColProps extends UIBoxProps {
  style: Partial<UIColStyle>
}

export function Col(props: UIColProps, children: UIBox[] = []) {
  const boxProps: UIBoxProps = props

  boxProps.style = boxProps.style || {}

  boxProps.style.direction = 'column'

  boxProps.style.justifyContent = toColYGJustify(props.style.vAlign)

  boxProps.style.alignItems = toColYGAlign(props.style.hAlign)

  return Box(boxProps, children)
}
