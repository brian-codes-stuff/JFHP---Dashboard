  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCdIfXmZNpv1eUFQnvIUuiLDqYNKyJQ9oE",
    authDomain: "jfhp-reporting-app.firebaseapp.com",
    databaseURL: "https://jfhp-reporting-app.firebaseio.com",
    projectId: "jfhp-reporting-app",
    storageBucket: "jfhp-reporting-app.appspot.com",
    messagingSenderId: "20248703755"
  };
  firebase.initializeApp(config);

  var db = firebase.database();
  var auth = firebase.auth();

  var email = null;
  var provider = null;
  var displayName = null;
  var photoUrl = null;
  var uid = null;
  var verifiedUser = false;



 // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: 'dashboard.html',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          
          firebase.auth.EmailAuthProvider.PROVIDER_ID
         
        ],
        // Terms of service url.
        tosUrl: 'https://www.brianalonzo.com/terms'
      };

      // Initialize the FirebaseUI Widget using Firebase.
       var ui = new  firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
         
  