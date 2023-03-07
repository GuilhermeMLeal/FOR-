var dia = new Date()
var hora = dia.getHours();
var minutos = dia.getMinutes();

if (hora <= 12 && hora >= 5) {
    console.log("Bom dia!")
}
else if (hora >= 12 && hora <= 18) {
    console.log("Boa tarde")
}
else {
    console.log("Boa Noite")
}




function mudarCor() {
    if (mudarCor == onclick) {
        document.getElementById('quadrado').style.backgroundColor = "red";
    }
    else {
        document.getElementById('quadrado').style.backgroundColor = "gray";
    }
}
function verde() {
    let corpo = document.querySelector('header')
    corpo.style.backgroundColor = 'green'
}

function azul() {
    let corpo = document.querySelector('header')
    corpo.style.backgroundColor = 'blue'
}
function verde() {
    let corpo = document.querySelector('header')
    corpo.style.backgroundColor = 'green'




    var numeros = Number(document.getElementById('valor').value)
    var aux = [];

    for (i = 0; i <= numeros; i++) {
        if (numeros % i == 0) {
            aux.push(i)
        }
    }
    console.log(aux)
}


let novonumero = 0

function sorteio() {
    novonumero = Math.floor(Math.random() * 255)
    alert(novonumero)
}


