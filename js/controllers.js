angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope,$rootScope,$http) {

 $scope.urlReference=firebase.database().ref('/myDatabse/pathDetails');
$scope.loader=true;
  $http.get("https://motivationapp-51320.firebaseio.com/myDatabse.json")
    .then(function(response) {
      $scope.loader=false;
      if(response.data.pathDetails)
      {
        $scope.myWelcome = response;
        // console.log(JSON.stringify($scope.myWelcome));
      $scope.imagePath=($scope.myWelcome.data.pathDetails).reverse();
    }
    else {
      console.log('make a generic no datafound function');
    }

        // alert($scope.myWelcome.data.pathDetails.length)

    },function errorHandler(response)
  {
    console.log('make a generic no error function');
  });

  $scope.doRefresh = function() {
    $http.get("https://motivationapp-51320.firebaseio.com/myDatabse.json")
      .then(function(response) {
        $scope.loader=false;
        if(response.data.pathDetails)
        {
          $scope.myWelcome = response;
      $scope.imagePath=($scope.myWelcome.data.pathDetails).reverse();

        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
      }
      else {
        console.log('make a generic no datafound function');
      }

          // alert($scope.myWelcome.data.pathDetails.length)

      },function errorHandler(response)
    {
      console.log('make a generic no error function');
    });
  }

  //  PersonService.GetNewUser().then(function(items){
  //    $scope.items = items.concat($scope.items);
   //
  //    //Stop the ion-refresher from spinning
  //    $scope.$broadcast('scroll.refreshComplete');
  //  });

  // firebase.database().ref('/myDatabse/pathDetails').once('value').then(function(snapshot) {
  //
  //   $scope.imagePath=snapshot.val();
  //
  // });



})

.controller('ChatsCtrl', function($scope, $http,$ionicModal,$rootScope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
$scope.loader=true;

    $http.get("https://motivationapp-51320.firebaseio.com/myDatabse.json")
    .then(function(response) {
      if(response.data.pathDetails)
      {
        $scope.loader=false;
        $scope.myWelcome = response;
        // console.log(JSON.stringify($scope.myWelcome));
      $scope.imagePath=($scope.myWelcome.data.pathDetails).reverse();
      console.log(response.data.pathDetails);
        // alert($scope.myWelcome.data.pathDetails.length)
      }

      else {
        console.log('make a generic no datafound function');
      }


    },function error(response)
  {
  console.log(response+'make a generic no error function');
  });


        $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
   $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

//    $scope.imageSrc = 'http://ionicframework.com/img/ionic-logo-blog.png';

    $scope.getCurrentImage=function(value)

    {
    $rootScope.imageUrl=value;
    $scope.modal.show()
    }


//  $scope.chats = Chats.all();
//  $scope.remove = function(chat) {
//    Chats.remove(chat);
//  };
$scope.doRefresh = function() {
  $http.get("https://motivationapp-51320.firebaseio.com/myDatabse.json")
    .then(function(response) {
      $scope.loader=false;
      if(response.data.pathDetails)
      {
        $scope.myWelcome = response;
    $scope.imagePath=($scope.myWelcome.data.pathDetails).reverse();

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    }
    else {
      console.log('make a generic no datafound function');
    }

        // alert($scope.myWelcome.data.pathDetails.length)

    },function errorHandler(response)
  {
    console.log('make a generic no error function');
  });
}
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
