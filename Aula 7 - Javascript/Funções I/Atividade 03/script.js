// Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.

function mathCircle(){
    const raio = Number(prompt("Digite o raio do círculo: "))

    const area = Math.PI * raio * raio
    const perimetro = 2 * Math.PI * raio

   document.write(`O círculo de raio ${raio} tem área igual a ${area.toFixed(2)} e perímetro igual a ${perimetro.toFixed(2)}.`)
}

mathCircle()