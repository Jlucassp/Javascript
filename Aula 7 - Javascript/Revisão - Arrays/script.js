// Dado a lista de cores: azul, vermelho, amarelo
let cores = ["Azul", "Vermelho", "Amarelo"];

// Adicione no começo da lista a cor roxo e adicione no final da lista a cor laranja
cores.unshift("Roxo");
cores.push("Laranja");
console.log(cores);

// Mostre na tela qual é a segunda cor
let vermelho = cores.slice(2, 3);
console.log(vermelho);
// ou
console.log(cores[2])

// Altere a terceira cor para verde
cores.splice(2, 1, "Verde")
console.log(cores)
// ou
cores[2] = "Verde"

// Mostre na tela o tamanho total da lista
console.log(cores.length)

// Remova a última cor
cores.pop()
console.log(cores)

// Adicione as cores preto e branco no final
cores.push("Preto", "Branco")
console.log(cores)

// Substitua a cor azul pela cor cinza e lilás
cores.splice(1, 1, "Cinza", "Lilás")
console.log(cores)

// Remova apenas a cor branco
cores.splice(6, 1)
console.log(cores)

// Adicione a cor rosa como a terceira cor
cores.splice(2, 0, "Rosa")
console.log(cores)