var chai = require('chai')
var fizz = require('../src/fizz')
var expect = chai.expect

describe('fizztest', ()=>{
    it('should return fizz if number is 3', ()=>{
        var output = fizz.getOutput(3)
        expect(output).to.equal('fizz')
    })
    
    it('should return fizz if numer is 6', ()=>{
        var output = fizz.getOutput(6)
        expect(output).to.equal('fizz')
    })
    
    it('should return buzz if number is 5', ()=>{
        var output = fizz.getOutput(5)
        expect(output).to.equal('buzz')
    })
    
    it('should return buzz if numer is 10', ()=>{
        var output = fizz.getOutput(10)
        expect(output).to.equal('buzz')
    })
    
    it('should return buzz if number is 88', ()=>{
        var output = fizz.getOutput(88)
        expect(output).to.equal('88')
    })
    
    it('should return fizzbuzz if number is 15', ()=>{
        var output = fizz.getOutput(15)
        expect(output).to.equal('fizzbuzz')
    })
    
    it('should return fizz if number is 83', ()=>{
        var output = fizz.getOutput(83)
        expect(output).to.equal('fizz')
    })
    
    it('should return buzz if number is 59', ()=>{
        var output = fizz.getOutput(59)
        expect(output).to.equal('buzz')
    })
    
    it('should return fizz if number is 53', ()=>{
        var output = fizz.getOutput(53)
        expect(output).to.equal('fizzbuzz')
    })
    
})