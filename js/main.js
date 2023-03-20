//simulador de prestamo

//1)Necesitamos que el cliente nos diga que dinero se le va a prestar
//2)Debemos preguntarle al cliente en cuantas cuotas quiere realizar su prestamo
//3)Le mostraremos al cliente cuanto será el interés que tendra su préstamo
//5)Por último, le preguntaremos al cliente si desea confirmar su préstamo, y de acuerdo a lo que responda, aprobaremos su credito o lo despedimos

const nombre = prompt("Bienvenido, ¿Cómo te llamas? ")
let dineroPrestado = parseInt(prompt("¿Cuánto dinero estabas necesitando?")).toFixed(2)

function comenzarTramite() {
    alert("BIENVENIDO " + nombre)

    let continuar = confirm("Haz solicitado un préstamo de " + dineroPrestado + "\n ¿Quieres continuar con el trámite?")
    let interes = 25

    if (continuar === false) {
        alert("Nos vemos pronto")
    }
    else {
        mostrarLineaDePago();
    }
}

function mostrarLineaDePago() {

    let cuotas = dineroPrestado / 8;
    let resultado = cuotas
    let avanceDeCuotas = 1

    while (cuotas <= dineroPrestado) {

        console.log("Asi ira avanzando tu préstamo en el tiempo, en la cuota numero " + avanceDeCuotas + " habrás pagado " + cuotas)
        cuotas += resultado;
        avanceDeCuotas++;
    }

    alert("Felicidades " + nombre + ",ya termino de pagar su crédito")
}


