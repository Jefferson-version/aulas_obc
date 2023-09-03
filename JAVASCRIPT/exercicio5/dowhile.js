let opcao = "";

do {
  opcao = prompt(
    "seja bem vindo (a) \n" +
      "\nescolha uma das opções abaixo:" +
      "\n1.opção um" +
      "\n2.opção dois" +
      "\n3.opção tres" +
      "\n4.opção quatro" +
      "\n5.encerrar"
  );

  switch (opcao) {
    case "1":
      alert("voce escolheu a opção 1");
      break;
    case "1":
      alert("voce escolheu a opção 1");
      break;
    case "2":
      alert("voce escolheu a opção 2");
      break;
    case "3":
      alert("voce escolheu a opção 3");
      break;
    case "4":
      alert("voce escolheu a opção 4");
      break;
    case "5":
      alert("voce escolheu encerrar");
      alert("encerrando...");
      break;
    default:
      alert("opção invalida");
  }
} while (opcao !== "5");
