const numero = prompt(
  "olá eu sou o robo da tabuada! \n" +
    "informe o numero para qual deseja obter a tabuada : "
);
let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado += " -> " + numero + " * " + fator + " = " + numero * fator + "\n";
}

alert("resultado da tabuada de " + numero + ":\n\n" + resultado);
