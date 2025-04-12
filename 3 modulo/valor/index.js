function mostrarNombre(){
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;

    alert("hola" + nombre + "tu edad es:" + edad + "tu telefono es:" + telefono);
    
    document.getElementById("parrafo").innerText = "hola" + nombre + "tu edad es:" + edad + "tu telefono es:" + telefono;
}

