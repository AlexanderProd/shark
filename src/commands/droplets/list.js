const {Command, flags} = require('@oclif/command')

class ListCommand extends Command {
  async run() {
    const {flags} = this.parse(ListCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /home/s/github/shark/src/commands/droplets/list.js`)
  }
}

ListCommand.description = `Describe the command here
...
Extra documentation goes here
`

ListCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ListCommand
