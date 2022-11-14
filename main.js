// Creo dos variables para guardar el total de la compra y la eleccion del producto

let total;
let eleccion;

// Creo las const con los precios

const humus = 1000;
const fertilizante = 2160;
const fertilizanteCésped = 989;

// Alert de bienvenida
alert("Bienvenido/a! A comprar!");

// Creo la funcion que va a realizar el calculo del total y mostrar el producto seleccionado

function comprar() {
  // Creo un ciclo que nos impida seguir con la ejecucion si no agregamos un numero entre 1 y 3
  do {
    eleccion = parseInt(
      prompt(`Seleccioná el producto que vas a comprar:
    
    1- humus = $1.000
    
    2- fertilizante = $2.160
    
    3- fertilizante Cesped = $989
    `)
    );
  } while (eleccion !== 1 && eleccion !== 2 && eleccion !== 3);

  // Creo un condicional que nos de una respuesta segun la opcion elegida

  if (eleccion === 1) {
    total = humus;
    alert("Tenes que abonar: $" + total);
  } else if (eleccion === 2) {
    total = fertilizante;
    alert("Tenes que abonar: $" + total);
  } else {
    total = fertilizanteCésped;
    alert("Tenes que abonar: $" + total);
  }

  // Creo otro ciclo que nos pregunte si queremos seguir comprando

  do {
    eleccion = parseInt(
      prompt(`Selecciona una opcion:
    1- Quiero seguir comprando.
    2- No quiero seguir comprando`)
    );
  } while (eleccion !== 1 && eleccion !== 2);
  if (eleccion === 1) {
    comprar();
  } else {
    alert("Gracias por su compra, vuelva pronto!");
  }
}

comprar();
