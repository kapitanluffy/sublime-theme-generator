/* eslint-disable camelcase */
import {COLOR_SCHEME_DECORATION_STYLES} from './sublime-color-scheme-defaults'
import {TOKEN_TYPES} from './token-types'
import {TokenScopes} from './types'

/// https://github.com/SublimeText/PackageDev/blob/master/plugins/lib/scope_data/data.py
export const DEFAULT_TOKEN_SCOPES: TokenScopes = {
  [TOKEN_TYPES.variable]: {
    scopes: [
      'variable',
      'variable.other',
      'variable.other.readwrite',
    ],
  },
  [TOKEN_TYPES.variable_entity]: {
    scopes: ['entity.name.variable'],
  },
  [TOKEN_TYPES.variable_language]: {
    scopes: ['variable.language'],
  },
  [TOKEN_TYPES.constant]: {
    scopes: [
      'constant',
      'constant.other',
      'variable.other.constant',
    ],
  },
  [TOKEN_TYPES.constant_entity]: {
    scopes: ['entity.name.constant'],
  },
  [TOKEN_TYPES.constant_language]: {
    scopes: ['constant.language'],
  },
  [TOKEN_TYPES.function]: {
    scopes: ['variable.function', 'meta.function-call'],
  },
  [TOKEN_TYPES.function_entity]: {
    scopes: [
      'entity.name.function',
      // 'entity.name.function.constructor',
      // 'entity.name.function.destructor'
    ],
  },
  [TOKEN_TYPES.function_parameters]: {
    scopes: ['variable.parameter'],
  },
  [TOKEN_TYPES.class_entity]: {
    scopes: [
      'entity.name',
      'entity.name.class',
      // 'entity.name.class.forward-decl',
      // 'entity.name.namespace',
      // 'entity.name.label'
    ],
  },
  [TOKEN_TYPES.class_inherited]: {
    scopes: ['entity.other.inherited-class'],
  },
  [TOKEN_TYPES.class_members]: {
    scopes: ['variable.other.member'],
  },
  [TOKEN_TYPES.annotation]: {
    scopes: ['variable.annotation'],
  },
  [TOKEN_TYPES.comment]: {
    scopes: [
      'comment',
      // 'comment.line',
      // 'comment.block',
      // 'comment.block.documentation',
      'punctuation.definition.comment',
    ],
  },
  [TOKEN_TYPES.numeric]: {
    scopes: ['constant.numeric'],
  },
  [TOKEN_TYPES.string]: {
    scopes: [
      'string',
      // 'string.quoted',
      // 'string.quoted.single',
      // 'string.quoted.double',
      // 'string.quoted.other',
      // 'string.unquoted',
      // 'string.other'
    ],
  },
  [TOKEN_TYPES.string_character_escape]: {
    scopes: ['constant.character.escape'],
  },
  [TOKEN_TYPES.string_placeholder]: {
    scopes: ['constant.other.placeholder'],
  },
  [TOKEN_TYPES.string_quotes]: {
    scopes: ['meta.string punctuation.definition.string'],
  },
  [TOKEN_TYPES.string_regexp]: {
    scopes: ['string.regexp', 'string.regexp punctuation.definition.string'],
  },
  [TOKEN_TYPES.string_multiline]: {
    scopes: ['string.quoted.triple'],
  },
  [TOKEN_TYPES.string_continuation]: {
    scopes: ['punctuation.separator.continuation'],
  },
  [TOKEN_TYPES.string_interpolation]: {
    scopes: ['punctuation.section.interpolation'],
  },
  [TOKEN_TYPES.punctuation]: {
    scopes: [
      'punctuation',
      // 'punctuation.definition.generic',
      // 'punctuation.definition.keyword',
    ],
  },
  [TOKEN_TYPES.separator]: {
    scopes: ['punctuation.separator'],
  },
  [TOKEN_TYPES.accessor]: {
    scopes: ['punctuation.accessor'],
  },
  [TOKEN_TYPES.terminator]: {
    scopes: ['punctuation.terminator'],
  },
  [TOKEN_TYPES.brackets]: {
    scopes: [
      // 'punctuation.section',
      'punctuation.section.braces',
      'punctuation.section.brackets',
      'punctuation.section.parens',
    ],
  },
  [TOKEN_TYPES.operator]: {
    scopes: ['keyword.operator'],
  },
  [TOKEN_TYPES.operator_word]: {
    scopes: ['keyword.operator.word'],
  },
  [TOKEN_TYPES.keyword]: {
    scopes: [
      'keyword',
      // 'keyword.other'
    ],
  },
  [TOKEN_TYPES.keyword_symbol]: {
    scopes: ['punctuation.definition.annotation', 'punctuation.definition.variable'],
  },
  [TOKEN_TYPES.keyword_control]: {
    scopes: [
      'keyword.control',
      // 'keyword.control.conditional',
      // 'keyword.control.exception',
      // 'keyword.control.loop'
    ],
  },
  [TOKEN_TYPES.keyword_flow]: {
    scopes: ['keyword.control.flow'],
  },
  [TOKEN_TYPES.keyword_import]: {
    scopes: ['keyword.control.import', 'keyword.import'],
  },
  [TOKEN_TYPES.keyword_declaration]: {
    scopes: ['keyword.declaration'],
  },
  [TOKEN_TYPES.storage_data_type]: {
    scopes: ['storage.type', 'entity.name.type'],
  },
  [TOKEN_TYPES.storage_modifier]: {
    scopes: ['storage.modifier'],
  },
  [TOKEN_TYPES.support]: {
    scopes: [
      'support',
      // 'support.module',
      // 'support.other'
    ],
  },
  [TOKEN_TYPES.support_constant]: {
    scopes: ['support.constant'],
  },
  [TOKEN_TYPES.support_function]: {
    scopes: ['support.function'],
  },
  [TOKEN_TYPES.support_data_type]: {
    scopes: ['support.type'],
  },
  [TOKEN_TYPES.support_class]: {
    scopes: ['support.class'],
  },
  [TOKEN_TYPES.xml_text]: {
    scopes: ['text', 'text.html', 'text.xml'],
  },
  [TOKEN_TYPES.xml_tag]: {
    scopes: ['entity.name.tag'],
  },
  [TOKEN_TYPES.xml_attribute]: {
    scopes: ['entity.other.attribute-name'],
  },
  [TOKEN_TYPES.markup]: {
    scopes: [
      'markup',
      // 'markup.other'
    ],
  },
  [TOKEN_TYPES.markup_heading]: {
    scopes: ['markup.heading', 'entity.name.section'],
  },
  [TOKEN_TYPES.markup_list]: {
    scopes: ['markup.list'],
  },
  [TOKEN_TYPES.markup_bold]: {
    scopes: ['markup.bold'],
  },
  [TOKEN_TYPES.markup_italic]: {
    scopes: ['markup.italic'],
  },
  [TOKEN_TYPES.markup_underline]: {
    scopes: ['markup.underline'],
  },
  [TOKEN_TYPES.markup_link]: {
    scopes: ['markup.underline.link'],
  },
  [TOKEN_TYPES.markup_inserted]: {
    scopes: ['markup.inserted', 'punctuation.definition.inserted'],
  },
  [TOKEN_TYPES.markup_deleted]: {
    scopes: ['markup.deleted', 'punctuation.definition.deleted'],
  },
  [TOKEN_TYPES.markup_info]: {
    scopes: ['markup.info'],
  },
  [TOKEN_TYPES.markup_quote]: {
    scopes: ['markup.quote'],
  },
  [TOKEN_TYPES.markup_raw]: {
    scopes: ['markup.raw'],
  },
  [TOKEN_TYPES.markup_warning]: {
    scopes: ['markup.warning'],
  },
  [TOKEN_TYPES.markup_error]: {
    scopes: ['markup.error'],
  },
  [TOKEN_TYPES.invalid]: {
    scopes: [
      'invalid',
      // 'invalid.illegal',
      // 'invalid.deprecated'
    ],
  },
}

export const DEFAULT_TOKEN_STYLES = {
  [TOKEN_TYPES.variable]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.variable_entity]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.variable_language]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.constant]: {
    color: 'yellow',
  },
  [TOKEN_TYPES.constant_entity]: {
    color: 'yellow',
  },
  [TOKEN_TYPES.constant_language]: {
    color: 'yellow',
  },
  [TOKEN_TYPES.function]: {
    color: 'green',
  },
  [TOKEN_TYPES.function_entity]: {
    color: 'green',
  },
  [TOKEN_TYPES.function_parameters]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.class_entity]: {
    color: 'green',
  },
  [TOKEN_TYPES.class_inherited]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.class_members]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.annotation]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.comment]: {
    color: 'gray',
  },
  [TOKEN_TYPES.numeric]: {
    color: 'palevioletred',
  },
  [TOKEN_TYPES.string]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.string_character_escape]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.string_placeholder]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.string_quotes]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.string_regexp]: {
    color: 'orange',
  },
  [TOKEN_TYPES.string_multiline]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.string_continuation]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.string_interpolation]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.punctuation]: {
    color: 'mediumpurple',
  },
  [TOKEN_TYPES.separator]: {
    color: 'mediumpurple',
  },
  [TOKEN_TYPES.accessor]: {
    color: 'mediumpurple',
  },
  [TOKEN_TYPES.terminator]: {
    color: 'mediumpurple',
  },
  [TOKEN_TYPES.brackets]: {
    color: 'mediumpurple',
  },
  [TOKEN_TYPES.operator]: {
    color: 'orange',
  },
  [TOKEN_TYPES.operator_word]: {
    color: 'palevioletred',
  },
  [TOKEN_TYPES.keyword]: {
    color: 'violet',
  },
  [TOKEN_TYPES.keyword_symbol]: {
    color: 'orange',
  },
  [TOKEN_TYPES.keyword_control]: {
    color: 'violet',
  },
  [TOKEN_TYPES.keyword_flow]: {
    color: 'violet',
  },
  [TOKEN_TYPES.keyword_import]: {
    color: 'violet',
  },
  [TOKEN_TYPES.keyword_declaration]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.storage_data_type]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.storage_modifier]: {
    color: 'orange',
  },
  [TOKEN_TYPES.support]: {
    color: 'yellow',
  },
  [TOKEN_TYPES.support_constant]: {
    color: 'yellow',
  },
  [TOKEN_TYPES.support_function]: {
    color: 'green',
  },
  [TOKEN_TYPES.support_data_type]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.support_class]: {
    color: 'yellow',
  },
  [TOKEN_TYPES.xml_text]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.xml_tag]: {
    color: 'green',
  },
  [TOKEN_TYPES.xml_attribute]: {
    color: 'orange',
  },
  [TOKEN_TYPES.markup]: {
    color: 'foreground',
  },
  [TOKEN_TYPES.markup_heading]: {
    color: 'cyan',
  },
  [TOKEN_TYPES.markup_list]: {
    color: 'violet',
  },
  [TOKEN_TYPES.markup_bold]: {
    color: 'foreground',
    font_style: [COLOR_SCHEME_DECORATION_STYLES.bold],
  },
  [TOKEN_TYPES.markup_italic]: {
    color: 'foreground',
    font_style: [COLOR_SCHEME_DECORATION_STYLES.italic],
  },
  [TOKEN_TYPES.markup_underline]: {
    color: 'foreground',
    font_style: [COLOR_SCHEME_DECORATION_STYLES.underline],
  },
  [TOKEN_TYPES.markup_link]: {
    color: 'foreground',
    font_style: [COLOR_SCHEME_DECORATION_STYLES.stippled_underline],
  },
  [TOKEN_TYPES.markup_inserted]: {
    color: 'green',
  },
  [TOKEN_TYPES.markup_deleted]: {
    color: 'red',
  },
  [TOKEN_TYPES.markup_quote]: {
    color: 'lightgray',
  },
  [TOKEN_TYPES.markup_raw]: {
    color: 'lightgray',
  },
  [TOKEN_TYPES.markup_info]: {
    color: 'bluish',
  },
  [TOKEN_TYPES.markup_warning]: {
    color: 'yellowish',
  },
  [TOKEN_TYPES.markup_error]: {
    color: 'redish',
  },
  [TOKEN_TYPES.invalid]: {
    color: 'redish',
  },
}
