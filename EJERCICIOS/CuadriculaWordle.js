let cuadricula = document.getElementById("cuadricula");
let intentos = 6;
let intentoActual = 0;
let filaActual = null;
let celdaActual = null;

function crearCuadricula() {
    for (let i = 0; i < intentos; i++) {
        let fila = document.createElement("div");
        fila.classList.add("fila");
        for (let j = 0; j < 5; j++) {
            let celda = document.createElement("div");
            celda.classList.add("celda");
            fila.appendChild(celda);
        }
        cuadricula.appendChild(fila);
    }
    filaActual = cuadricula.children[intentoActual];
    celdaActual = filaActual.children[0];
}

function manejarTeclado(event) {
    if (intentoActual < intentos) {
        if (event.key.length === 1 && event.key.match(/[a-zA-Z]/)) {
            if (celdaActual) {
                celdaActual.textContent = event.key.toUpperCase();
                celdaActual = filaActual.children[Array.from(filaActual.children).indexOf(celdaActual) + 1] || null;
            }
        } else if (event.key === "Enter") {
            // Aquí puedes agregar la lógica para verificar la palabra
            // Si es incorrecta, avanzar a la siguiente fila
            intentoActual++;
            if (intentoActual < intentos) {
                filaActual = cuadricula.children[intentoActual];
                celdaActual = filaActual.children[0];
            }
        } else if (event.key === "Backspace") {
            if (celdaActual) {
                celdaActual.textContent = "";
                celdaActual = filaActual.children[Array.from(filaActual.children).indexOf(celdaActual) - 1] || null;
            }
        }
    }
}

crearCuadricula();
document.addEventListener("keydown", manejarTeclado);