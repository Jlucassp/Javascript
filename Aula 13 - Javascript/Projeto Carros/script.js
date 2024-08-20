const marca = document.querySelector("#marca")
const modelo = document.querySelector("#modelo")
const ano = document.querySelector("#ano")
const cor = document.querySelector("#cor")
const preco = document.querySelector("#preco")

const formulario = document.querySelector("#formulario")

const todos_os_carros = document.querySelector("#todos_os_carros")

const lista_de_carros = []


formulario.addEventListener("submit", (evento)=>{
  evento.preventDefault()
  
  const objeto_carro_criado = {
    marca: marca.value,
    modelo: modelo.value,
    ano: Number(ano.value),
    cor: cor.value,
    preco: Number(preco.value)
  }

  lista_de_carros.push(objeto_carro_criado)
  formulario.reset()
  marca.focus()

  montar_carros_na_tela()
})



function montar_carros_na_tela(){
  todos_os_carros.innerHTML = "" // isso aqui é como se fosse apagar o histórico

  lista_de_carros.forEach((carro_da_vez)=>{
    const novo_card = document.createElement("div")
    novo_card.className = "card"
  
    if(carro_da_vez.preco <= 100000){
      novo_card.style.backgroundColor = "aquamarine"
      novo_card.style.color = "grey",
      novo_card.style.borderRadius = "5px"
    }
  
    
    const nova_marca = document.createElement("h2")
    nova_marca.textContent = carro_da_vez.marca
  
    const nova_modelo = document.createElement("p")
    nova_modelo.textContent = carro_da_vez.modelo
  
    const nova_ano = document.createElement("p")
    nova_ano.textContent = carro_da_vez.ano
    
    const nova_cor = document.createElement("p")
    nova_cor.textContent = carro_da_vez.cor
  
    const novo_preco = document.createElement("p")
    novo_preco.textContent = carro_da_vez.preco
  
    novo_card.append(nova_marca, nova_modelo, nova_ano, nova_cor, novo_preco)
  
    todos_os_carros.appendChild(novo_card)
  })
}