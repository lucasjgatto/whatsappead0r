let inputNumeros = document.querySelector("#numeros");
let inputSeparador = document.querySelector("#separador");
let inputMensaje = document.querySelector("#mensaje");

let listaLinks = document.querySelector("#links");

let botonGenerar = document.querySelector("#generar")
let botonResetear = document.querySelector("#resetear")

// const linkUno = "https://api.whatsapp.com/send/?phone=54"
const linkUno = "https://wa.me/549"
const linkDos = "?text="
    // const linkTres = "&app_absent=0"

let wN = 1

function resetear() {
    listaLinks.innerHTML = ""
}

botonGenerar.onclick = function() {
    // console.log(inputNumeros.value.split(inputSeparador.value))

    let arrayNumeros = inputNumeros.value.split(inputSeparador.value)
    if (arrayNumeros.length > 1) {
        resetear()
        for (const numero of arrayNumeros) {
            // console.log(linkUno + numero + linkDos + inputMensaje.value + linkTres)
            console.log(numero.length)
            if (numero.length > 0) {
                listaLinks.innerHTML += `<button class="linkLista btn btn-dark" id="${numero}">
            <a target="_blank" href="${linkUno + numero + linkDos + encodeURIComponent(inputMensaje.value)}">${numero}</a>
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

botonResetear.onclick = function() {
    resetear()
    inputNumeros.value = ""
    inputMensaje.value = ""
}