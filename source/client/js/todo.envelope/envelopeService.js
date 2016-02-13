var envelopeService = function() {
  const indicatorSize = {
    unit: 'pixels',
    width: 100,
    height: 16.23
  };

  const envelopeSize = {
    unit: 'pixels',
    width: 89,
    height: 160
  };

  var getTopByCurrentBudget = function(budget) {
    var initialTop = 0;

    var totalHeight = (envelopeSize.height - indicatorSize.height - initialTop);


    return initialTop + (totalHeight - ( (budget.current / budget.initial) * (totalHeight) ));
  };

  return {
    getTopByCurrentBudget
  }

};

module.exports = envelopeService;
