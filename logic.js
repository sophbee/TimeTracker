
  var config = {
    apiKey: "AIzaSyDHg6YoAfdg5f9DxEZjUYkXiilPiAUVgdc",
    authDomain: "time-tracker-4973f.firebaseapp.com",
    databaseURL: "https://time-tracker-4973f.firebaseio.com",
    projectId: "time-tracker-4973f",
    storageBucket: "time-tracker-4973f.appspot.com",
    messagingSenderId: "274385920122"
  };
  firebase.initializeApp(config);

  $(document).on("click", "button", function() {
  	
  });

  var database = firebase.database();

  var name = "";
  var role = "";
  var startDate = "";
  var monthlyRate = "";

$("#add-user").on("click", function(event) {
	event.preventDefault();

	name = $("#Name").val().trim();
	role = $("#Role").val().trim();
	startDate = $("#StartDate").val().trim();
	monthlyRate = $("#MonthlyRate").val().trim();

	lastPushed = database.ref().push ({
		name: name,
		role: role,
		startDate: startDate,
		monthlyRate: monthlyRate,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});
});
var row = null;

database.ref().on("child_added", function(childSnapshot) {
	console.log(childSnapshot.val().name);
	console.log(childSnapshot.val().role);
	console.log(childSnapshot.val().startDate);
	console.log(childSnapshot.val().monthlyRate);

	row = {
		name: childSnapshot.val().name,
		role: childSnapshot.val().role,
		startDate: childSnapshot.val().startDate,
		monthlyRate: childSnapshot.val().monthlyRate
	};

	$("tbody").append("<tr><td>" + row.name + "</td> <td>" + row.role + "</td> <td>" + row.startDate + "</td> <td>" + row.monthlyRate + "</td> </tr>");


});





