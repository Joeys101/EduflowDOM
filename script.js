const pizzas = [
    { id: 0, name: "Margarita", ingredientes: "muzzarela, huevo, albahaca y jamón", precio: 900 },
    { id: 1, name: "Muzzarela", ingredientes: "muzzarela y orégano", precio: 580},
    { id: 2, name: "Brasilera", ingredientes: "muzzarela, ananá y jamón", precio: 700},
    { id: 3, name: "Napolitana", ingredientes: "muzzarela, tomate y ajo", precio: 800},
    { id: 4, name: "4 quesos", ingredientes: "muzzarela, roquefort, provolone y cheddar", precio: 920},
    { id: 5, name: "Jamón y morrón", ingredientes: "muzzarela, jamón y morrón", precio: 750}
]

// Imprimir ID impares:

 let impares = [];

 for (let i = 0; i < pizzas.length; i++){
    if (pizzas[i].id % 2 !== 0){
        impares.push(pizzas[i]);
    }
}  

console.log(`Las pizzas con ID impar: ${impares.filter(impares => impares.id).map(impares => impares.name).join(', ')}`);

// Pizzas que valgan menos de $600 

let precios = [];

for (let i = 0; i < pizzas.length; i++){
    if (pizzas[i].precio < 600) {
        precios.push(pizzas[i])
    }
}

console.log(`Las pizzas de menos de $600 son: ${precios.filter(precios => precios.name).map(precios => precios.name).join(', ')}`);

// Lista de pizzas 

console.log(`Nuestras pizzas son: ${pizzas.filter(pizzas => pizzas.name).map(pizzas => pizzas.name).join(', ')}`);


// Los precios de las pizzas 

console.log(`Precios de las pizzas: ${pizzas.filter(pizzas => pizzas.precio).map(pizzas => pizzas.precio).join(', ')}`);

// Nombre de cada pizza con su precio

pizzas.forEach(pizzas => console.log("La pizza", pizzas.name, ", tiene un valor de: ", "$",pizzas.precio));


// DOM 

const boton = document.getElementById('boton'); 
const tituloPizza = document.getElementById("texto1");
const precioPizza = document.getElementById("texto2");
const error1 = document.getElementById("error");
const inputNum = document.getElementById("numberFilter");
const materialesPizza = document.getElementById("materiales")
const ingredientesPizza = document.getElementById("ingredientes")



function buscadorPizzas(){
const value1 = parseInt(inputNum.value);
pizzas.forEach(pizzas => {
    if(value1 === pizzas.id) {
        tituloPizza.innerHTML = pizzas.name;
        precioPizza.innerHTML = '$' + pizzas.precio;
        error1.innerHTML = '';
        ingredientesPizza.innerHTML = "Ingredientes: "
        materialesPizza.innerHTML = pizzas.ingredientes;
        
    } else if (value1 > 5){
        materialesPizza.innerHTML = "";
        ingredientesPizza.innerHTML = "";
        error1.innerHTML = 'No se encontró la pizza :(';
        tituloPizza.innerHTML = '';
        precioPizza.innerHTML = '';
    }
})
} 


boton.addEventListener('click' , ()=>{
    buscadorPizzas ();
    cambiarImagen();
});

// Imagenes Pizza
const contenedorPizza = document.getElementById("imgPizza");

function cambiarImagen(){
    const value1 = parseInt(inputNum.value)
    if(value1 === 0) {
        contenedorPizza.src="./img/pizza_margarita.jpg";
    }
    if(value1 === 1) {
        contenedorPizza.src="./img/pizza_muzzarella.jpg";
    }
    if(value1 === 2) {
        contenedorPizza.src="./img/pizza_brasilera.jpg";
    }
    if(value1 === 3) {
        contenedorPizza.src="./img/pizza_napolitana.jpg";
    }
    if(value1 === 4) {
        contenedorPizza.src="./img/pizza_4_quesos.jpg";
    }
    if(value1 === 5) {
        contenedorPizza.src="./img/pizza_jamon.jpg";
    }
    if(value1 > 5) {
        contenedorPizza.src="./img/error404pizza.png";
    }
    
    
}

// localStorage

function guardar(){
    localStorage.setItem(pizzas, JSON.stringify(pizzas))
}
guardar();