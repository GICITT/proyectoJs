/**const Arreglo = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];

for (let i = 0; i < Arreglo.length; i++) {
  if (Arreglo[i] > 3) {
    console.log(Arreglo[i]);
  }
}


class banco {
  constructor(id, nombre, tasa12, tasa24, tasa36) {
    this.id = id;
    this.id = nombre;
    this.tasa12 = tasa12;
    this.tasa24 = tasa24;
    this.tasa36 = tasa36;
  }
}

const bancolombia = new banco(1, "bancolombia", 10, 11, 12);
const itau = new banco(2, "itau", 10, 11, 12);
const nubanck = new banco(2, "nubank", 8, 11, 14);

let bancoSeleccionado = parseInt(
  prompt("ingrese el banco que deseas cotizar 1.bancolombia -2.itau- 3.nubank")
);

5; //variable para condicion en while
let escogioBanco = false;

//info banco seleccionado

let infoBancoSeleccionado;

while (bancoSeleccionado === false) {
  if (bancoSeleccionado === bancolombia.id) {
    escogioBanco = true;
    infoBancoSeleccionado = bancolombia;
  } else if (bancoSeleccionado === itau.id) {
    escogioBanco = true;
    infoBancoSeleccionado = itau.id;
  } else if (bancoSeleccionado === nubanck.id) {
    escogioBanco = true;
    infoBancoSeleccionado = nubanck;
  } else
    bancoSeleccionado = parseInt(prompt("estas ingresando un dato incorrecto"));
}

console.log(infoBancoSeleccionado);

//MONTO A PRESTAR

const montoAprestar = parseInt(prompt("ingresa monto a prestar"));

// funcion cuota mensual

const calcularCuotaMensual = (valor, intereses, meses) => {
  const cuota = valor + (valor * interes) / 100 / meses;
  return cuota;
};

const cuota12 = calcularCuotaMensual(
  montoAprestar,
  infoBancoSeleccionado.tasa12,
  12
);
const cuota24 = calcularCuotaMensual(
  montoAprestar,
  infoBancoSeleccionado.tasa24,
  24
);
const cuota36 = calcularCuotaMensual(
  montoAprestar,
  infoBancoSeleccionado.tasa34,
  34
);

console.log(cuota12, cuota24, cuota36);
alert(
  `las opciones que te ofrece ${infoBancoSeleccionado} son: ${cuota12} uds a 12 meses - 2.${cuota24} uds a 24 meses -3. ${cuota36} uds a 36 meses`
);



/*************** FUNCIONES DE ORDEN SUPERIOR******************
 //Una funcion de orden superior es una funcion 
que puede recibir por parametro una funcion o retornar una funcion.




Ejemplo 1.


function sumarRango(min, max) {
  let total = 0;
  for (i = min; i < max; i++) {
    total = total + i;
  }
  return total;
}

console.log(sumarRango(2, 10));
console.log(sumarRango(4, 5));
console.log(sumarRango(5, 10));

otro ejemplo de funcion de orden superior donde comparo dos 
numeros, la consola me devuelve true or false. 


Ejemplo 2.

function mayorQue(x) {
  return (num) => num > x;
}

const mayorQueVeinte = mayorQue(10);  //constante

console.log(mayorQueVeinte(20));



/***************METODOS DE BUSQYEDA Y TRANSFORMACION**************/
/*
const numeros = [50, 12, 37, 17, 25, 6];
const animales = ["perro", "gato", "cisne", "tortuga", "gato"];
const productos = [
  { nombre: "mesa", precio: 3500 },
  { nombre: "silla de plastico", precio: 2000 },
  { nombre: "silla de madera", precio: 2000 },
  { nombre: "ventana", precio: 4500 },
  { nombre: "puerta", precio: 3000 },
];

// forEach() => Recorre el Array y ejecuta lo que le digamos (una funcion) con c/d
//elemento. (con esto podemos mostrar por consola los datos de cada elemento)

const numeros = [50, 12, 37, 17, 25, 6];
numeros.forEach((numero) => {
  console.log(numero);
});
//nombre del array mas el nombre del metodo,abrimos parentesis,
//pasar un parametro a recorrer.
// la palabra numero dentro del array representa los elementos a
//recorrer dentro del array.

animales.forEach((animales) => {
  console.log(animales);
});

productos.forEach((producto) => {
  console.log(producto.nombre); //punto nombre me muestra el nombre
}); //de c/d producto en nuestro array

//faind ()!!! =>

//me retortna el primer elemento del array que cumpla con determinada
//condicion.

const perro = animales.find((animales) => animales === "perro");
console.log(perro);

//este es un buen ejemplo de como usar el find para el ecommerce.¡¡¡¡

let productoElegido = prompt("Ingrese el producto que desea comprar");
console.log(productos.find((producto) => producto.nombre === productoElegido));

//filter ()!!! => recorre el array y retorna uno nuevo con todos los
//elementos que cumplan con una condicion.
//importante esto se usa para busquedas la lupita que estas en la pag web¡¡¡¡¡

const gato = animales.filter((animal) => animal === "gato");
console.log(gato);


const sillas = productos.filter((producto) =>
  producto.nombre.includes("silla")
);
console.log(sillas);

//some ()=> recorre el array y devuelve true o falce 
//puesde resultar util para crear un cartel que diga
" No hay productos que coincidan con la "fwefwef" por 
ejemplo
//


const animales = ["perro", "gato", "cisne", "tortuga", "gato"];
const cisne = animales.some((animal) => animal === "cisne");
console.log(cisne);

*/

// map ()=> recorre el array y crea un nuevo arrary. conviene
//guardarlo en una nueva variable.
// sirve para hacer una lista de product en un array nuevo.
// crear un nuevo carrito, si la persona borra un elemento.

//const nombres = productos.map((producto) => producto.nombre);
//console.log(nombres);
//en el siguiente ejemplo creo un nuevo array
//actualizando la lista de precios.
/*
const precioActualizado = productos.map((producto) => {
  return { nombre: producto.nombre, precio: producto.precio * 1.5 };
});

console.log(precioActualizado);
*/

//reduce ()=> recorre el array y retorna un unico valor tras hacer
//una operacion sobre los elementos.
//¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡ para sumar los items del carrito de compras.

//sort => este metodo es destructivo, se usa para ordenar el precio de forma ascendente o descendente
//const numeroProductos= productos.sort ((e1, e2)=> e2.precio - e1.precio);
//console.log (numeroProducto)
//!!!!

/**
const numeros = [50, 12, 37, 17, 25, 6];

numeros.sort((a, b) => a - b);
console.log(numeros);

const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(total);

//!!!!
const productos = [
  { nombre: "mesa", precio: 3500 },
  { nombre: "silla de plastico", precio: 2000 },
  { nombre: "silla de madera", precio: 2000 },
  { nombre: "ventana", precio: 4500 },
  { nombre: "puerta", precio: 3000 },
];

const totalCarrito = productos.reduce(
  (acumulador, producto) => acumulador + producto.precio,
  0
);
console.log(totalCarrito);

*/

/*****************************MATH **************************/
/*
const numeroDecimal1 = 1.25;
const numeroDecimal2 = 1.75;

//min/max =>

console.log(Math.min(50, 12, 37, 17, 25, 6)); // con min me retorna el minimo con max el maximo.
//min ()=> Retorna el numero minimo del listado

//ceil=>
console.log(Math.ceil(numeroDecimal1)); // retorna el numero redondeado hacia arriba
// flor=> redondea hacia abajo

console.log(Math.floor(numeroDecimal1));

//round ()=> redondea por proximidad
console.log(Math.floor(numeroDecimal1));
console.log(Math.floor(numeroDecimal2));

//random => retorna un numero aleatrodio entre 0 inclusive y 1 inclusive.


console.log(Math.raund(random() * 50));
*/

/**DOM
 *
 * Con Dom accedemos a nuestro html desde Js.
 *
 *
 *
 *
 */
/**************************condicionales ************************/

/* ejemplo 1

let edad = prompt("ingrese su edad");

if (edad > 18) {
  alert("sos mayor de edad");
} else {25
  alert("sos menor de edad no poder ingresar");
}

ejemplo2


let hora = prompt("ingrese la hora");

if (hora > 6 && hora < 12) {
  alert("buenos dias");
} else if (hora >= 12 && hora < 20) {
  alert("buenas trades");
} else {
  alert("buenas noches");
}
*/
/**
let usuario1 = "carpi";
let usuario2 = "coder";
let nombredeUsuario = prompt("ingrese su nombre de usuario");

if (nombredeUsuario == "carpi") {
  alert("Bienvenido" + nombredeUsuario);
} else if (nombredeUsuario == "coder") {
  alert("bienvenido" + nombredeUsuario);
} else {
  alert("nombre de usuario incorrecto");
}

if (nombredeUsuarion == "carpi" || nombredeUsuario == "coder") {
  alert("bienvenido" + nombredeUsuario);
} else {
  ("nombre de usuario incorrecto");
}

*/

/** FUNCIONES */

//LA FUNCION NO SE EJECUTA HASTA QUE NO ES INVOCADA
//Las partes de una función
//Recapitulemos lo que hemos visto hasta ahora. La sintaxis de una función es la siguiente:

//function <name>([arg1], [arg2], ...) {
// cuerpo de la función
//return <valor de retorno>;
//}

/** ejemplo funcion saludar 
function hello() {
  alert("Hola Mundo");
}

hello();*/

//ejemplo 2
// Las funciones pueden recibir cero o mas parametros
//piensa en los argumentos como variables que puedes utilizar dentro
//de una funcion.
//utilizando argumentos podemos hacer una funcion reutilizable que
//salude a cualquier persona.

/*
function saludar(name) {
  return "hola" + " " + name;
}

let g1 = saludar("gisela");
console.log(g1); 

*/
// ¿Notas la diferencia? En vez de hacer el console.log dentro de la función lo hacemos cuando la invocamos
//(de lo contrario no aparecería nada en pantalla).

//ejemplo de funcion 2 con parametros:

/*
function bmi(weight, height) {
  return weight / height ** 2;
}

console.log("Tu IMC es: " + bmi(55, 1.58));

function suma(a, b) {
  return a + b;
}

console.log("el resultado es " + suma(70, 24));
*/

//otro ejemplo:

/**
function saludar(nombre, apellido) {
  return "hola " + nombre + " " + apellido;
}

console.log(saludar("gisela", "cittadini"));
*/

//funicon anonima

/*const saludar = function () {// la funcion no tiene nombre,
                            // se guarda dentro de una variable
  console.log("hola mundo");
};

*/

// funcion flecha
//* va dentro de una variable.no lleva nombre.

/*
const saludar = (nombre) => {
  console.log("hola mundo" + " " + nombre);
};

saludar("gisela");
*/
//!!!!!!!!!!!!!!!!!!!!!!!!!!!! puedo no escribir las llaves asi : si hay una sola sentencia.

/*
const saludar = (nombre) => console.log("la conchu es:" + " " + nombre);
saludar("camila");
*/

//const resta = (a, b) => a - b;
//console.log(20 - 4);

/************************************objetos */
//elemento con propiedades
//no olvidar las comas  (,) luego de cada propiedad
/*
const persona1 = {
  nombre: "carpi",
  edad: 33,
  nacionalidad: "argentina",
};

const usuario2 = {
  nombre: "gise",
  edad: 33,
  nacionalidad: "argentina",
  hobbies: {
    hobbie1: "montañismo",
    hobbie2: "correr",
  },
};

console.log(usuario2);
console.log(usuario2.nombre); //con el punto seguido del nombre de la propiedad accedo a la propiedad;
console.log(usuario2.hobbies.hobbie1); //para llamar a sub propiedades

//para cambiar alguna propiedad de mi objeto, tengo que llamar a la
//al objeto punto la propiedad igual nuevo valor como en el ejemplo
//de abajo

usuario2.nombre = "lourdes";
console.log(usuario2);

/***************************CONSTRUCTORES O FUNCION CONSTRUCTORA*/
//se usan en productos que tiene una descripcion similar
//el nombre de la funcion va en mayuscula
//creamos el esqueleto de nuestros futuros productos
// this " hace referencia a la caracteristica que tendra el
// futuro producto a diseñar" "this" (este, este futuro producto
// a ser creado que no sabemos como se va a llamar).

/**
function Producto(titulo, color, precio) {
  this.titulo = titulo;
  this.color = color;
  this.precio = precio;
}

const producto1 = new Producto("sillon", "rojo", "50000");
console.log(producto1);

/****************************CLASES *****************************/
//Nueva forma de crear objetos

/*class Producto {
  constructor(titulo, color, precio) {
    this.titulo = titulo;
    this.color = color;
    this.precio = precio;
  }
}

const producto1 = new Producto("sillon", "rojo", "58000");
console.log(producto1);


/** *****************************METODOS ***********************/

//se usan mas que nada en el constructor.
// puedo introducir una funcion dentro de un constructor como en el
//ejemplo de a continuacion --->.

//ejemplo
/*
class Persona {
  constructor(nombre, edad, nacionalidad) {
    this.nombre = nombre;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
    this.saludar = function () {
      //aqui hay una funcion
      console.log("hola soy gise");
    };
    this.cumpleaños = function () {
      this.edad = this.edad + 1; //funcion utilizando una propiedad
    };
  }
}

const persona1 = new Persona("Gisela", 33, "argentina");
persona1.saludar(); // asi llamo a la funcion.
persona1.cumpleaños();

console.log(persona1.edad);

/****************************OPERADORES IN Y FOR IN **************/

//Supongamos que queremos saber si persona1 tiene determinada propiedad

// class Persona {
//   constructor(nombre, edad, nacionalidad) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.nacionalidad = nacionalidad;
//     this.saludar = function () {
//       //aqui hay una funcion
//       console.log("hola soy gise");
//     };
//     this.cumpleaños = function () {
//       this.edad = this.edad + 1; //funcion utilizando una propiedad
//     };
//   }
// }

// const persona1 = new Persona("Gisela", 33, "argentina");
// persona1.saludar(); // asi llamo a la funcion.
// persona1.cumpleaños();

// console.log(persona1.edad);
// console.log("nombre" in persona1); //propiedad in, si nombre esta en
// // persona1 me va a decir true

// if ("nombre" in persona1) {
//   // esta es otra forma de ver si hay una propiedad
//   console.log(persona1.nombre);
// } else {
//   ("no hay nombre");
// }

/************************************ for in**********************/
// con el ciclo for, podemos repasar todas las propiedades que hay en un objeto
// en este caso el console.log me devuelve un  listado de las mismas.
// el nombre "propiedad" a la constante const, se lo asigno yo.

// for (const propiedad in persona1) {
//   console.log(propiedad);
// }

/***************** PROPIEDADES Y METODOS CON VARIABLES EXTERNAS ***/
// const IVA = 1.22;

// function saludar() {
//   console.log("Hola, soy " + this.nombre); //defino la funcion y luego
//   //la pongo en el objeto
// }

// const Producto1 = {
//   nombre: "sillon",
//   color: "rojo",
//   precio: 50000,
//   iva: IVA, //podemos asignar una variable por fuera del objeto.
//   saludar,
// };

// console.log(Producto1);
// Producto1.saludar();

/*********************************** EVENTOS DEL MOUSE ************/

//monstrar el mensaje en una alerta cuando cliqueamos con el mouse, luego usamos
//una funcion flecha.

// const alerta = document.querySelector o getelementbyid y entre comillas sub el hash la el nombre("#alerta");
// alerta.addEventListener("click", mostrarAlerta);

// function mostrarAlerta() {
//   //la funcion se encuentra por fuera del evento
//   alert("hola mundo");
// }

// //mostrar mensaje en la consola

// const consola = document.querySelector("#consola");
// consola.addEventListener("click", () => {
//   console.log("hola mundo"); //en este caso coloco la funcion en el evento es mejor mas corta
// });

/****************mostrar un texto de un input en una alert******/

/*********************************selector de elementos*/

// getElementsByClassName() todo lo que pertenese a una misma clase
// getElementsTagName() todos los divs

/******************************************************************* */
/* EJEMPLLO DE CARRITO DE COMPRAS CLASE 28 DEL 2022
class Producto {
  constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
  }
}

const fideos = new Producto(1, "Fideos", 100);
const arroz = new Producto(2, "Arroz", 120);
const coca = new Producto(3, "Coca Cola", 300);
const pan = new Producto(4, "Pan", 200);

const productos = [fideos, arroz, coca, pan];

console.log(productos);

//MODIFICAMOS EL DOM PARA MOSTRAR MIS PRODUCTOS DE FORMA DINÁMICA. 

const contenedorProductos = document.getElementById("contenedorProductos");

function mostrarProductos(arrayProductos){
    arrayProductos.forEach( producto => {
        const div = document.createElement("div");
        div.className = "caja";
        div.innerHTML = `<p>Nombre: ${producto.nombre} </p>
                          <p>Precio: ${producto.precio} </p>
                          <button> Agregar al carrito ahh re loco</button>
                          `
        contenedorProductos.appendChild(div);
    })
}

mostrarProductos(productos);
**************************************************************************
*/

/***************************** STORAGE *****************/

//Nos permite guardar datos de amrea local en el navegador,
// localStorage: almacena los datos indefinidadmente
//sessionStorage: lo guarda hasta que el usuario cierra el navegador.
//inspeccionar->aplicaciones_> almacenamiento local (ahi veo lo que tengo en el local storage)

//1) TRABAJAMOS EN EL LOCAL STORAGE:

//PARA GUARDAR DATOS EN EL Localstorage vamos a utilizar un metodo que se
//llama setItem().
//este metodo recibe dos parametros: una clave y un valor.
//ejemplo A. almacenamiento

//localStorage.setItem("saludo", "hola mundillo");
//localStorage.setItem("numero", "1234");
//localStorage.setItem("boelano", "true");

//PARA RECUPERAR LOS DATOS ALMACENADOS, UTILIZAMOS GETITEM.
// siempre me retorna datos string.

//let numero = localStorage.getItem("numero");
//console.log("numero");

//2) TRABAJAMOS CON EL SESSIONSTORAGE:

//El funcionamiento es similar al localStorage.
//guardo datos con setItem(), y recupero de la misma forma.

//Almacenamos un saludo:

// sessionStorage.setItem("saludoNuevo", "hola mundo");
// //PARA RECUPERAR LOS DATOS ALMACENADOS;
// let saludo = localStorage.getItem("saludoNuevo");
// console.log("saludo");

// //recoorer un sessionstorage:

// sessionStorage.setItem("saludoNuevo", "hola mundo");
// sessionStorage.setItem("boleano", "false");

// //ejemplo: recorremos el localStorage.

// console.log("recorremos LocalStorage:");
// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   let valor = localStorage.getItem(clave);
//   console.log(clave, valor);
// }

// //COMO ELIMINO DATOS DEL STORAGE?

// //ELIMINAMOS saludoNuevo

// localStorage.removeItem("saludoNuevo");
// //
// //tambien puedo eliminar toda la informacion del localStora con el metodo clear();

//localStorage.clear();
//
//
//************************************************************** */

/** crea la funcion para llamar productos */

/**almacenamos objetos en el storage**/
//tenemos que tener en cuenta que todo lo que se almacena en el storge
// esta en fomrato String, por lo tento si queremos almacenar un
// objeto tenemos que convertirlo en string.

//json: javaScript Pbject Notation: es un formato de texto ligero para el
//intercambio de datos.

//¿como convertimos un objeto a JSON?
//lo hacemos mediante el metodo JSON.stringify()
//vamos a crear un objeto para practicar:

// const samuel = {
//   nombre: "samuel",
//   edad: 18,
//   casado: "false",
// };

// const samuelJSON = JSON.stringify(samuel);
// console.log(samuelJSON);

// //lo mando al localStorage:

// localStorage.setItem("samuel", samuelJSON);

// // LA INVERSA DE LO ANTERIOR DE LOCALSTORAGE A OBJETO:

// const personaJSON = localStorage.getItem("samuel");

// const persona = JSON.parse(personaJSON);
// console.log(persona, typeof persona);

// //ejemplo utilizando el local sotrage para cambiar modo dark a calro

// //1)crear un boton que cambie el modo de la pagina.
// //2) Almacenar el modo en el localSorage.
// //3) Al  recargar la pagina, recupera el modo del localStorage.
// //4) cambiar el modo de la pagina

// const btnFondo = document.getElementById("botonFondo");

// btnFondo.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
//   if (codument.body.classList.contains("dark"));
//   else {
//     localStorage.setItem("modo", "light");
//   }
// });

//creo un metodo que me muestre los elementos por consola
// productos.forEach((producto) => console.log(producto));
// productos.forEach((producto) => console.log(producto.precio));

// //productos menores a 200p

// const arrayFilter = productos.filter((producto) => producto.precio > 300);
// console.log(arrayFilter);




//librerias

//swet alert

/*  1) https://sweetalert2.github.io 
    2) instalo sweetAlert -----> <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    3) conviene tener instalado boostrap 

 4) creo un boton en el index <button class="btn.danger" > hola mundo <button>

  const boton = domcument.getElementById ("boton";)
  boton.addEventListener ("clik", ()=>{
    Swal.fire ("hola mundo")
  })

5) crea otro boton para personalizar el mensaje, poniendo iconos

const botonDos = domcument.getElementById ("botonDos";)
boton.addEventListener ("clik", ()=>{
    Swal.fire (" {title:"hola comision
                   text:"esto es un gatito" 
                   icon: "warning"  
                    img: "https://placekiten"  //coloco una imagen)   //le pasa un objeto con sus propiedades y valores
                   confirmButtonText:"Aceptar",
                   backgrond: "#FDEBDO" //FONDO DEL ANUNCIO
                   BACKDROP:"#FDEBRO" //PARA QUE NO SE VEA EL FONDO
  
  
                  })

 6)EJEMPLO 3

  CREAMOS OTRO BOTON


  //ELIMINAR FIDEOS

 const botonTres = domcument.getElementById ("botonTres";)


let carrito =["arroz", "fideos", "pan"];

 botonTres.addEventListener ("click" () =>{
  swal.fire ({
    titlre: "estas seguro de que quieres eliminar los fideos"
    icon:"warning"
    backgroun: "#FDEBDO",
    backdrop: "#B7950B",
    showCancelButton: true,
    cancelButtonText: "cancelar",
  }) .then ((result)=> {               //esto lo vemos en promesas
     if(result is fonfirmed){
      carrito =carrito.filter (producto => producto !==  "fideos");
      console.log (carrito);
      swal.fire ({
        title:"producto eliminado",
        icon:"success",
        confirmarButtonText:"aceptar", 
      })
     }
  })                            
 })



 7) Ejemplo 4 CREO UN BOTON

 <butoon class="btn m-5"> inicio de cesion <butoon>

 cont bottonCutro = document.getElementById ("botonCuatro");
  const usuarioAutorizado ="bobo"
  const passworAutorizado ="1234"

  DESPLEGAMOS EL EVENTO DEL BOTON 4

  bottonCuatro.addEventListener ("clik", ()=>{
   Swal.fire(
    title:"login",
    html:` 
    <input type="text" id="usuario" class="swal2-input" placeholder="Usuario"
    <input type="text" id="passwerd" class="swal2-input" placeholder="passwerd"`
   

    ME QUEDE ACA,, TERMINAR DE TIPEAR LO QUE FALTA
    )


  })


////////////////////////////////////////////////
//Libreria dosss   "toastify"

https://apvarun.github.io/toastify-js/#

se usa para mostrar notificacciones. 
tengo que agregar el stylesheet y el script 

1) creo un boton con el id=" botonCinco"

const botonCinco = documentById ("botonCinco");
botonCinco.addEventListener ("clik" ()=>{
  Toastify({
    text:"producto agregado al carrito",
    duration:3000,
    position:"left"
    destination:"https://google",
    style:{
      backgroun: "linear-gradient (to right, #b79500b, #"
    }
  }). showToast ();
}


////////////////// libreria 3 Luxon///////////////////////


// La clase principal de luxon es DateTime.  para ser mas ordernados 
podesmo referenciarla en una variable global para facilitar el acceso

// calcular fechas de compras 
//me permite calcular calculos con fechas y horas. blokbuster fecha de entrega, sumar un recargo


https://moment.github.io/luxon/#/?id=luxon

<script src="https://cdn.jsdelivr.net/npm/luxon@2.3.0/build/global/luxon.min.js"></script>



const DataTime = luxon.DataTime;
const fechaAnioNuevo= Date.local (2023, 1, 1, 00, 00);
console.log (fechaAñoNuevo)

console.log (fechaAñoNuevo. toString () );
























////////////////////////////////////////////////////////////////

const productos = [
  //huerta
  {
    id: "huerta-01",
    titulo: "Albahaca 01",
    imagen: "./img/albahaca.webp",
    categoria: {
      nombre: "Huerta",
      id: "huerta",
    },
    precio: 134,
  },
  {
    id: "huerta-02",
    titulo: "Cedron 02",
    imagen: "./img/cedron.webp",
    categoria: {
      nombre: "Huerta",
      id: "huerta",
    },
    precio: 100,
  },
  {
    id: "huerta-03",
    titulo: "Apio",
    imagen: "./img/apio.webp",
    categoria: {
      nombre: "Huerta",
      id: "huerta",
    },
    precio: 200,
  },
  {
    id: "huerta-04",
    titulo: "Lechuga",
    imagen: "./img/lechuga.webp",
    categoria: {
      nombre: "Huerta",
      id: "huerta",
    },
    precio: 140,
  },
  //grow
  {
    id: "grow-01",
    titulo: "Ecomambo Ácidos Húmicos",
    imagen: "./img/ecomambo.webp",
    categoria: {
      nombre: "Grow",
      id: "grow",
    },
    precio: 783,
  },
  {
    id: "grow-02",
    titulo: "Pulverizador Giber – 1.5 Lt",
    imagen: "./img/pulverizador.webp",
    categoria: {
      nombre: "Grow",
      id: "grow",
    },
    precio: 4665,
  },
  {
    id: "grow-03",
    titulo: "Sustrato Klasmann TS3 70L",
    imagen: "./img/sustrato.webp",
    categoria: {
      nombre: "Grow",
      id: "grow",
    },
    precio: 6900,
  },
  {
    id: "grow-04",
    titulo: "Fertifox Potenciado",
    imagen: "./img/fertilizante.webp",
    categoria: {
      nombre: "Grow",
      id: "grow",
    },
    precio: 981,
  },
  //macetas
  {
    id: "macetas-01",
    titulo: "blum comun",
    imagen: "./img/blum.webp",
    categoria: {
      nombre: "Macetas",
      id: "maceta",
    },
    precio: 900,
  },
  {
    id: "macetas-02",
    titulo: "blum italiana",
    imagen: "./img/blumitaliana.webp",
    categoria: {
      nombre: "Macetas",
      id: "maceta",
    },
    precio: 981,
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agergar");

//creo una funcion para recorrer todo el array para cargar todos los productos.

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    //recorro todo el array
    const div = document.createElement("div"); //creo un div
    div.classList.add("producto");
    div.innerHTML = `
    <img class="producto-imagen" src="${producto.imagen}" alt="${productos.titulo}" />
    <div class="detalle">
      <h3 class="producto-titulo">${producto.titulo}</h3>
      <p class="producto-precio">${producto.precio}</p>
      <button class="producto-agregar" id="${producto.id}">Agregar</button>
    </div>`;
    contenedorProductos.append(div);
  });
  actualizarBotonesAgregar();
  console.log(botonesAgregar);
}

cargarProductos(productos); //le digo a la funcion que me cargue los productos del array

//consultar porque no me carga los productos cunado hago click en la categoria
////////////////////////////////////////////////////
botonesCategorias.forEach((boton) => {
  boton.addEventListener("clik", (e) => {
    e.currentTarget.classList.add("active");
    const productosBoton = productos.filter(
      (producto) => producto.id === idProducto
    );

    cargarProductos(productosBoton);
  });
});
////////////////////////////////////////////////////////

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agergar");

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}
const productosCarrito = [];
