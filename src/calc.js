// se altura for digitada em centimetro converte para metros
function converteAltura(altura) {
  if (altura >= 100) {
    return (altura / 100);
  } else {
    return altura;
  }
}

//Efetua o Calculo do IMC
function CalcularIMC(altura, peso) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

//Cria a msg a ser exibida na tela
function indiceImc(imc) {
  console.log('estou no switch')
  var text;
  let nivelIMC = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau I', 'Obesidade Grau II', 'Obesidade Grau III']

  switch (true) {
    case (imc < 18.5):
      text = [`  Seu imc é ${imc} - ${nivelIMC[0]}`, '#f5d363'];
      break;
    case (18.5 <= imc && imc <= 25):
      text = [`  Seu imc é ${imc} - ${nivelIMC[1]}`, '#94eb89'];
      break;
    case (25 < imc && imc < 30):
      text = [`  Seu imc é ${imc} - ${nivelIMC[2]}`, '#f5d363'];
      break;
    case (30 <= imc && imc < 35):
      text = [`  Seu imc é ${imc} - ${nivelIMC[3]}`, '#fe6969'];
      break;
    case (35 <= imc && imc < 40):
      text = [`  Seu imc é ${imc} - ${nivelIMC[4]}`, '#ff3333'];
      break;
    case (imc >= 40):
      text = [`  Seu imc é ${imc} - ${nivelIMC[5]}`, '#ff3333'];
      break;
  }

  return text; //retorna um array com mensagem a ser exibida na tela e cor.
}


//Funçao que cria paragrafo e exibit o resultado em tela.
function mostrarValor(msg, color) {
  //'use strict';
  const resultado = document.querySelector('#resultado');
  const Paragrafo = CriarParagrafo();
  resultado.innerHTML = ""; // Limpa a div resultado para impressão de um novo paragrafo.
  Paragrafo.innerHTML = msg;
  resultado.appendChild(Paragrafo);
  resultado.style.backgroundColor = color;
  Paragrafo.style.textAlign = "center";
}

function CriarParagrafo() {
  const p = document.createElement('p');
  return p;
}

const form = document.querySelector('#formulario')
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const altura = converteAltura(document.getElementById("altura").value);
  const peso = document.getElementById("peso").value;
  var msg = indiceImc(CalcularIMC(altura, peso));

  mostrarValor(msg[0], msg[1]);
})
