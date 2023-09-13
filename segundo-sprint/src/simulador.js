const boton = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

function calcular(){
    const capital = Number(document.getElementById("capital").value)
    const interes = Number(document.getElementById("interes").value)
    const tiempo = Number(document.getElementById("tiempo").value)
    const duracion = document.getElementById("duracion").value

    let formulaInteres = duracion == "year" ? (capital*interes*tiempo) / 100 : (capital*interes*tiempo) / 1200 
    let montoTotal = capital + formulaInteres

    resultado.innerHTML = `<div>Capital: <span>$${capital.toFixed(2)}</span></div>
    <div>Interes: <span>$${formulaInteres.toFixed(2)}</span></div>
    <div>Monto Total: <span>$${montoTotal.toFixed(2)}</span></div>` 
}

boton.addEventListener("click", calcular)
window.addEventListener("load", calcular)