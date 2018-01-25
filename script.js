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

         
  