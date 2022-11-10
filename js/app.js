

window.addEventListener(`load`, () => {
    let lon;
    let lat;

    

    //capturo elementos del DOOM
    // Tarjeta dia_Actual
    let ubicacion = document.getElementById("ubicacion");
    let iconAnimado = document.getElementById("icon-animado");
    let temperaturaDescription = document.getElementById("desc");
    let temperaturaValor = document.getElementById("temperatura-valor");
    let sensacionTerm = document.getElementById("sensacion-termica");
    let temperaturaMin = document.getElementById("min");
    let temperaturaMax = document.getElementById("max");
    let vientoVelocidad = document.getElementById("viento-velocidad");
    let actual = document.getElementById("dia-actual");
    let minutoA = document.getElementById("minutos");
    let horaA = document.getElementById("hora");

    //Dia_1
    let iconAnimado_1 = document.getElementById("icon-animado-1")
    let temperaturaDescription_1 = document.getElementById("desc-1");
    let temperaturaMin_1 = document.getElementById("min-1");
    let temperaturaMax_1 = document.getElementById("max-1");
    let Lluvia_1 = document.getElementById("lluvia-1");
    let vientoVelocidad_1 = document.getElementById("viento-velocidad-1");
    let fecha_dia_1 = document.getElementById("dia1");

    //Dia_2
    let iconAnimado_2 = document.getElementById("icon-animado-2")
    let temperaturaDescription_2 = document.getElementById("desc-2");
    let temperaturaMin_2 = document.getElementById("min-2");
    let temperaturaMax_2 = document.getElementById("max-2");
    let vientoVelocidad_2 = document.getElementById("viento-velocidad-2");
    let fecha_dia_2 = document.getElementById("dia2");

    //Dia_3
    let iconAnimado_3 = document.getElementById("icon-animado-3")
    let temperaturaDescription_3 = document.getElementById("desc-3");
    let temperaturaMin_3 = document.getElementById("min-3");
    let temperaturaMax_3 = document.getElementById("max-3");
    let vientoVelocidad_3 = document.getElementById("viento-velocidad-3");
    let fecha_dia_3 = document.getElementById("dia3");

    //Dia_4
    let iconAnimado_4 = document.getElementById("icon-animado-4")
    let temperaturaDescription_4 = document.getElementById("desc-4");
    let temperaturaMin_4 = document.getElementById("min-4");
    let temperaturaMax_4 = document.getElementById("max-4");
    let vientoVelocidad_4 = document.getElementById("viento-velocidad-4");
    let fecha_dia_4 = document.getElementById("dia4");

    //Dia_5
    let iconAnimado_5 = document.getElementById("icon-animado-5")
    let temperaturaDescription_5 = document.getElementById("desc-5");
    let temperaturaMin_5 = document.getElementById("min-5");
    let temperaturaMax_5 = document.getElementById("max-5");
    let vientoVelocidad_5 = document.getElementById("viento-velocidad-5");
    let fecha_dia_5 = document.getElementById("dia5");

    //Dia_6
    let iconAnimado_6 = document.getElementById("icon-animado-6")
    let temperaturaDescription_6 = document.getElementById("desc-6");
    let temperaturaMin_6 = document.getElementById("min-6");
    let temperaturaMax_6 = document.getElementById("max-6");
    let vientoVelocidad_6 = document.getElementById("viento-velocidad-6");
    let fecha_dia_6 = document.getElementById("dia6");





    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((posicion) => {
            lon = posicion.coords.longitude;
            lat = posicion.coords.latitude;

            const diaActual = () => {

                


                let fechaActual = new Date();
                let hora_ = fechaActual.getHours();
                let minutos_ = fechaActual.getMinutes();
                let diaSemana = fechaActual.getDay();           
                let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

                actual.textContent = semana[diaSemana];  
                minutoA.textContent = minutos_
                horaA.textContent = hora_

            }

            const dia_actual = (data_temp, data_timezone, windspeed, weathercode, sensacion_term_max, t_max, t_min) => {

                let temp = Math.round(data_temp);
                temperaturaValor.textContent = `${temp}º`;

                ubicacion.textContent = data_timezone;

                let speed = Math.round(windspeed);
                vientoVelocidad.textContent = `${speed} Km/h`;

                let senc = Math.round(sensacion_term_max);
                sensacionTerm.textContent = `${senc}º`

                let tmax = Math.round(t_max);
                temperaturaMax.textContent = `${tmax}º/`;

                let tmin = Math.round(t_min);
                temperaturaMin.textContent = `${tmin}º`;

                diaActual();

                switch (weathercode) {
                    case 0:
                        iconAnimado.src = "/multimedia/animated/day.svg";
                        temperaturaDescription.textContent = "Cielo Despejado";
                        break;
                    case 1:
                        iconAnimado.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription.textContent =
                            "Mayormente despejado";
                        break;
                    case 2:
                        iconAnimado.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription.textContent =
                            "Parcialmente Nublado";
                        break;
                    case 3:
                        iconAnimado.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription.textContent = "Nublado";
                        break;
                    case 51:
                        iconAnimado.src = "/multimedia/animated/rainy-4.svg";
                        temperaturaDescription.textContent = "Llovizna: intensidad ligera";
                        break;
                    case 53:
                        iconAnimado.src = "/multimedia/animated/rainy-5.svg";
                        temperaturaDescription.textContent =
                            "Llovizna moderada";
                        break;
                    case 55:
                        iconAnimado.src = "/multimedia/animated/rainy-5.svg";
                        temperaturaDescription.textContent = "Llovizna intensa";
                        break;
                    case 61:
                        iconAnimado.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription.textContent = "Lluvia Leve";
                        break;
                    case 63:
                        iconAnimado.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription.textContent = "Lluvia Moderada";
                        break;
                    case 65:
                        iconAnimado.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription.textContent = "Lluvia Fuerte";
                        break;
                    case 66:
                        iconAnimado.src = "/multimedia/animated/rainy-7.svg";
                        temperaturaDescription.textContent =
                            "Lluvia Helada Ligera";
                        break;
                    case 67:
                        iconAnimado.src = "/multimedia/animated/rainy-7.svg";
                        temperaturaDescription.textContent =
                            "Lluvia Helada Pesada";
                        break;
                    case 71:
                        iconAnimado.src = "/multimedia/animated/snowy-4.svg";
                        temperaturaDescription.textContent = "Nevada Leve";
                        break;
                    case 72:
                        iconAnimado.src = "/multimedia/animated/snowy-5.svg";
                        temperaturaDescription.textContent = "Nevada Moderada";
                        break;
                    case 73:
                        iconAnimado.src = "/multimedia/animated/snowy-6.svg";
                        temperaturaDescription.textContent = "Nevada Intensa";
                        break;
                    case 95:
                        iconAnimado.src = "/multimedia/animated/thunder.svg";
                        temperaturaDescription.textContent =
                            "Tormenta Electrica";
                        break;

                    default:
                        break;
                }

            }

            const dia_1 = (code_weather, t_max, t_min, windspeed,) => {

                switch (code_weather) {
                    case 0:
                        iconAnimado_1.src = "/multimedia/animated/day.svg";
                        temperaturaDescription_1.textContent = "Cielo Despejado"
                        break;
                    case 1:
                        iconAnimado_1.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_1.textContent = "Mayormente despejado"
                        break;
                    case 2:
                        iconAnimado_1.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_1.textContent = "Parcialmente Nublado"
                        break;
                    case 3:
                        iconAnimado_1.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_1.textContent = "Nublado"
                        break;
                    case 51:
                        iconAnimado_1.src = "/multimedia/animated/rainy-4.svg";
                        temperaturaDescription_1.textContent = "Llovizna: intensidad ligera"
                        break;
                    case 53:
                        iconAnimado_1.src = "/multimedia/animated/rainy-5.svg";
                        temperaturaDescription_1.textContent = "Llovizna moderada"
                        break;
                    case 55:
                        iconAnimado_1.src = "/multimedia/animated/rainy-5.svg";
                        temperaturaDescription_1.textContent = "Llovizna intensa"
                        break;
                    case 61:
                        iconAnimado_1.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_1.textContent = "Lluvia Leve";
                        break;
                    case 63:
                        iconAnimado_1.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_1.textContent = "Lluvia Moderada";
                        break;
                    case 65:
                        iconAnimado_1.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_1.textContent = "Lluvia Fuerte";
                        break;
                    case 66:
                        iconAnimado_1.src = "/multimedia/animated/rainy-7.svg";
                        temperaturaDescription_1.textContent = "Lluvia Helada Ligera";
                        break;
                    case 67:
                        iconAnimado_1.src = "/multimedia/animated/rainy-7.svg";
                        temperaturaDescription_1.textContent = "Lluvia Helada Pesada";
                        break;
                    case 71:
                        iconAnimado_1.src = "/multimedia/animated/snowy-4.svg";
                        temperaturaDescription_1.textContent = "Nevada Leve";
                        break;
                    case 72:
                        iconAnimado_1.src = "/multimedia/animated/snowy-5.svg";
                        temperaturaDescription_1.textContent = "Nevada Moderada";
                        break;
                    case 73:
                        iconAnimado_1.src = "/multimedia/animated/snowy-6.svg";
                        temperaturaDescription_1.textContent = "Nevada Intensa";
                        break;
                    case 95:
                        iconAnimado_1.src = "/multimedia/animated/thunder.svg";
                        temperaturaDescription_1.textContent = "Tormenta Electrica";
                        break;

                    default:
                        break;
                }
                let speed = Math.round(windspeed);
                vientoVelocidad_1.textContent = `${speed} Km/h`;

                let tmax = Math.round(t_max);
                temperaturaMax_1.textContent = `${tmax}º/`;

                let tmin = Math.round(t_min);
                temperaturaMin_1.textContent = `${tmin}º`;


            }

            const dia_2 = (code_weather, t_max, t_min, windspeed,) => {

                switch (code_weather) {
                    case 0:
                        iconAnimado_2.src = "/multimedia/animated/day.svg";
                        temperaturaDescription_2.textContent = "Cielo Despejado"
                        break;
                    case 1:
                        iconAnimado_2.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_2.textContent = "Mayormente despejado"
                        break;
                    case 2:
                        iconAnimado_2.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_2.textContent = "Parcialmente Nublado"
                        break;
                    case 3:
                        iconAnimado_2.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_2.textContent = "Nublado"
                        break;
                    case 51:
                        iconAnimado_2.src = "/multimedia/animated/rainy-4.svg";
                        temperaturaDescription_2.textContent = "Llovizna: intensidad ligera"
                        break;
                    case 53:
                        iconAnimado_2.src = "/multimedia/animated/rainy-5.svg";
                        temperaturaDescription_1.textContent = "Llovizna moderada"
                        break;
                    case 55:
                        iconAnimado_2.src = "/multimedia/animated/rainy-5.svg";
                        temperaturaDescription_2.textContent = "Llovizna intensa"
                        break;
                    case 61:
                        iconAnimado_2.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_2.textContent = "Lluvia Leve";
                        break;
                    case 63:
                        iconAnimado_2.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_2.textContent = "Lluvia Moderada";
                        break;
                    case 65:
                        iconAnimado_2.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_2.textContent = "Lluvia Fuerte";
                        break;
                    case 66:
                        iconAnimado_2.src = "/multimedia/animated/rainy-7.svg";
                        temperaturaDescription_2.textContent = "Lluvia Helada Ligera";
                        break;
                    case 67:
                        iconAnimado_2.src = "/multimedia/animated/rainy-7.svg";
                        temperaturaDescription_2.textContent = "Lluvia Helada Pesada";
                        break;
                    case 71:
                        iconAnimado_2.src = "/multimedia/animated/snowy-4.svg";
                        temperaturaDescription_2.textContent = "Nevada Leve";
                        break;
                    case 72:
                        iconAnimado_2.src = "/multimedia/animated/snowy-5.svg";
                        temperaturaDescription_2.textContent = "Nevada Moderada";
                        break;
                    case 73:
                        iconAnimado_2.src = "/multimedia/animated/snowy-6.svg";
                        temperaturaDescription_2.textContent = "Nevada Intensa";
                        break;
                    case 95:
                        iconAnimado_2.src = "/multimedia/animated/thunder.svg";
                        temperaturaDescription_2.textContent = "Tormenta Electrica";
                        break;

                    default:
                        break;
                }
                let speed = Math.round(windspeed);
                vientoVelocidad_2.textContent = `${speed} Km/h`;

                let tmax = Math.round(t_max);
                temperaturaMax_2.textContent = `${tmax}º/`;

                let tmin = Math.round(t_min);
                temperaturaMin_2.textContent = `${tmin}º`;


            }

            const dia_3 = (code_weather, t_max, t_min, windspeed,) => {

                switch (code_weather) {
                    case 0:
                        iconAnimado_3.src = "/multimedia/animated/day.svg";
                        temperaturaDescription_3.textContent = "Cielo Despejado"
                        break;
                    case 1:
                        iconAnimado_3.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_3.textContent = "Mayormente despejado"
                        break;
                    case 2:
                        iconAnimado_3.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_3.textContent = "Parcialmente Nublado"
                        break;
                    case 3:
                        iconAnimado_3.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_3.textContent = "Nublado"
                        break;
                    case 51:
                        iconAnimado_3.src = "/multimedia/animated/rainy-4.svg";
                        temperaturaDescription_3.textContent = "Llovizna: intensidad ligera"
                        break;
                    case 53:
                        iconAnimado_3.src = "/multimedia/animated/rainy-5.svg";
                        temperaturaDescription_3.textContent = "Llovizna moderada"
                        break;
                    case 55:
                        iconAnimado_3.src = "/multimedia/animated/rainy-5.svg";
                        temperaturaDescription_3.textContent = "Llovizna intensa"
                        break;
                    case 61:
                        iconAnimado_3.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_3.textContent = "Lluvia Leve";
                        break;
                    case 63:
                        iconAnimado_3.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_3.textContent = "Lluvia Moderada";
                        break;
                    case 65:
                        iconAnimado_3.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_3.textContent = "Lluvia Fuerte";
                        break;
                    case 66:
                        iconAnimado_3.src = "/multimedia/animated/rainy-7.svg";
                        temperaturaDescription_3.textContent = "Lluvia Helada Ligera";
                        break;
                    case 67:
                        iconAnimado_3.src = "/multimedia/animated/rainy-7.svg";
                        temperaturaDescription_3.textContent = "Lluvia Helada Pesada";
                        break;
                    case 71:
                        iconAnimado_3.src = "/multimedia/animated/snowy-4.svg";
                        temperaturaDescription_3.textContent = "Nevada Leve";
                        break;
                    case 72:
                        iconAnimado_3.src = "/multimedia/animated/snowy-5.svg";
                        temperaturaDescription_3.textContent = "Nevada Moderada";
                        break;
                    case 73:
                        iconAnimado_3.src = "/multimedia/animated/snowy-6.svg";
                        temperaturaDescription_3.textContent = "Nevada Intensa";
                        break;
                    case 95:
                        iconAnimado_3.src = "/multimedia/animated/thunder.svg";
                        temperaturaDescription_3.textContent = "Tormenta Electrica";
                        break;

                    default:
                        break;
                }
                let speed = Math.round(windspeed);
                vientoVelocidad_3.textContent = `${speed} Km/h`;

                let tmax = Math.round(t_max);
                temperaturaMax_3.textContent = `${tmax}º/`;

                let tmin = Math.round(t_min);
                temperaturaMin_3.textContent = `${tmin}º`;


            }

            const dia_4 = (code_weather, t_max, t_min, windspeed,) => {

                switch (code_weather) {
                    case 0:
                        iconAnimado_4.src = "/multimedia/animated/day.svg";
                        temperaturaDescription_4.textContent = "Cielo Despejado"
                        break;
                    case 1:
                        iconAnimado_4.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_4.textContent = "Mayormente despejado"
                        break;
                    case 2:
                        iconAnimado_4.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_4.textContent = "Parcialmente Nublado"
                        break;
                    case 3:
                        iconAnimado_4.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_4.textContent = "Nublado"
                        break;
                    case 51:
                        iconAnimado_4.src = "/multimedia/animated/rainy-4.svg";
                        temperaturaDescription_4.textContent = "Llovizna: intensidad ligera"
                        break;
                    case 53:
                        iconAnimado_4.src = "/multimedia/animated/rainy-5.svg";
                        temperaturaDescription_4.textContent = "Llovizna moderada"
                        break;
                    case 55:
                        iconAnimado_4.src = "/multimedia/animated/rainy-5.svg";
                        temperaturaDescription_4.textContent = "Llovizna intensa"
                        break;
                    case 61:
                        iconAnimado_4.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_4.textContent = "Lluvia Leve";
                        break;
                    case 63:
                        iconAnimado_4.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_4.textContent = "Lluvia Moderada";
                        break;
                    case 65:
                        iconAnimado_4.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_4.textContent = "Lluvia Fuerte";
                        break;
                    case 66:
                        iconAnimado_4.src = "/multimedia/animated/rainy-7.svg";
                        temperaturaDescription_4.textContent = "Lluvia Helada Ligera";
                        break;
                    case 67:
                        iconAnimado_4.src = "/multimedia/animated/rainy-7.svg";
                        temperaturaDescription_4.textContent = "Lluvia Helada Pesada";
                        break;
                    case 71:
                        iconAnimado_4.src = "/multimedia/animated/snowy-4.svg";
                        temperaturaDescription_4.textContent = "Nevada Leve";
                        break;
                    case 72:
                        iconAnimado_4.src = "/multimedia/animated/snowy-5.svg";
                        temperaturaDescription_4.textContent = "Nevada Moderada";
                        break;
                    case 73:
                        iconAnimado_4.src = "/multimedia/animated/snowy-6.svg";
                        temperaturaDescription_4.textContent = "Nevada Intensa";
                        break;
                    case 95:
                        iconAnimado_4.src = "/multimedia/animated/thunder.svg";
                        temperaturaDescription_4.textContent = "Tormenta Electrica";
                        break;

                    default:
                        break;
                }
                let speed = Math.round(windspeed);
                vientoVelocidad_4.textContent = `${speed} Km/h`;

                let tmax = Math.round(t_max);
                temperaturaMax_4.textContent = `${tmax}º/`;

                let tmin = Math.round(t_min);
                temperaturaMin_4.textContent = `${tmin}º`;


            }

            const dia_5 = (code_weather, t_max, t_min, windspeed,) => {

                switch (code_weather) {
                    case 0:
                        iconAnimado_5.src = "/multimedia/animated/day.svg";
                        temperaturaDescription_5.textContent = "Cielo Despejado"
                        break;
                    case 1:
                        iconAnimado_5.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_5.textContent = "Mayormente despejado"
                        break;
                    case 2:
                        iconAnimado_5.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_5.textContent = "Parcialmente Nublado"
                        break;
                    case 3:
                        iconAnimado_5.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_5.textContent = "Nublado"
                        break;
                    case 51:
                        iconAnimado_5.src = "/multimedia/animated/rainy-4.svg";
                        temperaturaDescription_5.textContent = "Llovizna: intensidad ligera"
                        break;
                    case 53:
                        iconAnimado_5.src = "/multimedia/animated/rainy-5.svg";
                        temperaturaDescription_5.textContent = "Llovizna moderada"
                        break;
                    case 55:
                        iconAnimado_5.src = "/multimedia/animated/rainy-5.svg";
                        temperaturaDescription_5.textContent = "Llovizna intensa"
                        break;
                    case 61:
                        iconAnimado_5.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_5.textContent = "Lluvia Leve";
                        break;
                    case 63:
                        iconAnimado_5.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_5.textContent = "Lluvia Moderada";
                        break;
                    case 65:
                        iconAnimado_5.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_5.textContent = "Lluvia Fuerte";
                        break;
                    case 66:
                        iconAnimado_5.src = "/multimedia/animated/rainy-7.svg";
                        temperaturaDescription_5.textContent = "Lluvia Helada Ligera";
                        break;
                    case 67:
                        iconAnimado_5.src = "/multimedia/animated/rainy-7.svg";
                        temperaturaDescription_5.textContent = "Lluvia Helada Pesada";
                        break;
                    case 71:
                        iconAnimado_5.src = "/multimedia/animated/snowy-4.svg";
                        temperaturaDescription_5.textContent = "Nevada Leve";
                        break;
                    case 72:
                        iconAnimado_5.src = "/multimedia/animated/snowy-5.svg";
                        temperaturaDescription_5.textContent = "Nevada Moderada";
                        break;
                    case 73:
                        iconAnimado_5.src = "/multimedia/animated/snowy-6.svg";
                        temperaturaDescription_5.textContent = "Nevada Intensa";
                        break;
                    case 95:
                        iconAnimado_5.src = "/multimedia/animated/thunder.svg";
                        temperaturaDescription_5.textContent = "Tormenta Electrica";
                        break;

                    default:
                        break;
                }
                let speed = Math.round(windspeed);
                vientoVelocidad_5.textContent = `${speed} Km/h`;

                let tmax = Math.round(t_max);
                temperaturaMax_5.textContent = `${tmax}º/`;

                let tmin = Math.round(t_min);
                temperaturaMin_5.textContent = `${tmin}º`;


            }

            const dia_6 = (code_weather, t_max, t_min, windspeed,) => {

                switch (code_weather) {
                    case 0:
                        iconAnimado_6.src = "/multimedia/animated/day.svg";
                        temperaturaDescription_6.textContent = "Cielo Despejado"
                        break;
                    case 1:
                        iconAnimado_6.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_6.textContent = "Mayormente despejado"
                        break;
                    case 2:
                        iconAnimado_6.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_6.textContent = "Parcialmente Nublado"
                        break;
                    case 3:
                        iconAnimado_6.src = "/multimedia/animated/cloudy.svg";
                        temperaturaDescription_6.textContent = "Nublado"
                        break;
                    case 51:
                        iconAnimado_6.src = "/multimedia/animated/rainy-4.svg";
                        temperaturaDescription_6.textContent = "Llovizna: intensidad ligera"
                        break;
                    case 53:
                        iconAnimado_6.src = "/multimedia/animated/rainy-5.svg";
                        temperaturaDescription_6.textContent = "Llovizna moderada"
                        break;
                    case 55:
                        iconAnimado_6.src = "/multimedia/animated/rainy-5.svg";
                        temperaturaDescription_6.textContent = "Llovizna intensa"
                        break;
                    case 61:
                        iconAnimado_6.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_6.textContent = "Lluvia Leve";
                        break;
                    case 63:
                        iconAnimado_6.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_6.textContent = "Lluvia Moderada";
                        break;
                    case 65:
                        iconAnimado_6.src = "/multimedia/animated/rainy-6.svg";
                        temperaturaDescription_6.textContent = "Lluvia Fuerte";
                        break;
                    case 66:
                        iconAnimado_6.src = "/multimedia/animated/rainy-7.svg";
                        temperaturaDescription_6.textContent = "Lluvia Helada Ligera";
                        break;
                    case 67:
                        iconAnimado_6.src = "/multimedia/animated/rainy-7.svg";
                        temperaturaDescription_6.textContent = "Lluvia Helada Pesada";
                        break;
                    case 71:
                        iconAnimado_6.src = "/multimedia/animated/snowy-4.svg";
                        temperaturaDescription_6.textContent = "Nevada Leve";
                        break;
                    case 72:
                        iconAnimado_6.src = "/multimedia/animated/snowy-5.svg";
                        temperaturaDescription_6.textContent = "Nevada Moderada";
                        break;
                    case 73:
                        iconAnimado_6.src = "/multimedia/animated/snowy-6.svg";
                        temperaturaDescription_6.textContent = "Nevada Intensa";
                        break;
                    case 95:
                        iconAnimado_6.src = "/multimedia/animated/thunder.svg";
                        temperaturaDescription_6.textContent = "Tormenta Electrica";
                        break;

                    default:
                        break;
                }
                let speed = Math.round(windspeed);
                vientoVelocidad_6.textContent = `${speed} Km/h`;

                let tmax = Math.round(t_max);
                temperaturaMax_6.textContent = `${tmax}º/`;

                let tmin = Math.round(t_min);
                temperaturaMin_6.textContent = `${tmin}º`;


            }

            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max,sunrise,sunset&current_weather=true&timezone=auto`;

            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {

                    dia_actual(data.current_weather.temperature, data.timezone, data.current_weather.windspeed, data.current_weather.weathercode, data.daily.apparent_temperature_max[0], data.daily.temperature_2m_max[0], data.daily.temperature_2m_min[0])

                    dia_1(data.daily.weathercode[1], data.daily.temperature_2m_max[1], data.daily.temperature_2m_min[1], data.daily.windspeed_10m_max[1], data.daily.precipitation_sum[1])

                    dia_2(data.daily.weathercode[2], data.daily.temperature_2m_max[2], data.daily.temperature_2m_min[2], data.daily.windspeed_10m_max[2], data.daily.precipitation_sum[2])

                    dia_3(data.daily.weathercode[3], data.daily.temperature_2m_max[3], data.daily.temperature_2m_min[3], data.daily.windspeed_10m_max[3], data.daily.precipitation_sum[3])

                    dia_4(data.daily.weathercode[4], data.daily.temperature_2m_max[4], data.daily.temperature_2m_min[4], data.daily.windspeed_10m_max[4], data.daily.precipitation_sum[4])

                    dia_5(data.daily.weathercode[5], data.daily.temperature_2m_max[5], data.daily.temperature_2m_min[5], data.daily.windspeed_10m_max[5], data.daily.precipitation_sum[5])

                    dia_6(data.daily.weathercode[6], data.daily.temperature_2m_max[6], data.daily.temperature_2m_min[6], data.daily.windspeed_10m_max[6], data.daily.precipitation_sum[6])

                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }
});
