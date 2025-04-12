let texto = document.getElementById("parrafo").innerHTML;
alert(texto);
let tiulo = document.getElementById("titulo").innerHTML;
alert(titulo);

function cambiarTexto(){ 
    
 document.getElementById("parrafo").innerHTML = cambiarTexto;
}

function cambiarColor(){ 
   
 document.querySelector("p").style.color = "pink";
}

function cambiarTexto2(){ 
    
 document.getElementById("parrafo2").innerHTML = cambiarColor2;
}

function cambiarColor2(){ 
   
 document.getElementById("parrafo2").style.color="blue";
}

function quitar(){
    document.getElementById("titulo").style.display="none";
}

function fondo(){
    document.getElementById("body").style.backgroundColor = "fuchsia";
}
