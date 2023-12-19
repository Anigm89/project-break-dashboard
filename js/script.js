const imgFondo = [1,2,3,4,5,6,7,8,9,10];

setInterval(imgAleatoria,15000)

function imgAleatoria(){
    const aleatoria = Math.floor(Math.random() * imgFondo.length);

    if(document.body.className === 'home'){
        document.body.style.backgroundImage= `url('./assets/fondo/img${aleatoria}.jpg')`;
    }
    else{
        document.body.style.backgroundImage= `url('../assets/fondo/img${aleatoria}.jpg')`;     
    }
}
