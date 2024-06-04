// Faça um programa que peça para o usuário digitar o ano que ele nasceu e mostre na tela se o voto dele é obrigatório ou facultativo, ou se ele sequer pode votar.

const ano = Number(prompt("Digite o seu ano de nascimento: "))

idade = 2024 - ano

if(ano > 1900 && ano < 2025){
    if(idade <= 15){
        document.write(`Você tem ${idade} anos e não pode votar.`)
    }
    else if((idade >= 16 && idade < 18) || (idade > 70)){
        document.write(`Você tem ${idade} anos e seu voto é facultativo.`)
    }
    else if(idade >= 18 && idade < 71){
        document.write(`Você tem ${idade} anos e seu voto é obrigatório.`)
    }
}
else{
    document.write("Digite um ano válido.")
}

// idade >= 18 ? document.write("Maior de idade") : document.write("Menor de idade")