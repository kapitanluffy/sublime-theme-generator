import {TOKEN_TYPES} from '../token-types'
import {TokenScopes} from '../types'

export const JAVASCRIPT_TOKEN_SCOPES: TokenScopes = {
  [TOKEN_TYPES.keyword_import]: {
    scopes: ['keyword.control.import-export'],
  },
}
