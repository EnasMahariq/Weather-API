let cityName= prompt("Enter the name of the city:");
let weather=document.getElementById("weather");
let result=``;
 
 async function get(){
    let response= await fetch("https://api.weatherapi.com/v1/current.json?key=d3301d8f429345e1943160113212712&q= " + cityName + " &aqi=no");
    let data= await response.json();
   console.log(data.location.country);
      result+=`
      <div class="weather">
      <div class="content">
      <h2>${cityName}</h2>
      <img src="${data.current.condition.icon}" >
     <p>Country: ${data.location.country}</p>
     <p>Temp C: ${data.current.temp_c}</p>
     <p>Temp F: ${data.current.temp_f}</p>
     <p>Cloud: ${data.current.cloud}</p>
     <p>Description: ${data.current.condition.text}</p>
      </div>
      </div>
      `;
      weather.innerHTML=result;
    }
    weather.innerHTML=result;


get();



