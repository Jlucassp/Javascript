// Dado o array de cores:
let cores = ["azul", "amarelo", "vermelho", "verde"]

// remova a última cor:
cores.pop()

// adicione no final da lista a cor "preto":
cores.push("preto")

// substitua a cor "amarelo" e "azul" pela cor "laranja":
cores.splice(0, 2, "laranja")

// resultado esperado:
// ["laranja", "vermelho", "preto"]
console.log(cores)