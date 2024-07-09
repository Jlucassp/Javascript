// Implemente uma função que receba um número como parâmetro e informe o quadrado desse número.

function quadraticNumber(){
    const num = Number(prompt("Digite um número: "))

    const quadrado = num * num
    document.write(`O número ${num} elevado ao quadrado é ${quadrado}`)
}

quadraticNumber()