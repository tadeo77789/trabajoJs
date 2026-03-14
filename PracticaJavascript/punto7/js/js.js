function calcular(){

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let op = document.getElementById("operacion").value;

    let resultado;

    if(op === "+"){
        resultado = n1 + n2;
    }

    if(op === "-"){
        resultado = n1 - n2;
    }

    if(op === "*"){
        resultado = n1 * n2;
    }

    if(op === "/"){
        resultado = n1 / n2;
    }

    document.getElementById("resultado").innerText = resultado;

}