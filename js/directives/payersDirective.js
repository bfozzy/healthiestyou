angular.module("app")
  .directive("payersDirective", function(){
    return {
      templateUrl: "./assets/templates/payersDirective.html",
      controller: function payersController ($scope, mainService){
        mainService.getPayers().then(function(res){
          // console.log(res.data.data);
          $scope.payers = res.data.data;
        }); // ends getPayers call
        $scope.addPayer = function(dental, medicaid, newPayerName){
          mainService.createPayer(dental, medicaid, newPayerName).then(function(res){
            if (res.status === 200){
              alert("Payer Added");
            }
            else alert("hmmm.... that didn't work!");
          });
        }; // ends addPayer
      } // ends controller
    }; // ends return
  }); // ends directive
