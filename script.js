
function getLocation(location){
let lat = ""
let lon = ""
let APIkey = "3f4a86bb916f63f4d55bdeae5fec0a42"
var queryURL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`
$.ajax(
{url: queryURL,
method: "GET"
}
)
}
