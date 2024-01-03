const cabecera = document.getElementById('cabecera');
const tiempo = document.getElementById('tiempo');
const grados = document.getElementById('grados');
const horas = document.getElementById('horas');

const ciudad= document.getElementById('ciudad');
const buscador = document.getElementById('buscador');
const buscar = document.getElementById('buscar');


const apiKey = 'ca26aaa3b2fd42adb58122751231312';
let city = 'Cuenca(spain)';

//obtener city del select
function obternercity(){
    ciudad.addEventListener('click', () =>{
        city = ciudad.value;
        ObtenerDatos(city);
    })
}
obternercity();

//obtener city del buscador, guardar en localstorage y mostrar en select
    buscar.addEventListener('click', () => {
        city = buscador.value;
        if(city !== ''){
        localStorage.setItem('lugar', city);

        let option = document.createElement("option");
        option.value =  city;
        option.innerHTML = city
        ciudad.appendChild(option);
    
        buscador.value = '';

        ObtenerDatos(city);
        }
    })

// obtener city guardada en localstorage y mostrarla en select    
function obtenerCiudadGuardada() {
    const cityGuardada = localStorage.getItem('lugar');
    if (cityGuardada) {
        city = cityGuardada;
        const option = document.createElement('option');
        option.value = cityGuardada;
        option.innerHTML = cityGuardada;
        ciudad.appendChild(option);

       // ObtenerDatos(city);
    }
}
const ObtenerDatos = async () =>{
    try{   
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`);
        if(!response.ok){
            throw new Error('Ha surgido un problema', response.status);
        }
        const data = await response.json();
        mostrardatos(data);
    }
    catch (error){
        console.log('error', error)
    }
}

ObtenerDatos(city);
obtenerCiudadGuardada();

function mostrardatos(data){
          //  console.log(data)
    let datosHoy = data.current;
    let template = `
    <h3>${data.location.name} / ${data.location.region} / ${data.location.country}</h3>
    <p>${datosHoy.condition.text}</p>`;
    cabecera.innerHTML = template;
    
    let src = '';
    if(document.body.className === 'home'){
        src = `./assets/iconos/celsius.png`;
    }
    else{
        src = `../assets/iconos/celsius.png`;     
    }
    
    let tiempoHoy = 
    `<img src="${datosHoy.condition.icon}" alt="tiempo">
    <div class="temperatura" >
        <h1>${datosHoy.temp_c}</h1>
        <img src="${src}" alt="termometro">
    </div>
    <div class="datos" id="otrosDatos">
        <p>Precipitaciones: ${datosHoy.precip_mm}% </p>
        <p>Humedad: ${datosHoy.humidity}%</p>
        <p>Viento: ${datosHoy.wind_kph}Km/h </p>
    </div>` 
    tiempo.innerHTML = tiempoHoy;

    let HorasHoy = data.forecast.forecastday[0].hour;
    horas.innerHTML ='';
    HorasHoy.forEach(hora => {
        let time = hora.time;
        let hour = time.slice(-5);

        let templateHoras = `
            <div class = 'cadahora'>
                <p>${hour}</p>
                <img src="${hora.condition.icon}" alt="">
                <p>${hora.temp_c}ºC</p>
            </div>
        `;
        horas.innerHTML += templateHoras;  
        
    });
}

 
