//
var db = firebase.database();

function addTrain(e) {
	//Stops the webpage from refreshing.
	e.preventDefault();

	//variables for train schedule
	//jQuery grabs user input, assigns to variable.
	var tName = $("#trainName").val().trim();
	var destination = $("#destination").val().trim();
	var frequency = $("#frequency").val().trim();

	//0, null, false, undefined, Nan, ""
	if (!tName || !destination || !frequency) return;

	db.ref("trains").push({
		name: tName,
		destination: destination,
		frequency: frequency
	});

}

function getTrains(){
	//Outputting the next arrival time.
	console.log(moment().add(20, "minutes").format("HH:mm"));
	db.ref("trains").on("child_added", function (train) {
		train = train.val();

		$("#tableTrain tbody").append(
			"<tr>" +
				"<td>" + train.name + "</td>" +
				"<td>" + train.destination + "</td>" +
				"<td>" + train.frequency + "</td>" +
				"<td>Coming Soon</td>" +
				"<td>Coming Soon</td>" +
			"</tr>"
		);

	});
}

getTrains();
$("#addInfo").on("click", addTrain);

//The train frequency.
var tFrequency = 15;

//The first time a train leaves for the day.
var firstTime = "05:00";

//The first time is pushed back 1 year to make sure it comes before current time.
var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
	console.log(firstTimeConverted);

//Display current time.
var currentTime = moment();
	console.log("Current Time: " + moment(currentTime).format("hh:mm"));

//The difference between the times.
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
	console.log("Difference in Time: " + diffTime);

//The time apart/the remainder.
var tRemainder = diffTime % tFrequency;
	console.log(tRemainder);

//Minutes until train.
var tMinutesUntilTrain = tFrequency - tRemainder;
	console.log("Minutes until next train: " + tMinutesUntilTrain);

//Minutes until the next train.
var nextTrain = moment().add(tMinutesUntilTrain, "minutes");
	console.log("Arrival Time: " + moment(nextTrain).format("hh:mm"));

//formula that converts arrival time + current time into minutes
// var arrivalcurrentMinutes = moment()

//gets the length of the duration in minutes
// moment.duration().asMinutes()
//get the difference between the two

//divide the amount of trains that have left since the last time

//get the remainder

//number of minutes - the amount of trains that have left