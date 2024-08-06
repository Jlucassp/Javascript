/* Dado a lista de números [5,8,10,4,3,11,15,21,29]:
Percorra essa lista usando um forEach e crie duas novas listas a partir dela, uma com os números acima de 18 e outra com os números abaixo de 18.
*/

const numbers = [5,8,10,4,3,11,15,21,29]

const over = []
const under = []

numbers.forEach(numeros => {
    if (numeros >= 18){
        over.push(numeros)
    } else{
        under.push(numeros)
    }
})

document.write(`Maiores de 18: ${over}<br>`)
document.write(`Menores de 18: ${under}`)