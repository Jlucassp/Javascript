// Faça um programa que pede para o usuário digitar 3 notas.

// Faça uma função que recebe 3 notas e retorna o valor da média.
function mediaNotas(n1, n2, n3){
    const media = (n1 + n2 + n3) / 3
    return media
}

// Faça uma função que recebe 3 notas e retorna qual a maior delas.
function maiorNumero(n1, n2, n3){
    const maior = Math.max(n1, n2, n3)
    return maior
}

function menorNumero(n1, n2, n3){
    const menor = Math.min(n1, n2, n3)
    return menor
}

const nota1 = Number(prompt("Digite a primeira nota: "))
const nota2 = Number(prompt("Digite a segunda nota: "))
const nota3 = Number(prompt("Digite a terceira nota: "))

const media = mediaNotas(nota1, nota2, nota3)
const maior = maiorNumero(nota1, nota2, nota3)
const menor = menorNumero(nota1, nota2, nota3)

if (media >= 7){
    document.write(`Aprovado com a média ${media}`)
}else{
    document.write(`Reprovado com a média ${media}`)
}

document.write(`<br> A maior nota foi ${maior}`)
document.write(`<br> A menor nota foi ${menor}`)