/* Faça uma função que recebe um nome e uma hora do dia e faz um cumprimento ao usuário referente ao horário informado, exemplo:
Bom dia, fulano
Boa tarde, fulano
Boa noite, fulano */

function cumprimento(){
    const nome = String(prompt("Digite seu nome: "))
    const hora = Number(prompt("Digite uma hora: "))

    if(hora >= 5 && hora < 12){
        return `Bom dia, ${nome}.`
    }else if(hora >= 12 && hora < 18){
        return `Boa tarde, ${nome}.`
    }else if(hora >= 18 && hora < 24 || hora >= 0 && hora < 5){
        return `Boa noite, ${nome}.`
    }else{
        return "Digite um horário válido."
    }
}

document.write(cumprimento())