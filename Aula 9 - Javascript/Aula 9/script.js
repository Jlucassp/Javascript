const nome = document.querySelector("#nome")
const botao = document.querySelector("#botao")
const resultado = document.querySelector("#resultado")

botao.addEventListener("click", () => {
    const nova_div = document.createElement("div")
    // nova_div.style.backgroundColor = "red"
    nova_div.className = "card"
    nova_div.id = "testando"

    const novo_elemento = document.createElement("p")
    novo_elemento.textContent = `Você cadastrou ${nome.value}`

    const outro_elemento = document.createElement("h2")
    outro_elemento.textContent = "Sei lá"

    // resultado.appendChild(novo_elemento)
    // resultado.appendChild(outro_elemento)
    nova_div.append(novo_elemento, outro_elemento)

    resultado.append(nova_div)
})