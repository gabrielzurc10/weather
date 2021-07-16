const timeConvert = (sun, unix, offset) => {

  var formattedTime = " ";

  var date = new Date(unix*1000);
  var timezone = new Date(offset*1000);
  var unixhours = date.getHours();
  var mins = date.getMinutes();
  var offsethours = timezone.getHours()-1;

  if (unixhours > 12) {
      unixhours -= 12;
  }
  if(offsethours > 12) {
      offsethours -= 12;
  }
  if(mins < 10 ) {
    mins = "0"+mins;
  }

  var hours = unixhours + offsethours;

  if (hours > 12) {
      hours -= 12;
  }

  formattedTime = hours+":"+mins;

  if (sun === "rise") {
    formattedTime += " am";
  } else {
    formattedTime += " pm"
  }

  return formattedTime;

};

export default timeConvert;
