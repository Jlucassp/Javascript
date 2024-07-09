// Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário. Por exemplo, o usuário informa a string "Beterraba", e a função retorna o número 4 (há 4 vogais nessa palavra).



function contarVogais(){
    
    const vogais = "aeiouAEIOU"
    let contVogais = 0

    const palavra = String(prompt("Digite uma palavra: "))

    for (let caractere of palavra){
        if(vogais.includes(caractere)){
            contVogais += 1
        }
    }
    document.write(`A string '${palavra}' têm ${contVogais} vogais!`)   
}

contarVogais()