// Faça um programa que pede para o usuário digitar um número e mostra na tela se aquele número inserido é positivo ou negativo.

const numero = Number(prompt("Digite um número qualquer: "))

if(numero > 0){
    document.write(`O número ${numero} é positivo.`)
}
else if(numero < 0){
    document.write(`O número ${numero} é negativo.`)
}
else{
    document.write(`O número ${numero} é considerado neutro.`)
}