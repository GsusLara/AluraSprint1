let entrada = document.getElementById("codeSpace");
let cifrar = document.getElementById("bt1");
let descifrar = document.getElementById("bt2");
let salida = document.getElementById("contenidoSalida");

const encriptarlo = (data)=>{
    let datacifrada="";
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
    salida.innerHTML = "<p id='dataCifrada'>"+datacifrada+"</p>";
    entrada.value = "";
}
const desencriptarlo = (data)=>{
}


cifrar.onclick= () => encriptarlo(entrada.value)
descifrar.onclick= () => desencriptarlo(entrada.value)