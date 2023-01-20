import {Command, Flags} from '@oclif/core'
import {cpSync} from 'node:fs'
import path from 'node:path'

export default class Init extends Command {
  static description = 'Initialize a new theme'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    // themeDirectory: Flags.string({char: 'd', description: 'theme directory'}),
    // outputDirectory: Flags.string({char: 'o', description: 'output directory'}),
    // flag with no value (-f, --force)
    // force: Flags.boolean({char: 'f'}),
  }

  static args = [
    {
      name: 'Target Directory',
      required: false,
    },
  ]

  public async run(): Promise<void> {
    const {args} = await this.parse(Init)
    const target = path.resolve(args['Target Directory'] || '.')

    cpSync(path.resolve(path.join(__dirname, '..', '..', 'theme')), target, {recursive: true})
  }
}
