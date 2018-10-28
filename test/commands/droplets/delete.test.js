const {expect, test} = require('@oclif/test')

describe('droplets:delete', () => {
  test
  .stdout()
  .command(['droplets:delete'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['droplets:delete', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
