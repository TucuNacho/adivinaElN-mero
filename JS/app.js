let numeroAleatorio;
numeroAleatorio = Math.floor(Math.random() * 50) + 1;

const game = () => {
  numeroAleatorio = Math.floor(Math.random() * 50) + 1;
  console.log(numeroAleatorio);
};

const formulario = document.querySelector(".miFormulario");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const adivinar = parseInt(document.querySelector("#boton-num").value);
  if (parseInt(adivinar) === numeroAleatorio) {
    alert("Ganaste");
  } else if (adivinar > numeroAleatorio) {
    alert("Un poco menos 😆");
  } else {
    alert("Un poco mas 😜");
  }
  formulario.reset();
});

const iniciarJuego = document.querySelector(".game");
