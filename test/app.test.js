var expect = require('chai').expect
var pembagian = require('../app.js')

describe('pembagian', function(){
 var hasilBagi, angka1, angka2

 beforeEach(function(){
  angka1 = 4
  angka2 = 2
  hasilBagi = pembagian(angka1, angka2) 
 })

 it('should return a number', function(){
  expect(hasilBagi).to.be.a('number')
 })

 it('should equal 2', function(){
  expect(hasilBagi).to.be.equal(2)
 })
})


