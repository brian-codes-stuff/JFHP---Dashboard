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
      // var ui = new  firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
    // ui.start('#firebaseui-auth-container', uiConfig);

     

var ref = db.ref('users');
ref.on('value', gotData, errData);

function gotData(data) {
//    console.log(data.val());   
    var users = data.val();
    var keys = Object.keys(users);
  //  console.log(keys);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var reports = users[k].reports;
    //    console.log(reports);
        var reportid = Object.keys(reports);
    //    console.log(reportid);
        for (var ri = 0; ri < reportid.length; ri++) {
            var m = reportid[ri];
            var theName = reports[m].name;
            var theDate = reports[m].date;
            var theLeader = reports[m].teamLeader;
            var theLocation = reports[m].location;
            var theContacts = reports[m].contacts;
            var theDecisions = reports[m].decisions;
            var theFollowUps = reports[m].followUps;
            console.log(theName, theDate, theLeader, theLocation, theContacts, theDecisions, theFollowUps);
        


            var content = '';
            var val = data.val();
            content += '<tr>' + '<td>' + theName + '</td>' + '<td>' + theDate + '</td>' + '<td>' + theLeader + '</td>' + '<td>' + theLocation + '</td>' + '<td>' + theContacts + '</td>' + '<td>' + theDecisions + '</td>' + '<td>' + theFollowUps + '</td>' + '</tr>';

             $('#ex-table').append(content);




          //  var content = '';
           // var val = data.val();
            //    content +='<tr>';
             //   content += '<td>' + theName + '</td>';
               // content += '<td>' + theDate + '</td>';
             //   content += '<td>' + theLeader + '</td>';
              //  content += '<td>' + theLocation + '</td>';
              //  content += '<td>' + theContacts + '</td>';
              //  content += '<td>' + theDecisions + '</td>';
              //  content += '<td>' + theFollowUps+ '</td>';
              //  content += '</tr>';
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
           
            console.log(theName, theDate, theLeader, theLocation, theAttendance);
        


            var content = '';
            var val = data.val();
            content += '<tr>' + '<td>' + theName + '</td>' + '<td>' + theDate + '</td>' + '<td>' + theLeader + '</td>' + '<td>' + theLocation + '</td>' + '<td>' + theAttendance + '</td>';

             $('#pp-table').append(content);




          //  var content = '';
           // var val = data.val();
            //    content +='<tr>';
             //   content += '<td>' + theName + '</td>';
               // content += '<td>' + theDate + '</td>';
             //   content += '<td>' + theLeader + '</td>';
              //  content += '<td>' + theLocation + '</td>';
              //  content += '<td>' + theContacts + '</td>';
              //  content += '<td>' + theDecisions + '</td>';
              //  content += '<td>' + theFollowUps+ '</td>';
              //  content += '</tr>';
            };
        
        $('#ex-table').append(content);
            
            
        }
    }






function errData(err) {
    console.log('Error!');
     console.log(err);
}



            
  //         m.forEach(function(entry) {
  //  console.log(entry);
// });

/*
var query = firebase.database().ref("users/reports").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();

       console.log(childSnapshot.val());
    });
  });
    
*/

/*
var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});

*/


/*
var theReports = firebase.database().ref("users");

theReports.on("child_added", function(data) {
   var newReport = data.val();
   console.log("Report Name: " + newReport.name);
   console.log("ReportDate: " + newReport.date);
   console.log("Team Leader: " + newReport.teamLeader);
   
});

*/
//ref.orderByChild("reports").limitToLast(100).on("child_added", function(snapshot) 
// var showData = function() 



 /* var theName = $("#Name").val();
  var theDate = $("#Date").val();
  var theLeader = $("#Leader").val();
  var theLocation = $("#Location").val();
  var theContacts = $("#Contacts").val();
  var theDecisions = $("#Decisions").val();
  var theFollowUps = $("#FollowUps").val();

  reports.push({
    "theName": name,
    "theDate": date,
    "theLeader": teamLeader,
    "theLocation": location,
    "theContacts": contacts,
    "theDecisions": decisions,
    "theFollowUps": followUps

  });
  */



/*

var ref = firebase.app().database().ref();
var peopleRef = ref.child('users/reports');
peopleRef.on('value', gotData, errData);

function gotData(data) {
//    console.log(data.val());   
    var users = data.val();
    var keys = Object.keys(users);
 

keys.forEach(function(k) {

    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var reports = users[k].reports;
    //    console.log(reports);
        var reportid = Object.keys(reports);
console.log(reportid);



reportid.forEach(function(k) {
    //    console.log(reportid);
        for (var ri = 0; ri < reportid.length; ri++) {
            var m = reportid[ri];
            var theName = reports[m].name;
            var theDate = reports[m].date;
            var theLeader = reports[m].teamLeader;
            var theLocation = reports[m].location;
            var theContacts = reports[m].contacts;
            var theDecisions = reports[m].decisions;
            var theFollowUps = reports[m].followUps;
            console.log(theName, theDate, theLeader, theLocation, theContacts, theDecisions, theFollowUps);
            
            
            var content = '';
            var val = data.val();
                content +='<tr>';
                content += '<td>' + theName + '</td>';
                content += '<td>' + theDate + '</td>';
                content += '<td>' + theLeader + '</td>';
                content += '<td>' + theLocation + '</td>';
                content += '<td>' + theContacts + '</td>';
                content += '<td>' + theDecisions + '</td>';
                content += '<td>' + theFollowUps+ '</td>';
                content += '</tr>';
            };
        
        $('#ex-table').append(content);
         });   
            
        }

 }); 

    }


function errData(err) {
    console.log('Error!');
     console.log(err);
}

*/

/*
function generateReportElements(snapshot) {

search = window.location.search;
          let reportId = '';
let reportRef = '';

var reportsRef = db.ref(`users/${uid}/reports/${reportId}`);
var reportsKeys = Object.keys(reportRef);


reportsKeys.forEach(function(reportKey) {
              const report = reportRef[reportKey];
              if (report.open == 'true') {
                $("#open-reports-list").append(
                 `<li class="list-group-item">
                    ${report.name}
                    <span class="show-menu">
                      <span class="glyphicon glyphicon-option-vertical"></span>
                    </span>
                    <ul class="list-group-submenu">
                                          <li class="list-group-submenu-item danger" title="${reportKey}"><span class="glyphicon glyphicon-pencil"></span></li>
                    </ul>
                  </li>`
                );
              } else {
                $('#closed-reports-list').append(
                  `<li class="list-group-item">
                    ${report.name}
                    <span class="show-menu">
                      <span class="glyphicon glyphicon-option-vertical"></span>
                    </span>
                    <ul class="list-group-submenu">
                                          <li class="list-group-submenu-item danger" title="${reportKey}"><span class="glyphicon glyphicon-pencil"></span></li>
                    </ul>
                  </li>`
                );
              }
            });

    
 };



  */


/*
  if(search && search.split('=').length === 3) {
            reportId = search.split('=')[2];
            const reportsRef = db.ref(`users/${uid}/reports/${reportId}`);
            reportsRef.once('value', function(snapshot) {
              const report = snapshot.val();
              // update values
              $('#report-name').val(report.name || '');
              $('#report-location').val(report.location || '');
			  $('#report-lat').val(report.lat || '');
			  $('#report-long').val(report.long || '');	
              $('#report-date').val(report.date || '');
              $('#report-team-name').val(report.teamName || '');
              $('#report-team-leader').val(report.teamLeader || '');
             // $('#report-presentation-location').val(report.presentationLocation || '');
              $('#report-contacts').val(report.contacts || '');
              $('span.range-slider__value#report-contacts-slider').html(report.contacts);
              $('#report-decisions').val(report.decisions || '');
              $('span.range-slider__value#report-decisions-slider').html(report.decisions);
              $('#report-decisions-slider').val(report.value || '');
              $('#report-follow-ups').val(report.followUps || '');
              $('span.range-slider__value#report-followups-slider').html(report.followUps);
			  $('#report-test-cat').val(report.testCat || '');	
			  $('#textBox1').val(report.testimony1 || '');
			
			  $('#report-open').val(report.open || '');
			   // need to decide on report images and testimonies
              $('#report-submit').html('Update Report');
            });
          }
*/