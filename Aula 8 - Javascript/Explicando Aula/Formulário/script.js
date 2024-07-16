const caixinha_do_nome = document.querySelector("#nome") // entrada de dados
const botao = document.querySelector("#botao") // processamento dos dados
const resultado = document.querySelector("#resultado") // saída dos dados

botao.addEventListener("click", () => {
    resultado.textContent = `Olá, ${caixinha_do_nome.value}`

    caixinha_do_nome.value = ""
    caixinha_do_nome.focus()    
})