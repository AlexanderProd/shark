const DigitalOcean = require('do-wrapper');
const { Command } = require('@oclif/command');

class BaseCommand extends Command {
  constructor(...props) {
    super(...props);
  }

  init() {
    this.shark = {
      api: new DigitalOcean(ACCESS_TOKEN)
    };
  }
}

module.exports = BaseCommand;
