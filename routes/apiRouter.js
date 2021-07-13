const https = require('https');
const keys = require('../config/keys');
var url = "https://api.openweathermap.org/data/2.5/weather?q=Houston&appid="+keys.weatherKey+"&units=imperial";

module.exports = app => {
  app.get('/api', (req, res) => {

    https.get(url, response => {
      response.on("data", data => {
        const weatherData = JSON.parse(data);
        res.send(weatherData);
      });
    });
  });

  app.post('/api/post', (req, res) => {

      url = "https://api.openweathermap.org/data/2.5/weather?q="+req.body.search+"&appid="+keys.weatherKey+"&units=imperial";
      res.redirect('/');
  });
};
