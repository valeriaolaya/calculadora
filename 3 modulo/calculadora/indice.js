function mostrarNombre(){
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value; 
    var cedula = document.getElementById("cedula").value; 
    var peso = document.getElementById("peso").value; 
    var altura = document.getElementById("altura").value; 


    alert(" hola " + nombre + " tu edad es: " + edad + " tu telefono es: " + telefono + " tu cedula es: " + cedula + " tu peso es: " + peso + " tu altura es" + altura);
    
    document.getElementById("parrafo").innerText = "hola" + nombre + "tu edad es:" + edad + "tu telefono es:" + telefono + "tu cedula es: " + cedula + "tu peso es: " + peso + "tu altura es" + altura;
}

function limpiarInformacion(){
    nombre.value="";
    edad.value="";
    telefono.value="";
    cedula.value="";
    peso.value="";
    altura.value="";
}
