/* Dado a lista de números [5,8,10,4,3,11,15,21,29]:
Percorra essa lista usando um forEach e a partir dela crie outra lista com o quadrado de todos esses números.
Resultado esperado:
[25, 64, 100, 16, 9, 121, 225, 441, 841]
*/

const numbers = [5,8,10,4,3,11,15,21,29]

let quadrado = []

numbers.forEach(numeros => {
    quadrado.push(numeros ** 2)
})

const quadr = quadrado.join(" | ")
document.write(`O quadrado dos números é: ${quadr}`)