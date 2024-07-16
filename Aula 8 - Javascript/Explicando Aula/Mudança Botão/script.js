const texto = document.querySelector("#texto")
const botao = document.querySelector("#botao")

function mudarTexto(){
    texto.textContent = "Novo texto alterado"
}

botao.addEventListener("click", mudarTexto)

/* botao.addEventListener("click", function mudarTexto(){
    texto.textContent = "Novo texto alterado"
})*/

// botao.addEventListener("click", () => texto.textContent = "Novo texto alterado")

// 3 tipos de funções idênticas

/*
function cumprimentar(nome){
    return `Olá ${nome}`
}*/

/*
function(nome){
    return `Olá ${nome}`
}*/

// nome => `Olá ${nome}` # arrow function

// 1ª forma
function maiorNumero(n1, n2){
    if (n1 > n2){
        return n1
    }else{
        return n2
    }
}

// 2ª forma
(n1, n2) => {
    if (n1 > n2){
        return n1
    }else{
        return n2
    }
}

// 3ª forma
(n1, n2) => n1 > n2 ? n1 : n2