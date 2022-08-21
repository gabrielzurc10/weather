const timeConvert = (type, unix, offset) => {

  var date = new Date(unix*1000);
  var timezone = new Date(offset*1000);
  var unixhours = date.getUTCHours();
  var mins = date.getUTCMinutes();
  var offsethours = timezone.getUTCHours();

  if (unixhours > 12) unixhours -= 12;
  if (offsethours > 12) offsethours -= 12;
  if (mins < 10 ) mins = "0"+mins;

  var hours = type === 'dt' ? unixhours : (unixhours + offsethours);

  if (hours > 12) hours -= 12;

  var formattedTime = hours+":"+mins;
  formattedTime += type === "rise" ? " am" : " pm";

  if (type === 'dt') {
    return date.getUTCMonth()+1 + '/' + date.getDate() + '/' + date.getFullYear();
  } else {
    return formattedTime;
  }
};

export default timeConvert;
