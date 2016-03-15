var chai = require('chai')
var fizz = require('../src/fizz')
var expect = chai.expect

describe('fizztest', ()=>{
    it('should return fizz if number is 3', ()=>{
        var output = fizz.getOutput(3)
        expect(output).to.equal('fizz')
    })
})