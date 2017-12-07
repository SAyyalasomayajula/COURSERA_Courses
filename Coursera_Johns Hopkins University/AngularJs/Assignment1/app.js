(function() {
  "use strict";

  angular
    .module("lunchApp", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.LunchChecker = function() {
      var lunchItems = 0;
      if (!$scope.items) {
        $scope.message = "Please enter data first";
        classColor("form-group message", "red");
      } else {
        $scope.message = "";
        var lunchInput = $scope.items.split(",");
        var index;
        for (index = 0; index < lunchInput.length; index++) {
          if (lunchInput[index].trim().length > 0) lunchItems++;
        }
        classColor("form-group message", "green");
        if (lunchItems <= 3) $scope.message = "Enjoy!";
        else if(lunchItems > 3){ $scope.message = "Too much!";
          classColor("form-group message", "red");
        } 
      }
      $scope.lunchItems = lunchItems;
    };
  }
  function classColor(xclass, xcolor) {
    var x = document.getElementsByClassName(xclass);
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.color = xcolor;
    }
  }
})();