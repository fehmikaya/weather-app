
const request = require('request');

var geocodeAddress = (address, callback) => {
    const encAddress = encodeURIComponent(address);
    const key = 'ANaCRcJRCVVUfGGdkAVVBH8CP1Dbgd7O';
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
            coordinates: body.results[0].locations[0].latLng
        });
    });
};

module.exports = {
    geocodeAddress
};