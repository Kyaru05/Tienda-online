function vermas1(){
    location.href = "otrapagina1.html";
}
function vermas2(){
    location.href = "otrapagina2.html";
}
function vermas3(){
    location.href = "otrapagina3.html"
}
function vermas4(){
    location.href = "otrapagina4.html"
}
function vermas5(){
    location.href = "otrapagina5.html"
}
function vermas6(){
    location.href = "otrapagina6.html"
}
function boton1(){
    location.href = "agregar1.html"
}

const miModal = document.getElementById('miModal');
let listaCarrito = [];

// Productos disponibles
var listaProductos = [
  { nombre: "Honor & Glory - Lattafa", precio: 100000 },
  { nombre: "Perfume 2", precio: 12000 },
  { nombre: "Perfume 3", precio: 11500 },
  { nombre: "Perfume 4", precio: 13000 },
];

// Agregar producto al carrito
function agregar(numero){
  let cantidad = parseInt(document.getElementById("cantidad1").value);
  if(isNaN(cantidad) || cantidad <= 0) cantidad = 1;

  for(let i = 0; i < cantidad; i++){
    listaCarrito.push(listaProductos[numero - 1]);
  }
  mostrarcarrito();
  miModal.style.display = "block";
}

// Mostrar carrito
function mostrarcarrito(){
  let contenedor = document.getElementById("carrito");
  contenedor.innerHTML = "";

  let total = 0;
  for (let i = 0; i < listaCarrito.length; i++ ){
    contenedor.innerHTML += listaCarrito[i].nombre + " - Precio: $" + listaCarrito[i].precio + "<br>";
    total += listaCarrito[i].precio;
  }

  contenedor.innerHTML += `<hr><strong>Cantidad: ${listaCarrito.length}</strong><br>`;
  contenedor.innerHTML += `<strong>Total: $${total}</strong>`;
}

function cerrar(){
  miModal.style.display = "none";
}
