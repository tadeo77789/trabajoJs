class CuentaBancaria {

    constructor(cliente, saldo) {
        this.cliente = cliente
        this.saldo = saldo
    }

    depositar(monto){
        this.saldo += monto
    }

    retirar(monto){
        if(monto > this.saldo){
            return false
        }
        this.saldo -= monto
        return true
    }

}

let cuentas = []

function crearCuenta(){

    let cliente = document.getElementById("cliente").value
    let saldo = Number(document.getElementById("saldoInicial").value)

    let cuenta = new CuentaBancaria(cliente, saldo)

    cuentas.push(cuenta)

    document.getElementById("resultado").innerText =
    "Cuenta creada para " + cliente

}

function buscarCuenta(nombre){

    return cuentas.find(c => c.cliente === nombre)

}

function depositar(){

    let nombre = document.getElementById("clienteOperacion").value
    let monto = Number(document.getElementById("monto").value)

    let cuenta = buscarCuenta(nombre)

    if(cuenta){
        cuenta.depositar(monto)

        document.getElementById("resultado").innerText =
        "Depósito realizado. Saldo actual: $" + cuenta.saldo
    }else{
        document.getElementById("resultado").innerText =
        "Cuenta no encontrada"
    }

}

function retirar(){

    let nombre = document.getElementById("clienteOperacion").value
    let monto = Number(document.getElementById("monto").value)

    let cuenta = buscarCuenta(nombre)

    if(cuenta){

        if(cuenta.retirar(monto)){
            document.getElementById("resultado").innerText =
            "Retiro realizado. Saldo actual: $" + cuenta.saldo
        }else{
            document.getElementById("resultado").innerText =
            "Fondos insuficientes"
        }

    }else{
        document.getElementById("resultado").innerText =
        "Cuenta no encontrada"
    }

}

function consultarSaldo(){

    let nombre = document.getElementById("clienteOperacion").value

    let cuenta = buscarCuenta(nombre)

    if(cuenta){
        document.getElementById("resultado").innerText =
        "Saldo actual: $" + cuenta.saldo
    }else{
        document.getElementById("resultado").innerText =
        "Cuenta no encontrada"
    }

}