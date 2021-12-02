/*eslint no-process-env: 0*/

const sinon = require('sinon')
const chai = require('chai')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
global.expect = chai.expect

before(function () {
  global.sandbox = sinon.createSandbox()
})

beforeEach(function () {
  this.sinon = sinon.createSandbox()
})

afterEach(function () {
  global.sandbox.restore()
})
