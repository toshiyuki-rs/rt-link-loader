const jestConfig = require('jest-config')

const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  transform: { 
    ...jestConfig.defaults.transform,
    '\.ts$': 'ts-jest'
  },
  testEnvironmentOptions: {
    resources: 'usable'
  }
}

module.exports = config
// vi: se ts=2 sw=2 et:
