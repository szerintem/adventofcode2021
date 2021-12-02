const day01 = require('./01')
const fs = require('fs')

describe('day1', function() {
  it('should work by example', function() {
    const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
    expect(day01(input)).to.eql(7)
  })
  it('should work by seed', function() {
    const input = fs.readFileSync(__dirname+'/01.txt').toString().trim().split('\n').map(e => Number(e))
    expect(day01(input)).to.eql(1316)
  })
})
