### Variables
https://www.sublimetext.com/docs/scope_naming.html#variable

- variable
  > Generic token type for all variables

  scopes:
    - `variable`
    - `variable.other`
    - `variable.other.readwrite`

- variable_entity
  > Variable names when initially defined or assigned

  scopes:
  - `entity.name.variable`

- variable_language
  > Reserved variable names that are specified by the language, such as `this`, `self`, `super`

  scope:
  - `variable.language`

### Constants
https://www.sublimetext.com/docs/scope_naming.html#constant

- constant
  > Generic tplem for constants

  scopes:
  - `constant`
  - `constant.other`
  - `variable.other.constant`

- constant_entity
  > Constants when initially defined or assigned

  scopes:
  - `entity.name.constant`

- constant_language
  > Constants that are built into the language such as booleans & `null`

  scopes:
  - `constant.language`

### Functions

- function
  > Generic token for function names

  scopes:
  - `variable.function`
  - `meta.function-call`

- function_entity
  > Function names when defined

  scopes:
  - `entity.name.function`

- function_parameters
  > Function parameter names

  scopes:
  - `variable.parameter`

### Classes
https://www.sublimetext.com/docs/scope_naming.html#entity

- class_entity
  > Generic token for data structures

  scopes:
  - `entity.name`
  - `entity.name.class`

- class_inherited
  > Token for implemented or extended structures

  scopes:
  - `entity.other.inherited-class`

- class_members
  > Token for properties or members of data structures

  scopes:
  - `variable.other.member`

### Strings
https://www.sublimetext.com/docs/scope_naming.html#string

- string
  > Generic token for strings

  scopes:
  - `string`

- string_character_escape
  > For character inside strings such as `\n` or `\x20`

  scopes:
  - `constant.character.escape`

- string_placeholder
  > Formatting placeholders such as: `%s` in `sprintf()`

  scopes:
  - `constant.other.placeholder`

- string_quotes
  > String quotes

  scopes:
  - `meta.string punctuation.definition.string`

- string_regexp
  > Regular expressions

  scopes:
  - `string.regexp`
  - `string.regexp punctuation.definition.string`

- string_multiline
  > Multi-line strings

  scopes:
  - `string.quoted.triple`

- string_continuation
  > Line-continuation characters

  scopes:
  - `punctuation.separator.continuation`

- string_interpolation
  > String interpolation

  scopes:
  - punctuation.section.interpolation

### Punctuations
https://www.sublimetext.com/docs/scope_naming.html#punctuation

- punctuation
  > Generic token for all punctuations

  scopes:
  - `punctuation`

- separator
  > Separators such as commans or colons

  scopes:
  - `punctuation.separator`

- accessor
  > Accessors such as dots, arrows or double colons

  scopes:
  - `punctuation.accessor`

- terminator
  > Terminators such as semi-colons

  scopes:
  - `punctuation.terminator`

- brackets
  > Brackets such as braces, brackets and parentheses

  scopes:
  - punctuation.section.braces
  - punctuation.section.brackets
  - punctuation.section.parens

### Operators

- operator
  > Operator symbols such as `+`, `=`, `&` or `<>`

  scopes:
  - `keyword.operator`

- operator_word
  > Operator words such as `and`, `or` or `not`

  scopes:
  - `keyword.operator.word`

### Keywords
https://www.sublimetext.com/docs/scope_naming.html#keyword

- keyword
  > Generic token for all keywords

  scopes:
  - `keyword`

- keyword_symbol
  > Tokens for special symbols added on things such as variables (`$`) or annotations (`@`)

  scopes:
  - `punctuation.definition.annotation`
  - `punctuation.definition.variable`

- keyword_control
  > Generic token for all "control" keywords

  scopes:
  - `keyword.control`

- keyword_flow
  > Generic token for all control flow keywords such as `return` or `break`

  scopes:
  - `keyword.control.flow`

- keyword_import
  > Token for import or include statements

  scopes:
  - `keyword.control.import`
  - `keyword.import`

- keyword_declaration
  > Generic token for keyword declarations

  scopes:
  - `keyword.declaration`

### Storage
https://www.sublimetext.com/docs/scope_naming.html#storage

- storage_data_type
  > Token for data type keywords such as `int`, `bool` or `char`

  scope:
  - `storage.type`
  - `entity.name.type`

- storage_modifier
  > Token for keywords that affect how a data is stored such as `static` or `private`

  scopes:
  - `storage.modifier`

### Support
https://www.sublimetext.com/docs/scope_naming.html#support

- support
  > Generic token for support scopes

  scopes:
  - `support`

- support_constant
  > Library or framework defined constants

  scopes:
  - `support.constant`

- support_function
  > Library or framework defined functions
  
  scopes:
  - `support.function`

- support_data_type
  > Library or framework defined data types

  scopes:
  - `support.type`

- support_class
  > Library or framework defined data structures

  scopes:
  - `support.class`

### HTML/XML
https://www.sublimetext.com/docs/scope_naming.html#text

- xml_text
  > Token for all text inside html/xml scopes

  scopes:
  - `text`
  - `text.html`
  - `text.xml`

- xml_tag
  > Token for html/xml tag names

  scopes:
  - `entity.name.tag`

- xml_attribute
  > Token for html/xml attribute names

  scopes:
  - `entity.other.attribute-name`

### Markup
https://www.sublimetext.com/docs/scope_naming.html#markup

- markup
  > Generic token for markup scopes

  scopes:
  - `markup`

- markup_heading
  > Markup headings

  scopes:
  - `markup.heading`
  - `entity.name.section`

- markup_list
  > Markup lists

  scopes:
  - `markup.list`

- markup_bold
  > Bold strings in markups

  scopes:
  - `markup.bold`

- markup_italic
  > Italicized strings in markups

  scopes:
  - `markup.italic`

- markup_underline
  > Underlined strings in markups

  scopes:
  - `markup.underline`

- markup_link
  > Markup links

  scopes:
  - `markup.underline.link`

- markup_inserted
  > Inserted content for scopes such as `diff`

  scopes:
  - `markup.inserted`
  - `punctuation.definition.inserted`

- markup_deleted
  > Deleted content for scopes such as `diff`

  scopes:
  - `markup.deleted`
  - `punctuation.definition.deleted`

- markup_quote
  > Blockquote and other quote styles

  scopes:
  - `markup.quote`

- markup_raw
  > Inline and block literal quoting, often used for code

  scopes:
  - `markup.raw`

- markup_info
  > Token for "informative" scopes in markup

  scopes:
  - `markup.info`

- markup_warning
  > Token for "warning" scopes in markup

  scopes:
  - `markup.warning`

- markup_error
  > Token for "error" scopes in markup

  scopes:
  - `markup.error`

### Others
- invalid
  > Token for "invalid" scopes

  scopes:
  - `invalid`
- annotation
  > Token for annotations

  scopes:
  - `variable.annotation`

- comment
  > Token for comments

  scopes:
  - `comment`
  - `punctuation.definition.comment`

- numeric
  > Token for numeric scopes

  scopes:
  - `constant.numeric`
