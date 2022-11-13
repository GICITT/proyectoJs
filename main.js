// Creo dos variables para guardar el total de la compra y la eleccion del producto

let total;
let eleccion;

// Creo las const con los precios

const iphone = 280000;
const galaxy = 194999;
const moto = 145999;

// Alert de bienvenida
alert("Bienvenido/a! A comprar!");

// Creo la funcion que va a realizar el calculo del total y mostrar el producto seleccionado

function comprar() {
  // Creo un ciclo que nos impida seguir con la ejecucion si no agregamos un numero entre 1 y 3
  do {
    eleccion = parseInt(
      prompt(`Seleccioná el producto que vas a comprar:
    
    1- Iphone 16 = $280.000.
    
    2- Galaxy S21 = $194.999.
    
    3- Moto G200 5g = $145.999.
    `)
    );
  } while (eleccion !== 1 && eleccion !== 2 && eleccion !== 3);

  // Creo un condicional que nos de una respuesta segun la opcion elegida

  if (eleccion === 1) {
    total = iphone;
    alert("Tenes que abonar: $" + total);
  } else if (eleccion === 2) {
    total = galaxy;
    alert("Tenes que abonar: $" + total);
  } else {
    total = moto;
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
    alert("Chau!");
  }
}
comprar();
