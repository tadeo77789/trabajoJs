let biblioteca = [];

function registrarLibro(){

    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;

    if(titulo === "" || autor === ""){
        return;
    }

    let libro = {
        titulo: titulo,
        autor: autor,
        disponible: true
    };

    biblioteca.push(libro);

    mostrarLibros();

    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";

}

function prestarLibro(){

    let titulo = document.getElementById("buscarLibro").value;

    let libro = biblioteca.find(l => l.titulo === titulo);

    if(libro){

        if(libro.disponible){
            libro.disponible = false;
        }

        mostrarLibros();

    }

}

function devolverLibro(){

    let titulo = document.getElementById("buscarLibro").value;

    let libro = biblioteca.find(l => l.titulo === titulo);

    if(libro){

        libro.disponible = true;

        mostrarLibros();

    }

}

function mostrarLibros(){

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    biblioteca.forEach(l => {

        let estado = l.disponible ? "Disponible" : "Prestado";

        let item = document.createElement("div");

        item.className = "list-group-item";

        item.innerHTML =
        "<strong>" + l.titulo + "</strong><br>" +
        "Autor: " + l.autor + "<br>" +
        "Estado: " + estado;

        lista.appendChild(item);

    });

}