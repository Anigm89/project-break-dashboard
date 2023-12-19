const respuesta = document.getElementById('contrasenia');
const pass = document.getElementById('pass');
let longitud = document.getElementById('longitud');

function generaContraseña(value){

    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '1234567890';
    const simbolos = '!@#$%^&*()-_+=';

    let password = '';
    
    for(let i = 0; i<=value; i++){

        const tipo = Math.floor(Math.random() * 4);

        if(tipo === 0){
            const MayusAleatoria = Math.floor(Math.random() * mayusculas.length);
            password += mayusculas.charAt(MayusAleatoria);
        }
        else if(tipo === 1){
            const MinusAleatoria = Math.floor(Math.random() * minusculas.length);
            password += minusculas.charAt(MinusAleatoria);
        }
        else if(tipo === 2){
            const NumAleatorio = Math.floor(Math.random() * numeros.length);
            password += numeros.charAt(NumAleatorio);
        }
        else{
            const simboloAleatorio = Math.floor(Math.random() * simbolos.length);
            password += simbolos.charAt(simboloAleatorio);
        }    
    }
    return password;
   
}

pass.addEventListener('click', () =>{
   let value= longitud.value;  
    const PassGenerada = generaContraseña(value);
    respuesta.innerHTML = `
    <p> Contraseña generada:</p>
    <p>${PassGenerada}</p>`
})


