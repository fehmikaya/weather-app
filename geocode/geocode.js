
const request = require('request');

const key = 'ANaCRcJRCVVUfGGdkAVVBH8CP1Dbgd7O';

var geocodeAddress = (address, callback) => {
    const encAddress = encodeURIComponent(address);
    const url = `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${encAddress}`;

    request({
        url,
        json:true
    }, (error, response, body) => {
        if(error){
            callback(error);
            return;
        }
        callback(undefined, {
            address: body.results[0].providedLocation.location,
            lat: body.results[0].locations[0].latLng.lat,
            long: body.results[0].locations[0].latLng.lng
        });
    });
};

module.exports = {
    geocodeAddress
};