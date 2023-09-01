const montoUno = document.getElementById("monto1")
const montoDos = document.getElementById("monto2")
const laMonedaUno = document.getElementById("moneda1")
const laMonedaDos = document.getElementById("moneda2")
const botonInvertir = document.getElementById("botoninvertir")
const elementoPrecio = document.getElementById("precio")

function calcular() {
    const monedaUno = laMonedaUno.value;
    const monedaDos = laMonedaDos.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${monedaUno}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const precio = data.rates[monedaDos];
        elementoPrecio.innerText = `1 ${monedaUno} = ${precio} ${monedaDos}`;
        montoDos.value = (montoUno.value * precio).toFixed(3);
      });
  }

laMonedaUno.addEventListener("change", calcular);
montoUno.addEventListener("input", calcular);
laMonedaDos.addEventListener("change", calcular);
montoDos.addEventListener("input", calcular);

botonInvertir.addEventListener("click", () => {
    const valor = laMonedaUno.value;
    laMonedaUno.value = laMonedaDos.value;
    laMonedaDos.value = valor;
    calcular();
  });

  calcular();