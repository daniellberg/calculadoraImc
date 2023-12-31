const btnCalcula = document.getElementById("btnCalc");
const btnLimpa = document.getElementById("btnClear");

btnCalcula.addEventListener("click", clicaBtn);
btnLimpa.addEventListener("click", limpaBtn);

const categoriasImc = [
  "abaixo do peso",
  "com o peso normal",
  "com pré-obesidade",
  "com obesidade Grau 1",
  "com obesidade Grau 2",
  "com obesidade Grau 3",
];

function clicaBtn() {
  const peso = document.getElementById("pesoF");
  const altura = document.getElementById("alturaF");

  const imc = (peso.value / Math.pow(altura.value, 2)).toFixed(1);
  document.getElementById("imcResult").textContent = imc;

  $("#imcResult").text(imc);
  $("#resultado").addClass("resultadoDepois");

  if (imc < 18.5) {
    $("#categoriaImc").text(categoriasImc[0]);
  } else if (imc >= 18.5 && imc <= 24.9) {
    $("#categoriaImc").text(categoriasImc[1]);
  } else if (imc > 24.9 && imc <= 29.9) {
    $("#categoriaImc").text(categoriasImc[2]);
  } else if (imc > 29.9 && imc <= 34.9) {
    $("#categoriaImc").text(categoriasImc[3]);
  } else if (imc > 34.9 && imc <= 39.9) {
    $("#categoriaImc").text(categoriasImc[4]);
  } else if (imc != NaN && imc > 39.9 && imc <= Math.infinity) {
    $("#categoriaImc").text(categoriasImc[5]);
  } else {
    errorAlert();
  }
}

function limpaBtn() {
  $("#resultado").removeClass("resultadoDepois");
  $("#imcResult").text("");
}

function errorAlert() {
  //utiliza sweetAlert2
  let timerInterval;
  Swal.fire({
    icon: "error",
    title: "Alguma coisa deu errado!",
    html: "Esta página fechará automaticamente em <b></b> milisegundos. Por favor atualize a página!",
    timer: 3500,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });

  //apaga erros
  $("p").text("");
  $("#resultado").text("Por favor atualize a página e tente novamente!");
}

//precisa corrigir, pq depois que dá erro só funciona atualizando a pagina
