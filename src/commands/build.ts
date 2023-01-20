import {Command, Flags} from '@oclif/core'
import {readFileSync, writeFileSync} from 'node:fs'
import path from 'node:path'
import {generateTheme} from '../lib/generate'

export default class Build extends Command {
  static description = 'Build the theme'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    themeDirectory: Flags.string({char: 'd', description: 'theme directory'}),
    outputDirectory: Flags.string({char: 'o', description: 'output directory'}),
    // flag with no value (-f, --force)
    // force: Flags.boolean({char: 'f'}),
  }

  static args = [
    {
      name: 'Theme Name',
      required: true,
    },
  ]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Build)
    const themeDirectory = path.resolve(flags.themeDirectory || '.')

    const outputFile = path.join(path.resolve(flags.outputDirectory || '.'), `${args['Theme Name']}.sublime-color-scheme`)
    const paletteFile = path.join(themeDirectory, 'palette.json')
    const scopesFile = path.join(themeDirectory, 'scopes.json')
    const stylesFile = path.join(themeDirectory, 'styles.json')
    const uiFile = path.join(themeDirectory, 'ui.json')

    const palette = JSON.parse(readFileSync(paletteFile, 'utf-8'))
    const scopes = JSON.parse(readFileSync(scopesFile, 'utf-8'))
    const styles = JSON.parse(readFileSync(stylesFile, 'utf-8'))
    const ui = JSON.parse(readFileSync(uiFile, 'utf-8'))

    const scheme = generateTheme(scopes, styles, ui, palette)

    writeFileSync(outputFile, JSON.stringify(scheme, undefined, 2))
  }
}
