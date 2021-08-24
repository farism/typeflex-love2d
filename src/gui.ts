import { GUI } from './gui/gui'
import { Box } from './gui/layout/Box'
import { Col } from './gui/layout/Col'
import { Row } from './gui/layout/Row'

type RGBA = [number, number, number, number]

const white: RGBA = [1, 1, 1, 1]
const black: RGBA = [0, 0, 0, 1]
const gray: RGBA = [0.3, 0.3, 0.3, 1]
const lightgray: RGBA = [0.8, 0.8, 0.8, 1]
const tan: RGBA = [240 / 255, 232 / 255, 205 / 255, 1]
const yellow: RGBA = [255 / 255, 250 / 255, 129 / 255, 1]
const green: RGBA = [133 / 255, 202 / 255, 93 / 255, 1]
const blue: RGBA = [111 / 255, 183 / 255, 214 / 255, 1]
const purple: RGBA = [165 / 255, 137 / 255, 193 / 255, 1]
const pink: RGBA = [249 / 255, 140 / 255, 182 / 255, 1]

export const gui = new GUI(
  {},
  Row(
    {
      style: {
        width: love.graphics.getWidth(),
        height: love.graphics.getHeight(),
        vAlign: 'stretch',
        backgroundColor: gray,
        padding: 20,
      },
    },
    [
      Col(
        {
          style: {
            hAlign: 'stretch',
            width: 100,
            backgroundColor: pink,
            border: 2,
            borderColor: yellow,
            padding: 10,
            overflow: 'scroll',
          },
        },
        [
          Row({
            style: {
              grow: 1,
              backgroundColor: white,
            },
          }),
          Row({
            style: {
              grow: 1,
              backgroundColor: black,
            },
            onMouseDown: () => print('black down'),
          }),
        ]
      ),
      Col(
        {
          id: 'colright',
          style: {
            hAlign: 'stretch',
            grow: 1,
            backgroundColor: lightgray,
            marginLeft: 100,
            padding: 10,
            border: 2,
            overflow: 'scroll',
          },
        },
        [
          Row(
            {
              style: {
                vAlign: 'stretch',
                grow: 1,
                minHeight: 150,
                backgroundColor: green,
              },
            },
            [
              Row({
                id: 'yellowrow',
                style: {
                  grow: 1,
                  backgroundColor: yellow,
                  basis: '100%',
                  vAlign: 'stretch',
                },
              }),
              Col(
                {
                  style: {
                    grow: 1,
                    backgroundColor: green,
                    overflow: 'scroll',
                    hAlign: 'stretch',
                  },
                },
                [
                  Row({
                    style: { backgroundColor: green, height: 300 },
                  }),
                  Row(
                    {
                      style: {
                        backgroundColor: pink,
                        hAlign: 'center',
                        vAlign: 'center',
                        height: 500,
                      },
                    },
                    [
                      Box(
                        {
                          style: {
                            backgroundColor: purple,
                            border: 2,
                            borderColor: [1, 1, 1, 1],
                            borderRadius: 8,
                            padding: 10,
                          },
                          // onMouseDown: () => (pressed = true),
                        },
                        []
                      ),
                    ]
                  ),
                  Row({
                    style: {
                      backgroundColor: tan,
                      height: 800,
                    },
                  }),
                ]
              ),
              Col({
                style: {
                  grow: 1,
                  backgroundColor: pink,
                },
              }),
            ]
          ),
          Row(
            {
              id: 'blue',
              style: {
                grow: 1,
                minHeight: 100,
                backgroundColor: blue,
                vAlign: 'stretch',
                overflow: 'scroll',
                marginTop: 20,
              },
              onMouseEnter: () => print('enter'),
              onMouseLeave: () => print('leave'),
            },
            [
              Col({
                style: {
                  width: 200,
                  backgroundColor: pink,
                },
              }),
              Col({
                style: {
                  width: 400,
                  backgroundColor: gray,
                },
              }),
              Col({
                style: {
                  width: 1000,
                  backgroundColor: black,
                },
              }),
              Col({
                style: {
                  width: 100,
                  backgroundColor: tan,
                },
              }),
            ]
          ),
          Row({
            style: {
              grow: 1,
              minHeight: 1000,
              backgroundColor: purple,
              marginTop: 20,
            },
          }),
          Row(
            {
              style: {
                vAlign: 'stretch',
                grow: 3,
                minHeight: 300,
                backgroundColor: tan,
              },
              onMouseDown: () => print('tan down'),
            },
            [
              Col({
                style: {
                  grow: 1,
                  backgroundColor: green,
                },
              }),
              Col({
                style: {
                  grow: 1,
                  backgroundColor: blue,
                },
              }),
              Col({
                style: {
                  grow: 1,
                  backgroundColor: pink,
                },
              }),
            ]
          ),
        ]
      ),
    ]
  )
)

gui.calculateLayout()
