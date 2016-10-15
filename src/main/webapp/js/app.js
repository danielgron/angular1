var app = angular.module('viewApp',['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/all", {
      templateUrl: "views/PersonList.html",
      controller: "PersonController"
    })
    .when("/add", {
      templateUrl: "views/add.html",
      controller: "PersonController"
    })
    .when("/details/:index", {
      templateUrl: "views/PersonDetails.html",
      controller: "PersonController"
    })
    
    .otherwise({
      redirectTo: "/home"
    });
});

app.factory("personList",function(){
    var persons = [
 {id: 1,name: "Jens",age : 18}
 ,{id: 2,name: "Peter",age : 23}
 ,{id: 3,name: "Hanne",age : 23}
];
var nextID=4;

return {
    getAll : function(){ return persons;},
    addPerson : function(p){persons.push(p);},
    getNextID : function(){
        return nextID++;
    }
  };
});

app.controller("PersonController",function($scope,$routeParams,personList){
    
    var self= this;
    
    
$scope.persons=personList.getAll();
$scope.addP=function(){
    console.log("self");
        //$scope.persons.push(p);
        
    
      $scope.p.id = personList.getNextID();
      personList.addPerson($scope.p);
    $scope.p = {};
        
        
    };

if (angular.isDefined($routeParams.index)) {
    var i = $routeParams.index;
    $scope.person = $scope.persons[i];
  }
});



