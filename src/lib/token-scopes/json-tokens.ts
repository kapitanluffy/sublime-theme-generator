import {TOKEN_TYPES} from '../token-types'
import {TokenScopes} from '../types'

export const JSON_TOKEN_SCOPES: TokenScopes = {
  [TOKEN_TYPES.numeric]: {
    scopes: ['punctuation.separator.decimal'],
  },
}
