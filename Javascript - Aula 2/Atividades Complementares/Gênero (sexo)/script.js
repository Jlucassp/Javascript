// Faça um programa que pede para o usuário digitar seu sexo onde m representa masculino, f representa feminino e o representa outros. use if ternário.

const sexo = String(prompt("Insira seu gênero (sexo) [f/m/o]: "))

sexo === "f" ? document.write("Você é do sexo feminino.") : sexo === "m" ? document.write("Você é do sexo masculino.") : sexo === "o" ? document.write("Seu genêro é outros.") : document.write("Insira uma opção válida.")