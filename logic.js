
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
  	console.log("Hello world")
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