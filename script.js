//default lat long will be london area

let lat = 51.507351
let lon = -0.127758

function getLocation(location){
let APIkey = "3f4a86bb916f63f4d55bdeae5fec0a42"
var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`
//var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=50&lon=0&appid=3f4a86bb916f63f4d55bdeae5fec0a42" testing url format
findLatLong(location)
let today = moment();
console.log(today);

$.ajax(
{url: queryURL,
method: "GET"
})
.then(function(response) { 
    console.log(response)
    console.log(response.list[0].main.temp)
    var tempK = response.list[0].main.temp //getting K temp current
    KelvintoCelsiusround(tempK) //converting temp via function
    console.log(celsius)
    celsius = celsius.toFixed(2)
    console.log(celsius)

    //getting wind 
    console.log(response.list[0].wind.speed)
    let windSpeed = response.list[0].wind.speed

    //getting humidity 
    console.log(response.list[0].main.humidity)
    let humidity = response.list[0].main.humidity



    $("#todayLocation").append(" " + today.format("D MMM YYYY"))
    $("#todayTemp").append(" " + celsius)
    $("#todayWind").append(" " + windSpeed + " kph")
    $("#todayHumidity").append(" " + humidity + "%")
    //$("today's weather" + today.format("D MMM YYYY") + " " + celsius).appendto($('#todayTemp'))
    //$((`<p>"today's weather" + today.format("D MMM YYYY")`) + " " + celsius</p>').appendTo(`#todaylocation`)

    //$("#forecast").text("5 day's weather")


}

)}
getLocation();

function findLatLong(city){

}
/*
function todaysDate(){
    let today = moment();
    return today
}
*/
function KelvintoCelsiusround(temp){
    return celsius = +((temp - 273.15).toFixed(2));

       }
9