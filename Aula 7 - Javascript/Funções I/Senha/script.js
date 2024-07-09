/* Faça uma função que recebe uma senha e retorna se essa senha é fraca, média ou forte.
Requisitos:
    8 dígitos
    Letra maiúscula
    Letra minúscula
    Número
    Caracter Especial
Fraca - 1 ou 2 requisitos
Média - 3 ou 4 requisitos
Forte - 5 requisitos */

const maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const minuscula = "abcdefghijklmnopqrstuvwxyz"
const numero = "0123456789"
const especial = "!@#$%¨&*()-=+_[]{}`^ªº<>.,;:?/°"
const requisitos = 0

const senha = String(prompt("Digite sua senha: "))

if (senha.length >= 8){
    requisitos += 1
}

for (let caractere of senha){
    if (maiuscula.includes(caractere)){
        requisitos += 1
    }
    else if (minuscula.includes(caractere)){
        requisitos += 1
    }
    else if (numero.includes(caractere)){
        requisitos += 1
    }
    else if (especial.includes(caractere)){
        requisitos += 1
    }
}

if (requisitos < 3){
    document.write("A senha é fraca")
}else if(requisitos == 3 || requisitos == 4){
    document.write("A senha é média")
}else if(requisitos == 5){
    document.write("A senha é forte")
}