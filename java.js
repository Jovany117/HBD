document.addEventListener("DOMContentLoaded", function () {
    const flames = document.querySelectorAll(".flame, .flame2, .flame3");
    const text = document.querySelector(".text");
    const audio = document.getElementById("birthday-audio");
  
    flames.forEach(function (flame) {
      flame.addEventListener("click", function () {
        // Apagar las flamas
        flames.forEach(function (f) {
          f.style.opacity = 0;
        });
  
        // Mostrar el texto
        text.style.top = "-90px";
        text.style.opacity = 1;
  
        // Reproducir el audio
        audio.play().catch(function (error) {
          console.log("Reproducción automática bloqueada por el navegador. Se necesita interacción.");
        });
      });
    });
  });
  