let hoyos = [
    document.getElementById("hoyo0"),
    document.getElementById("hoyo1"),
    document.getElementById("hoyo2"),
    document.getElementById("hoyo3"),
    document.getElementById("hoyo4"),
    document.getElementById("hoyo5"),
    document.getElementById("hoyo6"),
    document.getElementById("hoyo7"),
    document.getElementById("hoyo8")
]
const divContador = document.getElementById("divContador");
let hoyoElegido = null;
let generaRandom = 0

function genera() {

    generaRandom = Math.floor(Math.random() * hoyos.length);//genero un numero del 1 al 9 aleatoriamente y lo almaceno en generaRandom para posteriormente utilizarlo
    hoyoElegido = hoyos[generaRandom]//accedo a una de las etiquetas hoyo aleatoriamente, debo generar numeroRandom con math.random

    hoyoElegido.style.backgroundImage = "url('./imagenes/topo.jpg')";
}

hoyos.forEach((hoyo) => {
   
    hoyo.addEventListener("click", golpeTopo)
})

genera()

let contador = 0
function golpeTopo() {
    if ("click"==hoyoElegido){ // preguntar (if) si el hoyo clickeado es == al hoyo elegido por la maquina ????????

    contador++
    divContador.innerHTML = "puntos: " + contador;
    hoyoElegido.style.backgroundImage = "url('./imagenes/hoyo.png')"; // agarra la etiqueta hoyo random y lo oculta

    
    }
}
