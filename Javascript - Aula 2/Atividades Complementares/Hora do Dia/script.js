const hora = Number(prompt("Digite uma hora do dia: "))

if(hora >= 0 && hora <= 23){
    if(hora >= 5 && hora <= 12){
        document.write("Bom dia")
    }
    else if(hora >= 13 && hora <= 18){
        document.write("Boa tarde")
    }
    else{
        document.write("Boa noite")
    }
}
else{
    document.write("Hora inválida")
}