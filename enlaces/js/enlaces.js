const listado = document.getElementById('listado');
const enlace = document.getElementById('enlace');
const url = document.getElementById('url');
const enviar = document.getElementById('enviar');


enviar.addEventListener('click', () =>{
    let nombreEnlace = enlace.value;
    let direccion = url.value;

    if (nombreEnlace !== '' && direccion !== ''){

        let nombres = JSON.parse(localStorage.getItem('Nombres')) || [];
        let enlaces = JSON.parse(localStorage.getItem('Enlaces')) || [];

        nombres.push(nombreEnlace);
        enlaces.push(direccion);
        
        localStorage.setItem('Nombres', JSON.stringify(nombres));
        localStorage.setItem('Enlaces', JSON.stringify(enlaces));

        muestraDatos();
        
        enlace.value = '';
        url.value = '';
        const respuesta  = document.getElementById('respuesta');
        respuesta.classList.add('fondo');

    } 
})


function muestraDatos(){
    listado.innerHTML = '';


    let nombres = JSON.parse(localStorage.getItem('Nombres')) || [];
    let enlaces = JSON.parse(localStorage.getItem('Enlaces')) || [];
   
    nombres.forEach((nombre,index) => {
        let template =
        `<li><a href="${enlaces[index]}" target="_blank"> ${nombre}</a>
            <button class="eliminar" data-index="${index}">X</button>
        </li>`;

        listado.innerHTML += template;
    });
    
    const borrar = document.querySelectorAll('.eliminar');
    borrar.forEach((button, index) =>{
        button.addEventListener('click', () =>{
           
           nombres.splice(index,1);
           enlaces.splice(index,1);

           localStorage.setItem('Nombres', JSON.stringify(nombres));
           localStorage.setItem('Enlaces', JSON.stringify(enlaces));

           muestraDatos();
           
        })
    })
}

muestraDatos();

