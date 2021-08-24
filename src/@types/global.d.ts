declare module 'lib/typeflex' {
  import * as typeflex from 'typeflex'

  export = typeflex
}

declare namespace console {
  function log(...args: any): any

  function debug(...args: any): any

  function warn(...args: any): any

  function error(...args: any): any
}

declare module 'love.math' {
  function colorFromBytes(
    r: number,
    g: number,
    b: number,
    a: number
  ): [number, number, number, number]
}
