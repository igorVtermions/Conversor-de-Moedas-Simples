const vision = document.querySelector('.vision')
const valueCoin = document.querySelector('.valueCoin')

let value

function realToDolar(){
    value = Number(valueCoin.value)

    vision.innerHTML = value * 5.25
}

function dolarToReal(){
    value = Number(valueCoin.value)

    vision.innerHTML = value / 5.25
}

function realToEuro(){
    value = Number(valueCoin.value)

    vision.innerHTML = value * 5.24
}

function euroToReal(){
    value = Number(valueCoin.value)

    vision.innerHTML = value / 5.24
}