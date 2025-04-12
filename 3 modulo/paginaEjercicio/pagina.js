var nombre= prompt("ingresa tu nombre:");
var saludar= hola
function saludar(){
    alert("hola"+nombre)
}
saludar();

var titulo="ARTISTA"


function cambiarimagen1(){
    document.getElementById("imagen").src="billie 1.jpg";
}

function cambiarimagen2(){
    document.getElementById("imagen").src="billie.jpg";
}

function cambiarTexto(){ 
    
    document.getElementById("texto").innerHTML = "los libros son paz, tranquilidad, sueños y enseñanzas";
   }
   
   function cambiarColor(){ 
      
    document.querySelector("p").style.color = "red";
   }