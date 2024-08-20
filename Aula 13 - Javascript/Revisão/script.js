/* Dado a lista de carros do invertexto, percorra a lista e crie um card para cada carro expondo todas as suas informações, porém, caso o carro custe acima de 100 mil, deixe o fundo de uma cor
diferente dos outros cards */

const carros = [
    {
      marca: "Toyota",
      modelo: "Corolla",
      ano: 2023,
      cor: "Preto",
      preco: 120000
    },
    {
      marca: "Honda",
      modelo: "Civic",
      ano: 2022,
      cor: "Branco",
      preco: 115000
    },
    {
      marca: "Ford",
      modelo: "Mustang",
      ano: 2021,
      cor: "Vermelho",
      preco: 250000
    },
    {
      marca: "Chevrolet",
      modelo: "Onix",
      ano: 2024,
      cor: "Azul",
      preco: 85000
    },
    {
      marca: "Volkswagen",
      modelo: "Gol",
      ano: 2023,
      cor: "Prata",
      preco: 70000
    }
  ];

const container = document.getElementById('car-container');

carros.forEach(carro => {
    const card = document.createElement('div');
    card.classList.add('card');

    if (carro.preco > 100000) {
        card.classList.add('high-price');
    }

    card.innerHTML = `
    <p><strong>Marca:</strong> ${carro.marca}</p>
    <p><strong>Modelo:</strong> ${carro.modelo}</p>
    <p><strong>Ano:</strong> ${carro.ano}</p>
    <p><strong>Cor:</strong> ${carro.cor}</p>
    <p><strong>Preço:</strong> ${carro.preco.toLocaleString('pt-BR')}</p>
    `

    container.appendChild(card);
});