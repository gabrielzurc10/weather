const renderBackground = result => {
  switch (result) {
    case "00":
      return "notfound";
    case "01d":
      return "sunny";
    case "01n":
      return "night";
    case "02d":
      return "cloudy";
    case "02n":
      return "cloudynight";
    case "03d":
      return "cloud";
    case "03n":
      return "cloudnight";
    case "04d":
      return "brokencloud";
    case "04n":
      return "brokencloudnight";
    case "09d":
      return "rainy";
    case "09n":
      return "rainy";
    case "10d":
      return "rainysun";
    case "10n":
      return "rainynight";
    case "11d":
      return "storm";
    case "11n":
      return "stormnight";
    case "13d":
      return "snow";
    case "13n":
      return "snownight";
    case "50d":
      return "mist";
    case "50n":
      return "mistnight";
    default:
      return null;
  }
};

export default renderBackground;
