document.getElementById('sumar').addEventListener('click', function(){
    let numA = (document.getElementById('num1').value);
    console.log('El num1 es ' + numA);
    let numB = (document.getElementById('num2').value);
    console.log('El num2 es ' + numB);
    let resultado = sumar((numA), (numB));
    console.log('El resultado de la suma es ' + resultado);

    document.getElementById('resultado').innerHTML = resultado;

    document.getElementById('contenedorResultado').style.display = 'block';    
});

function sumar(a, b) {
    return parseInt(a)+parseInt(b);
}