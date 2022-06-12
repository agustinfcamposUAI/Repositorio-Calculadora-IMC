
window.onload = iniciar;

function iniciar(){

    //con esto oculto la tabla al principio
    div = document.getElementById('tabla');
    div.style.display = 'none';
    
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular);
   
}

function clickBtnCalcular(){
var txtPeso = document.getElementById("txtPeso");
var peso= parseFloat(txtPeso.value);

var txtAltura = document.getElementById("txtAltura");
var altura = parseFloat(txtAltura.value);

// validacion de si los valores de los campos son numeros 
if(isNaN(altura)){
    alert("La altura no es un numero");
}
if(isNaN(peso)){
    alert("El peso no es un numero");
}
    
// validacion de que la altura este en centimetros y dentro convierto los centimetros a metros
if(Number.isInteger(altura)){
    var alturaEnMetros = (altura / 100);
 }
 else{
     alert("La altura debe estar en cm");
 }

//validacion de los pesos y alturas
if(peso > 544 || peso < 2){
    alert("Su peso no esta permitido en esta calculadora, reviselo por favor");
    return 0;
}
if(altura > 272 || altura < 10){
    alert("Su altura no esta permitida en esta calculadora, revisela por favor");
    return 0;
}

    
var imc = peso / (alturaEnMetros * alturaEnMetros);

if(imc < 18.5){
//con la funcion toFixed(x) defino cuantos decimales quiero en el resultado
//con document.getElementById(nombre del id).value = una variable hago que ese resultado se muestre en el input del resultado
    document.getElementById("txtResultado").value = imc.toFixed(2) + " " + "Usted esta por debajo del peso ideal";

    //con esto hago que se muestre la tabla al hacer click
    div = document.getElementById('tabla');
    tabla1 = '<tr id="pesoInferior" class="table-warning"><td>Peso inferior al normal</td><td>Menos del 18.5</td></tr>';
    document.getElementById("tableResultado").innerHTML = tabla1;
    div.style.display = '';
}
if(imc >= 18.5 && imc < 25){
//con la funcion toFixed(x) defino cuantos decimales quiero en el resultado
//con document.getElementById(nombre del id).value = una variable hago que ese resultado se muestre en el input del resultado
document.getElementById("txtResultado").value = imc.toFixed(2) + " " + "Usted esta por debajo del peso ideal";

//con esto hago que se muestre la tabla al hacer click
div = document.getElementById('tabla');
tabla2 = ' <tr id="normal" class="table-success"><td>Normal</td><td>18.5-24.9</td></tr>';
document.getElementById("tableResultado").innerHTML = tabla2;
div.style.display = '';
}
if(imc >= 25 && imc < 30){
//con la funcion toFixed(x) defino cuantos decimales quiero en el resultado
//con document.getElementById(nombre del id).value = una variable hago que ese resultado se muestre en el input del resultado
document.getElementById("txtResultado").value = imc.toFixed(2) + " " + "Usted esta por encima del peso ideal";

//con esto hago que se muestre la tabla al hacer click
div = document.getElementById('tabla');
tabla3 = ' <tr id="pesoSuperior" class="table-warning"><td>Peso superior al normal</td><td>25.0-29.9</td></tr>';
document.getElementById("tableResultado").innerHTML = tabla3;
div.style.display = '';
   
}
if(imc >= 30){
//con la funcion toFixed(x) defino cuantos decimales quiero en el resultado
//con document.getElementById(nombre del id).value = una variable hago que ese resultado se muestre en el input del resultado
document.getElementById("txtResultado").value = imc.toFixed(2) + " " + "Usted tiene Obesidad";

//con esto hago que se muestre la tabla al hacer click
div = document.getElementById('tabla');
tabla4 = '<tr id="obesidad" class="table-danger"><td>Obesidad</td><td>Mas de 30.0</td></tr>';
document.getElementById("tableResultado").innerHTML = tabla4;
div.style.display = '';
}

}
