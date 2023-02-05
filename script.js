//default lat long will be london area

let lat = 51.507351
let lon = -0.127758

function getLocation(location){
let APIkey = "3f4a86bb916f63f4d55bdeae5fec0a42"
var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`
//var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=50&lon=0&appid=3f4a86bb916f63f4d55bdeae5fec0a42" testing url format
findLatLong(location)

$.ajax(
{url: queryURL,
method: "GET"
})
.then(function(response) { 
    console.log(response)
    $("#today").text("test")

}

)}
getLocation();

function findLatLong(city){

}