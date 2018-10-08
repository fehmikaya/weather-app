const request = require('request');

const key = '48bf5ba9d5587cebfab7e6c7f68f031c';

var getWeather = (lat, long, callback) => {
    request({
        uri: `https://api.darksky.net/forecast/${key}/${lat},${long}`,
        json: true
    },(error, response, body) => {
        if(error){
            callback(error);
        }else if(response.statusCode === 400){
            callback('Unable to fetch weather');
        }else if(response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                summary: body.currently.summary
            });
        }
    });
}

module.exports.getWeather = getWeather;

