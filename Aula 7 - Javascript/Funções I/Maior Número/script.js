function checarMaior(){
    const num1 = Number(prompt("Digite o primeiro número: "))
    const num2 = Number(prompt("Digite o segundo número: "))

    if(num1 > num2){
        return `O número ${num1} é o maior!`
    }else if(num2 > num1){
        return `O número ${num2} é o maior!`
    }else{
        return "Os números são iguais!"
    }
}

document.write(checarMaior())