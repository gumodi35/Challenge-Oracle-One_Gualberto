// creamos la funcion para encriptar
function cifrar() {
    // declaramos las variables
    var texto = document.getElementById("inputtexto").ariaValueMax.toLocaleLowerCase();
    //i es para cambiar masyusculas y minisculas
    // g cambia toda la linea
    // m cambia multiples lineas
    var textoCifrado = texto.replace(/e/igm,"enter");
    var textoCifrado = textoCifrado.replace(/o/igm,"ober");
    var textoCifrado = textoCifrado.replace(/i/igm, "imes");
    var textoCifrado = textoCifrado.replace(/a/igm,"ai");
    var textoCifrado = textoCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = textoCifrado;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
}
