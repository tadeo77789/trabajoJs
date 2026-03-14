function sumar(){

let n1 = document.getElementById("num1").value;
let n2 = document.getElementById("num2").value;

n1 = Number(n1);
n2 = Number(n2);

let resultado = n1 + n2;

document.getElementById("resultado").innerText = "Resultado: " + resultado;

}