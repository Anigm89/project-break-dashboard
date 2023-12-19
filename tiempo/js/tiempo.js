const cabecera = document.getElementById('cabecera');
const tiempo = document.getElementById('tiempo');
const grados = document.getElementById('grados');
const horas = document.getElementById('horas');

const apiKey = 'ca26aaa3b2fd42adb58122751231312';
const city = 'Cuenca(spain)';
//const city = 'Belinchón';


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
ObtenerDatos();

function mostrardatos(data){

    let datosHoy = data.current;
    let template = `<h3>${data.location.name} / ${data.location.region} / ${data.location.country}</h3>
    <p>${datosHoy.condition.text}</p>`;
    cabecera.innerHTML = template;
    
    let src = '';
    if(document.body.className === 'home'){
        src = `./assets/iconos/celsius.png`
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