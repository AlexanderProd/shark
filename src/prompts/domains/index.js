const { prompt } = require('enquirer');

const askDomainName = () => {
  return prompt({
    type: 'input',
    name: 'domainName',
    message: 'What is the domain name?',

    validate(domain) {
      // extracted from stackoverflow
      var regx = new RegExp(
        /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/
      );
      if (!domain.match(regx)) {
        return 'Please use a valid domain name';
      }
      return true;
    }
  });
};

module.exports = {
  askDomainName
};
