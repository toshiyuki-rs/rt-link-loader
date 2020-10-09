
const JSDOMEnvironment = require('jest-environment-jsdom')


class CssTestEnvironment extends JSDOMEnvironment {

  /**
   * constructor
   */
  constructor(config, context) {
    super(config, context)
  }

  async setup() {
    await super.setup()
    const elem = this.dom.window.document.body.innerHTML = `<p>Hello world</p>`
  }

  async teardown() {
    await super.teardown()
  }
}


module.exports = CssTestEnvironment
// vi: se ts=2 sw=2 et:
