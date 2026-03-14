function agregarTarea(){

let texto = document.getElementById("tarea").value;

if(texto === ""){
return;
}

let lista = document.getElementById("lista");

let item = document.createElement("div");

item.className = "list-group-item d-flex justify-content-between align-items-center";

item.innerHTML = `
${texto}
<button class="btn btn-danger btn-sm">
<i class="bi bi-trash"></i> Eliminar
</button>
`;

item.querySelector("button").addEventListener("click", function(){

item.remove();

});

lista.appendChild(item);

document.getElementById("tarea").value = "";

}