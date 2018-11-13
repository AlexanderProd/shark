const {Command, flags} = require('@oclif/command')

class DeleteCommand extends Command {
  async run() {
    const {flags} = this.parse(DeleteCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /home/s/github/shark/src/commands/domains/delete.js`)
  }
}

DeleteCommand.description = `Describe the command here
...
Extra documentation goes here
`

DeleteCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = DeleteCommand