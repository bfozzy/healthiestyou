angular.module("app")
  .service("mainService", function($http){
    var url = "https://dev.healthiestyou.com/open-doctor/api/health-insurance/";
    //GET Endpoints
    this.getPayers = function(){
      return $http.get(url+"payers");
    }; // ends getPayers function

    this.getPayer = function(payerId){
      return $http.get(url+"payers/"+payerId);
    };
    //POST Endpoints
    this.createPayer = function(dental, medicaid, newPayerName){
      if (!dental){
        dental = false;
      }
      if (!medicaid){
        medicaid = false;
      }
      var newPayer = {
        created: new Date().toISOString(),
        isDentalOnly: dental,
        isMedicaid: medicaid,
        name: newPayerName,
        plans: [],
        status: "Inactive",
        updated: null
      };
      console.log(newPayer);
      return $http.post(url+"payers", newPayer);
    };

    this.addPlan = function(){

      return $http.post(url+"payers/"+payerId+"/plans", newPlan);
    };
    //PUT Endpoints

    //DELETE Endpoints
    // this.deletePayer = function(){
    // }

  });
