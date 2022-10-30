window.addEventListener(`load`, () => {
    let lon;
    let lat;

    //capturo elementos del DOOM
    let temperaturaValor = document.getElementById("temperatura-valor");
    let sensacionTerm = document.getElementById("sensacion-termica");
    let precipitaciones = document.getElementById("lluvia");
    let temperaturaDescription = document.getElementById("desc")

    let ubicacion = document.getElementById("ubicacion");
    let iconAnimado = document.getElementById("icon-animado");

    let vientoVelocidad = document.getElementById("viento-velocidad");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((posicion) => {
            // console.log(posicion.coords.latitude)

            lon = posicion.coords.longitude;
            lat = posicion.coords.latitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sp&units=metric&appid=9d30f97fdf83aa6eb5ad7447ba04b150`;

            console.log(url);

            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let temp = Math.round(data.main.temp);
                    temperaturaValor.textContent = `${temp} º`;

                    console.log(data.weather[0].description)

                    let desc = data.weather[0].description
                    temperaturaDescription.textContent = `${desc}`
                  
                    console.log(data.name)
                    ubicacion.textContent = (data.name)
                    

                    
                    
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }
});
