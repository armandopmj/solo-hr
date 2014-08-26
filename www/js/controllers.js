angular.module('starter.controllers', [])

.controller('AppCtrl', function(
    $scope, 
    $ionicModal, 
    $timeout, 
    $cordovaFlashlight ) {
  // Form data for the login modal
  $scope.loginData = {};
  $scope.lightOn = false;

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.flash = function() {
    if( $scope.lightOn ) {
      $cordovaFlashlight.switchOff();
      $scope.lightOn = false; 
    }
    else {
      $cordovaFlashlight.switchOn();
      $scope.lightOn = true;    
    }
  };

})

.controller('MessageCtrl', function($scope, $cordovaSocialSharing) {
  $scope.message = "";
  var messages =  [ "Are you an interior decorator? Because when I saw you, the entire room became beautiful.",
    "Are you religious? Because you're the answer to all my prayers.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "I'm not a photographer, but I can picture me and you together.",
    "They say dating is a numbers game... so can I get your number?",
    "Do you have a sunburn, or are you always this hot?",
    "Is your daddy a Baker? Because you've got a nice set of buns!",
    "Did you invent the airplane? Cause you seem Wright for me.",
    "If I were a stop light, I'd turn red everytime you passed by, just so I could stare at you a bit longer.",
    "I wanna live in your socks so I can be with you every step of the way.",
    "I thought happiness started with an H. Why does mine start with U?",
    "I seem to have lost my phone number. Can I have yours?",
    "Hey baby, you must be a light switch, cuz every time I see you, you turn me on!" ]

  $scope.randoMessage = function() {
    $scope.message = messages[ Math.floor( Math.random() * messages.length ) ];
  };

  $scope.SMS = function() {
      $cordovaSocialSharing.shareViaSMS( $scope.message, 61223327100);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Message 1', id: 1 },
    { title: 'Message 2', id: 2 },
    { title: 'Message 3', id: 3 },
    { title: 'Message 4', id: 4 },
    { title: 'Message 5', id: 5 },
    { title: 'Message 6', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('FlashlightCtrl', function($scope, $stateParams) {
  
  $scope.flash = function() {
    console.log("in flash");
    $cordovaFlashlight.switchOn();

  }

});
