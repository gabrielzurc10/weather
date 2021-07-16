const renderIcon = icon => {
  switch (icon) {
    case "00":
      return "images/crying.png";
    case "01d":
      return "/images/sun.png";
    case "01n":
      return "/images/night.png";
    case "02d":
      return "/images/cloudy.png";
    case "02n":
      return "/images/cloudynight.png";
    case "03d":
      return "/images/cloud.png";
    case "03n":
      return "/images/cloud.png";
    case "04d":
      return "/images/brokencloud.png";
    case "04n":
      return "/images/brokencloud.png";
    case "09d":
      return "/images/rainy.png";
    case "09n":
      return "/images/rainy.png";
    case "10d":
      return "/images/rainysun.png";
    case "10n":
      return "/images/rainynight.png";
    case "11d":
      return "/images/storm.png";
    case "11n":
      return "/images/storm.png";
    case "13d":
      return "/images/snow.png";
    case "13n":
      return "/images/snow.png";
    case "50d":
      return "/images/mist.png";
    case "50n":
      return "/images/mist.png";
    default:
      return null;
  }
};

export default renderIcon;
