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

        getCityWeather(myCity);

    };

    function getCityWeather (cityName) {

        console.log("getCityWeather is running");

        var callMe = cityCallURL + "?q=" + cityName + "&appid=" + apiKey;

        console.log("callMe is " + callMe);

         fetch(callMe)
            .then(function(response) {

                response.json()

            .then(function(data) {
            
            console.log(data);

            cityLat = data.coord.lat;

            cityLon = data.coord.lon;

            getLocWeather(cityLat, cityLon);

            buildWeather(data);

            });        

        });
    };

    function getLocWeather(myLat, myLon) {

        console.log("getLocWeather is running")
   
        var callMe = oneCallURL + "lat=" + myLat + "&lon=" + myLon + "&appid=" + apiKey;

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

        $('#cityName').text(myWeather.name);

        $('#tempLable').text(myWeather.main.temp);
        $('#windLable').text(myWeather.wind.speed);
        $('#humidityLable').text(myWeather.main.humidity);

    }

    function buildForecast(myForecast) {

        console.log("buildForecast is running");
        console.log(myForecast);
        var fiveDayDate = [];


        //Set the UV index label
        $('#uvLable').text(myForecast.current.uvi);

        //build a list of dates for the forecast
        for (let i = 0; i < 5; i++) {
         
            fiveDayDate[i] = moment().add(i + 1, "days").format("MM/DD/YYYY");
            console.log("moment " + i + " is " + fiveDayDate[i]);
            
        }
       
        //split forecast into days

        for (let i = 1; i < 6; i++) {
            
             console.log("day " + i + " is " + myForecast.daily[i].temp.day);
             console.log("day " + i + " is " + myForecast.daily[i].wind_speed);
             console.log("day " + i + " is " + myForecast.daily[i].humidity);
             console.log("day " + i + " is " + myForecast.daily[i].weather[0]);
             console.log("date " + i + " is " + fiveDayDate[i-1]);

            //build cards
            //add cards to the forecast section

            //forecastIcon = myForecast.daily[i].weather[0];
              
            console.log(buildCard(fiveDayDate[i-1], cardIcon, cardTemp, cardTemp, cardWind, cardHumidity));

            //  $("#fiveDay").add(buildCard(fiveDayDate[i-1], cardIcon, cardTemp, cardTemp, cardWind, cardHumidity));
            
        };           
    };

    function buildCard(myDate,myIcon,myTemp,myWind,myHumidity) {

        console.log("buildCard is running");
        console.log(myDate);
        console.log(myIcon);
        console.log(myTemp);
        console.log(myWind);
        console.log(myHumidity);

        return "help me, I'm broken inside";

    };

    var myWeather = getMyWeather("Boston");
    

//
// Listeners
//