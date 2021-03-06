(function() {
  'use strict';
  angular.module('civic.services')
    .factory('Variants', VariantsService);

  // @ngInject
  function VariantsService($resource) {
    var Variants = $resource('/api/genes/:geneId/variants/:variantId',
      {},
      {
        get: {
          method: 'GET',
          isArray: false
        },
        query: {
          method: 'GET',
          isArray: true
        }
      });

    return Variants;
  }

})();
