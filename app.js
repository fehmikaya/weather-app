const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        weather.getWeather(results.lat, results.long, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log(error);
            }
            console.log(`Current temp at ${results.address} is: ${weatherResults.temperature} ${weatherResults.summary}`);
        })
    }
});
