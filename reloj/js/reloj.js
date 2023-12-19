const horaActual = document.getElementById('hora');
const fechaActual = document.getElementById('fecha');
const frase = document.getElementById('frase');

//const formateado = {day: '2-digit', month: '2-digit', year: 'numeric'}
//const fecha = new Date().toLocaleDateString('es-ES', formateado)

const fecha = new Date();

let dia = `${fecha.getDate()}`.padStart(2, '0');
let mes = fecha.getMonth() + 1;
    mes = mes.toString().padStart(2, '0');
let anio = fecha.getFullYear();

fechaActual.innerHTML = `${dia}/${mes}/${anio}`


//  -----  hora ............
ObtenerHora();
setInterval(ObtenerHora,1000);

function ObtenerHora(){
    const formateado = { hour: "2-digit", minute: "2-digit", second: '2-digit' };
    const reloj = new Date().toLocaleTimeString('es-ES', formateado);
    horaActual.innerHTML = `${reloj}`;
   
}
  
function obtenerfrase(){
    let hora = new Date().getHours();
           
    if(hora >= 8 && hora < 12){
        frase.innerHTML = 'Buenos días! Es hora de levantarse y desayunar';
    }
    else if (hora >= 12 && hora < 14){
        frase.innerHTML = 'Es hora de programar un rato';
    }
    else if(hora >= 14 && hora < 17){
        frase.innerHTML = 'Es hora de comer y siesta antes de seguir';
    }
    else if(hora >= 17 && hora < 20){
        frase.innerHTML = 'Espero que hayas merendado porque hay que seguir programando!';
    }
    else if(hora >= 20 && hora < 22){
        frase.innerHTML = 'Ves terminando ya, mañana más';
    }
    else if(hora >=22 && hora < 0){
        frase.innerHTML = 'Es hora de cenar y descansar';
    }
    else{
        frase.innerHTML = 'Es hora de dormir. Buenas noches!';
    }
}

if(document.body.className != 'home'){
    obtenerfrase();
}
