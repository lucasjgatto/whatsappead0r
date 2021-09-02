let inputNumeros = document.querySelector("#numeros");
let inputSeparador = document.querySelector("#separador");
let inputMensaje = document.querySelector("#mensaje");

let listaLinks = document.querySelector("#links");

let btnGenerar = document.querySelector("#generar")
let btnResetear = document.querySelector("#resetear")

const urlUno = "https://wa.me/549"
const urlDos = "?text="

function resetear() {
    listaLinks.innerHTML = ""
}

btnGenerar.onclick = function() {
    let arrayNumeros = inputNumeros.value.split(inputSeparador.value)
    if (arrayNumeros.length > 1) {
        resetear()
        for (const numero of arrayNumeros) {
            console.log(numero.length)
            if (numero.length > 0) {
                listaLinks.innerHTML += `<button class="linkLista btn btn-dark" id="${numero}">
            <a target="_blank" href="${urlUno + numero + urlDos + encodeURIComponent(inputMensaje.value)}">${numero}</a>
            </button>`
            }
            let linkLista = document.querySelectorAll(".linkLista")
            let arrayLista = Array.from(linkLista)
            for (const boton of arrayLista) {
                boton.onclick = function() {
                    this.style.background = "navy"
                }
            }
        }
    }
}
btnResetear.onclick = function() {
    resetear()
    inputNumeros.value = ""
    inputMensaje.value = ""
}