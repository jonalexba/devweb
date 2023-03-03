console.log("Hola js embebido");

let n1 = 3;
let n2 = 1;

console.log(n1+n2);

document.getElementById("boton").onclick = function () {
    console.log("capturamos evento click");
    
    document.getElementById("demo").innerHTML = "Hello";

//    document.getElementById('demo').innerHTML=Date();
} 

document.getElementById("botonHora").onclick = function () {
    console.log("capturamos evento click");
    document.getElementById('hora').innerHTML=Date();
} 

/**
document.addEventListener('click', function() {
    console.log("Hola desde EventListener");
    document.getElementById("demo").innerHTML = "prueba";
});

document.getElementById("boton").addEventListener('click', function() {
    console.log("Hola desde EventListener");
    document.getElementById("demo").innerHTML = "prueba";
});
*/

document.getElementById("botonColor").addEventListener('click', function() {
   
    document.body.style.backgroundColor = 'blue';
});

document.getElementById("botonColorBack").addEventListener('click', function() {
   
    document.body.style.backgroundColor = 'purple';
});

document.getElementById("botonOcultar").addEventListener('click', function() {
   
    document.getElementById('ocultar').style.display = 'none';
    console.log("desaparecio el texto");
});

document.getElementsByClassName('parrafo').{
    console.log("TBD");
};