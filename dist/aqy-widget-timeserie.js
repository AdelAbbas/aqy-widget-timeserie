(function(window, undefined) {

  'use strict';
angular.module('adf.widget.chart', ['adf.provider'])
  .config(["dashboardProvider", function(dashboardProvider){

    dashboardProvider
      .widget('chart', {
        title: 'Chart',
        description: 'Monitoring of the control values from the plant',
        templateUrl: 'app/entities/chart/view.html',
        controller: 'chartCtrl',
        controllerAs: 'chartCtrl',
        config: {fields: [],
                 controlname : "",
                 period: 0,
                },
        edit: {
          templateUrl: 'app/entities/chart/edit.html',
          immediate: true
        }
      })
  }])
  .controller('chartCtrl', ["$scope", "config", "Timeserie", "_", "$interval", function($scope, config, Timeserie,_, $interval){

    getFieldNames();

    function getFieldNames() {
      var fieldNames = [];
      Timeserie.getFieldNames(function(result){
        config.fields = result;
      });
    }
  }]);

})(window);
