  // Initialize Firebase
  var config = {
    apiKey: "HIDDEN",
    authDomain: "jfhp-reporting-app.firebaseapp.com",
    databaseURL: "https://jfhp-reporting-app.firebaseio.com",
    projectId: "jfhp-reporting-app",
    storageBucket: "jfhp-reporting-app.appspot.com",
    messagingSenderId: "HIDDEN"
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


// var teams = db.ref('users').orderByChild('TeamID').equalTo('01');


     

var ref = db.ref('users');

ref.on('value', gotData, errData);

function gotData(data) {
//    console.log(data.val());   
    var users = data.val();
    var keys = Object.keys(users);
  // console.log(keys);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];

 // var userSelect = '';
   //          userSelect += '<option value="' + k + '">' +  k + '</option>';
     //        $('#myDropdown').append(userSelect);



        var reports = users[k].reports;
    //    console.log(reports);
        var reportid = Object.keys(reports);
    //    console.log(reportid);
        for (var ri = 0; ri < reportid.length; ri++) {
            var m = reportid[ri];
            var theTeam = reports[m].TeamID;
            var theName = reports[m].name;
            var theDate = reports[m].date;
            var theLeader = reports[m].teamLeader;
            var theLocation = reports[m].location;
            var theContacts = reports[m].contacts;
            var theDecisions = reports[m].decisions;
            var theFollowUps = reports[m].followUps;
          //  console.log(theName, theDate, theLeader, theLocation, theContacts, theDecisions, theFollowUps);
       
        


            var content = '';
            var val = data.val();
            content += '<tr class="collapse " id="' + theTeam + '">' + '<td>' + theTeam + '</td>' + '<td>' + theName + '</td>' + '<td>' + theDate + '</td>' + '<td>' + theLeader + '</td>' + '<td>' + theLocation + '</td>' + '<td class="contacts">' + theContacts + '</td>' + '<td class="decisions">' + theDecisions + '</td>' + '<td class="followups">' + theFollowUps + '</td>' + '</tr>';

             $('#ex-table').append(content);


            


            };
        
            
            
        }
    }


ref.on('value', gotPP, errData);

function gotPP(data) {
//    console.log(data.val());   
    var users = data.val();
    var ppkeys = Object.keys(users);
  //  console.log(keys);
    for (var i = 0; i < ppkeys.length; i++) {
        var k = ppkeys[i];
        var preachingpoints = users[k].preachingpoints;
    //    console.log(reports);
        var ppid = Object.keys(preachingpoints);
    //    console.log(reportid);
        for (var ri = 0; ri < ppid.length; ri++) {
            var p = ppid[ri];
            var theName = preachingpoints[p].name;
            var theDate = preachingpoints[p].date;
            var theLeader = preachingpoints[p].teamLeader;
            var theLocation = preachingpoints[p].location;
            var theAttendance = preachingpoints[p].attendance;
           
      //      console.log(theName, theDate, theLeader, theLocation, theAttendance);
        


            var content = '';
            var val = data.val();
            content += '<tr>' + '<td>' + theName + '</td>' + '<td>' + theDate + '</td>' + '<td>' + theLeader + '</td>' + '<td>' + theLocation + '</td>' + '<td>' + theAttendance + '</td>';

             $('#pp-table').append(content);




            };
        
        $('#ex-table').append(content);
            
            
        }
    }






function errData(err) {
    console.log('Error!');
     console.log(err);
}



            
  
