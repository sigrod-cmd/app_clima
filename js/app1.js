window.addEventListener(`load`, () => {
    let lon;
    let lat;
  
    let temperaturaValor = document.getElementById("temp-valor");
    let sensacionTerm = document.getElementById("sensacion-termica");
    let tempHora = document.getElementById("hora");
  
    let ubicacion = document.getElementById("ubicacion");
    let iconoAnimado = document.getElementById("icono-animado");
  
    let vientoVelocidad = document.getElementById("velocidad-viento");
    
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((posicion) => {
        // console.log(posicion.coords.latitude)
  
        lon = posicion.coords.longitude;
        lat = posicion.coords.latitude;
  
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid={9c12d3862cf96e9f258aacdf81a2f702}`
  
        console.log(url);
  
      
      });
    }
  });
  