/* Faça um site com uma tag <p> escrito "clique em um botão" e três botões escrito respectivamente:
cachorro, gato, papagaio
que ao clicar no botão aparece uma mensagem como conteúdo de texto da tag <p> respectivo ao botão que foi clicado, exemplo:
"Você clicou no cachorro"
"Você clicou no gato"
"Você clicou no papagaio" */

const texto = document.querySelector("#texto")
const cachorro = document.querySelector("#cachorro")
const gato = document.querySelector("#gato")
const papagaio = document.querySelector("#papagaio")

cachorro.addEventListener("click", () => texto.textContent = "Você clicou no cachorro!")
gato.addEventListener("click", () => texto.textContent = "Você clicou no gato!")
papagaio.addEventListener("click", () => texto.textContent = "Você clicou no papagaio!")