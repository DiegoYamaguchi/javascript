
let interes = 2;
let interesCredito = 4;
let respuesta;

function interesCompuesto(capital, interes, tiempo) {
    let r = interes / 100;
    return capital * Math.pow(1 + r, tiempo);
}

function respuestas(respuesta) {
    while (respuesta !== "si" && respuesta !== "no") {
        respuesta = prompt("Responda con si/no").toLowerCase();
    }
    return respuesta;
}

respuesta = prompt("¿Quiere invertir en nuestro banco? si/no").toLowerCase();
respuesta = respuestas(respuesta);

if (respuesta === "si") {
    alert("El porcentaje de ganancia es del 2%");

    let capital = parseFloat(prompt("Ingresa tu capital"));

    while (isNaN(capital)) {
        capital = parseFloat(prompt("Ingresa un capital válido"));
    }

    let tiempo = parseInt(prompt("Ingrese cantidad de periodos (años) con un máximo de 10"));

    while (tiempo <= 0 || tiempo > 10 || isNaN(tiempo)) {
        tiempo = parseInt(prompt("Ingresa los años, máximo 10"));
    }

    let total = capital;
    let interesGanadoTotal = 0;

    for (let i = 1; i <= tiempo; i++) {
        let interesGanado = interesCompuesto(capital, interes, i) - capital;
        interesGanadoTotal = interesGanado;

        alert(`Periodo ${i}: Total de intereses ganados: $${interesGanado.toFixed(2)}`);
    }

    total += interesGanadoTotal;

    alert(`Total ganado: $${total.toFixed(2)}`);
} else if (respuesta === "no") {
    respuesta = prompt("¿Desea simular un crédito? si/no").toLowerCase();
    respuesta = respuestas(respuesta);

    if (respuesta === "si") {
        let sueldo = parseFloat(prompt("¿Cuál es su sueldo?"));
        let credito = (sueldo * 3.25).toFixed();
        alert("El máximo que podemos darte es de $" + credito);

        let tiempo = prompt("¿En cuántos meses quieres obtener el crédito? Máximo 36");

        while (tiempo <= 0 || tiempo > 36 || isNaN(tiempo)) {
            tiempo = parseFloat(prompt("Ingresa los meses, máximo 36"));
        }

        tiempo = (tiempo / 12).toFixed(1);

        let interesPorPagar = interesCompuesto(credito, interesCredito, tiempo);

        alert("Interés por pagar al final del plazo: $" + interesPorPagar.toFixed(2));

        alert("Valor cuota: " + (interesPorPagar/(tiempo*12)).toFixed())
    }
}





