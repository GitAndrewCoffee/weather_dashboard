//
// Variables and Constants
//

// Global Variables

    var cityHistory = [];
    var currentCity = "";
    var currentLat = "";
    var currentLon = "";

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

        var myLocWeather = getLocWeather(myCityWeather.coord.lat, myCityWeather.coord.lon);

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

            var setMe = JSON.parse(data);

            setReturnMe(setMe);

            });        

        function setReturnMe(newVal) {

            console.log("newVal is " + newVal);
            returnMe = newVal;

        };

        return returnMe;

        });
    };

    function getLocWeather(myLat, myLon) {

        console.log("getLocWeather is running")

        var callMe = oneCallURL + "?lat=" + myLat + "&lon=" + myLon + "&appid=" + apiKey;

        console.log("callMe is " + callMe);

        fetch(callMe).then(function(response) {
            response.json().then(function(data) {
            
            console.log(data);

            return data;

            });
        });


    }

    var myWeather = getMyWeather("Boston");
    

//
// Listeners
//