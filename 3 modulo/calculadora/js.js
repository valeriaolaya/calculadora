var pantalla= document.getElementById("pantalla");
function mostrar(valor){
    pantalla.value+=valor;
}

function limpiar(){
    pantalla.value = "";
}

function calcular(){
    pantalla.value = eval(pantalla.value);
    if(pantalla.value <0){
        alert("el resultado es negativo");
    }
    else if(pantalla.value == 0){
        alert("el resultado es cero");
    }
    else{
        alert("el resultado es positivo");
    }
}
