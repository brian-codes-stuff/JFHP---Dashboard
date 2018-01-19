

  // FIREBASE CONFIG
  var config = {
        apiKey: "AIzaSyCdIfXmZNpv1eUFQnvIUuiLDqYNKyJQ9oE",
    authDomain: "jfhp-reporting-app.firebaseapp.com",
    databaseURL: "https://jfhp-reporting-app.firebaseio.com",
    storageBucket: "jfhp-reporting-app.appspot.com",
  };

  //INITIALIZE FIREBASE WEB APP
  firebase.initializeApp(config);
  var db = firebase.database();
  var auth = firebase.auth();   
    


function GetThatPassword(){
    
    var emailOnFile = document.getElementById('email-to-reset');
var emailAddress = emailOnFile.value;
var newPasswordSubmitButtonLink = document.getElementById('new-password-submit-button-link');

auth.sendPasswordResetEmail(emailAddress).then(function() {
  console.log('it worked!');
}).catch(function(error) {
 console.log('Nope.. Try again...')
});
}
    
 /*  
    var emailOnFile = document.getElementById('email-to-reset');
   var newPasswordSubmitButtonLink = document.getElementById('new-password-submit-button-link');
    var email = emailOnFile.value;
  
  if(newPasswordSubmitButtonLink){
  newPasswordSubmitButtonLink.addEventListener("click", function(){
              newPasswordViaEmailLink();
            });
  }
            
            function newPasswordViaEmailLink(){
                
    auth.sendPasswordResetEmail(email).then(function() {
    console.log('check email to complete action') // toast('Check email to complete action',7000);
    }).catch(function(error) {
    console.log('something went wrong...') // toast(error.message,7000);
    });
            }
}); */