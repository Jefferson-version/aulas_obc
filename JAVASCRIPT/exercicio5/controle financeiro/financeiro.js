let saldo = prompt("informe a quantidade de dinheiro inicial:");
saldo = parseFloat(saldo);
let opcao = "";

do {
  opcao = prompt(
    "saldo disponivel : R$" +
      saldo +
      "\n1. adicionar dinheiro" +
      "\n2.remover dinheiro" +
      "\n3.sair"
  );

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("informe quantos deseja adicionar"));
      break;
    case "2":
      saldo -= prompt("informe o valor a ser removido");
      break;
    case "3":
      alert("saindo......");
      break;
    default:
      alert("entrada invalida tente novamente");
  }
} while (opcao !== "3");
