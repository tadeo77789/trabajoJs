let inventario = [];

function registrarProducto(){

    let nombre = document.getElementById("nombre").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);

    let producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };

    inventario.push(producto);

    document.getElementById("resultado").textContent =
    "Producto registrado correctamente";

}

function consultarProducto(){

    let buscar = document.getElementById("buscar").value;

    let producto = inventario.find(p => p.nombre === buscar);

    if(producto){

        document.getElementById("resultado").textContent =
        "Producto: " + producto.nombre +
        " | Precio: $" + producto.precio +
        " | Cantidad: " + producto.cantidad;

    }else{

        document.getElementById("resultado").textContent =
        "Producto no encontrado";

    }

}

function valorInventario(){

    let total = 0;

    inventario.forEach(p => {

        total += p.precio * p.cantidad;

    });

    document.getElementById("resultado").textContent =
    "Valor total del inventario: $" + total;

}