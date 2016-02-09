var envelopeService = function() {
  const indicatorSize = {
    unit: 'pixels',
    width: 16,
    height: 16
  };

  const envelopeSize = {
    unit: 'pixels',
    width: 70,
    height: 130
  };

  var getTopByCurrentBudget = function(originalBudget, currentBudget) {

    if(!currentBudget) {
      return 0;
    }
    var totalHeight = (envelopeSize.height - indicatorSize.height);

    return totalHeight - ( (currentBudget / originalBudget) * (totalHeight) );
  };

  return {
    getTopByCurrentBudget
  }

};

module.exports = envelopeService;
