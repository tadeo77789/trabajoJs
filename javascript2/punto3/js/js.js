let estudiantes = [];

function registrarEstudiante(){

    let nombre = document.getElementById("nombre").value;
    let programa = document.getElementById("programa").value;
    let nota = parseFloat(document.getElementById("nota").value);

    let estado = "Reprobado";

    if(nota >= 3){
        estado = "Aprobado";
    }

    let estudiante = {
        nombre: nombre,
        programa: programa,
        nota: nota,
        estado: estado
    };

    estudiantes.push(estudiante);

    mostrarEstudiantes();

    document.getElementById("nombre").value = "";
    document.getElementById("programa").value = "";
    document.getElementById("nota").value = "";

}

function mostrarEstudiantes(){

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    estudiantes.forEach(est => {

        let item = document.createElement("div");

        item.className =
        "list-group-item d-flex flex-column";

        item.innerHTML = `
        <strong>${est.nombre}</strong>
        Programa: ${est.programa}
        Nota: ${est.nota}
        Estado: ${est.estado}
        `;

        lista.appendChild(item);

    });

}