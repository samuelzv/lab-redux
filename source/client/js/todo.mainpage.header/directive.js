

module.exports = function() {
  return {
    restrict: 'E',
    replace: true,
    link: require('./link'),
    controller: require('./controller'),
    controllerAs: "header",
    bindToController: true,
    templateUrl: 'js/todo.mainpage.header/template.html'
  }

};