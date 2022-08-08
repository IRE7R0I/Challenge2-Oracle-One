var btnAgregarPalabra = document.querySelector(".btn-agregarPalabra");

document.getElementById("caja-ingresar").style.display = "none";
document.getElementById("caja-ahorcado").style.display = "none";

btnAgregarPalabra.addEventListener("click", function(event) {
    document.getElementById("caja-iniciar").style.display = "none";
    document.getElementById("caja-ingresar").style.display = "block"
});

var btnAgregar = document.querySelector(".caja-ingresar-btn1");

btnAgregar.addEventListener("click", function(event){
    var palabraNueva = document.querySelector(".textIngresar").value; //textArea.value
    console.log(typeof palabraNueva);
    console.log("La palabra es: "+palabraNueva+", y se ha guardado con exito");
    document.querySelector(".textIngresar").value = "";
    alert("Se ha guardado con exito la palabra -> "+palabraNueva);
    console.log(palabras.length);
    palabras.push(palabraNueva);
    console.log(palabras.length);
});

var btnCancelar = document.querySelector(".caja-ingresar-btn2");

btnCancelar.addEventListener("click", function(event){
    document.getElementById("caja-iniciar").style.display = "block";
    document.getElementById("caja-ingresar").style.display = "none"
});