/* eslint-disable camelcase */

export enum COLOR_SCHEME_CORNER_STYLES {
  round = 'round',
  cut = 'cut',
  square = 'square',
}

export enum COLOR_SCHEME_DECORATION_STYLES {
  bold = 'bold',
  italic = 'italic',
  glow = 'glow',
  underline = 'underline',
  stippled_underline = 'stippled_underline',
  squiggly_underline = 'squiggly_underline',
  foreground = 'foreground',
}

export enum COLOR_SCHEME_GLOBALS {
  background = 'background',
  foreground = 'foreground',
  invisibles = 'invisibles',
  caret = 'caret',
  block_caret = 'block_caret',
  block_caret_border = 'block_caret_border',
  block_caret_underline = 'block_caret_underline',
  block_caret_corner_style = 'block_caret_corner_style',
  block_caret_corner_radius = 'block_caret_corner_radius',
  line_highlight = 'line_highlight',
  misspelling = 'misspelling',
  fold_marker = 'fold_marker',
  minimap_border = 'minimap_border',
  accent = 'accent',
  popup_css = 'popup_css',
  phantom_css = 'phantom_css',
  sheet_css = 'sheet_css',
  gutter = 'gutter',
  gutter_foreground = 'gutter_foreground',
  gutter_foreground_highlight = 'gutter_foreground_highlight',
  line_diff_width = 'line_diff_width',
  line_diff_added = 'line_diff_added',
  line_diff_modified = 'line_diff_modified',
  line_diff_deleted = 'line_diff_deleted',
  selection = 'selection',
  selection_border = 'selection_border',
  selection_foreground = 'selection_foreground',
  selection_border_width = 'selection_border_width',
  inactive_selection = 'inactive_selection',
  inactive_selection_border = 'inactive_selection_border',
  inactive_selection_foreground = 'inactive_selection_foreground',
  selection_corner_style = 'selection_corner_style',
  selection_corner_radius = 'selection_corner_radius',
  highlight = 'highlight',
  find_highlight = 'find_highlight',
  find_highlight_foreground = 'find_highlight_foreground',
  scroll_highlight = 'scroll_highlight',
  scroll_selected_highlight = 'scroll_selected_highlight',
  rulers = 'rulers',
  guide = 'guide',
  active_guide = 'active_guide',
  stack_guide = 'stack_guide',
  brackets_options = 'brackets_options',
  brackets_foreground = 'brackets_foreground',
  bracket_contents_options = 'bracket_contents_options',
  bracket_contents_foreground = 'bracket_contents_foreground',
  tags_options = 'tags_options',
  tags_foreground = 'tags_foreground',
  shadow = 'shadow',
  shadow_width = 'shadow_width',
}

export const COLOR_SCHEME_COLOR_PROPS = [
  COLOR_SCHEME_GLOBALS.background,
  COLOR_SCHEME_GLOBALS.foreground,
  COLOR_SCHEME_GLOBALS.invisibles,
  COLOR_SCHEME_GLOBALS.caret,
  COLOR_SCHEME_GLOBALS.block_caret,
  COLOR_SCHEME_GLOBALS.block_caret_border,
  COLOR_SCHEME_GLOBALS.block_caret_underline,
  COLOR_SCHEME_GLOBALS.line_highlight,
  COLOR_SCHEME_GLOBALS.misspelling,
  COLOR_SCHEME_GLOBALS.fold_marker,
  COLOR_SCHEME_GLOBALS.minimap_border,
  COLOR_SCHEME_GLOBALS.accent,
  COLOR_SCHEME_GLOBALS.gutter,
  COLOR_SCHEME_GLOBALS.gutter_foreground,
  COLOR_SCHEME_GLOBALS.gutter_foreground_highlight,
  COLOR_SCHEME_GLOBALS.line_diff_added,
  COLOR_SCHEME_GLOBALS.line_diff_modified,
  COLOR_SCHEME_GLOBALS.line_diff_deleted,
  COLOR_SCHEME_GLOBALS.selection,
  COLOR_SCHEME_GLOBALS.selection_foreground,
  COLOR_SCHEME_GLOBALS.selection_border,
  COLOR_SCHEME_GLOBALS.inactive_selection_border,
  COLOR_SCHEME_GLOBALS.inactive_selection_foreground,
  COLOR_SCHEME_GLOBALS.highlight,
  COLOR_SCHEME_GLOBALS.find_highlight,
  COLOR_SCHEME_GLOBALS.find_highlight_foreground,
  COLOR_SCHEME_GLOBALS.scroll_highlight,
  COLOR_SCHEME_GLOBALS.scroll_selected_highlight,
  COLOR_SCHEME_GLOBALS.rulers,
  COLOR_SCHEME_GLOBALS.guide,
  COLOR_SCHEME_GLOBALS.active_guide,
  COLOR_SCHEME_GLOBALS.stack_guide,
  COLOR_SCHEME_GLOBALS.brackets_foreground,
  COLOR_SCHEME_GLOBALS.bracket_contents_foreground,
  COLOR_SCHEME_GLOBALS.tags_foreground,
  COLOR_SCHEME_GLOBALS.shadow,
]

export const COLOR_SCHEME_STRING_PROPS = [
  COLOR_SCHEME_GLOBALS.block_caret_corner_style, // round, cut, square
  COLOR_SCHEME_GLOBALS.block_caret_corner_radius, // round, cut
  COLOR_SCHEME_GLOBALS.block_caret_corner_radius, // round, cut
  COLOR_SCHEME_GLOBALS.popup_css,
  COLOR_SCHEME_GLOBALS.phantom_css,
  COLOR_SCHEME_GLOBALS.sheet_css,
  COLOR_SCHEME_GLOBALS.line_diff_width, // 1 - 8
  COLOR_SCHEME_GLOBALS.selection_border_width, // 0 - 4
  COLOR_SCHEME_GLOBALS.selection_corner_style, // round, cut, square
  COLOR_SCHEME_GLOBALS.selection_corner_radius, // round, cut
  COLOR_SCHEME_GLOBALS.brackets_options, // underline, stippled_underline, squiggly_underline, foreground, bold, italic
  COLOR_SCHEME_GLOBALS.bracket_contents_options, // underline, stippled_underline, squiggly_underline, foreground
  COLOR_SCHEME_GLOBALS.tags_options, // underline, stippled_underline, squiggly_underline, foreground
  COLOR_SCHEME_GLOBALS.shadow_width,
]

export const COLOR_SCHEME_DECORATION_PROPS = [
  COLOR_SCHEME_GLOBALS.brackets_options, // underline, stippled_underline, squiggly_underline, foreground, bold, italic
  COLOR_SCHEME_GLOBALS.bracket_contents_options, // underline, stippled_underline, squiggly_underline, foreground
  COLOR_SCHEME_GLOBALS.tags_options, // underline, stippled_underline, squiggly_underline, foreground
]

export const COLOR_SCHEME_CORNER_PROPS = [
  COLOR_SCHEME_GLOBALS.block_caret_corner_style, // round, cut, square
  COLOR_SCHEME_GLOBALS.block_caret_corner_radius, // round, cut
  COLOR_SCHEME_GLOBALS.block_caret_corner_radius, // round, cut
  COLOR_SCHEME_GLOBALS.selection_corner_style, // round, cut, square
  COLOR_SCHEME_GLOBALS.selection_corner_radius, // round, cut
]

export const COLOR_SCHEME_GLOBAL_PROPS = [
  ...COLOR_SCHEME_COLOR_PROPS,
  ...COLOR_SCHEME_STRING_PROPS,
  ...COLOR_SCHEME_DECORATION_PROPS,
  ...COLOR_SCHEME_CORNER_PROPS,
]

export const CSS_COLORS = {
  aliceblue: 'aliceblue',
  antiquewhite: 'antiquewhite',
  aqua: 'aqua',
  aquamarine: 'aquamarine',
  azure: 'azure',
  beige: 'beige',
  bisque: 'bisque',
  black: 'black',
  blanchedalmond: 'blanchedalmond',
  blue: 'blue',
  blueviolet: 'blueviolet',
  brown: 'brown',
  burlywood: 'burlywood',
  cadetblue: 'cadetblue',
  chartreuse: 'chartreuse',
  chocolate: 'chocolate',
  coral: 'coral',
  cornflowerblue: 'cornflowerblue',
  cornsilk: 'cornsilk',
  crimson: 'crimson',
  cyan: 'cyan',
  darkblue: 'darkblue',
  darkcyan: 'darkcyan',
  darkgoldenrod: 'darkgoldenrod',
  darkgray: 'darkgray',
  darkgreen: 'darkgreen',
  darkgrey: 'darkgrey',
  darkkhaki: 'darkkhaki',
  darkmagenta: 'darkmagenta',
  darkolivegreen: 'darkolivegreen',
  darkorange: 'darkorange',
  darkorchid: 'darkorchid',
  darkred: 'darkred',
  darksalmon: 'darksalmon',
  darkseagreen: 'darkseagreen',
  darkslateblue: 'darkslateblue',
  darkslategray: 'darkslategray',
  darkslategrey: 'darkslategrey',
  darkturquoise: 'darkturquoise',
  darkviolet: 'darkviolet',
  deeppink: 'deeppink',
  deepskyblue: 'deepskyblue',
  dimgray: 'dimgray',
  dimgrey: 'dimgrey',
  dodgerblue: 'dodgerblue',
  firebrick: 'firebrick',
  floralwhite: 'floralwhite',
  forestgreen: 'forestgreen',
  fuchsia: 'fuchsia',
  gainsboro: 'gainsboro',
  ghostwhite: 'ghostwhite',
  gold: 'gold',
  goldenrod: 'goldenrod',
  gray: 'gray',
  green: 'green',
  greenyellow: 'greenyellow',
  grey: 'grey',
  honeydew: 'honeydew',
  hotpink: 'hotpink',
  indianred: 'indianred',
  indigo: 'indigo',
  ivory: 'ivory',
  khaki: 'khaki',
  lavender: 'lavender',
  lavenderblush: 'lavenderblush',
  lawngreen: 'lawngreen',
  lemonchiffon: 'lemonchiffon',
  lightblue: 'lightblue',
  lightcoral: 'lightcoral',
  lightcyan: 'lightcyan',
  lightgoldenrodyellow: 'lightgoldenrodyellow',
  lightgray: 'lightgray',
  lightgreen: 'lightgreen',
  lightgrey: 'lightgrey',
  lightpink: 'lightpink',
  lightsalmon: 'lightsalmon',
  lightseagreen: 'lightseagreen',
  lightskyblue: 'lightskyblue',
  lightslategray: 'lightslategray',
  lightslategrey: 'lightslategrey',
  lightsteelblue: 'lightsteelblue',
  lightyellow: 'lightyellow',
  lime: 'lime',
  limegreen: 'limegreen',
  linen: 'linen',
  magenta: 'magenta',
  maroon: 'maroon',
  mediumaquamarine: 'mediumaquamarine',
  mediumblue: 'mediumblue',
  mediumorchid: 'mediumorchid',
  mediumpurple: 'mediumpurple',
  mediumseagreen: 'mediumseagreen',
  mediumslateblue: 'mediumslateblue',
  mediumspringgreen: 'mediumspringgreen',
  mediumturquoise: 'mediumturquoise',
  mediumvioletred: 'mediumvioletred',
  midnightblue: 'midnightblue',
  mintcream: 'mintcream',
  mistyrose: 'mistyrose',
  moccasin: 'moccasin',
  navajowhite: 'navajowhite',
  navy: 'navy',
  oldlace: 'oldlace',
  olive: 'olive',
  olivedrab: 'olivedrab',
  orange: 'orange',
  orangered: 'orangered',
  orchid: 'orchid',
  palegoldenrod: 'palegoldenrod',
  palegreen: 'palegreen',
  paleturquoise: 'paleturquoise',
  palevioletred: 'palevioletred',
  papayawhip: 'papayawhip',
  peachpuff: 'peachpuff',
  peru: 'peru',
  pink: 'pink',
  plum: 'plum',
  powderblue: 'powderblue',
  purple: 'purple',
  rebeccapurple: 'rebeccapurple',
  red: 'red',
  rosybrown: 'rosybrown',
  royalblue: 'royalblue',
  saddlebrown: 'saddlebrown',
  salmon: 'salmon',
  sandybrown: 'sandybrown',
  seagreen: 'seagreen',
  seashell: 'seashell',
  sienna: 'sienna',
  silver: 'silver',
  skyblue: 'skyblue',
  slateblue: 'slateblue',
  slategray: 'slategray',
  slategrey: 'slategrey',
  snow: 'snow',
  springgreen: 'springgreen',
  steelblue: 'steelblue',
  tan: 'tan',
  teal: 'teal',
  thistle: 'thistle',
  tomato: 'tomato',
  turquoise: 'turquoise',
  violet: 'violet',
  wheat: 'wheat',
  white: 'white',
  whitesmoke: 'whitesmoke',
  yellow: 'yellow',
  yellowgreen: 'yellowgreen',
}

export const PALETTISH = {
  redish: CSS_COLORS.red,
  orangish: CSS_COLORS.orange,
  yellowish: CSS_COLORS.yellow,
  greenish: CSS_COLORS.green,
  cyanish: CSS_COLORS.cyan,
  bluish: CSS_COLORS.blue,
  purplish: CSS_COLORS.purple,
  pinkish: CSS_COLORS.pink,
}

export const BUILTIN_PALETTE = {
  foreground: CSS_COLORS.papayawhip,
  background: 'color(dimgray blenda(black 15%))',
  accent: CSS_COLORS.darkorange,
}