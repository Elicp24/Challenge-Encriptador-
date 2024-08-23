const textArea = document.querySelector(".text-area-input");
const mensaje = document.querySelector(".texto-resultado");
const muñeco = document.querySelector(".muneco");


function btncopiar() {
    const textoEncriptado = document.querySelector(".texto-resultado");
    //const textoCopiado =mensaje.textContent
    navigator.clipboard.writeText(textoEncriptado.textContent).then(() => {
        alert("Texto copiado al portapapeles");
    })

    .catch(err => {
        // Maneja el error (opcional)
        console.error("Error al copiar al portapapeles:", err);
      });
}


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){   
    const textArea = document.querySelector(".text-area-input");
    const textoIngresado = textArea.value;  
    const textoEncriptado = encriptar(textArea.value);
    mensaje.textContent = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    muneco.style.display = "none";
}

function encriptar(stringEncriptada){



let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
stringEncriptada = stringEncriptada.toLowerCase();

for(let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes (matrizCodigo[i][0])) {
       stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }

   
}
return stringEncriptada

}

function btnDesencriptar(){     
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.textContent = textoDesencriptado;
    textArea.value = "";
   muneco.style.display = "block";
      
    
}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes (matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    
    }
    return stringDesencriptada
    
    }


