# Sublime Text Theme Generator

A theme generator based on "tokens" 🪙

```
# Setting up...
> npm install && npm link

# Go to an empty directory
> st-theme init
```

This should create the following files:
- palette.json 🎨
  > for all your colors / the "variables" section

- scopes.json 🔭
  > for mapping tokens to scopes (token scopes)

- styles.json 👗
  > for mapping tokens to styles (token styles)

- ui.json 👁
  > Basically the "globals" section

### Accessing the Palette

You can directly access colors in your palette by name (w/o `var()`). But if you are going to adjust the color (blend, alpha) you will need to use `var()`

### What are Tokens?

Tokens are basically a list of scopes grouped together. These scopes emit the same context. For example:

__Comment__ tokens have the scopes `comment` and `punctuation.definition.comment`.

We can then style these scopes based on the given context (i.e. comments are supposed to be dimmed color such as "gray")

You can find the list of tokens [here](TokenTypes.md)

### Token Scopes (scopes.json)
```
{
  comment: {
    scopes: ['comment', 'punctuation.definition.comment'],
  },
}
```

### Token Styles (styles.json)
```
{
  comment: {
    color: 'gray'
  },
}
```
*note that token styles also support other options such as background, font_style (array)*

---

### Theme? You are just generating color-schemes!

I plan to incorporate [themes](https://www.sublimetext.com/docs/themes.html) soon 😉


### What about existing scopes from different syntaxes?

I am still trying to understand 🤓 each syntax and slowly 🐢 working on [them](src/lib/token-scopes). You can make a PR though 😁


### What if I generate a theme without styling or palettes? Ha! Gotcha!

The empty palette comes with these defaults:

```
{
  foreground: "papayawhip",
  background: 'color(dimgray blenda(black 15%))',
  accent: "darkorange",
}
```

Which can be overridden in the palette.  The `ui.json` is already filled with a basic setup. As for the palette, it uses built-in colors by default.

---

#### Support

Buy me a [coffee ☕](https://github.com/sponsors/kapitanluffy)

#### License

[MIT](LICENSE)
