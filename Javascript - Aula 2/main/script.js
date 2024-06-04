// const n1 = 5
// const n2 = 8
// const n3 = "5"
// const n4 = 5

// console.log(10 > 5)
// console.log(n1 == n2)
// console.log(n1 == n3)
// console.log(n1 == n4)

// console.log(n1 === n3)

// console.log(n1 != n2)
// console.log(n1 != n3)
// console.log(n1 != n4)

// console.log(n1 !== n3)

// console.log(n1 > n2)
// console.log(n1 < n2)
// console.log(n1 >= n2)
// console.log(n1 <= n2)
// console.log(n1 <= n4)

const idade = Number(prompt("Digite sua idade: "))

if(idade >= 18){
    document.write(`Você tem ${idade} anos e pode ser preso.`)
}
else{
    document.write(`Você tem ${idade} anos e no máximo vai pra FEBEM.`)
}

document.write(`Você tem ${idade} anos.`)