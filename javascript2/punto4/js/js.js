let carrito = [];
let total = 0;

function agregarProducto(){

let nombre = document.getElementById("nombre").value;
let precio = parseFloat(document.getElementById("precio").value);

if(nombre === "" || isNaN(precio)){
return;
}

let producto = {
nombre: nombre,
precio: precio
};

carrito.push(producto);

mostrarCarrito();

document.getElementById("nombre").value = "";
document.getElementById("precio").value = "";

}

function mostrarCarrito(){

let lista = document.getElementById("lista");

lista.innerHTML = "";

total = 0;

carrito.forEach((producto,index)=>{

total += producto.precio;

let item = document.createElement("div");

item.className =
"list-group-item d-flex justify-content-between align-items-center";

item.innerHTML = `
${producto.nombre} - $${producto.precio}
<button class="btn btn-danger btn-sm">
<i class="bi bi-trash"></i>
</button>
`;

item.querySelector("button").addEventListener("click",function(){

carrito.splice(index,1);

mostrarCarrito();

});

lista.appendChild(item);

});

document.getElementById("total").textContent = total;

}