// Alert de bienvenida
alert("Bienvenido/a! A comprar!");

//carrito con los preductos seleccionados
let carrito = [];

//catalogo de productos
const productos = [
  //huerta
  {
    id: "huerta-01",
    titulo: "albahaca",
    //Imagen: "./img/albahaca.webp",
    precio: 134,
  },
  {
    id: "huerta-02",
    titulo: "cedron",
    //Imagen: "./img/cedron.webp",
    precio: 100,
  },
  {
    id: "huerta-03",
    titulo: "apio",
    //Imagen: "./img/apio.webp"
    precio: 200,
  },
  {
    id: "huerta-04",
    titulo: "lechuga",
    //Imagen: "./img/lechuga.webp"
    precio: 140,
  },
  //grow
  {
    id: "grow-01",
    titulo: "Ecomambo Ácidos Húmicos",
    //Imagen: "./img/ecomambo.webp"
    precio: 783,
  },
  {
    id: "grow-02",
    titulo: "Pulverizador Giber – 1.5 Lt",
    //Imagen: "./img/pulverizador.webp"
    precio: 4665,
  },
  {
    id: "grow-03",
    titulo: "Sustrato Klasmann TS3 70L",
    //Imagen: "./img/sustrato.webp"
    precio: 6900,
  },
  {
    id: "grow-04",
    titulo: "Fertifox Potenciado",
    //Imagen: "./fertilizante"
    precio: 981,
  },
  //macetas
  {
    id: "grow-01",
    titulo: "blum comun",
    //Imagen: "./img/macets/01.jpg"
    precio: 900,
  },
  {
    id: "grow-04",
    titulo: "blum italiana",
    //Imagen: "./img/macetas/02.jpg"
    precio: 981,
  },
];

function seleccionar(idProducto) {
  let productoSeleccionado = productos.find(
    (producto) => producto.id === idProducto
  );

  alert(
    "Agrego al carrito el producto seleccionado: \n" +
      productoSeleccionado.titulo +
      "($" +
      productoSeleccionado.precio +
      ")"
  );

  carrito.push(productoSeleccionado);
}

function filtrar(titulo) {
  debugger;
  let productosEncontrados = productos.filter((producto) =>
    producto.titulo.includes(titulo)
  );

  //muestro en consola los productos encontrados
  console.log("Productos encontrados:");
  productosEncontrados.forEach((producto) => {
    console.log(producto);
  });
}

let productoBuscado = prompt("ingrese el producto a buscar");

if (productoBuscado !== null) filtrar(productoBuscado);
