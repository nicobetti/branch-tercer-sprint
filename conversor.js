let monto1 = document.getElementById("monto1")
let monto2 = document.getElementById("monto2")
let selectorUno = document.getElementById("moneda1")
let selectorDos = document.getElementById("moneda2")


monto1.addEventListener("input",() => {
    let valor2 = monto1.value
    let tipoMoneda1 = selectorUno.value
    let tipoMoneda2 = selectorDos.value
    if( (tipoMoneda1 == "USD") && (tipoMoneda2 == "ARS")) {
        document.getElementById('monto2').value = valor2 * 350
    } else if ((tipoMoneda1 == "USD") && (tipoMoneda2 == "EUR")) {
        document.getElementById('monto2').value = (valor2 * 0.92).toFixed(2)
    } else if ((tipoMoneda1 == "USD") && (tipoMoneda2 == "BRL")) {
        document.getElementById('monto2').value = (valor2 * 4.87).toFixed(2)
    } else if((tipoMoneda1 == "USD") && (tipoMoneda2 == "USD")){
        document.getElementById('monto2').value = valor2
    } else if ((tipoMoneda1 == "ARS") && (tipoMoneda2 == "USD")) {
        document.getElementById('monto2').value = (valor2 / 350).toFixed(2)
    } else if ((tipoMoneda1 == "ARS") && (tipoMoneda2 == "EUR")) {
        document.getElementById('monto2').value = (valor2 / 378.97).toFixed(2)
    } else if ((tipoMoneda1 == "ARS") && (tipoMoneda2 == "BRL")) {
        document.getElementById('monto2').value = (valor2 / 71.69).toFixed(2)
    } else if ((tipoMoneda1 == "ARS") && (tipoMoneda2 == "ARS")) {
        document.getElementById('monto2').value = valor2
    } else if ((tipoMoneda1 == "EUR") && (tipoMoneda2 == "EUR")) {
        document.getElementById('monto2').value = valor2 
    } else if ((tipoMoneda1 == "EUR") && (tipoMoneda2 == "USD")) {
        document.getElementById('monto2').value = (valor2 * 1.08).toFixed(2)
    } else if ((tipoMoneda1 == "EUR") && (tipoMoneda2 == "BRL")) {
        document.getElementById('monto2').value = (valor2 * 5.29).toFixed(2)
    } else if ((tipoMoneda1 == "EUR") && (tipoMoneda2 == "ARS")) {
        document.getElementById('monto2').value = (valor2 * 378.97).toFixed(2)
    } else if ((tipoMoneda1 == "BRL") && (tipoMoneda2 == "BRL")) {
        document.getElementById('monto2').value = valor2 
    } else if ((tipoMoneda1 == "BRL") && (tipoMoneda2 == "EUR")) {
        document.getElementById('monto2').value = (valor2 * 0.19).toFixed(2)
    } else if ((tipoMoneda1 == "BRL") && (tipoMoneda2 == "USD")) {
        document.getElementById('monto2').value = (valor2 * 0.20).toFixed(2)
    } else if ((tipoMoneda1 == "BRL") && (tipoMoneda2 == "ARS")) {
        document.getElementById('monto2').value = (valor2 * 71.74).toFixed(2)
    }
})

/* const monedas = [{ nombre:"USD", valor:1}, {nombre:"ARS", valor: 349.97}, {nombre:"BRL", valor: 4.87}, {nombre:"EUR", valor: 0.92}] 


 for (let i = 0; i < monedas.length; i++) {
    const element = monedas[i].valor
    console.log(element)
} 

 function capturaMonto(e){
    monto1.textContent = console.log(e.target.value)
} 


 function capturaMoneda(e){
   selectorUno.innerText = console.log(e.target.value)
} 


 monto1.addEventListener("input",capturaMonto)
 selectorUno.addEventListener("change",capturaMoneda) */