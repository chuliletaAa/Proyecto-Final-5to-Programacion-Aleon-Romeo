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

hoyos[numeroRandom] //accedo a una de las etiquetas hoyo aleatoriamente, debo generar numeroRandom con math.random
let numeroRandom=Math.floor(Math.random()*10); //genero un numero del 1 al 9 aleatoriamente y lo almaceno en numeroRandom para posteriormente utilizarlo


hoyos[numeroRandom].childNodes[0].style.display = "none" // agarra la etiqueta hoyo random, busca su primer hijo y lo oculta
hoyos[numeroRandom].childNodes[0].style.display = "block" 


