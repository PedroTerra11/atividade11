console.log("Você toca algum instrumento? ");
process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();

  if (entrada_usuario == "sim" || entrada_usuario == "s") {
    console.log(
      "Você toca instrumentos! Parabéns! Qual instrumento você toca?"
    );
  } else if (entrada_usuario == "Violão" || entrada_usuario == "violao") {
    console.log("Violão é sempre bem vindo em dias festivos.");
  } else if (entrada_usuario == "Piano" || entrada_usuario == "piano") {
    console.log("Você é demais! Piano é um instrumento díficil.");
  } else if (entrada_usuario == "Guitarra" || entrada_usuario == "guitarra") {
    console.log("Fã de Guitar Hero? Guitarra é um ótimo instrumento");
  } else if (
    entrada_usuario == "não" ||
    entrada_usuario == "nao" ||
    entrada_usuario == "n"
  ) {
    console.log("Que pena! Você não toca instrumentos.");
  } else console.log("Não reconhecido.");
});
