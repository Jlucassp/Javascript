function checarEntrada(idade){
    if(idade >= 18){
        return "Pode entrar"
    }else{
        return "Vá pra casa meu fi"
    }
}

console.log(checarEntrada(29))

const idade_digitado = Number(prompt("Digite sua idade: "))

document.write(checarEntrada(idade_digitado))