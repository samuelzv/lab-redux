var expect = require('chai').expect;
var envelopeColorService = require('./../source/client/js/todo.envelope/envelopeColorsService.js')();

describe('Test envelopeColorsService', function() {

  it('On first element it should return blue', function(done) {
    expect(envelopeColorService.getColorByIndex(0)).to.equal('red');
    done();
  });


  it('when index overflow array length it should return correct index', function(done) {
    expect(envelopeColorService.getColorByIndex(4)).to.equal('red');
    done();
  });

  it('when index overflow array length it should return correct index', function(done) {
    expect(envelopeColorService.getColorByIndex(10)).to.equal('green');
    done();
  });

});
