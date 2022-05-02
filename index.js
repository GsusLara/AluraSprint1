let entrada = document.getElementById("codeSpace");
let cifrar = document.getElementById("bt1");
let descifrar = document.getElementById("bt2");
let salida = document.getElementById("contenidoSalida");
let botonCopiar = document.createElement('button');
botonCopiar.id = 'btnCopy';
botonCopiar.className = 'btnopciones';
botonCopiar.innerText= 'Copiar';

const validar = (opcion, data) => {
  if (data.length < 1) {
    alert("ingresa el codigo a cifrar o descifrar!")
  } else {
    switch (opcion) {
      case 'bt1':
        encriptarlo(data);
        break;
      case 'bt2':
        desencriptarlo(data);
        break;
    }
  }
}

const encriptarlo = (data) => {
  let datacifrada = "";
  for (let i = 0; i < data.length; i++) {
    let letra = data[i];
    switch (letra) {
      case 'a':
        letra = "ai"
        break;
      case 'e':
        letra = "enter"
        break;
      case 'i':
        letra = "imes"
        break;
      case 'o':
        letra = "ober"
        break;
      case 'u':
        letra = "ufat"
        break;
    }
    datacifrada += letra;
  }
  salida.innerHTML = "<p id='dataCifrada'>" + datacifrada + "</p>"
  salida.appendChild(botonCopiar);
  
  entrada.value = "";
}
const desencriptarlo = (data) => {
  desencriptado = data.replace(/ai/g, "a");
  desencriptado = desencriptado.replace(/enter/g, "e");
  desencriptado = desencriptado.replace(/imes/g, "i");
  desencriptado = desencriptado.replace(/ober/g, "o");
  desencriptado = desencriptado.replace(/ufat/g, "u");
  salida.innerHTML = "<p id='dataCifrada'>" + desencriptado + "</p>";
  salida.appendChild(botonCopiar);
  entrada.value = "";
}
cifrar.onclick = () => validar("bt1", entrada.value);
descifrar.onclick = () => validar("bt2", entrada.value);
botonCopiar.addEventListener("click", function() {
  var range = document.createRange(),
      selection = window.getSelection();
  selection.removeAllRanges();
  range.selectNodeContents(dataCifrada);
  selection.addRange(range);
  document.execCommand('copy');
  selection.removeAllRanges();
  salida.innerHTML = '<p id="dataCifrada" style="color:green; font-weight: bold; margin-top:0;">Codigo copiado!</p>';
}, false);