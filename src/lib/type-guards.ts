import {TOKEN_TYPES} from './token-types'
import {TokenScope, TokenStyle} from './types'

export function isTokenScope(v: any): v is TokenScope {
  return v && (v as TokenScope).scopes !== undefined
}

export function isTokenStyle(v: any): v is TokenStyle {
  return v && (v as TokenStyle).color !== undefined
}

export function isTokenType(v: any): v is TOKEN_TYPES {
  return v && Object.keys(TOKEN_TYPES).includes(v)
}
