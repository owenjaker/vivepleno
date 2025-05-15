function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const alturaCm = parseFloat(document.getElementById("altura").value);
    const resultado = document.querySelector(".resultado");
    const audio = document.getElementById("oyegela");
    const imagen = document.getElementById("alertaimg");

    const textopesobajo = document.getElementById("pesobajo");
     const textopesonormal = document.getElementById("pesonormal");
      const textosobrepeso = document.getElementById("sobrepeso");
       const textooyegelda = document.getElementById("oyegelda");

    if (isNaN(peso) || isNaN(alturaCm) || peso <= 0 || alturaCm <= 0) {
        resultado.textContent = "Por favor, introduce valores válidos para peso y altura.";
        return;
    }

    const alturaM = alturaCm / 100;
    const imc = peso / (alturaM * alturaM);
    let mensaje = `Tu IMC es: ${imc.toFixed(1)} - `;

        // Ocultar todos los textos primero
        textopesobajo.style.display = "none";
        textopesonormal.style.display = "none";
        textosobrepeso.style.display = "none";
        textooyegelda.style.display = "none";


    if (imc < 18.5) {
        mensaje += "Bajo peso";
        textopesobajo.style.display = "block";
    } else if (imc >= 18.5 && imc < 24.9) {
        mensaje += "Peso normal";
        textopesonormal.style.display = "block";
    } else if (imc >= 25 && imc < 29.9) {
        mensaje += "Sobrepeso";
         textosobrepeso.style.display = "block";
    } else {
        mensaje += "oye gelda, escúchate esto";
         textooyegelda.style.display = "block";
    }

    resultado.textContent = mensaje;

    // Mostrar imagen y reproducir audio si IMC > 30
    if (imc > 30) {
        audio.play();
        imagen.style.display = "block";
        imagen.classList.add("girar");

    } else {
        audio.pause();
        audio.currentTime = 0;
        imagen.style.display = "none";
        imagen.classList.remove("girar");
    }

    // Cuando termine el audio, ocultar la imagen
    audio.onended = () => {
        imagen.style.display = "none";
        imagen.classList.remove("girar");

    };
}

