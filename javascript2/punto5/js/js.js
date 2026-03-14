let vehiculos = [];

function registrarVehiculo(){

    let nombre = document.getElementById("nombreVehiculo").value;

    if(nombre === ""){
        return;
    }

    let vehiculo = {
        nombre: nombre,
        velocidad: 0
    };

    vehiculos.push(vehiculo);

    mostrarVehiculos();

    document.getElementById("nombreVehiculo").value = "";

}

function acelerar(){

    let nombre = document.getElementById("buscarVehiculo").value;

    let vehiculo = vehiculos.find(v => v.nombre === nombre);

    if(vehiculo){
        vehiculo.velocidad += 10;
        mostrarVehiculos();
    }

}

function frenar(){

    let nombre = document.getElementById("buscarVehiculo").value;

    let vehiculo = vehiculos.find(v => v.nombre === nombre);

    if(vehiculo){

        vehiculo.velocidad -= 10;

        if(vehiculo.velocidad < 0){
            vehiculo.velocidad = 0;
        }

        mostrarVehiculos();

    }

}

function mostrarVehiculos(){

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    vehiculos.forEach(v => {

        let item = document.createElement("div");

        item.className = "list-group-item";

        item.innerHTML =
        "<strong>" + v.nombre + "</strong><br>" +
        "Velocidad: " + v.velocidad + " km/h";

        lista.appendChild(item);

    });

}