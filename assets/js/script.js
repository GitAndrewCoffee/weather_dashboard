//
// Variables and Constants
//

// Global Variables

    var cityHistory = [];
    var currentCity = "";
    var currentLat = "";
    var currentLon = "";
    var cityWeather = "";
    var cityForecast = "";

//API Values

    const apiKey = "dcb51c3dc0369de7ddbd00429690d589"

    //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


    const oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?"

    //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    const cityCallURL = "https://api.openweathermap.org/data/2.5/weather"

// HTML Elements


//
// Functions
//

    function getMyWeather (myCity) {

        console.log("getMyWeather is running");

        var myCityWeather = getCityWeather(myCity);
        
        console.log("myCityWeather is " + myCityWeather);

        var myLocWeather = getLocWeather(myLat, myLon);

        console.log(myLocWeather);

    };

    function getCityWeather (cityName) {

        console.log("getCityWeather is running");

        var returnMe = "";

        var callMe = cityCallURL + "?q=" + cityName + "&appid=" + apiKey;

        console.log("callMe is " + callMe);

         fetch(callMe)
            .then(function(response) {

                response.json()

            .then(function(data) {
            
            console.log(data);

            console.log(data.coord);

            console.log(data.coord.lat);

            myLat = data.coord.lat;

            console.log(data.coord.lon);

            myLon = data.coord.lon;

            var tempData = getLocWeather(myLat, myLon);

            console.log(tempData);

            buildWeather(data);

            });        

        });
    };

    function getLocWeather(myLat, myLon) {

        console.log("getLocWeather is running")

        var callMe = oneCallURL + "?lat=" + myLat + "&lon=" + myLon + "&appid=" + apiKey;

        console.log("callMe is " + callMe);

        fetch(callMe).then(function(response) {
            response.json().then(function(data) {
            
            console.log(data);

            buildForecast(data);

            });
        });


    }

    function buildWeather(myWeather){

        console.log("buildWeather is running");
        console.log(myWeather);

    }

    function buildForecast(myForecast) {

        console.log("buildForecast is running");
        console.log(myForecast);
        
    }

    var myWeather = getMyWeather("Boston");
    

//
// Listeners
//