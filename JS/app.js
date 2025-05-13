let numeroAleatorio;
numeroAleatorio = Math.floor(Math.random() * 50) + 1;

const game = () => {
  numeroAleatorio = Math.floor(Math.random() * 50) + 1;
  console.log(numeroAleatorio);
};

const formulario = document.querySelector(".miFormulario");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const adivinar = document.querySelector("#boton-num");
  if (parseInt(adivinar.value) === numeroAleatorio) {
    document.writeln("Ganaste");
  } else {
    document.writeln("Perdiste");
  }
});

const iniciarJuego = document.querySelector(".game");
