
//venta insumos veterinaria
//declaro algunos productos
const productos = [
    { producto:1, nombre: "1- Proplan adulto SB", precio: 1500, unidades: 50 },
    { producto:2, nombre: "2- Astro adulto LB", precio: 1400, unidades: 20 },
    { producto:3, nombre: "3- Monello cachorro SB", precio: 1300, unidades: 50 },
    { producto:4, nombre: "4- Matisse cachorro LB", precio: 1300, unidades: 40 },
    { producto:5, nombre: "5- Pelota de goma", precio: 1000, unidades: 20 },
    { producto:6, nombre: "6- Gramas ", precio: 100, unidades: 30 },
    { producto:7 ,nombre: "7- Bandeja sanitaria", precio: 280, unidades: 50 },
    { producto:8, nombre: "8- Nexgard 10 a 25 kg", precio: 580, unidades: 60 },
 
];

let carrito = []

let menu = prompt("Bienvenido a nuestra VETERINARIA, desea comprar algun producto?")


while (menu == "No"){
    alert("Gracias por su visita!")
    break;
}




if (menu == "Si"){
    alert("Productos disponibles en nuestra WEB")
    let todoslosproductos = productos.map((productos) => productos.nombre + " " +  
    productos.precio + "$  " + productos.unidades + " unidades " );
    alert(todoslosproductos.join("\n"))

}

// si eleije comprar productos 


while (menu != "No"){
  let productos = prompt("Ingrese el producto seleccionado")
  let precio = 0

  if (productos <= 8){
    switch (productos){
        case "1":    
        precio =  1500;
            break;
        case "2":
            precio = 1400;
            break;
        case "3": 
        precio = 1300;
            break;
        case "4": 
        precio = 1300;
            break;
        case "5": 
        precio = 1000;
            break;
        case "6":      
        precio = 100;
            break;
        case "7":
            precio = 280;       
            break;
        case "8":     
        precio = 580;
            break;
        default:
            break
    }
     
        let unidades = parseInt(prompt("Ingrese las unidades  a comprar"))

        carrito.push({ productos, precio, unidades})
        console.log(carrito)
    } else {
        alert("Producto no disponible")
    }
     
// si desea comprar otro producto
    menu = prompt("Desea ingresar otro producto? ")

     while (menu === "No"){
        alert("Gracias por su compra")
        
        carrito.forEach((carritoFinal) => {
            console.log(`productos: ${carritoFinal.productos}, precio: ${carritoFinal.precio}, unidades: ${carritoFinal.unidades}, 
            total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    
}

}


//mostrar el total de la compra
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log (alert(`El total de su compra es : $ ${total}`))