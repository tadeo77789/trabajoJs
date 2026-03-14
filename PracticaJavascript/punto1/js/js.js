
const boton = document.getElementById("boton");

boton.addEventListener("click", function () {

    const toastLive = document.getElementById("miToast");
    const toast = new bootstrap.Toast(toastLive);

    toast.show();

});
