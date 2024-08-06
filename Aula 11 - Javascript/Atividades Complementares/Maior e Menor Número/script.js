/* Dado a lista de números [5,8,10,4,3,11,15,21,29]:
Percorra essa lista usando um forEach e mostre qual o é o maior e menor número.
Resposta esperada:
Maior = 29
Menor = 4
*/

const numbers = [5,8,10,4,3,11,15,21,29]

let maior = numbers[0] // ou 0
let menor = numbers[0] // ou Infinity

numbers.forEach(numeros => {
    if (numeros > maior){
        maior = numeros
    } else if (numeros < menor){
        menor = numeros
    }
})

document.write(`Maior = ${maior}<br>`)
document.write(`Menor = ${menor}`)