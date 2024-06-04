// Faça um programa que pede para o usuário digitar uma letra do alfabeto e mostre na tela se aquela letra é uma vogal ou uma consoante.

const letra = String(prompt("Digite uma ÚNICA letra qualquer: "))

const consoantes = "bcdfghjklmnpqrstvwxyz"
const vogais = "aeiou"

if(letra.length !== 1){
    document.write("Digite somente UMA letra!")
}
else{
    consoantes.includes(letra) ? document.write(`A letra ${letra} é uma consoante.`) : vogais.includes(letra) ? document.write(`A letra ${letra} é uma vogal.`) : document.write("Digite uma opção válida.")
}