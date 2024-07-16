const nota1 = document.querySelector("#nota1")
const nota2 = document.querySelector("#nota2")
const botao = document.querySelector("#botao")
const media = document.querySelector("#media")

botao.addEventListener("click", () => {
    media_nota = (parseInt(nota1.value) + parseInt(nota2.value)) / 2
    media.textContent = `Olá, ${media_nota}`
})