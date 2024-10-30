let a = document.querySelector("[a]") ;

const API_KEY  ="d1845658f92b31c64bd94f06f7188c9c" ;
async function show() {
    let city = "goa" ;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`) ;

    const data = await response.json();
    console.log("weather data :-> " , data);

    a.textContent= `${data?.main?.temp.toFixed(2)} ℃` ;
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    console.log("Geolocation is not supported by this browser.");
    }
    
    function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
    " Longitude: " + position.coords.longitude );
    }