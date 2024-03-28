
let textoIngresado = document.getElementById("textoIngresado");
let mensaje = document.getElementById("mensaje");

function encriptar(){
    let textoEncriptado = EncriptarF(textoIngresado.value)
    mensaje.value = textoEncriptado
    textoIngresado.value = "";
    mensaje.style.backgroundImage = "none";
}

function EncriptarF(stringEncriptada){

    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    let tieneMayusculas = /[A-ZÁÉÍÓÚ]/.test(stringEncriptada);
    let tieneAcentos = /[áéíóú]/.test(stringEncriptada);

    if (tieneMayusculas || tieneAcentos) {
        alert("Por favor, escriba solo con letras minúsculas y sin acentos.");
        return;
    }

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < codigo.length; i++){
        if(stringEncriptada.includes(codigo[i][0])){ 
            stringEncriptada = stringEncriptada.replaceAll(codigo[i][0], codigo[i][1])
        }

    }
    return stringEncriptada
}

function desencriptar(){
    let textoEncriptado = DesencriptarF(textoIngresado.value)
    mensaje.value = textoEncriptado
    textoIngresado.value = "";
    mensaje.style.backgroundImage = "none";
}

function DesencriptarF(stringDesencriptado){

    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i=0; i < codigo.length; i++){
        if(stringDesencriptado.includes(codigo[i][1])){ 
            stringDesencriptado = stringDesencriptado.replaceAll(codigo[i][1], codigo[i][0])
        }
    }
    return stringDesencriptado
}

function copiar() {
    let texto = document.getElementById("mensaje").value;
    navigator.clipboard.writeText(texto);
}