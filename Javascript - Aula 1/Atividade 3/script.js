const idade = Number(prompt("Digite sua idade: "))

const ano_atual = new Date().getFullYear()
const anoNascimento = ano_atual - idade

document.write(`Você tem ${idade} anos, logo, você nasceu em ${anoNascimento}`)