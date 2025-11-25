const button = document.getElementById("btn");



async function data(name) {
    const apikey = "15bbb42463f92e7c83cfda697f075fab";
   
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name},in&appid=${apikey}`);
            const obj = await response.json();
        return obj;

}


button.addEventListener("click",async ()=>{
const input = document.getElementById("get").value.toLowerCase();
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const weather = document.getElementById("weather");
const emoji = document.getElementById("emoji");
const errorMsg = document.getElementById("error");
if(!input){
    errorMsg.textContent = "Please Enter A Valid City";
}
const info = await data(input);
console.log(info);
const celcius = `${(info.main.temp - 273).toFixed(2)}°C`
temp.textContent = celcius;
humidity.textContent = `Humidity : ${info.main.humidity}%` ;
city.textContent = input;
weather.textContent = info.weather[0].description;
emoji.textContent = emoj();
function emoj (){
  const Id =  info.weather[0].id;
switch (true){
    case(Id>=200 && Id <300): 
        return "⛈️";
    case(Id >= 300 && Id < 600):
    return "🌧️";
    case(Id >= 600 && Id < 700):
    return "❄️";
    case(Id>=700 && Id < 800):
    return "🍃";
    case (Id === 800):
    return "🌞";
    


        }
    }

})


