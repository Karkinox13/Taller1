
function calcularCostoEntrada() {
    const edadInput = document.getElementById('edadEntrada');
    const resultado = document.getElementById('resultadoProblema1');

    const edad = Number(edadInput.value);

    if (isNaN(edad) || edad <= 0) {
        resultado.textContent = 'Por favor, ingresa una edad válida mayor que 0.';
        return;
    }

    let mensaje = '';

    if (edad > 1 && edad < 4) {
        mensaje = 'La entrada es gratis.';
    } else if (edad >= 4 && edad <= 8) {
        mensaje = 'La entrada cuesta $2.';
    } else if (edad >= 9 && edad <= 16) {
        mensaje = 'La entrada cuesta $5.';
    } else if (edad >= 17 && edad <= 35) {
        mensaje = 'La entrada cuesta $7.';
    } else if (edad > 35) {
        mensaje = 'La entrada cuesta $10.';
    } else {
        mensaje = 'No hay tarifa definida para esa edad.';
    }

    resultado.textContent = mensaje;
}

function determinarCategoria() {
    const codigoInput = document.getElementById('codigoEmpleado');
    const resultado = document.getElementById('resultadoProblema2');

    const codigo = codigoInput.value.trim();

    if (codigo.length !== 3 || isNaN(Number(codigo))) {
        resultado.textContent = 'Debes ingresar un código numérico de exactamente 3 dígitos.';
        return;
    }

    let cantidadPares = 0;

    for (let i = 0; i < codigo.length; i++) {
        const digito = Number(codigo[i]);
        if (digito % 2 === 0) {
            cantidadPares++;
        }
    }

    let categoria = '';

    if (cantidadPares === 3) {
        categoria = 'Director General';
    } else if (cantidadPares === 2) {
        categoria = 'Directivo';
    } else if (cantidadPares === 1) {
        categoria = 'Staff';
    } else {
        categoria = 'Seguridad';
    }

    resultado.textContent = 'Categoría: ' + categoria;
}

function calcularPendiente() {
    const x1 = Number(document.getElementById('x1').value);
    const y1 = Number(document.getElementById('y1').value);
    const x2 = Number(document.getElementById('x2').value);
    const y2 = Number(document.getElementById('y2').value);

    const resultado = document.getElementById('resultadoProblema3');

    if (
        isNaN(x1) || isNaN(y1) ||
        isNaN(x2) || isNaN(y2)
    ) {
        resultado.textContent = 'Por favor, ingresa valores numéricos válidos para todos los campos.';
        return;
    }

    const denominador = x2 - x1;

    if (denominador === 0) {
        resultado.textContent = 'La recta es vertical, la pendiente está indefinida.';
        return;
    }

    const pendiente = (y2 - y1) / denominador;

    resultado.textContent = 'La pendiente de la recta es: m = ' + pendiente;
}

function determinarClima() {
    const temperatura = Number(document.getElementById('temperatura').value);
    const humedad = Number(document.getElementById('humedad').value);
    const resultado = document.getElementById('resultadoProblema4');

    if (isNaN(temperatura) || isNaN(humedad)) {
        resultado.textContent = 'Por favor, ingresa valores numéricos para temperatura y humedad.';
        return;
    }

    let mensaje = '';

    if (temperatura < 10) {
        mensaje = 'Clima frío.';
    } else if (temperatura >= 10 && temperatura <= 25 && humedad < 60) {
        mensaje = 'Clima templado y seco.';
    } else if (temperatura >= 10 && temperatura <= 25 && humedad >= 60) {
        mensaje = 'Clima templado y húmedo.';
    } else if (temperatura >= 26 && temperatura <= 35) {
        mensaje = 'Clima cálido.';
    } else if (temperatura > 35) {
        mensaje = 'Clima caluroso extremo, mantente hidratado.';
    } else {
        mensaje = 'Valores fuera de rango, verifica los datos.';
    }

    resultado.textContent = mensaje;
}
