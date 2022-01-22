
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

// Encriptacion primer boton
var botonEncriptar = document.querySelector("#btn-encriptar");

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var texto = document.querySelector("#input-texto").value;
    verificarTexto(texto);
    var textoEncriptado = encriptar(texto);
    document.querySelector("#msg").value=textoEncriptado;
    document.querySelector("#input-texto").value="";
 
});

//Desencriptacion segundo boton
var botonDesencriptar = document.querySelector("#btn-desencriptar");

botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var texto = document.querySelector("#input-texto").value;
    var textoDesencriptado = desencriptar(texto);
    document.querySelector("#msg").value=textoDesencriptado;
    document.querySelector("#input-texto").value="";
 
});

//Copia el texto con el boton
var botonCopiar = document.querySelector("#btn-copy");

botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    var texto = document.querySelector("#msg").value;
    //texto.select(); 
    document.execCommand("copy");
});

function encriptar(texto){
    var textoEncriptado = texto.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
    return textoEncriptado;   
 }

 function verificarTexto(texto){
    if (texto.length==0){
        alert("Ingrese un mensaje.");
        document.querySelector("#input-texto").value="";
        return;
        //break;
    } else{    
        for(var i=0;i<texto.length;i++){
            var textoConk= texto.charCodeAt(i);
            if(textoConk<96 || textoConk>122 ){
                if(textoConk!=32){
                    alert("No se permite texto en mayuscula, caracteres especiales o numeros. Ingrese un nuevo texto.");
                    return false;
                }
            }                              
                           
        }
    }    
};

function desencriptar(texto){
    var textoDesencriptado = texto.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
   return textoDesencriptado;
}



