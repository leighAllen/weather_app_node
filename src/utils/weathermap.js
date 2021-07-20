const request = require("request");

const weathermap = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=078bdd22865fa588fce02035e8dc088d&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback(
        "Problem connecting to weather services,check your system configuration"
      );
    } else if (body.error) {
      callback("Cannot find location weather, Try using another location");
    } else {
      const desc = body.current.weather_descriptions[0];
      const temp = body.current.temperature;
      const feels = body.current.feelslike;
      const time = body.location.localtime;
      const data = {
        currently: desc,
        temperature: temp,
        feelslike: feels,
        time: time,
      };
      callback(undefined, data);
    }
  });
};

module.exports = weathermap;
