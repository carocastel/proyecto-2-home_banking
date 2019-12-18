//Declaración de variables
var nombreUsuario = "Caro Castelvetri";
var saldoCuenta = 10000;
var codigoCorrecto = 1234;
var limiteExtraccion = 5000;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;




//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


/*function sumarDinero(dinero) {
    var dinero = parseInt(prompt = 'Ingrese el dinero a depositar: ');
    saldoCuenta + dinero;

}*/

//Funciones que tenes que completar

iniciarSesion();

function cambiarLimiteDeExtraccion() {
    var nuevoLimiteExtraccion = parseInt(prompt('Ingrese el limite de extraccion que desea configurar:'));
    if (montoValido(nuevoLimiteExtraccion)) {
        limiteExtraccion = nuevoLimiteExtraccion;
        actualizarLimiteEnPantalla();
        alert('Su nuevo limite de extraccion es $ ' + limiteExtraccion);
    } else { alert('Debe ingresar un monto valido \n(numerico y positivo) '); }
}

function depositarDinero() {
    var saldoAnterior = saldoCuenta;
    var monto = parseInt(prompt('Ingrese el monto que desea depositar: '));
    if (montoValido(monto)) {
        sumarDinero(monto);
        actualizarSaldoEnPantalla();
        alert('Se han depositado $' + monto + '\n Saldo anterior: $ ' + saldoAnterior + ' \n Su nuevo saldo es $' + saldoCuenta);
    } else { alert('El monto ingresado debe ser un valor numerico y positivo'); }

}

function extraerDinero() {
    var saldoAnterior = saldoCuenta;
    var monto = parseInt(prompt('Ingrese el monto que desea extraer: '));
    if (montoValido(monto)) {
        var disponible = dineroDisponible(monto);
        if (monto % 100 == 0) {
            if (disponible) {
                if (monto <= limiteExtraccion) {
                    restarDinero(monto);
                    actualizarSaldoEnPantalla();
                    alert('Se ha extraido $' + monto + '\n Saldo anterior: $ ' + saldoAnterior + '\n Su nuevo saldo es $' + saldoCuenta);
                } else alert('El monto ingresado excede el limite de extraccion');
            } else alert('No posee saldo suficiente para la extraccion que desea realizar');
        } else alert('Solo puede ingresar multiplos de $100');
    } else alert('Solo puede ingresar valores numericos y positivos');
}


function sumarDinero(monto) {
    saldoCuenta += monto;
}

function restarDinero(monto) {
    saldoCuenta -= monto;
}


function montoValido(monto) {
    if ((monto != null) && (monto > 0) && (Number.isNaN(monto) == false)) {
        return true;
    } else return false;
}


function pagarServicio() {
    var servicioApagar = parseInt(prompt(' Seleccione el servicio que desea pagar: \n 1. Agua $350 \n2. Luz $210 \n 3. Internet $570 \n 4. Telefono $425'));
    var saldoAnterior = saldoCuenta;
    switch (servicioApagar) {
        case 1:
            if (saldoCuenta >= agua) {
                restarDinero(agua);
                actualizarSaldoEnPantalla();
                alert('Se ha pagado $' + agua + ' de Agua' + '\n Saldo anterior: $ ' + saldoAnterior + '\n Su nuevo saldo es $' + saldoCuenta);
            } else alert('No posee saldo suficiente para pagar el servicio  seleccionado');
            break;
        case 2:
            if (saldoCuenta >= luz) {
                restarDinero(luz);
                actualizarSaldoEnPantalla();
                alert('Se ha pagado $' + luz + ' de Luz' + '\n Saldo anterior: $ ' + saldoAnterior + '\n Su nuevo saldo es $' + saldoCuenta);
            } else alert('No posee saldo suficiente para pagar el servicio  seleccionado');
            break;
        case 3:
            if (saldoCuenta >= internet) {
                restarDinero(internet);
                actualizarSaldoEnPantalla();
                alert('Se ha pagado $' + internet + ' de Internet' + '\n Saldo anterior: $ ' + saldoAnterior + '\n Su nuevo saldo es $' + saldoCuenta);
            } else alert('No posee saldo suficiente para pagar el servicio  seleccionado');
            break;
        case 4:
            if (saldoCuenta >= telefono) {
                restarDinero(telefono);
                actualizarSaldoEnPantalla();
                alert('Se ha pagado $' + telefono + ' de Telefono' + '\n Saldo anterior: $ ' + saldoAnterior + '\n Su nuevo saldo es $' + saldoCuenta);
            } else alert('No posee saldo suficiente para pagar el servicio  seleccionado');
            break;
        default:
            alert('El servicio ingresado no corresponde a ninguno de la lista');
            break;
    }
}


function transferirDinero() {
    var monto = parseInt(prompt('Ingrese el monto a transferir: '));
    var disponible = dineroDisponible(monto);
    if (montoValido(monto)) {
        if (disponible) {
            var cuentaAmigaATRansferir = parseInt(prompt('Ingrese la cuenta amiga a transferir: '));
            if ((cuentaAmigaATRansferir == cuentaAmiga1) || (cuentaAmigaATRansferir == cuentaAmiga2)) {
                saldoCuenta -= monto;
                actualizarSaldoEnPantalla();
                alert(' Se ha transferido $' + monto + '\n a cuenta destino ' + cuentaAmigaATRansferir);

            } else { alert('Solo puede transferirse dinero a una cuenta amiga ') }

        } else { alert('Saldo insuficiente') }
    } else alert('Solo puede ingresar valores numericos y positivos');
}



function dineroDisponible(monto) {
    if (monto <= saldoCuenta) {
        return true;
    }
    else { return false; }
}


function iniciarSesion() {
    var codigo = parseInt(prompt('Ingrese el codigo de seguridad: '));
    if (codigo == codigoCorrecto) {
        alert('Bienvenido/a ' + nombreUsuario);

    } else {
        alert('El codigo ingresado es incorrecto. Tu dinero ha sido retenido por seguridad');
        saldoCuenta = 0;
        nombreUsuario = '';
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
    }

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}