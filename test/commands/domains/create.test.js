const nock = require('nock');
const execa = require('execa');
const { expect } = require('chai');

describe('domains:create', () => {
  it('creates domain without assigning ip when ip is not passed', async () => {
    nock('https://api.digitalocean.com/v2')
      .post('/domains/', {
        name: 'satyarohith.com'
      })
      .reply(200, {});

    const { stdout } = await execa('./bin/run', [
      'domains:create',
      '--name',
      'satyarohith.com'
    ]);

    expect(stdout).to.equal('satyarohith.com is created!');
  });
});
