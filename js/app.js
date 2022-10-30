window.addEventListener(`load`, () => {
    let lon;
    let lat;

    let temperaturaValor = document.getElementById("temp-valor");
    let sensacionTerm = document.getElementById("sensacion-termica");
    let tempHora = document.getElementById("hora");
    let precipitaciones = document.getElementById("lluvia");

    let ubicacion = document.getElementById("ubicacion");
    let iconAnimado = document.getElementById("icon-animado");

    let vientoVelocidad = document.getElementById("viento-velocidad");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((posicion) => {
            // console.log(posicion.coords.latitude)

            lon = posicion.coords.longitude;
            lat = posicion.coords.latitude;

            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&current_weather=true&timezone=auto&start_date=2022-10-30&end_date=2022-11-05`;

            console.log(url);

            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let temp = Math.round(data.current_weather.temperature);
                    temperaturaValor.textContent = `${temp} ºC`;

                    //let hora = data.current_weather.time;
                    //tempHora.textContent = `${hora}`;

                    ubicacion.textContent = data.timezone;

                    vientoVelocidad.textContent = `${data.current_weather.windspeed} km/h`;

                    let clima = data.current_weather.weathercode;
                    //console.log(clima);

                    switch (clima) {
                        case 0:
                            iconAnimado.src = `\multimedia\animated\day.svg`;
                            break;
                        case 1:
                            iconAnimado.src = `/multimedia/animated/cloudy.svg`;
                            break;
                        case 2:
                            iconAnimado.src = `/multimedia/animated/cloudy.svg`;
                            break;
                        case 3:
                            iconAnimado.src = `/multimedia/animated/cloudy.svg`;
                            break;
                        case 61:
                            iconAnimado.src = `/multimedia/animated/cloudy.svg`;
                            break;

                        default:
                            break;
                    }

                    //console.log(data.current_weather.);
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }
});
