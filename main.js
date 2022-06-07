/*console.log("Hola Mundo");*/

/*
👉 Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa 
    como los ingredientes que van sobre la base).
*/
let pizza = [
  "harina",
  "queso",
  "huevo",
  "sal",
  "levadura",
  "tomate",
  "salsa",
  "jamon",
  "aceitunas",
  "rucula",
];

console.log(pizza);

/*
👉 Crear una función que acepte ese array como parámetro. 
*/
let ingrediente_posicion = (num) => {
  return console.log(pizza[num]);
};
ingrediente_posicion(9);

let caract_posicion = pizza[9].length;
console.log(caract_posicion);

/* 
Dentro de la función, debemos lograr lo siguiente: 
👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, 
vayan a un array llamado "pares". 
👉 Hacer lo mismo con los impares, enviándolos al array "impares". 
👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares). 
Los ingredientes impares son: (ingredientes en array impares)."
*/
function mensaje() {
  let pares = [];
  let impares = [];
  /*let par_o_impar = () => { */
  for (let i = 0; i < pizza.length; i++) {
    if (pizza[i].length % 2 == 0) {
      pares.push(pizza[i]);
    } else {
      impares.push(pizza[i]);
    }
  }
  console.log(`Los ingredientes pares son: ${pares}.`);
  console.log(`Los ingredientes impares son: ${impares}.`);
}

mensaje();
