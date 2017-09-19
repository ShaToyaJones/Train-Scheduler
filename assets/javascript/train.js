//initialize firebase
var config = {
	apiKey: "AIzaSyAqPKB4tnPYxMSph9_3rti-CnHX94E_Rcw",
    authDomain: "train-scheduler-b25b8.firebaseapp.com",
    databaseURL: "https://train-scheduler-b25b8.firebaseio.com",
    projectId: "train-scheduler-b25b8",
    storageBucket: "train-scheduler-b25b8.appspot.com",
    messagingSenderId: "85601842854"
  };

  firebase.initializeApp(config);
  
};

$(document).ready(function(){

$("#addInfo").on("click", function() {

//variables for train schedule
//jQuery grabs user input, assigns to variable.
var database = firebase.database();
var tName = $("#trainName").val().trim();
var destination = $("#destination").val().trim();
var arrivalTime = $("#arrivalTime").val().trim();
var departureTime = $("#departureTime").val().trim();
var Frequency = $("#frequency").val().trim();
var minutesAway = $("#minutesAway").val().trim();
var nextArrival = $("#nextArrival").val().trim();

console.log(trainName);
console.log(destination);
console.log(arrivalTime);
console.log(departureTime);
console.log(Frequency);
console.log(minutesAway);
console.log(nextArrival);

}};

//new variables for storage of new input

