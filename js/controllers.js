angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope,$rootScope,$http) {

 $scope.urlReference=firebase.database().ref('/myDatabse/pathDetails');

  $http.get("https://motivationapp-51320.firebaseio.com/myDatabse.json")
    .then(function(response) {
        $scope.myWelcome = response;
        // console.log(JSON.stringify($scope.myWelcome));
      $scope.imagePath=($scope.myWelcome.data.pathDetails).reverse();
        // alert($scope.myWelcome.data.pathDetails.length)

    });

  // firebase.database().ref('/myDatabse/pathDetails').once('value').then(function(snapshot) {
  //
  //   $scope.imagePath=snapshot.val();
  //
  // });



})

.controller('ChatsCtrl', function($scope, $http,$ionicModal,$rootScope,$cordovaFileTransfer) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

    $http.get("https://motivationapp-51320.firebaseio.com/myDatabse.json")
    .then(function(response) {
        $scope.myWelcome = response;
        // console.log(JSON.stringify($scope.myWelcome));
      $scope.imagePath=($scope.myWelcome.data.pathDetails).reverse();
      console.log($scope.imagePath);
        // alert($scope.myWelcome.data.pathDetails.length)

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

  $scope.downloadImage = function() {
    var url = "http://ngcordova.com/img/ngcordova-logo.png",
        filename = url.split("/").pop(),
        targetPath = cordova.file.externalRootDirectory + filename,
        options = {},
        trustHosts = true;

alert('hi')

    $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
      .then(
        function(result) {
          alert('Download success');
          refreshMedia.refresh(targetPath);
        },
        function(err) {
          alert('Error: ' + JSON.stringify(err));
        },
        function(progress) {
          // progressing download...
        }
      );
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
