let tiempo = 0;
let intervalo = null;

function iniciar(){

    if(intervalo !== null){
        return;
    }

    intervalo = setInterval(function(){

        tiempo++;

        document.getElementById("contador").textContent = tiempo;

    },1000);

}

function detener(){

    clearInterval(intervalo);
    intervalo = null;

}

function reiniciar(){

    clearInterval(intervalo);

    intervalo = null;

    tiempo = 0;

    document.getElementById("contador").textContent = tiempo;

}