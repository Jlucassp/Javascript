/* Dado a lista de números [5,8,10,4,3,11,15,21,29]:
Percorra essa lista usando um forEach e conte quantos números dessa lista são pares e quantos são ímpares.
*/

const numbers = [5, 8, 10, 4, 3, 11, 15, 21, 29]

let qtdPares = 0
let qtdImpares = 0

numbers.forEach(numeros => {
    if (numeros % 2 === 0){
        qtdPares++;
    } else{
        qtdImpares++;
    }

})

document.write(`Quantidade de números pares: ${qtdPares}<br>`)
document.write(`Quantidade de números ímpares: ${qtdImpares}`)