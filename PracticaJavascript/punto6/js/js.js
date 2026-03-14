document.getElementById("formulario").addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;

    let contenedor = document.getElementById("lista");

    contenedor.innerHTML += `
        <div class="list-group-item bg-dark text-white border-light">
            <strong>Nombre:</strong> ${nombre}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Edad:</strong> ${edad}
        </div>
    `;

    document.getElementById("formulario").reset();

});