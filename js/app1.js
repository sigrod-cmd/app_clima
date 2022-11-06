window.addEventListener(`load`, () => {
    let lon;
    let lat;

    //capturo elementos del DOOM
    let temperaturaValor = document.getElementById("temperatura-valor");
    let sensacionTerm = document.getElementById("sensacion-termica");
    let precipitaciones = document.getElementById("lluvia");
    let temperaturaDescription = document.getElementById("desc");
    let temperaturaMin = document.getElementById("min");
    let temperaturaMax = document.getElementById("max");
    let humedad = document.getElementById("humedad");

    let ubicacion = document.getElementById("ubicacion");
    let iconAnimado = document.getElementById("icon-animado");

    let vientoVelocidad = document.getElementById("viento-velocidad");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((posicion) => {
            lon = posicion.coords.longitude;
            lat = posicion.coords.latitude;

            const url = `https://api.open-meteo.com/v1/forecast?latitude=-54.81&longitude=-68.36&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`;

            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let temp = Math.round(data.current_weather.temperature);
                    temperaturaValor.textContent = `${temp}º`;

                    let speed = Math.round(data.current_weather.windspeed);
                    vientoVelocidad.textContent = `${speed} Km/h`;

                    ubicacion.textContent = data.timezone;

                    /* let desc = data.weather[0].description;
                    temperaturaDescription.textContent = `${desc}`; */

                    ubicacion.textContent = data.timezone;

                   /*  for(const element in data.hourly.time){
                        const newclima = data.hourly.time[19]
                        console.log(newclima)
                    }
                        
                        
                  

                    let senc = Math.round(data.main.feels_like);
                    sensacionTerm.textContent = `${senc}º`;

                    let tmax = Math.round(data.main.temp_max);
                    temperaturaMax.textContent = `max ${tmax}º/`;

                    let tmin = Math.round(data.main.temp_min);
                    temperaturaMin.textContent = `min ${tmin}º`;   */

                    /* let speed = Math.round(data.current_weather.windspeed);
                    vientoVelocidad.textContent = `${speed} Km/h`; */

                    /* let hum = (data.main.humidity)
                              humedad.textContent = `${hum}%` */

                    switch (data.current_weather.weathercode) {
                         case 3:
                            iconAnimado.src = "/multimedia/animated/cloudy.svg";
                        break;
                        case 1:
                            iconAnimado.src = "/multimedia/animated/day.svg";
                         break;
                        case 13:
                            iconAnimado.src = "/multimedia/animated/thunder.svg";
                            break;
                        case "Drizzle":
                                        iconAnimado.src = "/multimedia/animated/thunder.svg";
                                    break; 
                        case 61:
                            iconAnimado.src = "/multimedia/animated/rainy-5.svg";
                            break;
                        case "Snow":
                            iconAnimado.src = "/multimedia/animated/snowy-5.svg";
                            break;

                        default:
                            break;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }
});
