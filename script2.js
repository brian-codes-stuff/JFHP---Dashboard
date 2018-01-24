/*ar fbRef = firebase.database().ref();


fbRef.on('child_added', function(data) {
	
  fbRef.once('value', function(snapshot) {
	
	snapshot.forEach(function(childSnapshot) {
		
	    var childKey = childSnapshot.key;
	    var childData = childSnapshot.val();
	    console.log(childData);
	    var theName = name.childData;   


			var content = '';
            var val = data.val();
                content +='<tr>';
                content += '<td>' + theName + '</td>';
             //   content += '<td>' + theDate + '</td>';
             //   content += '<td>' + theLeader + '</td>';
             //   content += '<td>' + theLocation + '</td>';
             //   content += '<td>' + theContacts + '</td>';
             //   content += '<td>' + theDecisions + '</td>';
             //   content += '<td>' + theFollowUps+ '</td>';
             //   content += '</tr>';
              $('#ex-table').append(content);
            });
              


	});
});


*/
var fbRef = firebase.database().ref('users/');
// var dataListRef = firebase.database().ref();
fbRef.on('child_added', function(data) {
	// console.log(data);
  fbRef.once('value', function(snapshot) {
	// console.log(snapshot)
	snapshot.forEach(function(childSnapshot) {
		// console.log(childSnapshot)
	    var childKey = childSnapshot.key;
	    var childData = childSnapshot.val();
	     console.log(childKey, childData);
	    var tableBody = document.getElementById("userData").getElementsByTagName('tbody')[0];
	    if(!document.getElementById(childKey)){
	    	var newRow = tableBody.insertRow(tableBody.rows.length);
	    	var userNameCell = newRow.insertCell(0)
	    	userNameCell.innerHTML = childKey;
	    	userNameCell.setAttribute("id", childKey);
	    	// console.log(Object.keys(childData))
	    	iterObj(childData, newRow)
	    	/*Object.keys(childData).forEach(function(key) {

			  console.log(key, obj[key]);

			});*/
	    	/*childData.forEach(function(item){
	    	})*/
	    }
	});
});
});


function iterObj(obj, newRow) {
	// console.log(newRow.cells.length);
  for (var key in obj) {
    // console.log(key + ': ' + obj[key]);
    if (obj[key] !== null && typeof obj[key] === "object") {
      // Recurse into children
      iterObj(obj[key], newRow);
    }else{
    	var newCell = newRow.insertCell(newRow.cells.length);
    	newCell.innerHTML = obj[key];
    }
  }
}

