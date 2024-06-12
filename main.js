console.log("Você toca algum instrumento? ")
process.stdin.on("data", function(data){
    let entrada_usuario = data.toString().trim()

    if(entrada_usuario == "sim" || entrada_usuario == "s" ){
        console.log("Você toca instrumentos! Parabéns!")
    }else if(entrada_usuario == "não" || entrada_usuario == "nao" || entrada_usuario == "n"){
        console.log("Que pena! Você não toca instrumentos.")
    }else
        console.log("Opção inválida!")
})