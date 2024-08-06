const cores = ["azul", "amarelo", "vermelho", "verde"]

// percorre os elementos do array cores.
for (cor_da_vez of cores){
    console.log(cor_da_vez)
}

// forEach é uma função semelhante ao "for of", onde percorre os elementos do array cores.
cores.forEach((cor_da_vez) => {
    console.log(cor_da_vez)})

// cores.forEach(cor_da_vez => console.log(cor_da_vez))

cores.forEach((item, posicao, propria_lista) => {
    console.log(item)
    console.log(posicao)
    console.log(propria_lista)
})