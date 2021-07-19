const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoicGVoZXk3IiwiYSI6ImNrcXFkOTZxZjB4MmEyenFoODIzN29mNDYifQ.XaVHzQI1RzU7sNgWVHBkhg&limit=1";
  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback(
        "problem connecting with the location services, check your system configuration "
      );
    } else if (body.features.length === 0) {
      callback(
        "Could not find matching location info, Try again with another query"
      );
    } else {
      const codes = body.features[0].center;
      const placeName = body.features[0].place_name;
      callback(undefined, [placeName, ...codes]);
    }
  });
};
 
module.exports = geocode;  
