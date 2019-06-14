//Connecting to the API and converting the result to JSON format.
fetch("https://api.spacexdata.com/v3/launches/next")
  .then(result => result.json())
  .then((res) => {
    timer(res);
  })
  .catch(err => console.log(err))

var time;

//Creating a function that takes the JSON Object as an argument.
function countdown() {

      //Parse from string to datetime
      var dateArr = time[0].split('-');
      var year = dateArr[0];
      var month = dateArr[1];
      var day = dateArr[2];

      //17:00:00-07:00
      var timeArr = time[1].split(':');
      var hour = timeArr[0];
      var minute = timeArr[1];
      var second = timeArr[2].split('-')[0];

      //Make function for countdown
      // var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
      var launchDate = new Date(year, month, day, hour, minute, second, 0);

      // Get current datetime
      var curDate = new Date();
      // Subtract current datetime from launchdate to get a timespan
      var diff = launchDate-curDate;
      // Submit the timespan days, hours and minutes to your website

      var numSeconds = Math.floor((launchDate-curDate)/1000);
      var remSeconds = numSeconds % 60;
      numSeconds -= remSeconds;
      var numMinutes = Math.floor(numSeconds/60);
      var remMinutes = numMinutes % 60;
      numMinutes -= remMinutes;
      var numHours = Math.floor(numMinutes/60);
      var remHours = numHours % 24;
      numHours -= remHours;
      var numDays = Math.floor(numHours/24);

      document.getElementById("daysInput").innerHTML = numDays;
      document.getElementById("hoursInput").innerHTML = remHours;
      document.getElementById("minutesInput").innerHTML = remMinutes;
      document.getElementById("secondsInput").innerHTML = remSeconds;

      setTimeout(countdown, 1000);
}

function timer(result){
  time = result.launch_date_local.split('T');
  countdown();
}
/*
Menu dropdown showing, when the user clicks on the button, toggle between hiding and showing the dropdown content*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
