//catalogo de productos

class producto {
  constructor(id, titulo, img, precio) {
    this.id = id;
    this.titulo = titulo;
    this.img = img;
    this.precio = precio;
    this.cantidad = 1;
  }
}

const albahaca = new producto(1, "Albahaca", "./img/albahaca.webp", 134);
const cedron = new producto(2, "Cedron", "./img/cedron.webp", 100);
const apio = new producto(3, "Apio", "./img/apio.webp", 200);
const lechuga = new producto(4, "Lechuga", "./img/lechuga.webp", 140);
const acido = new producto(5, "Ecomambo Ácidos Húmicos", "./img/ecomambo.webp", 780);
const pulverizador = new producto(
  6,
  "Pulverizador Giber",
  "./img/pulverizador.webp",
  4000
);
const sustrato = new producto(7, "Sustrato Klasmann", "./img/sustrato.webp", 6000);
const fertifox = new producto(
  8,
  "Fertifox Potenciado",
  "./img/fertilizante.webp",
  800
);
const macetaComun = new producto(9, "Blum comun", "./img/blum.webp", 900);
const macetasItaliana = new producto(
  10,
  "Blum italiana",
  "./img/blumitaliana.webp",
  900
);

//Creo un Array con todos los productos

const productos = [
  albahaca,
  cedron,
  apio,
  lechuga,
  acido,
  pulverizador,
  sustrato,
  fertifox,
  macetaComun,
  macetasItaliana,
];

// Creamos el carrito vacio
let carrito = [];

console.log(carrito)

//creo una funcion para recorrer todo el array para cargar todos los productos en el html.



const contenedorProductos = document.getElementById("contenedor-productos");

function mostrarProductos () {
  productos.forEach((producto) => {
    const div = document.createElement("cards"); //creo un div
    div.classList.add("productos");
    div.innerHTML = `
    <img class="producto-imagen" src="${producto.img}" alt="${productos.titulo}" />
    <div class="detalle">
      <h3 class="producto-titulo">${producto.titulo}</h3>
      <p class="producto-precio">${producto.precio}</p>
      <button class="producto-agregar" id="boton${producto.id}">Agregar</button>
    </div>`;
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
    })
  })
};


//agregar productos al carrito



//funcion agregar al carrito



function agregarAlCarrito  (id) {
  const productoEnCarrito = carrito.find((producto) => producto.id === id);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    const producto = productos.find((producto) => producto.id === id);
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito);
  }
  
};




function mostrarCarrito() {
  
  cards.innerHTML = "";

  carrito.forEach(producto => {
    const cardcarrito = document.getElementById(`cards`)
    
      cardcarrito.innerHTML += `
      <div>
      <img class="producto-imagen" src="${producto.img}" alt="${productos.titulo}" />
      <div class="detalle">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">${producto.precio}</p>
       <p class="producto-precio">Cantidad ${producto.cantidad}</p>
        </div>
        </div>
        `



    //Eliminar productos del carrito:

    // const boton = document.getElementById(`eliminar${concierto.item}`);
    // boton.addEventListener("click", () => {
    //   eliminarDelCarrito(concierto.item);
    // })
  })
 
}

mostrarProductos();
mostrarCarrito()

if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}

const cardcarrito = document.getElementById(`cards`)
const verCarrito = document.getElementById(`verCarrito`)

verCarrito.addEventListener(`click`, () => {
  mostrarCarrito();
})