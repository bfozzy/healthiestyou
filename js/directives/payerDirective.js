angular.module("app")
  .directive("payerDirective", function(){
    return {
      templateUrl: "./assets/templates/payerDirective.html",
      scope: "=",
      controller: function($scope, mainService){
        console.log("payer brought in", $scope.payer);
      }, // ends controller
    }; // ends return
  }); // ends directive
