/* eslint-disable camelcase */
import {COLOR_SCHEME_DECORATION_STYLES} from './sublime-color-scheme-defaults'
import {TOKEN_TYPES} from './token-types'

export type KeyMapGeneric = {
  [x:string]: string | number
}

export type ColorSchemeStyle = {
  foreground?: string,
  background?: string,
  foreground_adjust?: string,
  selection_foreground?: string,
  font_style?: string,
}

export type ColorSchemeRule = {
  name: string,
  scope: string
} & ColorSchemeStyle

export type ColorScheme = {
  variables?: KeyMapGeneric,
  globals?: KeyMapGeneric,
  rules?: Array<ColorSchemeRule>
}

export type TokenScope = {
  scopes: Array<string>
}

export type TokenStyle = {
    color: string,
    background?: string,
    foreground_adjust?: string,
    selection_foreground?: string,
    font_style?: Array<COLOR_SCHEME_DECORATION_STYLES>
  }

export type TokenStyles = {
  [token in TOKEN_TYPES]: TokenStyle
}

export type TokenScopes = {
  [token in TOKEN_TYPES]?: TokenScope
}
