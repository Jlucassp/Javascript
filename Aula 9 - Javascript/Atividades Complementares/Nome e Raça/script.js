const nome = document.querySelector("#nome")
const raca = document.querySelector("#raca")
const botao = document.querySelector("#botao")
const resultado = document.querySelector("#resultado")

botao.addEventListener("click", () => {
    const n_div = document.createElement("div")

    const n_h2 = document.createElement("h2")
    n_h2.textContent = `O nome do seu cachorro é ${nome.value}.`

    const n_p = document.createElement("p")
    n_p.textContent = `A raça dele é ${raca.value}.`

    n_div.append(n_h2, n_p)

    resultado.append(n_div)
})