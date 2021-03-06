(function() {
  'use strict';
  angular.module('civic.events')
    .directive('variantTalk', variantTalk);

// @ngInject
  function variantTalk() {
    var directive = {
      restrict: 'E',
      replace: true,
      template: '<div class="variantTalk"><p>variant-talk directive!</p></div>',
      link: function($scope) {
        console.log('variantTalk linked.');
      }
    };

    return directive;
  }
})();