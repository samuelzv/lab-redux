var todoEnvelopeColorsService = function() {
  var colors = ['#337AB7', '#5CB85C','#B051C0', '#F0AD4E', '#D9534F'];

  function getColorByIndex(index) {

    // if overflow get the correct index
    if(index >= colors.length) {
      index = (index % colors.length) ;
    }

    return colors[index];
  }

  return {
    getColorByIndex
  }

};

module.exports = todoEnvelopeColorsService;
