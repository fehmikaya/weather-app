const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch',
            string: true
        }
    }
)
.help()
.alias('help', 'h')
.argv;

const encAddress = encodeURIComponent(argv.address);
const geocodeKey = 'ANaCRcJRCVVUfGGdkAVVBH8CP1Dbgd7O';
const weatherKey = '48bf5ba9d5587cebfab7e6c7f68f031c';
const geocodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=${geocodeKey}&location=${encAddress}`;

axios.get(geocodeURL).then((response) => {
    var lat = response.data.results[0].locations[0].latLng.lat;
    var long = response.data.results[0].locations[0].latLng.lng;
    weatherURL = `https://api.darksky.net/forecast/${weatherKey}/${lat},${long}`;
    return axios.get(weatherURL);
})
.then((response) => {
    var celcius = ((parseFloat(response.data.currently.temperature) -32)/1.8).toString().substr(0,4); 
    console.log(`Temp: ${celcius} ${response.data.currently.summary}`);
})
.catch((error)=>{
    console.log(error);
});


