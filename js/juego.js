var btnIniciar = document.querySelector(".btn-iniciar");
var palabraContenedor = document.getElementById("caja-ahorcado-contenedor");
var letraUsadaElemento = document.getElementById("caja-ahorcado-letrasUsadas");

let palabraElegida;
let letrasUsadas;
let errores;
let aciertos;

function agregarLetra(letra){
    const letterElement = document.createElement('span');
    letterElement.innerHTML = letra.toUpperCase();
    letterElement.classList.add("letraUsada");
    letraUsadaElemento.appendChild(letterElement);
}

function palabraIncorrecta(){
    console.log("Paso por la palabraIncorrecta");
    errores++;
    dibujoJuego(errores);
    if(errores === 7) finJuegoP();
}

function finJuegoG(){
    document.removeEventListener('keydown', letraEvento);
    alert("GANASTE!!!");
    //startButton.style.display = 'block';
}

function finJuegoP(){
    document.removeEventListener('keydown', letraEvento);
    alert("PERDISTE :( ");
    //startButton.style.display = 'block';
}

/**/

function palabraCorrecta(letra){
    const { children } = palabraContenedor;
    for (let i = 0; i < children.length; i++) {
        
        if (children[i].innerHTML === letra) {
            children[i].classList.toggle("hidden");
            aciertos++;
        }
    }
    if(aciertos === palabraElegida.length) finJuegoG();
}

function entradaLetra(letra) {
    if (palabraElegida.includes(letra)) {
        palabraCorrecta(letra);
    } else {
        palabraIncorrecta();
    }
    agregarLetra(letra);
    letrasUsadas.push(letra);

}

function letraEvento(event){ //Se obtiene el evento del teclado
    
    let nuevaLetra = event.key.toUpperCase(); //Aca se captura ese evento y se transforma en Mayuscula
    if(nuevaLetra.match(/^[a-zñ]$/i) && !letrasUsadas.includes(nuevaLetra)) {
        entradaLetra(nuevaLetra);
        console.log(nuevaLetra);
    };
}

function pintarPalabra(){
    palabraElegida.forEach(letra => {
        const letraElemento = document.createElement('span');
        letraElemento.innerHTML = letra.toUpperCase();
        letraElemento.classList.add("letraAhorcado");
        letraElemento.classList.add("hidden");
        palabraContenedor.appendChild(letraElemento);
        
    });
}

function seleccionarPalabraAleatoria(){
    let palabra = palabras[Math.floor((Math.random() * palabras.length))].toUpperCase();
    palabraElegida = palabra.split(''); //Esto separa cada letra, osea que quede una letra espacio otra letra
}

function iniciarJuego(){
    document.getElementById("caja-iniciar").style.display = "none";
    document.getElementById("caja-ingresar").style.display = "none";
    document.getElementById("caja-ahorcado").style.display = "block";

    letrasUsadas = [];
    errores = 0;
    aciertos = 0;
    palabraContenedor.innerHTML = "";
    letraUsadaElemento.innerHTML = "";
    seleccionarPalabraAleatoria();
    pintarPalabra();
    document.addEventListener('keydown', letraEvento);
    console.log(aciertos);
}

btnIniciar.addEventListener("click", iniciarJuego);

var btnNuevoJuego = document.getElementById("btn-nuevoJuego");
btnNuevoJuego.addEventListener("click", function(){
    //Solucionar Bug botonNuevoJuego
});


var btnSalir = document.getElementById("btn-salir");
btnSalir.addEventListener("click", function(){
    location.reload();
});




