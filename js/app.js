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

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sp&units=metric&appid=9d30f97fdf83aa6eb5ad7447ba04b150`;

            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let temp = Math.round(data.main.temp);
                    temperaturaValor.textContent = `${temp}º`;

                    let desc = data.weather[0].description;
                    temperaturaDescription.textContent = `${desc}`;

                    ubicacion.textContent = data.name;

                    let senc = Math.round(data.main.feels_like);
                    sensacionTerm.textContent = `${senc}º`;

                    let tmax = Math.round(data.main.temp_max);
                    temperaturaMax.textContent = `max ${tmax}º/`;

                    let tmin = Math.round(data.main.temp_min);
                    temperaturaMin.textContent = `min ${tmin}º`;

                    let speed = Math.round(data.wind.speed);
                    vientoVelocidad.textContent = `${speed} Km/h`;

                    /* let hum = (data.main.humidity)
                              humedad.textContent = `${hum}%` */

                    switch (data.weather[0].main) {
                        case "Clouds":
                            iconAnimado.src = "/multimedia/animated/cloudy.svg";
                            break;
                        case "Clear":
                            iconAnimado.src = "/multimedia/animated/day.svg";
                            break;
                        case "Thunderstorm":
                            iconAnimado.src = "/multimedia/animated/thunder.svg";
                            break;
                        /* case "Drizzle":
                                        iconAnimado.src = "/multimedia/animated/thunder.svg";
                                    break; */
                        case "Rain":
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
