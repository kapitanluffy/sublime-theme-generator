/* eslint-disable camelcase */
import {DEFAULT_TOKEN_SCOPES, DEFAULT_TOKEN_STYLES} from './defaults'
import {BUILTIN_PALETTE, COLOR_SCHEME_COLOR_PROPS, COLOR_SCHEME_CORNER_PROPS, COLOR_SCHEME_CORNER_STYLES, COLOR_SCHEME_DECORATION_PROPS, COLOR_SCHEME_DECORATION_STYLES, COLOR_SCHEME_GLOBALS, CSS_COLORS, PALETTISH} from './sublime-color-scheme-defaults'
import {TokenScopes, TokenStyles, ColorSchemeRule, ColorScheme, KeyMapGeneric, TokenStyle, ColorSchemeStyle} from './types'
import {isTokenScope, isTokenStyle, isTokenType} from './type-guards'
import EXTRA_TOKEN_SCOPES from './token-scopes'

function getColor(color: string, palette: KeyMapGeneric): string {
  if (Object.keys(palette).includes(color)) {
    return `var(${color})`
  }

  if (Object.keys(CSS_COLORS).includes(color)) {
    return CSS_COLORS[color as keyof typeof CSS_COLORS]
  }

  if (Object.keys(PALETTISH).includes(color)) {
    return PALETTISH[color as keyof typeof PALETTISH]
  }

  if (Object.keys(BUILTIN_PALETTE).includes(color)) {
    return BUILTIN_PALETTE[color as keyof typeof BUILTIN_PALETTE]
  }

  console.warn(`Color "${color}" does not exists in the palette`)
  return color
}

function createStyle(_style: TokenStyle, palette: KeyMapGeneric): ColorSchemeStyle {
  const style: ColorSchemeStyle = {
    foreground: getColor(_style.color, palette),
    background: (_style.background === undefined) ? undefined : getColor(_style.background, palette),
    selection_foreground: (_style.selection_foreground === undefined) ? undefined : getColor(_style.selection_foreground, palette),
    font_style: (_style.font_style === undefined) ? undefined : _style.font_style.join(' '),
  }

  return Object.entries(style).reduce((o, [k, v]) => {
    if (v === undefined) return o
    o[k as keyof ColorSchemeStyle] = v
    return o
  }, {} as ColorSchemeStyle)
}

function mergeToDefaults(data: TokenScopes | TokenStyles, base: TokenScopes | TokenStyles) {
  const _merged = {} as TokenScopes | TokenStyles

  for (const key in base) {
    if (!isTokenType(key)) {
      throw new Error(`Unrecognized token type: ${key}`)
    }

    const _ = (key in base) ? base[key] : null
    const __ = (key in data) ? data[key] : null

    if (_ === null && __ === null) continue

    if (__ && isTokenScope(_) && isTokenScope(__)) {
      _.scopes = [..._.scopes, ...__.scopes]
      _.scopes = _.scopes.filter((v, i) => _.scopes.indexOf(v) === i) // remove duplicates
    }

    if (__ && isTokenStyle(_) && isTokenStyle(__)) {
      _.color = __.color
      _.background = __.background
      _.foreground_adjust = __.foreground_adjust
      _.selection_foreground = __.selection_foreground
      _.font_style = __.font_style
    }

    if (_ !== null) {
      _merged[key] = _
    }
  }

  return _merged
}

export function generateTheme(
  scopes: TokenScopes,
  styles: TokenStyles,
  ui: KeyMapGeneric,
  palette: KeyMapGeneric,
): ColorScheme {
  const defaultScopes = EXTRA_TOKEN_SCOPES.reduce((o, v) => {
    return mergeToDefaults(v, o) as TokenScopes
  }, DEFAULT_TOKEN_SCOPES)

  const _scopes = mergeToDefaults(scopes, defaultScopes)
  const _styles = mergeToDefaults(styles, DEFAULT_TOKEN_STYLES)
  const rules: Array<ColorSchemeRule> = []

  // build styles
  for (const tokenType in _scopes) {
    if (!isTokenType(tokenType)) {
      throw new Error(`Unrecognized token type: ${tokenType}`)
    }

    const _scope = _scopes[tokenType] || null
    const _style = _styles[tokenType] || null

    const style: ColorSchemeStyle = (_style && isTokenStyle(_style)) ? createStyle(_style, palette) : {}

    if (!_scope || !isTokenScope(_scope)) {
      continue
    }

    for (const s of _scope.scopes) {
      const _rule: ColorSchemeRule = {name: tokenType, scope: s, ...style}
      rules.push(_rule)
    }
  }

  const _uiStyles = Object.entries(ui).reduce((o, [k, v]) => {
    if (v === null) return o

    if (Object.values(COLOR_SCHEME_COLOR_PROPS).includes(k as COLOR_SCHEME_GLOBALS)) {
      v = getColor(v as string, palette)
    }

    if (Object.values(COLOR_SCHEME_DECORATION_PROPS).includes(k as COLOR_SCHEME_GLOBALS) && !Object.keys(COLOR_SCHEME_DECORATION_STYLES).includes(v as string)) {
      throw new Error(`Invalid decoration style: ${v}`)
    }

    if (Object.values(COLOR_SCHEME_CORNER_PROPS).includes(k as COLOR_SCHEME_GLOBALS) && !Object.keys(COLOR_SCHEME_CORNER_STYLES).includes(v as string)) {
      throw new Error(`Invalid corner style: ${v}`)
    }

    o[k] = v
    return o
  }, {} as KeyMapGeneric)

  return {
    variables: {...BUILTIN_PALETTE, ...CSS_COLORS, ...palette},
    globals: {..._uiStyles},
    rules: [...rules],
  }
}
